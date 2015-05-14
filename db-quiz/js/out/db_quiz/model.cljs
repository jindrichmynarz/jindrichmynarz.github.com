(ns db-quiz.model
  (:refer-clojure :exclude [replace])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [db-quiz.config :refer [config]]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! >! chan sliding-buffer]]
            [clojure.string :refer [join lower-case replace split trim]]
            [cljsjs.mustache :as mustache]))

; ----- Private vars -----

(def sentence-start #"\.([A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸ-ŹŻŽƁ-ƂƄƆ-ƇƉ-ƋƎ-ƑƓ-ƔƖ-ƘƜ-ƝƟ-ƠƢƤƦ-ƧƩƬƮ-ƯƱ-ƳƵƷ-ƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺ-ȻȽ-ȾɁɃ-ɆɈɊɌɎͰͲͶΆΈ-ΊΌΎ-ΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹ-ϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀ-ӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԱ-ՖႠ-ჅḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾ-ℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱯⱲⱵⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽ-ꝾꞀꞂꞄꞆꞋＡ-Ｚ]|\ud801[\udc00-\udc27]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca])")

; ----- Public vars -----

(def loading? (atom false))

;(def loading
;  "Use sliding buffer because we don't care if anybody cares."
;  (chan (sliding-buffer 1)))
;
;(go-loop []
;  (when (<! loading)
;    (.log js/console "Loading")))
;(go-loop []
;  (when-not (<! loading)
;    (.log js/console "Loaded")))

; ----- Public functions -----

(defn render-template
  "Render Mustache @template with @data."
  [template & {:keys [data]}]
  (.render js/Mustache template (clj->js data)))

(defn delete-parenthesized-parts
  [text]
  (replace text #"\s*\([^)]+\)" ""))

(defn clear-label
  [label]
  (-> label
      delete-parenthesized-parts 
      trim))

(defn clear-tokens
  [tokens]
  ; Filter out roman numerals
  (filter (fn [token]
            (not (re-matches #"^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})\.?$" token)))
          tokens))

(defn tokenize
  "Split @s into tokens delimited by whitespace."
  [s]
  (split s #"\s+|-"))

(defn abbreviate
  "Convert @tokens into an abbreviation."
  [tokens]
  (apply str (map (fn [s] (if (zero? (.indexOf (lower-case s) "ch")) "Ch" (first s)))
                  tokens)))

(defn replace-surface-forms
  "Replace a set of @surface-forms appearing in @description with @abbreviation."
  [description abbreviation surface-forms]
  (loop [[surface-form & the-rest] surface-forms
         result description]
    (let [clean-result (replace result surface-form abbreviation)]
      (if-not the-rest
        clean-result
        (recur the-rest clean-result)))))

(defn clean-surface-form?
  "Predicate that validates a @surface-form."
  [surface-form]
  ;(not (re-matches #"\s+" surface-form))
  true)

(defn despoilerify
  "Replace spoilers suggesting @label from @description"
  [{:keys [label description surfaceForms] :as item}]
  (let [clean-label (clear-label label)
        tokens (clear-tokens (tokenize clean-label))
        abbreviation (abbreviate tokens)
        ; Sort surface forms from the longest to the shortest, so that we first replace
        ; the longer matches. 
        surface-forms (sort-by (comp - count)
                               (filter clean-surface-form?
                                       (conj (split surfaceForms "|") clean-label label)))]
    (assoc item
           :abbreviation abbreviation
           :description (-> description
                            delete-parenthesized-parts
                            (replace sentence-start ". $1")
                            (replace-surface-forms abbreviation surface-forms)
                            )
           :label (join " " tokens)
           :surface-forms surface-forms)))

(defn sparql-query
  "Send a SPARQL query from file on @query-path to @sparql-endpoint."
  [sparql-endpoint query-path & {:keys [data]}]
  (let [query-channel (http/get query-path {:channel (chan 1 (map :body))})
        extract-values (fn [result] (into {} (map (fn [[k v]] [k (:value v)]) result)))
        sparql-results (chan 1 (map (comp (partial map extract-values) :bindings :results :body)))]
    (reset! loading? true)
    (go
      (let [query (render-template (<! query-channel) :data data)]
        ;(.log js/console query)
        (>! sparql-results
            (<! (http/jsonp sparql-endpoint
                            {:query-params {:format "application/sparql-results+json"
                                            :query query}}))))
      (reset! loading? false))
    sparql-results))
