(ns db-quiz.config)

(defonce config
  {; Number of hexagons on one side of the triangle
   :board-size 7
   :colours {:active "#ffa000"
             :default "#bcbcbc"
             :hover "#dedede"
             :missed "#333333"
             :player-1 "#6cdeeb"
             :player-2 "#ffa500"}
   :data {:sparql {:endpoint "http://cs.dbpedia.org/sparql"
                   :classes {:default ["http://dbpedia.org/ontology/Person"
                                       "http://dbpedia.org/ontology/Place"
                                       "http://dbpedia.org/ontology/Work"]}}}
   :layout {; Width of hexagon's border (in pixels)
            :border-width 1
            ; Radius of 1 hexagon composing the triangle (in pixels)
            :hex-radius 35
            ; Amount of hexagon's shading (in %)
            :hex-shade 20
            ; Hexagons will be embossed by offset (in %).
            :inner-hex-offset 7
            ; Space between hexagons in % of their size
            :space 8}
   :letters ["A" "B" "C" "Č" "D" "E" "F" "G" "H" "Ch" "I" "J" "K" "L"
             "M" "N" "O" "P" "R" "Ř" "S" "Š" "T" "U" "V" "W" "Z" "Ž"]})
