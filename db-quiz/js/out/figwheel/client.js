// Compiled by ClojureScript 0.0-3196 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15388__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__15388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15389__i = 0, G__15389__a = new Array(arguments.length -  0);
while (G__15389__i < G__15389__a.length) {G__15389__a[G__15389__i] = arguments[G__15389__i + 0]; ++G__15389__i;}
  args = new cljs.core.IndexedSeq(G__15389__a,0);
} 
return G__15388__delegate.call(this,args);};
G__15388.cljs$lang$maxFixedArity = 0;
G__15388.cljs$lang$applyTo = (function (arglist__15390){
var args = cljs.core.seq(arglist__15390);
return G__15388__delegate(args);
});
G__15388.cljs$core$IFn$_invoke$arity$variadic = G__15388__delegate;
return G__15388;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__15391){
var map__15393 = p__15391;
var map__15393__$1 = ((cljs.core.seq_QMARK_.call(null,map__15393))?cljs.core.apply.call(null,cljs.core.hash_map,map__15393):map__15393);
var class$ = cljs.core.get.call(null,map__15393__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__15393__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4220__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4208__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4208__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4208__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__6706__auto___15522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___15522,ch){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___15522,ch){
return (function (state_15496){
var state_val_15497 = (state_15496[(1)]);
if((state_val_15497 === (7))){
var inst_15492 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15498_15523 = state_15496__$1;
(statearr_15498_15523[(2)] = inst_15492);

(statearr_15498_15523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (1))){
var state_15496__$1 = state_15496;
var statearr_15499_15524 = state_15496__$1;
(statearr_15499_15524[(2)] = null);

(statearr_15499_15524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (4))){
var inst_15460 = (state_15496[(7)]);
var inst_15460__$1 = (state_15496[(2)]);
var state_15496__$1 = (function (){var statearr_15500 = state_15496;
(statearr_15500[(7)] = inst_15460__$1);

return statearr_15500;
})();
if(cljs.core.truth_(inst_15460__$1)){
var statearr_15501_15525 = state_15496__$1;
(statearr_15501_15525[(1)] = (5));

} else {
var statearr_15502_15526 = state_15496__$1;
(statearr_15502_15526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (13))){
var state_15496__$1 = state_15496;
var statearr_15503_15527 = state_15496__$1;
(statearr_15503_15527[(2)] = null);

(statearr_15503_15527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (6))){
var state_15496__$1 = state_15496;
var statearr_15504_15528 = state_15496__$1;
(statearr_15504_15528[(2)] = null);

(statearr_15504_15528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (3))){
var inst_15494 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15496__$1,inst_15494);
} else {
if((state_val_15497 === (12))){
var inst_15467 = (state_15496[(8)]);
var inst_15480 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_15467);
var inst_15481 = cljs.core.first.call(null,inst_15480);
var inst_15482 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_15481);
var inst_15483 = console.warn("Figwheel: Not loading code with warnings - ",inst_15482);
var state_15496__$1 = state_15496;
var statearr_15505_15529 = state_15496__$1;
(statearr_15505_15529[(2)] = inst_15483);

(statearr_15505_15529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (2))){
var state_15496__$1 = state_15496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15496__$1,(4),ch);
} else {
if((state_val_15497 === (11))){
var inst_15476 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15506_15530 = state_15496__$1;
(statearr_15506_15530[(2)] = inst_15476);

(statearr_15506_15530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (9))){
var inst_15466 = (state_15496[(9)]);
var inst_15478 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_15466,opts);
var state_15496__$1 = state_15496;
if(cljs.core.truth_(inst_15478)){
var statearr_15507_15531 = state_15496__$1;
(statearr_15507_15531[(1)] = (12));

} else {
var statearr_15508_15532 = state_15496__$1;
(statearr_15508_15532[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (5))){
var inst_15466 = (state_15496[(9)]);
var inst_15460 = (state_15496[(7)]);
var inst_15462 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_15463 = (new cljs.core.PersistentArrayMap(null,2,inst_15462,null));
var inst_15464 = (new cljs.core.PersistentHashSet(null,inst_15463,null));
var inst_15465 = figwheel.client.focus_msgs.call(null,inst_15464,inst_15460);
var inst_15466__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_15465);
var inst_15467 = cljs.core.first.call(null,inst_15465);
var inst_15468 = figwheel.client.reload_file_state_QMARK_.call(null,inst_15466__$1,opts);
var state_15496__$1 = (function (){var statearr_15509 = state_15496;
(statearr_15509[(9)] = inst_15466__$1);

(statearr_15509[(8)] = inst_15467);

return statearr_15509;
})();
if(cljs.core.truth_(inst_15468)){
var statearr_15510_15533 = state_15496__$1;
(statearr_15510_15533[(1)] = (8));

} else {
var statearr_15511_15534 = state_15496__$1;
(statearr_15511_15534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (14))){
var inst_15486 = (state_15496[(2)]);
var state_15496__$1 = state_15496;
var statearr_15512_15535 = state_15496__$1;
(statearr_15512_15535[(2)] = inst_15486);

(statearr_15512_15535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (10))){
var inst_15488 = (state_15496[(2)]);
var state_15496__$1 = (function (){var statearr_15513 = state_15496;
(statearr_15513[(10)] = inst_15488);

return statearr_15513;
})();
var statearr_15514_15536 = state_15496__$1;
(statearr_15514_15536[(2)] = null);

(statearr_15514_15536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15497 === (8))){
var inst_15467 = (state_15496[(8)]);
var inst_15470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15471 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_15467);
var inst_15472 = cljs.core.async.timeout.call(null,(1000));
var inst_15473 = [inst_15471,inst_15472];
var inst_15474 = (new cljs.core.PersistentVector(null,2,(5),inst_15470,inst_15473,null));
var state_15496__$1 = state_15496;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15496__$1,(11),inst_15474);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6706__auto___15522,ch))
;
return ((function (switch__6644__auto__,c__6706__auto___15522,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__6645__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__6645__auto____0 = (function (){
var statearr_15518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15518[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__6645__auto__);

(statearr_15518[(1)] = (1));

return statearr_15518;
});
var figwheel$client$file_reloader_plugin_$_state_machine__6645__auto____1 = (function (state_15496){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_15496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e15519){if((e15519 instanceof Object)){
var ex__6648__auto__ = e15519;
var statearr_15520_15537 = state_15496;
(statearr_15520_15537[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15538 = state_15496;
state_15496 = G__15538;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__6645__auto__ = function(state_15496){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__6645__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__6645__auto____1.call(this,state_15496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__6645__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__6645__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___15522,ch))
})();
var state__6708__auto__ = (function (){var statearr_15521 = f__6707__auto__.call(null);
(statearr_15521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___15522);

return statearr_15521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___15522,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__15539_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__15539_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_15548 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__15541_SHARP_,p2__15540_SHARP_){
return [cljs.core.str(p2__15540_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_15548){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_15546 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_15547 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_15546,_STAR_print_newline_STAR_15547,base_path_15548){
return (function() { 
var G__15549__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__15549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15550__i = 0, G__15550__a = new Array(arguments.length -  0);
while (G__15550__i < G__15550__a.length) {G__15550__a[G__15550__i] = arguments[G__15550__i + 0]; ++G__15550__i;}
  args = new cljs.core.IndexedSeq(G__15550__a,0);
} 
return G__15549__delegate.call(this,args);};
G__15549.cljs$lang$maxFixedArity = 0;
G__15549.cljs$lang$applyTo = (function (arglist__15551){
var args = cljs.core.seq(arglist__15551);
return G__15549__delegate(args);
});
G__15549.cljs$core$IFn$_invoke$arity$variadic = G__15549__delegate;
return G__15549;
})()
;})(_STAR_print_fn_STAR_15546,_STAR_print_newline_STAR_15547,base_path_15548))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15547;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15546;
}}catch (e15545){if((e15545 instanceof Error)){
var e = e15545;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_15548], null));
} else {
var e = e15545;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_15548))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__15552){
var map__15557 = p__15552;
var map__15557__$1 = ((cljs.core.seq_QMARK_.call(null,map__15557))?cljs.core.apply.call(null,cljs.core.hash_map,map__15557):map__15557);
var opts = map__15557__$1;
var build_id = cljs.core.get.call(null,map__15557__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__15557,map__15557__$1,opts,build_id){
return (function (p__15558){
var vec__15559 = p__15558;
var map__15560 = cljs.core.nth.call(null,vec__15559,(0),null);
var map__15560__$1 = ((cljs.core.seq_QMARK_.call(null,map__15560))?cljs.core.apply.call(null,cljs.core.hash_map,map__15560):map__15560);
var msg = map__15560__$1;
var msg_name = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__15559,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__15559,map__15560,map__15560__$1,msg,msg_name,_,map__15557,map__15557__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__15559,map__15560,map__15560__$1,msg,msg_name,_,map__15557,map__15557__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__15557,map__15557__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__15564){
var vec__15565 = p__15564;
var map__15566 = cljs.core.nth.call(null,vec__15565,(0),null);
var map__15566__$1 = ((cljs.core.seq_QMARK_.call(null,map__15566))?cljs.core.apply.call(null,cljs.core.hash_map,map__15566):map__15566);
var msg = map__15566__$1;
var msg_name = cljs.core.get.call(null,map__15566__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__15565,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__15567){
var map__15575 = p__15567;
var map__15575__$1 = ((cljs.core.seq_QMARK_.call(null,map__15575))?cljs.core.apply.call(null,cljs.core.hash_map,map__15575):map__15575);
var on_compile_fail = cljs.core.get.call(null,map__15575__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__15575__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__15575,map__15575__$1,on_compile_fail,on_compile_warning){
return (function (p__15576){
var vec__15577 = p__15576;
var map__15578 = cljs.core.nth.call(null,vec__15577,(0),null);
var map__15578__$1 = ((cljs.core.seq_QMARK_.call(null,map__15578))?cljs.core.apply.call(null,cljs.core.hash_map,map__15578):map__15578);
var msg = map__15578__$1;
var msg_name = cljs.core.get.call(null,map__15578__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__15577,(1));
var pred__15579 = cljs.core._EQ_;
var expr__15580 = msg_name;
if(cljs.core.truth_(pred__15579.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__15580))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__15579.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__15580))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__15575,map__15575__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__,msg_hist,msg_names,msg){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__,msg_hist,msg_names,msg){
return (function (state_15777){
var state_val_15778 = (state_15777[(1)]);
if((state_val_15778 === (7))){
var inst_15713 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15779_15820 = state_15777__$1;
(statearr_15779_15820[(2)] = inst_15713);

(statearr_15779_15820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (20))){
var inst_15739 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_15777__$1 = state_15777;
if(cljs.core.truth_(inst_15739)){
var statearr_15780_15821 = state_15777__$1;
(statearr_15780_15821[(1)] = (22));

} else {
var statearr_15781_15822 = state_15777__$1;
(statearr_15781_15822[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (27))){
var inst_15751 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15752 = figwheel.client.heads_up.display_warning.call(null,inst_15751);
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15777__$1,(30),inst_15752);
} else {
if((state_val_15778 === (1))){
var inst_15701 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_15777__$1 = state_15777;
if(cljs.core.truth_(inst_15701)){
var statearr_15782_15823 = state_15777__$1;
(statearr_15782_15823[(1)] = (2));

} else {
var statearr_15783_15824 = state_15777__$1;
(statearr_15783_15824[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (24))){
var inst_15767 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15784_15825 = state_15777__$1;
(statearr_15784_15825[(2)] = inst_15767);

(statearr_15784_15825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (4))){
var inst_15775 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15777__$1,inst_15775);
} else {
if((state_val_15778 === (15))){
var inst_15728 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15729 = figwheel.client.format_messages.call(null,inst_15728);
var inst_15730 = figwheel.client.heads_up.display_error.call(null,inst_15729);
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15777__$1,(18),inst_15730);
} else {
if((state_val_15778 === (21))){
var inst_15769 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15785_15826 = state_15777__$1;
(statearr_15785_15826[(2)] = inst_15769);

(statearr_15785_15826[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (31))){
var inst_15758 = figwheel.client.heads_up.flash_loaded.call(null);
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15777__$1,(34),inst_15758);
} else {
if((state_val_15778 === (32))){
var state_15777__$1 = state_15777;
var statearr_15786_15827 = state_15777__$1;
(statearr_15786_15827[(2)] = null);

(statearr_15786_15827[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (33))){
var inst_15763 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15787_15828 = state_15777__$1;
(statearr_15787_15828[(2)] = inst_15763);

(statearr_15787_15828[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (13))){
var inst_15719 = (state_15777[(2)]);
var inst_15720 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15721 = figwheel.client.format_messages.call(null,inst_15720);
var inst_15722 = figwheel.client.heads_up.display_error.call(null,inst_15721);
var state_15777__$1 = (function (){var statearr_15788 = state_15777;
(statearr_15788[(7)] = inst_15719);

return statearr_15788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15777__$1,(14),inst_15722);
} else {
if((state_val_15778 === (22))){
var inst_15741 = figwheel.client.heads_up.clear.call(null);
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15777__$1,(25),inst_15741);
} else {
if((state_val_15778 === (29))){
var inst_15765 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15789_15829 = state_15777__$1;
(statearr_15789_15829[(2)] = inst_15765);

(statearr_15789_15829[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (6))){
var inst_15709 = figwheel.client.heads_up.clear.call(null);
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15777__$1,(9),inst_15709);
} else {
if((state_val_15778 === (28))){
var inst_15756 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_15777__$1 = state_15777;
if(cljs.core.truth_(inst_15756)){
var statearr_15790_15830 = state_15777__$1;
(statearr_15790_15830[(1)] = (31));

} else {
var statearr_15791_15831 = state_15777__$1;
(statearr_15791_15831[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (25))){
var inst_15743 = (state_15777[(2)]);
var inst_15744 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15745 = figwheel.client.heads_up.display_warning.call(null,inst_15744);
var state_15777__$1 = (function (){var statearr_15792 = state_15777;
(statearr_15792[(8)] = inst_15743);

return statearr_15792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15777__$1,(26),inst_15745);
} else {
if((state_val_15778 === (34))){
var inst_15760 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15793_15832 = state_15777__$1;
(statearr_15793_15832[(2)] = inst_15760);

(statearr_15793_15832[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (17))){
var inst_15771 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15794_15833 = state_15777__$1;
(statearr_15794_15833[(2)] = inst_15771);

(statearr_15794_15833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (3))){
var inst_15715 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_15777__$1 = state_15777;
if(cljs.core.truth_(inst_15715)){
var statearr_15795_15834 = state_15777__$1;
(statearr_15795_15834[(1)] = (10));

} else {
var statearr_15796_15835 = state_15777__$1;
(statearr_15796_15835[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (12))){
var inst_15773 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15797_15836 = state_15777__$1;
(statearr_15797_15836[(2)] = inst_15773);

(statearr_15797_15836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (2))){
var inst_15703 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_15777__$1 = state_15777;
if(cljs.core.truth_(inst_15703)){
var statearr_15798_15837 = state_15777__$1;
(statearr_15798_15837[(1)] = (5));

} else {
var statearr_15799_15838 = state_15777__$1;
(statearr_15799_15838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (23))){
var inst_15749 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_15777__$1 = state_15777;
if(cljs.core.truth_(inst_15749)){
var statearr_15800_15839 = state_15777__$1;
(statearr_15800_15839[(1)] = (27));

} else {
var statearr_15801_15840 = state_15777__$1;
(statearr_15801_15840[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (19))){
var inst_15736 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15737 = figwheel.client.heads_up.append_message.call(null,inst_15736);
var state_15777__$1 = state_15777;
var statearr_15802_15841 = state_15777__$1;
(statearr_15802_15841[(2)] = inst_15737);

(statearr_15802_15841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (11))){
var inst_15726 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_15777__$1 = state_15777;
if(cljs.core.truth_(inst_15726)){
var statearr_15803_15842 = state_15777__$1;
(statearr_15803_15842[(1)] = (15));

} else {
var statearr_15804_15843 = state_15777__$1;
(statearr_15804_15843[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (9))){
var inst_15711 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15805_15844 = state_15777__$1;
(statearr_15805_15844[(2)] = inst_15711);

(statearr_15805_15844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (5))){
var inst_15705 = figwheel.client.heads_up.flash_loaded.call(null);
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15777__$1,(8),inst_15705);
} else {
if((state_val_15778 === (14))){
var inst_15724 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15806_15845 = state_15777__$1;
(statearr_15806_15845[(2)] = inst_15724);

(statearr_15806_15845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (26))){
var inst_15747 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15807_15846 = state_15777__$1;
(statearr_15807_15846[(2)] = inst_15747);

(statearr_15807_15846[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (16))){
var inst_15734 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_15777__$1 = state_15777;
if(cljs.core.truth_(inst_15734)){
var statearr_15808_15847 = state_15777__$1;
(statearr_15808_15847[(1)] = (19));

} else {
var statearr_15809_15848 = state_15777__$1;
(statearr_15809_15848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (30))){
var inst_15754 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15810_15849 = state_15777__$1;
(statearr_15810_15849[(2)] = inst_15754);

(statearr_15810_15849[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (10))){
var inst_15717 = figwheel.client.heads_up.clear.call(null);
var state_15777__$1 = state_15777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15777__$1,(13),inst_15717);
} else {
if((state_val_15778 === (18))){
var inst_15732 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15811_15850 = state_15777__$1;
(statearr_15811_15850[(2)] = inst_15732);

(statearr_15811_15850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15778 === (8))){
var inst_15707 = (state_15777[(2)]);
var state_15777__$1 = state_15777;
var statearr_15812_15851 = state_15777__$1;
(statearr_15812_15851[(2)] = inst_15707);

(statearr_15812_15851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6706__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__6644__auto__,c__6706__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto____0 = (function (){
var statearr_15816 = [null,null,null,null,null,null,null,null,null];
(statearr_15816[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto__);

(statearr_15816[(1)] = (1));

return statearr_15816;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto____1 = (function (state_15777){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_15777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e15817){if((e15817 instanceof Object)){
var ex__6648__auto__ = e15817;
var statearr_15818_15852 = state_15777;
(statearr_15818_15852[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15853 = state_15777;
state_15777 = G__15853;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto__ = function(state_15777){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto____1.call(this,state_15777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__,msg_hist,msg_names,msg))
})();
var state__6708__auto__ = (function (){var statearr_15819 = f__6707__auto__.call(null);
(statearr_15819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_15819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__,msg_hist,msg_names,msg))
);

return c__6706__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__6706__auto___15916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___15916,ch){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___15916,ch){
return (function (state_15899){
var state_val_15900 = (state_15899[(1)]);
if((state_val_15900 === (8))){
var inst_15891 = (state_15899[(2)]);
var state_15899__$1 = (function (){var statearr_15901 = state_15899;
(statearr_15901[(7)] = inst_15891);

return statearr_15901;
})();
var statearr_15902_15917 = state_15899__$1;
(statearr_15902_15917[(2)] = null);

(statearr_15902_15917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15900 === (7))){
var inst_15895 = (state_15899[(2)]);
var state_15899__$1 = state_15899;
var statearr_15903_15918 = state_15899__$1;
(statearr_15903_15918[(2)] = inst_15895);

(statearr_15903_15918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15900 === (6))){
var state_15899__$1 = state_15899;
var statearr_15904_15919 = state_15899__$1;
(statearr_15904_15919[(2)] = null);

(statearr_15904_15919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15900 === (5))){
var inst_15887 = (state_15899[(8)]);
var inst_15889 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_15887);
var state_15899__$1 = state_15899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15899__$1,(8),inst_15889);
} else {
if((state_val_15900 === (4))){
var inst_15887 = (state_15899[(8)]);
var inst_15887__$1 = (state_15899[(2)]);
var state_15899__$1 = (function (){var statearr_15905 = state_15899;
(statearr_15905[(8)] = inst_15887__$1);

return statearr_15905;
})();
if(cljs.core.truth_(inst_15887__$1)){
var statearr_15906_15920 = state_15899__$1;
(statearr_15906_15920[(1)] = (5));

} else {
var statearr_15907_15921 = state_15899__$1;
(statearr_15907_15921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15900 === (3))){
var inst_15897 = (state_15899[(2)]);
var state_15899__$1 = state_15899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15899__$1,inst_15897);
} else {
if((state_val_15900 === (2))){
var state_15899__$1 = state_15899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15899__$1,(4),ch);
} else {
if((state_val_15900 === (1))){
var state_15899__$1 = state_15899;
var statearr_15908_15922 = state_15899__$1;
(statearr_15908_15922[(2)] = null);

(statearr_15908_15922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__6706__auto___15916,ch))
;
return ((function (switch__6644__auto__,c__6706__auto___15916,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__6645__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__6645__auto____0 = (function (){
var statearr_15912 = [null,null,null,null,null,null,null,null,null];
(statearr_15912[(0)] = figwheel$client$heads_up_plugin_$_state_machine__6645__auto__);

(statearr_15912[(1)] = (1));

return statearr_15912;
});
var figwheel$client$heads_up_plugin_$_state_machine__6645__auto____1 = (function (state_15899){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_15899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e15913){if((e15913 instanceof Object)){
var ex__6648__auto__ = e15913;
var statearr_15914_15923 = state_15899;
(statearr_15914_15923[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15924 = state_15899;
state_15899 = G__15924;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__6645__auto__ = function(state_15899){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__6645__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__6645__auto____1.call(this,state_15899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__6645__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__6645__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___15916,ch))
})();
var state__6708__auto__ = (function (){var statearr_15915 = f__6707__auto__.call(null);
(statearr_15915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___15916);

return statearr_15915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___15916,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__){
return (function (state_15945){
var state_val_15946 = (state_15945[(1)]);
if((state_val_15946 === (2))){
var inst_15942 = (state_15945[(2)]);
var inst_15943 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_15945__$1 = (function (){var statearr_15947 = state_15945;
(statearr_15947[(7)] = inst_15942);

return statearr_15947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15945__$1,inst_15943);
} else {
if((state_val_15946 === (1))){
var inst_15940 = cljs.core.async.timeout.call(null,(3000));
var state_15945__$1 = state_15945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15945__$1,(2),inst_15940);
} else {
return null;
}
}
});})(c__6706__auto__))
;
return ((function (switch__6644__auto__,c__6706__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__6645__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__6645__auto____0 = (function (){
var statearr_15951 = [null,null,null,null,null,null,null,null];
(statearr_15951[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__6645__auto__);

(statearr_15951[(1)] = (1));

return statearr_15951;
});
var figwheel$client$enforce_project_plugin_$_state_machine__6645__auto____1 = (function (state_15945){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_15945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e15952){if((e15952 instanceof Object)){
var ex__6648__auto__ = e15952;
var statearr_15953_15955 = state_15945;
(statearr_15953_15955[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15956 = state_15945;
state_15945 = G__15956;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__6645__auto__ = function(state_15945){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__6645__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__6645__auto____1.call(this,state_15945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__6645__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__6645__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__))
})();
var state__6708__auto__ = (function (){var statearr_15954 = f__6707__auto__.call(null);
(statearr_15954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_15954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__))
);

return c__6706__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__4208__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__4208__auto__)){
return ("CustomEvent" in window);
} else {
return and__4208__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj15960 = {"detail":url};
return obj15960;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__15961){
var map__15967 = p__15961;
var map__15967__$1 = ((cljs.core.seq_QMARK_.call(null,map__15967))?cljs.core.apply.call(null,cljs.core.hash_map,map__15967):map__15967);
var ed = map__15967__$1;
var exception_data = cljs.core.get.call(null,map__15967__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__15967__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__15968_15972 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__15969_15973 = null;
var count__15970_15974 = (0);
var i__15971_15975 = (0);
while(true){
if((i__15971_15975 < count__15970_15974)){
var msg_15976 = cljs.core._nth.call(null,chunk__15969_15973,i__15971_15975);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_15976);

var G__15977 = seq__15968_15972;
var G__15978 = chunk__15969_15973;
var G__15979 = count__15970_15974;
var G__15980 = (i__15971_15975 + (1));
seq__15968_15972 = G__15977;
chunk__15969_15973 = G__15978;
count__15970_15974 = G__15979;
i__15971_15975 = G__15980;
continue;
} else {
var temp__4126__auto___15981 = cljs.core.seq.call(null,seq__15968_15972);
if(temp__4126__auto___15981){
var seq__15968_15982__$1 = temp__4126__auto___15981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15968_15982__$1)){
var c__5005__auto___15983 = cljs.core.chunk_first.call(null,seq__15968_15982__$1);
var G__15984 = cljs.core.chunk_rest.call(null,seq__15968_15982__$1);
var G__15985 = c__5005__auto___15983;
var G__15986 = cljs.core.count.call(null,c__5005__auto___15983);
var G__15987 = (0);
seq__15968_15972 = G__15984;
chunk__15969_15973 = G__15985;
count__15970_15974 = G__15986;
i__15971_15975 = G__15987;
continue;
} else {
var msg_15988 = cljs.core.first.call(null,seq__15968_15982__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_15988);

var G__15989 = cljs.core.next.call(null,seq__15968_15982__$1);
var G__15990 = null;
var G__15991 = (0);
var G__15992 = (0);
seq__15968_15972 = G__15989;
chunk__15969_15973 = G__15990;
count__15970_15974 = G__15991;
i__15971_15975 = G__15992;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__15993){
var map__15995 = p__15993;
var map__15995__$1 = ((cljs.core.seq_QMARK_.call(null,map__15995))?cljs.core.apply.call(null,cljs.core.hash_map,map__15995):map__15995);
var w = map__15995__$1;
var message = cljs.core.get.call(null,map__15995__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4208__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4208__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4208__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__16002 = cljs.core.seq.call(null,plugins);
var chunk__16003 = null;
var count__16004 = (0);
var i__16005 = (0);
while(true){
if((i__16005 < count__16004)){
var vec__16006 = cljs.core._nth.call(null,chunk__16003,i__16005);
var k = cljs.core.nth.call(null,vec__16006,(0),null);
var plugin = cljs.core.nth.call(null,vec__16006,(1),null);
if(cljs.core.truth_(plugin)){
var pl_16008 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__16002,chunk__16003,count__16004,i__16005,pl_16008,vec__16006,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_16008.call(null,msg_hist);
});})(seq__16002,chunk__16003,count__16004,i__16005,pl_16008,vec__16006,k,plugin))
);
} else {
}

var G__16009 = seq__16002;
var G__16010 = chunk__16003;
var G__16011 = count__16004;
var G__16012 = (i__16005 + (1));
seq__16002 = G__16009;
chunk__16003 = G__16010;
count__16004 = G__16011;
i__16005 = G__16012;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__16002);
if(temp__4126__auto__){
var seq__16002__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16002__$1)){
var c__5005__auto__ = cljs.core.chunk_first.call(null,seq__16002__$1);
var G__16013 = cljs.core.chunk_rest.call(null,seq__16002__$1);
var G__16014 = c__5005__auto__;
var G__16015 = cljs.core.count.call(null,c__5005__auto__);
var G__16016 = (0);
seq__16002 = G__16013;
chunk__16003 = G__16014;
count__16004 = G__16015;
i__16005 = G__16016;
continue;
} else {
var vec__16007 = cljs.core.first.call(null,seq__16002__$1);
var k = cljs.core.nth.call(null,vec__16007,(0),null);
var plugin = cljs.core.nth.call(null,vec__16007,(1),null);
if(cljs.core.truth_(plugin)){
var pl_16017 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__16002,chunk__16003,count__16004,i__16005,pl_16017,vec__16007,k,plugin,seq__16002__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_16017.call(null,msg_hist);
});})(seq__16002,chunk__16003,count__16004,i__16005,pl_16017,vec__16007,k,plugin,seq__16002__$1,temp__4126__auto__))
);
} else {
}

var G__16018 = cljs.core.next.call(null,seq__16002__$1);
var G__16019 = null;
var G__16020 = (0);
var G__16021 = (0);
seq__16002 = G__16018;
chunk__16003 = G__16019;
count__16004 = G__16020;
i__16005 = G__16021;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__16023 = arguments.length;
switch (G__16023) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__5260__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5260__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__16026){
var map__16027 = p__16026;
var map__16027__$1 = ((cljs.core.seq_QMARK_.call(null,map__16027))?cljs.core.apply.call(null,cljs.core.hash_map,map__16027):map__16027);
var opts = map__16027__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq16025){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16025));
});

//# sourceMappingURL=client.js.map