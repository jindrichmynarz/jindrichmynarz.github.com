(ns db-quiz.layout
  (:require [db-quiz.config :refer [config]]
            [clojure.string :as string]))

(defn shade-colour
  "Shade hexadecimal RGB @colour by @percent.
  Stolen from <http://stackoverflow.com/a/13542669/385505>."
  [colour percent]
  (let [fit-bounds (fn [n] (cond (< n 1) 0
                                 (> n 255) 255
                                 :else n))
        numeric (js/parseInt (.slice colour 1) 16)
        amount (.round js/Math (* 2.55 percent))
        R (fit-bounds (+ (bit-shift-right numeric 16) amount))
        G (fit-bounds (+ (bit-and (bit-shift-right numeric 8) 0x00FF) amount))
        B (fit-bounds (+ (bit-and numeric 0x0000FF) amount))]
    (str "#" (.slice (.toString (+ 0x1000000 (* R 0x10000) (* G 0x100) B) 16) 1))))

(defn get-gradients
  [status colour]
  (let [{{:keys [hex-shade]} :layout} config
        start [:stop {:offset "0%" :stop-color colour}]
        end [:stop {:offset "100%" :stop-color (shade-colour colour hex-shade)}]
        [inner-id outer-id] (map (partial str status) ["-inner" "-outer"])]
    [^{:key inner-id}
     [:linearGradient {:id inner-id :x1 0 :x2 0 :y1 1 :y2 0} start end]
     ^{:key outer-id}
     [:linearGradient {:id outer-id :x1 0 :x2 0 :y1 0 :y2 1} start end]]))

(defn hex-corner
  "Generate coordinates for a hexagon's corner, where
  [x y] are the coordinates of the hexagon's center,
  size is the hexagon's diameter, and i the corner's degree."
  [[x y] size i]
  (let [round (fn [n] (.toFixed n 5))
        angle-deg (+ (* 60 i) 90)
        angle-rad (* (/ (.-PI js/Math) 180) angle-deg)]
    [(round (+ x (* (/ size 2) (.cos js/Math angle-rad))))
     (round (+ y (* (/ size 2) (.sin js/Math angle-rad))))]))

(defn hex-coords
  "Generates coordinates for a hexagon of @size
  centered at @center [x y]."
  [center size]
  (string/join " "
               (map (comp (partial string/join ",")
                          (partial hex-corner center size))
                    (range 6))))

(defn hexagon
  "Generate hexagon of @size containing @text
  centered at @center [x y]."
  [{:keys [center size text]}]
  (let [hex-class (atom "default")
        absolute-offset (* (/ size 100) (get-in config [:layout :inner-hex-offset]))
        [x y] center]
    (fn []
      [:g.hexagon {:class @hex-class
                   :on-click #(swap! hex-class (fn [c] (get {"active" "default"
                                                             "default" "active"} c)))}
       [:polygon.hex-outer {:fill "url(#default-outer)"
                            :points (hex-coords center size)}]
       [:polygon.hex-inner {:fill "url(#default-inner)"
                            :points (hex-coords (map #(- % absolute-offset) center)
                                                (- size (* 2 absolute-offset)))
                            :transform (str "translate(" absolute-offset "," absolute-offset ")")}]
       [:text {:x x 
               :y (+ y (/ size 5)) 
               :font-size (/ size 2)
               :text-anchor "middle"}
        text]])))

(def hex-triangle
  (let [{{:keys [border-width space]
          r :hex-radius} :layout
         n :board-size} config
        size (* 2 r)
        y-space (* size (/ space 100))
        x-space (* y-space (/ (.sqrt js/Math 3) 2))
        w (* (.sqrt js/Math 3) r)
        grid-width (+ (* n w)
                      (* 2 border-width) ; Account for hexagon's border
                      (* (dec n) x-space))
        grid-height (+ (* (/ 3 2) r n) (/ r 2)
                       (* (dec n) y-space) ; Add height for spaces
                       (* 2 border-width)) ; Account for hexagon's border
        x-offset (fn [x y] (+ (* (- n (inc y)) (/ w 2))
                              (* x w)
                              (when-not (= x 1) (* (dec x) x-space)) ; Account for spaces
                              (when-not (= y n) (* (- n y) (/ x-space 2)))
                              border-width)) ; Account for hexagon's border
        y-offset (fn [y] (+ r
                            border-width ; Account for hexagon's border
                            (* (/ 3 2) r (dec y))
                            (when-not (= y 1) (* (dec y) y-space))))] ; Account for spaces
    (fn [board]
      [:svg#hex-triangle {:x 0
                          :y 0
                          :width grid-width
                          :height grid-height}
       [:defs (mapcat (fn [[status colour]]
                        (get-gradients (name status) colour))
                      (:colours config))]
       (map (fn [[[x y] {:keys [text]}]]
              ^{:key [x y]}
              [hexagon {:center [(x-offset x y)
                                 (y-offset y)]
                        :text text
                        :size size}])
            board)
       ])))
