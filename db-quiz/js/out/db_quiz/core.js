// Compiled by ClojureScript 0.0-3196 {}
goog.provide('db_quiz.core');
goog.require('cljs.core');
goog.require('db_quiz.model');
goog.require('db_quiz.layout');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('cljsjs.react');
goog.require('cljs.core.async');
goog.require('db_quiz.config');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');
db_quiz.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loading","loading",-737050189),false], null)], null));
db_quiz.core.items = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * @letters-board is a boolean flag specifying if letters should be used instead of numbers.
 */
db_quiz.core.init_board = (function db_quiz$core$init_board(){
var argseq__5260__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return db_quiz.core.init_board.cljs$core$IFn$_invoke$arity$variadic(argseq__5260__auto__);
});

db_quiz.core.init_board.cljs$core$IFn$_invoke$arity$variadic = (function (p__9482){
var map__9483 = p__9482;
var map__9483__$1 = ((cljs.core.seq_QMARK_.call(null,map__9483))?cljs.core.apply.call(null,cljs.core.hash_map,map__9483):map__9483);
var letters_board = cljs.core.get.call(null,map__9483__$1,new cljs.core.Keyword(null,"letters-board","letters-board",-2112633421),true);
var size = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(db_quiz.config.config);
var symbols_fn = (cljs.core.truth_(letters_board)?((function (size,map__9483,map__9483__$1,letters_board){
return (function (i){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"letters","letters",2098125298).cljs$core$IFn$_invoke$arity$1(db_quiz.config.config),i);
});})(size,map__9483,map__9483__$1,letters_board))
:cljs.core.identity);
var get_sides = ((function (size,symbols_fn,map__9483,map__9483__$1,letters_board){
return (function (x,y){
return cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,((cljs.core._EQ_.call(null,y,size))?new cljs.core.Keyword(null,"c","c",-1763192079):null)),((cljs.core._EQ_.call(null,x,y))?new cljs.core.Keyword(null,"b","b",1482224470):null)),((cljs.core._EQ_.call(null,x,(1)))?new cljs.core.Keyword(null,"a","a",-2123407586):null))));
});})(size,symbols_fn,map__9483,map__9483__$1,letters_board))
;
var get_neighbours = ((function (size,symbols_fn,get_sides,map__9483,map__9483__$1,letters_board){
return (function (x,y){
return cljs.core.filter.call(null,((function (size,symbols_fn,get_sides,map__9483,map__9483__$1,letters_board){
return (function (p__9484){
var vec__9485 = p__9484;
var x__$1 = cljs.core.nth.call(null,vec__9485,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__9485,(1),null);
return ((x__$1 <= y__$1)) && ((((1) <= x__$1)) && ((x__$1 <= size))) && ((((1) <= y__$1)) && ((y__$1 <= size)));
});})(size,symbols_fn,get_sides,map__9483,map__9483__$1,letters_board))
,cljs.core.map.call(null,((function (size,symbols_fn,get_sides,map__9483,map__9483__$1,letters_board){
return (function (p__9486){
var vec__9487 = p__9486;
var ox = cljs.core.nth.call(null,vec__9487,(0),null);
var oy = cljs.core.nth.call(null,vec__9487,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + ox),(y + oy)], null);
});})(size,symbols_fn,get_sides,map__9483,map__9483__$1,letters_board))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null)));
});})(size,symbols_fn,get_sides,map__9483,map__9483__$1,letters_board))
;
var side = cljs.core.range.call(null,(size + (1)));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (size,symbols_fn,get_sides,get_neighbours,side,map__9483,map__9483__$1,letters_board){
return (function (p__9488,text){
var vec__9489 = p__9488;
var k = cljs.core.nth.call(null,vec__9489,(0),null);
var v = cljs.core.nth.call(null,vec__9489,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"text","text",-1790561697),text)], null);
});})(size,symbols_fn,get_sides,get_neighbours,side,map__9483,map__9483__$1,letters_board))
,cljs.core.mapcat.call(null,((function (size,symbols_fn,get_sides,get_neighbours,side,map__9483,map__9483__$1,letters_board){
return (function (y){
return cljs.core.map.call(null,((function (size,symbols_fn,get_sides,get_neighbours,side,map__9483,map__9483__$1,letters_board){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"neighbours","neighbours",1596930053),get_neighbours.call(null,x,y),new cljs.core.Keyword(null,"ownership","ownership",892314581),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"sides","sides",482708052),get_sides.call(null,x,y)], null)], null);
});})(size,symbols_fn,get_sides,get_neighbours,side,map__9483,map__9483__$1,letters_board))
,cljs.core.range.call(null,(1),(y + (1))));
});})(size,symbols_fn,get_sides,get_neighbours,side,map__9483,map__9483__$1,letters_board))
,side),cljs.core.map.call(null,symbols_fn,cljs.core.range.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,side)))));
});

db_quiz.core.init_board.cljs$lang$maxFixedArity = (0);

db_quiz.core.init_board.cljs$lang$applyTo = (function (seq9481){
return db_quiz.core.init_board.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9481));
});
db_quiz.core.board = reagent.core.atom.call(null,db_quiz.core.init_board.call(null));
db_quiz.core.load_items = (function db_quiz$core$load_items(offset){
var map__9514 = cljs.core.get_in.call(null,db_quiz.config.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"sparql","sparql",1388494024)], null));
var map__9514__$1 = ((cljs.core.seq_QMARK_.call(null,map__9514))?cljs.core.apply.call(null,cljs.core.hash_map,map__9514):map__9514);
var endpoint = cljs.core.get.call(null,map__9514__$1,new cljs.core.Keyword(null,"endpoint","endpoint",447890044));
var map__9515 = cljs.core.get.call(null,map__9514__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var map__9515__$1 = ((cljs.core.seq_QMARK_.call(null,map__9515))?cljs.core.apply.call(null,cljs.core.hash_map,map__9515):map__9515);
var default$ = cljs.core.get.call(null,map__9515__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__,map__9514,map__9514__$1,endpoint,map__9515,map__9515__$1,default$){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__,map__9514,map__9514__$1,endpoint,map__9515,map__9515__$1,default$){
return (function (state_9527){
var state_val_9528 = (state_9527[(1)]);
if((state_val_9528 === (2))){
var inst_9517 = (state_9527[(7)]);
var inst_9523 = (state_9527[(2)]);
var inst_9524 = cljs.core.map.call(null,inst_9517,inst_9523);
var inst_9525 = cljs.core.reset_BANG_.call(null,db_quiz.core.items,inst_9524);
var state_9527__$1 = state_9527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9527__$1,inst_9525);
} else {
if((state_val_9528 === (1))){
var inst_9517 = (function (){return ((function (state_val_9528,c__6706__auto__,map__9514,map__9514__$1,endpoint,map__9515,map__9515__$1,default$){
return (function (p__9516){
var map__9529 = p__9516;
var map__9529__$1 = ((cljs.core.seq_QMARK_.call(null,map__9529))?cljs.core.apply.call(null,cljs.core.hash_map,map__9529):map__9529);
var item = map__9529__$1;
var description = cljs.core.get.call(null,map__9529__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var label = cljs.core.get.call(null,map__9529__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return db_quiz.model.despoilerify.call(null,item);
});
;})(state_val_9528,c__6706__auto__,map__9514,map__9514__$1,endpoint,map__9515,map__9515__$1,default$))
})();
var inst_9518 = [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"classes","classes",2037804510)];
var inst_9519 = [offset,default$];
var inst_9520 = cljs.core.PersistentHashMap.fromArrays(inst_9518,inst_9519);
var inst_9521 = db_quiz.model.sparql_query.call(null,endpoint,"sparql/cs_dbpedia.mustache",new cljs.core.Keyword(null,"data","data",-232669377),inst_9520);
var state_9527__$1 = (function (){var statearr_9530 = state_9527;
(statearr_9530[(7)] = inst_9517);

return statearr_9530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9527__$1,(2),inst_9521);
} else {
return null;
}
}
});})(c__6706__auto__,map__9514,map__9514__$1,endpoint,map__9515,map__9515__$1,default$))
;
return ((function (switch__6644__auto__,c__6706__auto__,map__9514,map__9514__$1,endpoint,map__9515,map__9515__$1,default$){
return (function() {
var db_quiz$core$load_items_$_state_machine__6645__auto__ = null;
var db_quiz$core$load_items_$_state_machine__6645__auto____0 = (function (){
var statearr_9534 = [null,null,null,null,null,null,null,null];
(statearr_9534[(0)] = db_quiz$core$load_items_$_state_machine__6645__auto__);

(statearr_9534[(1)] = (1));

return statearr_9534;
});
var db_quiz$core$load_items_$_state_machine__6645__auto____1 = (function (state_9527){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_9527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e9535){if((e9535 instanceof Object)){
var ex__6648__auto__ = e9535;
var statearr_9536_9538 = state_9527;
(statearr_9536_9538[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9539 = state_9527;
state_9527 = G__9539;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
db_quiz$core$load_items_$_state_machine__6645__auto__ = function(state_9527){
switch(arguments.length){
case 0:
return db_quiz$core$load_items_$_state_machine__6645__auto____0.call(this);
case 1:
return db_quiz$core$load_items_$_state_machine__6645__auto____1.call(this,state_9527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
db_quiz$core$load_items_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = db_quiz$core$load_items_$_state_machine__6645__auto____0;
db_quiz$core$load_items_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = db_quiz$core$load_items_$_state_machine__6645__auto____1;
return db_quiz$core$load_items_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__,map__9514,map__9514__$1,endpoint,map__9515,map__9515__$1,default$))
})();
var state__6708__auto__ = (function (){var statearr_9537 = f__6707__auto__.call(null);
(statearr_9537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_9537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__,map__9514,map__9514__$1,endpoint,map__9515,map__9515__$1,default$))
);

return c__6706__auto__;
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
db_quiz.core.home_page = (function db_quiz$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/#play"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Hr\u00E1t"], null)], null)], null);
});
db_quiz.core.play_page = (function db_quiz$core$play_page(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,db_quiz.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"loading","loading",-737050189)], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#loading","div#loading",1871115588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#loadhex","div#loadhex",1623060791),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"DB-quiz"], null),db_quiz.layout.hex_triangle.call(null,cljs.core.deref.call(null,db_quiz.core.board))], null);
});
});
db_quiz.core.end_page = (function db_quiz$core$end_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"V\u0161echno jednou kon\u010D\u00ED..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Hami\u017Enost op\u011Bt zv\u00EDt\u011Bzila nad pravdomluvnost\u00ED."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Hr\u00E1t znovu"], null)], null)], null);
});
db_quiz.core.current_page = (function db_quiz$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
db_quiz.core.items_page = (function db_quiz$core$items_page(){
db_quiz.core.load_items.call(null,(5000));

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"offset"], null),"Obt\u00ED\u017Enost: "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"id","id",-1388402092),"offset",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(10000),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (p1__9540_SHARP_){
return db_quiz.core.load_items.call(null,p1__9540_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Odpov\u011B\u010F"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Zkratka"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Popis"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,(function (p__9543){
var map__9544 = p__9543;
var map__9544__$1 = ((cljs.core.seq_QMARK_.call(null,map__9544))?cljs.core.apply.call(null,cljs.core.hash_map,map__9544):map__9544);
var s = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var label = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var description = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var abbreviation = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"abbreviation","abbreviation",-2106594275));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),s], null),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),abbreviation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),description], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null));
}),cljs.core.deref.call(null,db_quiz.core.items))], null)], null)], null);
});
});
var action__9391__auto___9547 = (function (params__9392__auto__){
if(cljs.core.map_QMARK_.call(null,params__9392__auto__)){
var map__9545 = params__9392__auto__;
var map__9545__$1 = ((cljs.core.seq_QMARK_.call(null,map__9545))?cljs.core.apply.call(null,cljs.core.hash_map,map__9545):map__9545);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return db_quiz.core.home_page;},new cljs.core.Symbol("db-quiz.core","home-page","db-quiz.core/home-page",1847783026,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"db-quiz.core","db-quiz.core",1358210437,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/mynarzjindrich/Dev/clojurescript/db-quiz/src/cljs/db_quiz/core.cljs",16,7,68,68,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(db_quiz.core.home_page)?db_quiz.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9392__auto__)){
var vec__9546 = params__9392__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return db_quiz.core.home_page;},new cljs.core.Symbol("db-quiz.core","home-page","db-quiz.core/home-page",1847783026,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"db-quiz.core","db-quiz.core",1358210437,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/mynarzjindrich/Dev/clojurescript/db-quiz/src/cljs/db_quiz/core.cljs",16,7,68,68,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(db_quiz.core.home_page)?db_quiz.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__9391__auto___9547);

var action__9391__auto___9550 = (function (params__9392__auto__){
if(cljs.core.map_QMARK_.call(null,params__9392__auto__)){
var map__9548 = params__9392__auto__;
var map__9548__$1 = ((cljs.core.seq_QMARK_.call(null,map__9548))?cljs.core.apply.call(null,cljs.core.hash_map,map__9548):map__9548);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return db_quiz.core.end_page;},new cljs.core.Symbol("db-quiz.core","end-page","db-quiz.core/end-page",2031752002,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"db-quiz.core","db-quiz.core",1358210437,null),new cljs.core.Symbol(null,"end-page","end-page",-978373063,null),"/Users/mynarzjindrich/Dev/clojurescript/db-quiz/src/cljs/db_quiz/core.cljs",15,7,82,82,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(db_quiz.core.end_page)?db_quiz.core.end_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9392__auto__)){
var vec__9549 = params__9392__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return db_quiz.core.end_page;},new cljs.core.Symbol("db-quiz.core","end-page","db-quiz.core/end-page",2031752002,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"db-quiz.core","db-quiz.core",1358210437,null),new cljs.core.Symbol(null,"end-page","end-page",-978373063,null),"/Users/mynarzjindrich/Dev/clojurescript/db-quiz/src/cljs/db_quiz/core.cljs",15,7,82,82,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(db_quiz.core.end_page)?db_quiz.core.end_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/end",action__9391__auto___9550);

var action__9391__auto___9553 = (function (params__9392__auto__){
if(cljs.core.map_QMARK_.call(null,params__9392__auto__)){
var map__9551 = params__9392__auto__;
var map__9551__$1 = ((cljs.core.seq_QMARK_.call(null,map__9551))?cljs.core.apply.call(null,cljs.core.hash_map,map__9551):map__9551);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return db_quiz.core.play_page;},new cljs.core.Symbol("db-quiz.core","play-page","db-quiz.core/play-page",663272252,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"db-quiz.core","db-quiz.core",1358210437,null),new cljs.core.Symbol(null,"play-page","play-page",1256035909,null),"/Users/mynarzjindrich/Dev/clojurescript/db-quiz/src/cljs/db_quiz/core.cljs",16,7,72,72,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(db_quiz.core.play_page)?db_quiz.core.play_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9392__auto__)){
var vec__9552 = params__9392__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return db_quiz.core.play_page;},new cljs.core.Symbol("db-quiz.core","play-page","db-quiz.core/play-page",663272252,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"db-quiz.core","db-quiz.core",1358210437,null),new cljs.core.Symbol(null,"play-page","play-page",1256035909,null),"/Users/mynarzjindrich/Dev/clojurescript/db-quiz/src/cljs/db_quiz/core.cljs",16,7,72,72,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(db_quiz.core.play_page)?db_quiz.core.play_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/play",action__9391__auto___9553);

var action__9391__auto___9556 = (function (params__9392__auto__){
if(cljs.core.map_QMARK_.call(null,params__9392__auto__)){
var map__9554 = params__9392__auto__;
var map__9554__$1 = ((cljs.core.seq_QMARK_.call(null,map__9554))?cljs.core.apply.call(null,cljs.core.hash_map,map__9554):map__9554);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return db_quiz.core.items_page;},new cljs.core.Symbol("db-quiz.core","items-page","db-quiz.core/items-page",-1061361907,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"db-quiz.core","db-quiz.core",1358210437,null),new cljs.core.Symbol(null,"items-page","items-page",-1402798074,null),"/Users/mynarzjindrich/Dev/clojurescript/db-quiz/src/cljs/db_quiz/core.cljs",17,7,91,91,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(db_quiz.core.items_page)?db_quiz.core.items_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9392__auto__)){
var vec__9555 = params__9392__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return db_quiz.core.items_page;},new cljs.core.Symbol("db-quiz.core","items-page","db-quiz.core/items-page",-1061361907,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"db-quiz.core","db-quiz.core",1358210437,null),new cljs.core.Symbol(null,"items-page","items-page",-1402798074,null),"/Users/mynarzjindrich/Dev/clojurescript/db-quiz/src/cljs/db_quiz/core.cljs",17,7,91,91,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(db_quiz.core.items_page)?db_quiz.core.items_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/items",action__9391__auto___9556);

db_quiz.core.hook_browser_navigation_BANG_ = (function db_quiz$core$hook_browser_navigation_BANG_(){
var G__9558 = (new goog.History());
goog.events.listen(G__9558,goog.history.EventType.NAVIGATE,((function (G__9558){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__9558))
);

G__9558.setEnabled(true);

return G__9558;
});
db_quiz.core.mount_root = (function db_quiz$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_quiz.core.current_page], null),document.getElementById("app"));
});
db_quiz.core.init_BANG_ = (function db_quiz$core$init_BANG_(){
db_quiz.core.hook_browser_navigation_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_quiz.core.current_page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map