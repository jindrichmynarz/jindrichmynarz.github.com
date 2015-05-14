// Compiled by ClojureScript 0.0-3196 {}
goog.provide('db_quiz.layout');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('db_quiz.config');
/**
 * Shade hexadecimal RGB @colour by @percent.
 * Stolen from <http://stackoverflow.com/a/13542669/385505>.
 */
db_quiz.layout.shade_colour = (function db_quiz$layout$shade_colour(colour,percent){
var fit_bounds = (function (n){
if((n < (1))){
return (0);
} else {
if((n > (255))){
return (255);
} else {
return n;

}
}
});
var numeric = parseInt(colour.slice((1)),(16));
var amount = Math.round((2.55 * percent));
var R = fit_bounds.call(null,((numeric >> (16)) + amount));
var G = fit_bounds.call(null,(((numeric >> (8)) & (255)) + amount));
var B = fit_bounds.call(null,((numeric & (255)) + amount));
return [cljs.core.str("#"),cljs.core.str(((((16777216) + (R * (65536))) + (G * (256))) + B).toString((16)).slice((1)))].join('');
});
db_quiz.layout.get_gradients = (function db_quiz$layout$get_gradients(status,colour){
var map__9118 = db_quiz.config.config;
var map__9118__$1 = ((cljs.core.seq_QMARK_.call(null,map__9118))?cljs.core.apply.call(null,cljs.core.hash_map,map__9118):map__9118);
var map__9119 = cljs.core.get.call(null,map__9118__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var map__9119__$1 = ((cljs.core.seq_QMARK_.call(null,map__9119))?cljs.core.apply.call(null,cljs.core.hash_map,map__9119):map__9119);
var hex_shade = cljs.core.get.call(null,map__9119__$1,new cljs.core.Keyword(null,"hex-shade","hex-shade",-423751210));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),"0%",new cljs.core.Keyword(null,"stop-color","stop-color",316173955),colour], null)], null);
var end = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),"100%",new cljs.core.Keyword(null,"stop-color","stop-color",316173955),db_quiz.layout.shade_colour.call(null,colour,hex_shade)], null)], null);
var vec__9120 = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,status),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-inner","-outer"], null));
var inner_id = cljs.core.nth.call(null,vec__9120,(0),null);
var outer_id = cljs.core.nth.call(null,vec__9120,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),inner_id,new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(0)], null),start,end], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),inner_id], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),outer_id,new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null),start,end], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),outer_id], null))], null);
});
/**
 * Generate coordinates for a hexagon's corner, where
 * [x y] are the coordinates of the hexagon's center,
 * size is the hexagon's diameter, and i the corner's degree.
 */
db_quiz.layout.hex_corner = (function db_quiz$layout$hex_corner(p__9121,size,i){
var vec__9123 = p__9121;
var x = cljs.core.nth.call(null,vec__9123,(0),null);
var y = cljs.core.nth.call(null,vec__9123,(1),null);
var round = ((function (vec__9123,x,y){
return (function (n){
return n.toFixed((5));
});})(vec__9123,x,y))
;
var angle_deg = (((60) * i) + (90));
var angle_rad = ((Math.PI / (180)) * angle_deg);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [round.call(null,(x + ((size / (2)) * Math.cos(angle_rad)))),round.call(null,(y + ((size / (2)) * Math.sin(angle_rad))))], null);
});
/**
 * Generates coordinates for a hexagon of @size
 * centered at @center [x y].
 */
db_quiz.layout.hex_coords = (function db_quiz$layout$hex_coords(center,size){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,clojure.string.join,","),cljs.core.partial.call(null,db_quiz.layout.hex_corner,center,size)),cljs.core.range.call(null,(6))));
});
/**
 * Generate hexagon of @size containing @text
 * centered at @center [x y].
 */
db_quiz.layout.hexagon = (function db_quiz$layout$hexagon(p__9125){
var map__9128 = p__9125;
var map__9128__$1 = ((cljs.core.seq_QMARK_.call(null,map__9128))?cljs.core.apply.call(null,cljs.core.hash_map,map__9128):map__9128);
var text = cljs.core.get.call(null,map__9128__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var size = cljs.core.get.call(null,map__9128__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var center = cljs.core.get.call(null,map__9128__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var hex_class = cljs.core.atom.call(null,"default");
var absolute_offset = ((size / (100)) * cljs.core.get_in.call(null,db_quiz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"inner-hex-offset","inner-hex-offset",-1450005280)], null)));
var vec__9129 = center;
var x = cljs.core.nth.call(null,vec__9129,(0),null);
var y = cljs.core.nth.call(null,vec__9129,(1),null);
return ((function (hex_class,absolute_offset,vec__9129,x,y,map__9128,map__9128__$1,text,size,center){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.hexagon","g.hexagon",1243828382),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,hex_class),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (hex_class,absolute_offset,vec__9129,x,y,map__9128,map__9128__$1,text,size,center){
return (function (){
return cljs.core.swap_BANG_.call(null,hex_class,((function (hex_class,absolute_offset,vec__9129,x,y,map__9128,map__9128__$1,text,size,center){
return (function (c){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, ["active","default","default","active"], null),c);
});})(hex_class,absolute_offset,vec__9129,x,y,map__9128,map__9128__$1,text,size,center))
);
});})(hex_class,absolute_offset,vec__9129,x,y,map__9128,map__9128__$1,text,size,center))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon.hex-outer","polygon.hex-outer",-1195720882),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"url(#default-outer)",new cljs.core.Keyword(null,"points","points",-1486596883),db_quiz.layout.hex_coords.call(null,center,size)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon.hex-inner","polygon.hex-inner",1306483915),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"url(#default-inner)",new cljs.core.Keyword(null,"points","points",-1486596883),db_quiz.layout.hex_coords.call(null,cljs.core.map.call(null,((function (hex_class,absolute_offset,vec__9129,x,y,map__9128,map__9128__$1,text,size,center){
return (function (p1__9124_SHARP_){
return (p1__9124_SHARP_ - absolute_offset);
});})(hex_class,absolute_offset,vec__9129,x,y,map__9128,map__9128__$1,text,size,center))
,center),(size - ((2) * absolute_offset))),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(absolute_offset),cljs.core.str(","),cljs.core.str(absolute_offset),cljs.core.str(")")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + (size / (5))),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(size / (2)),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null),text], null)], null);
});
;})(hex_class,absolute_offset,vec__9129,x,y,map__9128,map__9128__$1,text,size,center))
});
db_quiz.layout.hex_triangle = (function (){var map__9130 = db_quiz.config.config;
var map__9130__$1 = ((cljs.core.seq_QMARK_.call(null,map__9130))?cljs.core.apply.call(null,cljs.core.hash_map,map__9130):map__9130);
var map__9131 = cljs.core.get.call(null,map__9130__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var map__9131__$1 = ((cljs.core.seq_QMARK_.call(null,map__9131))?cljs.core.apply.call(null,cljs.core.hash_map,map__9131):map__9131);
var space = cljs.core.get.call(null,map__9131__$1,new cljs.core.Keyword(null,"space","space",348133475));
var border_width = cljs.core.get.call(null,map__9131__$1,new cljs.core.Keyword(null,"border-width","border-width",-1512605390));
var r = cljs.core.get.call(null,map__9131__$1,new cljs.core.Keyword(null,"hex-radius","hex-radius",1242606199));
var n = cljs.core.get.call(null,map__9130__$1,new cljs.core.Keyword(null,"board-size","board-size",140730505));
var size = ((2) * r);
var y_space = (size * (space / (100)));
var x_space = (y_space * (Math.sqrt((3)) / (2)));
var w = (Math.sqrt((3)) * r);
var grid_width = (((n * w) + ((2) * border_width)) + ((n - (1)) * x_space));
var grid_height = (((((((3) / (2)) * r) * n) + (r / (2))) + ((n - (1)) * y_space)) + ((2) * border_width));
var x_offset = ((function (map__9130,map__9130__$1,map__9131,map__9131__$1,space,border_width,r,n,size,y_space,x_space,w,grid_width,grid_height){
return (function (x,y){
return ((((((n - (y + (1))) * (w / (2))) + (x * w)) + ((cljs.core._EQ_.call(null,x,(1)))?null:((x - (1)) * x_space))) + ((cljs.core._EQ_.call(null,y,n))?null:((n - y) * (x_space / (2))))) + border_width);
});})(map__9130,map__9130__$1,map__9131,map__9131__$1,space,border_width,r,n,size,y_space,x_space,w,grid_width,grid_height))
;
var y_offset = ((function (map__9130,map__9130__$1,map__9131,map__9131__$1,space,border_width,r,n,size,y_space,x_space,w,grid_width,grid_height,x_offset){
return (function (y){
return (((r + border_width) + ((((3) / (2)) * r) * (y - (1)))) + ((cljs.core._EQ_.call(null,y,(1)))?null:((y - (1)) * y_space)));
});})(map__9130,map__9130__$1,map__9131,map__9131__$1,space,border_width,r,n,size,y_space,x_space,w,grid_width,grid_height,x_offset))
;
return ((function (map__9130,map__9130__$1,map__9131,map__9131__$1,space,border_width,r,n,size,y_space,x_space,w,grid_width,grid_height,x_offset,y_offset){
return (function (board){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#hex-triangle","svg#hex-triangle",361235106),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),grid_width,new cljs.core.Keyword(null,"height","height",1025178622),grid_height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.mapcat.call(null,((function (map__9130,map__9130__$1,map__9131,map__9131__$1,space,border_width,r,n,size,y_space,x_space,w,grid_width,grid_height,x_offset,y_offset){
return (function (p__9132){
var vec__9133 = p__9132;
var status = cljs.core.nth.call(null,vec__9133,(0),null);
var colour = cljs.core.nth.call(null,vec__9133,(1),null);
return db_quiz.layout.get_gradients.call(null,cljs.core.name.call(null,status),colour);
});})(map__9130,map__9130__$1,map__9131,map__9131__$1,space,border_width,r,n,size,y_space,x_space,w,grid_width,grid_height,x_offset,y_offset))
,new cljs.core.Keyword(null,"colours","colours",659341642).cljs$core$IFn$_invoke$arity$1(db_quiz.config.config))], null),cljs.core.map.call(null,((function (map__9130,map__9130__$1,map__9131,map__9131__$1,space,border_width,r,n,size,y_space,x_space,w,grid_width,grid_height,x_offset,y_offset){
return (function (p__9134){
var vec__9135 = p__9134;
var vec__9136 = cljs.core.nth.call(null,vec__9135,(0),null);
var x = cljs.core.nth.call(null,vec__9136,(0),null);
var y = cljs.core.nth.call(null,vec__9136,(1),null);
var map__9137 = cljs.core.nth.call(null,vec__9135,(1),null);
var map__9137__$1 = ((cljs.core.seq_QMARK_.call(null,map__9137))?cljs.core.apply.call(null,cljs.core.hash_map,map__9137):map__9137);
var text = cljs.core.get.call(null,map__9137__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_quiz.layout.hexagon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_offset.call(null,x,y),y_offset.call(null,y)], null),new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"size","size",1098693007),size], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
});})(map__9130,map__9130__$1,map__9131,map__9131__$1,space,border_width,r,n,size,y_space,x_space,w,grid_width,grid_height,x_offset,y_offset))
,board)], null);
});
;})(map__9130,map__9130__$1,map__9131,map__9131__$1,space,border_width,r,n,size,y_space,x_space,w,grid_width,grid_height,x_offset,y_offset))
})();

//# sourceMappingURL=layout.js.map