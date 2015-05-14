(ns db-quiz.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [db-quiz.layout :refer [hex-triangle]]
            [db-quiz.config :refer [config]]
            [db-quiz.model :as model] 
            [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [cljsjs.react :as react]
            [cljs.core.async :refer [<!]]
            [clojure.string :as string])
  (:import goog.History))

(def app-state (atom {:data {:loading false}}))

(def items (atom []))

(defn init-board
  "@letters-board is a boolean flag specifying if letters should be used instead of numbers."
  [& {:keys [letters-board]
      :or {letters-board true}}]
  (let [size (:board-size config)
        symbols-fn (if letters-board (fn [i] (nth (:letters config) i)) identity)
        get-sides (fn [x y] (set (remove nil? (list (when (= x 1) :a)
                                                    (when (= x y) :b)
                                                    (when (= y size) :c)))))
        get-neighbours (fn [x y] (filter (fn [[x y]] (and (<= x y)
                                                          (<= 1 x size)
                                                          (<= 1 y size)))
                                         (map (fn [[ox oy]] [(+ x ox) (+ y oy)])
                                              [[-1 -1] [0 -1] [1 0] [0 1] [1 1] [-1 0]])))
        side (range (inc size))]
    (into {}
          (map (fn [[k v] text] [k (assoc v :text text)])
               (mapcat (fn [y] (map (fn [x] [[x y] {:neighbours (get-neighbours x y)
                                                    :ownership :default
                                                    :sides (get-sides x y)}])
                                    (range 1 (inc y))))
                       side)
               (map symbols-fn (range (apply + side)))))))

(def board (atom (init-board)))

(defn load-items
  [offset]
  (let [{{:keys [default]} :classes
        :keys [endpoint]} (get-in config [:data :sparql])]
    (go (let [transform (fn [{:keys [label description] :as item}]
                          (model/despoilerify item))
              results (map transform
                          (<! (model/sparql-query endpoint
                                                  "sparql/cs_dbpedia.mustache"
                                                  :data {:offset offset
                                                         :classes default})))]
          ;(.log js/console (clj->js results))
          (reset! items results))))
  )


;; -------------------------
;; Views

(secretary/set-config! :prefix "#")

(defn home-page []
  [:div
    [:a.button {:href "/#play"} [:span "Hrát"]]])

(defn play-page []
  (fn []
    [:div
     (when (get-in @app-state [:data :loading])
       [:div#loading
        [:div#loadhex ""]
        [:p "Loading..."]])
     [:h2 "DB-quiz"]
     (hex-triangle @board)]))

(defn end-page []
  [:div
    [:h2 "Všechno jednou končí..."]
    [:p "Hamižnost opět zvítězila nad pravdomluvností."]
    [:a.button {:href "/"} [:span "Hrát znovu"]]])

(defn current-page []
  [:div [(session/get :current-page)]])

(defn items-page []
  (load-items 5000)
  (fn []
    [:div
     [:p
      [:strong [:label {:for "offset"} "Obtížnost: "]]
      [:input {:type "range" :id "offset" :min 0 :max 10000 
               :on-mouse-up #(load-items (-> % .-target .-value))}]]
     [:table
      [:thead [:tr [:th "Odpověď"] [:th "Zkratka"] [:th "Popis"]]]
      [:tbody (map (fn [{:keys [abbreviation description label s]}]
                     ^{:key label} [:tr [:td [:a {:href s} label]]
                                    [:td abbreviation]
                                    [:td description]])
                   @items)]]]))

;; -------------------------
;; Routes

(defroute "/" []
  (session/put! :current-page #'home-page))

(defroute "/end" []
  (session/put! :current-page #'end-page))

(defroute "/play" []
  (session/put! :current-page #'play-page))

(defroute "/items" []
  (session/put! :current-page #'items-page))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (reagent/render [current-page] (.getElementById js/document "app")))
