// Compiled by ClojureScript 0.0-3196 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__5260__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5260__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__16040_16048 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__16041_16049 = null;
var count__16042_16050 = (0);
var i__16043_16051 = (0);
while(true){
if((i__16043_16051 < count__16042_16050)){
var k_16052 = cljs.core._nth.call(null,chunk__16041_16049,i__16043_16051);
e.setAttribute(cljs.core.name.call(null,k_16052),cljs.core.get.call(null,attrs,k_16052));

var G__16053 = seq__16040_16048;
var G__16054 = chunk__16041_16049;
var G__16055 = count__16042_16050;
var G__16056 = (i__16043_16051 + (1));
seq__16040_16048 = G__16053;
chunk__16041_16049 = G__16054;
count__16042_16050 = G__16055;
i__16043_16051 = G__16056;
continue;
} else {
var temp__4126__auto___16057 = cljs.core.seq.call(null,seq__16040_16048);
if(temp__4126__auto___16057){
var seq__16040_16058__$1 = temp__4126__auto___16057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16040_16058__$1)){
var c__5005__auto___16059 = cljs.core.chunk_first.call(null,seq__16040_16058__$1);
var G__16060 = cljs.core.chunk_rest.call(null,seq__16040_16058__$1);
var G__16061 = c__5005__auto___16059;
var G__16062 = cljs.core.count.call(null,c__5005__auto___16059);
var G__16063 = (0);
seq__16040_16048 = G__16060;
chunk__16041_16049 = G__16061;
count__16042_16050 = G__16062;
i__16043_16051 = G__16063;
continue;
} else {
var k_16064 = cljs.core.first.call(null,seq__16040_16058__$1);
e.setAttribute(cljs.core.name.call(null,k_16064),cljs.core.get.call(null,attrs,k_16064));

var G__16065 = cljs.core.next.call(null,seq__16040_16058__$1);
var G__16066 = null;
var G__16067 = (0);
var G__16068 = (0);
seq__16040_16048 = G__16065;
chunk__16041_16049 = G__16066;
count__16042_16050 = G__16067;
i__16043_16051 = G__16068;
continue;
}
} else {
}
}
break;
}

var seq__16044_16069 = cljs.core.seq.call(null,children);
var chunk__16045_16070 = null;
var count__16046_16071 = (0);
var i__16047_16072 = (0);
while(true){
if((i__16047_16072 < count__16046_16071)){
var ch_16073 = cljs.core._nth.call(null,chunk__16045_16070,i__16047_16072);
e.appendChild(ch_16073);

var G__16074 = seq__16044_16069;
var G__16075 = chunk__16045_16070;
var G__16076 = count__16046_16071;
var G__16077 = (i__16047_16072 + (1));
seq__16044_16069 = G__16074;
chunk__16045_16070 = G__16075;
count__16046_16071 = G__16076;
i__16047_16072 = G__16077;
continue;
} else {
var temp__4126__auto___16078 = cljs.core.seq.call(null,seq__16044_16069);
if(temp__4126__auto___16078){
var seq__16044_16079__$1 = temp__4126__auto___16078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16044_16079__$1)){
var c__5005__auto___16080 = cljs.core.chunk_first.call(null,seq__16044_16079__$1);
var G__16081 = cljs.core.chunk_rest.call(null,seq__16044_16079__$1);
var G__16082 = c__5005__auto___16080;
var G__16083 = cljs.core.count.call(null,c__5005__auto___16080);
var G__16084 = (0);
seq__16044_16069 = G__16081;
chunk__16045_16070 = G__16082;
count__16046_16071 = G__16083;
i__16047_16072 = G__16084;
continue;
} else {
var ch_16085 = cljs.core.first.call(null,seq__16044_16079__$1);
e.appendChild(ch_16085);

var G__16086 = cljs.core.next.call(null,seq__16044_16079__$1);
var G__16087 = null;
var G__16088 = (0);
var G__16089 = (0);
seq__16044_16069 = G__16086;
chunk__16045_16070 = G__16087;
count__16046_16071 = G__16088;
i__16047_16072 = G__16089;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq16037){
var G__16038 = cljs.core.first.call(null,seq16037);
var seq16037__$1 = cljs.core.next.call(null,seq16037);
var G__16039 = cljs.core.first.call(null,seq16037__$1);
var seq16037__$2 = cljs.core.next.call(null,seq16037__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__16038,G__16039,seq16037__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5118__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5119__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__5115__auto__,prefer_table__5116__auto__,method_cache__5117__auto__,cached_hierarchy__5118__auto__,hierarchy__5119__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__5115__auto__,prefer_table__5116__auto__,method_cache__5117__auto__,cached_hierarchy__5118__auto__,hierarchy__5119__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5119__auto__,method_table__5115__auto__,prefer_table__5116__auto__,method_cache__5117__auto__,cached_hierarchy__5118__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_16090 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_16090.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_16090.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_16090.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_16090);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__16091,st_map){
var map__16095 = p__16091;
var map__16095__$1 = ((cljs.core.seq_QMARK_.call(null,map__16095))?cljs.core.apply.call(null,cljs.core.hash_map,map__16095):map__16095);
var container_el = cljs.core.get.call(null,map__16095__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__16095,map__16095__$1,container_el){
return (function (p__16096){
var vec__16097 = p__16096;
var k = cljs.core.nth.call(null,vec__16097,(0),null);
var v = cljs.core.nth.call(null,vec__16097,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__16095,map__16095__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__16098,dom_str){
var map__16100 = p__16098;
var map__16100__$1 = ((cljs.core.seq_QMARK_.call(null,map__16100))?cljs.core.apply.call(null,cljs.core.hash_map,map__16100):map__16100);
var c = map__16100__$1;
var content_area_el = cljs.core.get.call(null,map__16100__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__16101){
var map__16103 = p__16101;
var map__16103__$1 = ((cljs.core.seq_QMARK_.call(null,map__16103))?cljs.core.apply.call(null,cljs.core.hash_map,map__16103):map__16103);
var content_area_el = cljs.core.get.call(null,map__16103__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__){
return (function (state_16145){
var state_val_16146 = (state_16145[(1)]);
if((state_val_16146 === (2))){
var inst_16130 = (state_16145[(7)]);
var inst_16139 = (state_16145[(2)]);
var inst_16140 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_16141 = ["auto"];
var inst_16142 = cljs.core.PersistentHashMap.fromArrays(inst_16140,inst_16141);
var inst_16143 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16130,inst_16142);
var state_16145__$1 = (function (){var statearr_16147 = state_16145;
(statearr_16147[(8)] = inst_16139);

return statearr_16147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16145__$1,inst_16143);
} else {
if((state_val_16146 === (1))){
var inst_16130 = (state_16145[(7)]);
var inst_16130__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_16131 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_16132 = ["10px","10px","100%","68px","1.0"];
var inst_16133 = cljs.core.PersistentHashMap.fromArrays(inst_16131,inst_16132);
var inst_16134 = cljs.core.merge.call(null,inst_16133,style);
var inst_16135 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16130__$1,inst_16134);
var inst_16136 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_16130__$1,msg);
var inst_16137 = cljs.core.async.timeout.call(null,(300));
var state_16145__$1 = (function (){var statearr_16148 = state_16145;
(statearr_16148[(9)] = inst_16136);

(statearr_16148[(7)] = inst_16130__$1);

(statearr_16148[(10)] = inst_16135);

return statearr_16148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16145__$1,(2),inst_16137);
} else {
return null;
}
}
});})(c__6706__auto__))
;
return ((function (switch__6644__auto__,c__6706__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto____0 = (function (){
var statearr_16152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16152[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto__);

(statearr_16152[(1)] = (1));

return statearr_16152;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto____1 = (function (state_16145){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_16145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e16153){if((e16153 instanceof Object)){
var ex__6648__auto__ = e16153;
var statearr_16154_16156 = state_16145;
(statearr_16154_16156[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16157 = state_16145;
state_16145 = G__16157;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto__ = function(state_16145){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto____1.call(this,state_16145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__))
})();
var state__6708__auto__ = (function (){var statearr_16155 = f__6707__auto__.call(null);
(statearr_16155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_16155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__))
);

return c__6706__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__16159 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__16159,(0),null);
var ln = cljs.core.nth.call(null,vec__16159,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__16162 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__16162,(0),null);
var file_line = cljs.core.nth.call(null,vec__16162,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__16162,file_name,file_line){
return (function (p1__16160_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__16160_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__16162,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__16164 = figwheel.client.heads_up.ensure_container.call(null);
var map__16164__$1 = ((cljs.core.seq_QMARK_.call(null,map__16164))?cljs.core.apply.call(null,cljs.core.hash_map,map__16164):map__16164);
var content_area_el = cljs.core.get.call(null,map__16164__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__){
return (function (state_16211){
var state_val_16212 = (state_16211[(1)]);
if((state_val_16212 === (3))){
var inst_16194 = (state_16211[(7)]);
var inst_16208 = (state_16211[(2)]);
var inst_16209 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_16194,"");
var state_16211__$1 = (function (){var statearr_16213 = state_16211;
(statearr_16213[(8)] = inst_16208);

return statearr_16213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16211__$1,inst_16209);
} else {
if((state_val_16212 === (2))){
var inst_16194 = (state_16211[(7)]);
var inst_16201 = (state_16211[(2)]);
var inst_16202 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_16203 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_16204 = cljs.core.PersistentHashMap.fromArrays(inst_16202,inst_16203);
var inst_16205 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16194,inst_16204);
var inst_16206 = cljs.core.async.timeout.call(null,(200));
var state_16211__$1 = (function (){var statearr_16214 = state_16211;
(statearr_16214[(9)] = inst_16205);

(statearr_16214[(10)] = inst_16201);

return statearr_16214;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16211__$1,(3),inst_16206);
} else {
if((state_val_16212 === (1))){
var inst_16194 = (state_16211[(7)]);
var inst_16194__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_16195 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_16196 = ["0.0"];
var inst_16197 = cljs.core.PersistentHashMap.fromArrays(inst_16195,inst_16196);
var inst_16198 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_16194__$1,inst_16197);
var inst_16199 = cljs.core.async.timeout.call(null,(300));
var state_16211__$1 = (function (){var statearr_16215 = state_16211;
(statearr_16215[(7)] = inst_16194__$1);

(statearr_16215[(11)] = inst_16198);

return statearr_16215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16211__$1,(2),inst_16199);
} else {
return null;
}
}
}
});})(c__6706__auto__))
;
return ((function (switch__6644__auto__,c__6706__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__6645__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__6645__auto____0 = (function (){
var statearr_16219 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16219[(0)] = figwheel$client$heads_up$clear_$_state_machine__6645__auto__);

(statearr_16219[(1)] = (1));

return statearr_16219;
});
var figwheel$client$heads_up$clear_$_state_machine__6645__auto____1 = (function (state_16211){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_16211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e16220){if((e16220 instanceof Object)){
var ex__6648__auto__ = e16220;
var statearr_16221_16223 = state_16211;
(statearr_16221_16223[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16224 = state_16211;
state_16211 = G__16224;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__6645__auto__ = function(state_16211){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__6645__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__6645__auto____1.call(this,state_16211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__6645__auto____0;
figwheel$client$heads_up$clear_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__6645__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__))
})();
var state__6708__auto__ = (function (){var statearr_16222 = f__6707__auto__.call(null);
(statearr_16222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_16222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__))
);

return c__6706__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__){
return (function (state_16256){
var state_val_16257 = (state_16256[(1)]);
if((state_val_16257 === (4))){
var inst_16254 = (state_16256[(2)]);
var state_16256__$1 = state_16256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16256__$1,inst_16254);
} else {
if((state_val_16257 === (3))){
var inst_16251 = (state_16256[(2)]);
var inst_16252 = figwheel.client.heads_up.clear.call(null);
var state_16256__$1 = (function (){var statearr_16258 = state_16256;
(statearr_16258[(7)] = inst_16251);

return statearr_16258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16256__$1,(4),inst_16252);
} else {
if((state_val_16257 === (2))){
var inst_16248 = (state_16256[(2)]);
var inst_16249 = cljs.core.async.timeout.call(null,(400));
var state_16256__$1 = (function (){var statearr_16259 = state_16256;
(statearr_16259[(8)] = inst_16248);

return statearr_16259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16256__$1,(3),inst_16249);
} else {
if((state_val_16257 === (1))){
var inst_16246 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_16256__$1 = state_16256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16256__$1,(2),inst_16246);
} else {
return null;
}
}
}
}
});})(c__6706__auto__))
;
return ((function (switch__6644__auto__,c__6706__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto____0 = (function (){
var statearr_16263 = [null,null,null,null,null,null,null,null,null];
(statearr_16263[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto__);

(statearr_16263[(1)] = (1));

return statearr_16263;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto____1 = (function (state_16256){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_16256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e16264){if((e16264 instanceof Object)){
var ex__6648__auto__ = e16264;
var statearr_16265_16267 = state_16256;
(statearr_16265_16267[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16268 = state_16256;
state_16256 = G__16268;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto__ = function(state_16256){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto____1.call(this,state_16256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__))
})();
var state__6708__auto__ = (function (){var statearr_16266 = f__6707__auto__.call(null);
(statearr_16266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_16266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__))
);

return c__6706__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map