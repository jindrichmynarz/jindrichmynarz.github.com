// Compiled by ClojureScript 0.0-3196 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16283_16295 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16284_16296 = null;
var count__16285_16297 = (0);
var i__16286_16298 = (0);
while(true){
if((i__16286_16298 < count__16285_16297)){
var f_16299 = cljs.core._nth.call(null,chunk__16284_16296,i__16286_16298);
cljs.core.println.call(null,"  ",f_16299);

var G__16300 = seq__16283_16295;
var G__16301 = chunk__16284_16296;
var G__16302 = count__16285_16297;
var G__16303 = (i__16286_16298 + (1));
seq__16283_16295 = G__16300;
chunk__16284_16296 = G__16301;
count__16285_16297 = G__16302;
i__16286_16298 = G__16303;
continue;
} else {
var temp__4126__auto___16304 = cljs.core.seq.call(null,seq__16283_16295);
if(temp__4126__auto___16304){
var seq__16283_16305__$1 = temp__4126__auto___16304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16283_16305__$1)){
var c__5005__auto___16306 = cljs.core.chunk_first.call(null,seq__16283_16305__$1);
var G__16307 = cljs.core.chunk_rest.call(null,seq__16283_16305__$1);
var G__16308 = c__5005__auto___16306;
var G__16309 = cljs.core.count.call(null,c__5005__auto___16306);
var G__16310 = (0);
seq__16283_16295 = G__16307;
chunk__16284_16296 = G__16308;
count__16285_16297 = G__16309;
i__16286_16298 = G__16310;
continue;
} else {
var f_16311 = cljs.core.first.call(null,seq__16283_16305__$1);
cljs.core.println.call(null,"  ",f_16311);

var G__16312 = cljs.core.next.call(null,seq__16283_16305__$1);
var G__16313 = null;
var G__16314 = (0);
var G__16315 = (0);
seq__16283_16295 = G__16312;
chunk__16284_16296 = G__16313;
count__16285_16297 = G__16314;
i__16286_16298 = G__16315;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4220__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16287 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16288 = null;
var count__16289 = (0);
var i__16290 = (0);
while(true){
if((i__16290 < count__16289)){
var vec__16291 = cljs.core._nth.call(null,chunk__16288,i__16290);
var name = cljs.core.nth.call(null,vec__16291,(0),null);
var map__16292 = cljs.core.nth.call(null,vec__16291,(1),null);
var map__16292__$1 = ((cljs.core.seq_QMARK_.call(null,map__16292))?cljs.core.apply.call(null,cljs.core.hash_map,map__16292):map__16292);
var arglists = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__16292__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__16316 = seq__16287;
var G__16317 = chunk__16288;
var G__16318 = count__16289;
var G__16319 = (i__16290 + (1));
seq__16287 = G__16316;
chunk__16288 = G__16317;
count__16289 = G__16318;
i__16290 = G__16319;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__16287);
if(temp__4126__auto__){
var seq__16287__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16287__$1)){
var c__5005__auto__ = cljs.core.chunk_first.call(null,seq__16287__$1);
var G__16320 = cljs.core.chunk_rest.call(null,seq__16287__$1);
var G__16321 = c__5005__auto__;
var G__16322 = cljs.core.count.call(null,c__5005__auto__);
var G__16323 = (0);
seq__16287 = G__16320;
chunk__16288 = G__16321;
count__16289 = G__16322;
i__16290 = G__16323;
continue;
} else {
var vec__16293 = cljs.core.first.call(null,seq__16287__$1);
var name = cljs.core.nth.call(null,vec__16293,(0),null);
var map__16294 = cljs.core.nth.call(null,vec__16293,(1),null);
var map__16294__$1 = ((cljs.core.seq_QMARK_.call(null,map__16294))?cljs.core.apply.call(null,cljs.core.hash_map,map__16294):map__16294);
var arglists = cljs.core.get.call(null,map__16294__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__16294__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__16324 = cljs.core.next.call(null,seq__16287__$1);
var G__16325 = null;
var G__16326 = (0);
var G__16327 = (0);
seq__16287 = G__16324;
chunk__16288 = G__16325;
count__16289 = G__16326;
i__16290 = G__16327;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map