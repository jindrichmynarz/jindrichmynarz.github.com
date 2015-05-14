// Compiled by ClojureScript 0.0-3196 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__16342_SHARP_,p2__16343_SHARP_){
var and__4208__auto__ = p1__16342_SHARP_;
if(cljs.core.truth_(and__4208__auto__)){
return p2__16343_SHARP_;
} else {
return and__4208__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4220__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4220__auto__){
return or__4220__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__16345_SHARP_,p2__16344_SHARP_){
return [cljs.core.str(p2__16344_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__4220__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4220__auto__){
return or__4220__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4220__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__5115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5118__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5119__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5119__auto__,method_table__5115__auto__,prefer_table__5116__auto__,method_cache__5117__auto__,cached_hierarchy__5118__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16346){
var map__16347 = p__16346;
var map__16347__$1 = ((cljs.core.seq_QMARK_.call(null,map__16347))?cljs.core.apply.call(null,cljs.core.hash_map,map__16347):map__16347);
var file = cljs.core.get.call(null,map__16347__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__16348){
var map__16349 = p__16348;
var map__16349__$1 = ((cljs.core.seq_QMARK_.call(null,map__16349))?cljs.core.apply.call(null,cljs.core.hash_map,map__16349):map__16349);
var namespace = cljs.core.get.call(null,map__16349__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__5115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5118__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5119__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5119__auto__,method_table__5115__auto__,prefer_table__5116__auto__,method_cache__5117__auto__,cached_hierarchy__5118__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e16350){if((e16350 instanceof Error)){
var e = e16350;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e16350;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__16352 = arguments.length;
switch (G__16352) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__16354,callback){
var map__16356 = p__16354;
var map__16356__$1 = ((cljs.core.seq_QMARK_.call(null,map__16356))?cljs.core.apply.call(null,cljs.core.hash_map,map__16356):map__16356);
var file_msg = map__16356__$1;
var request_url = cljs.core.get.call(null,map__16356__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__16356,map__16356__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__16356,map__16356__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__16357){
var map__16359 = p__16357;
var map__16359__$1 = ((cljs.core.seq_QMARK_.call(null,map__16359))?cljs.core.apply.call(null,cljs.core.hash_map,map__16359):map__16359);
var file_msg = map__16359__$1;
var meta_data = cljs.core.get.call(null,map__16359__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__16359__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__4220__auto__ = meta_data;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4208__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4208__auto__){
var or__4220__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4220__auto____$1)){
return or__4220__auto____$1;
} else {
var and__4208__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4208__auto____$1){
var or__4220__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4220__auto____$2){
return or__4220__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__4208__auto____$1;
}
}
}
} else {
return and__4208__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__16360,callback){
var map__16362 = p__16360;
var map__16362__$1 = ((cljs.core.seq_QMARK_.call(null,map__16362))?cljs.core.apply.call(null,cljs.core.hash_map,map__16362):map__16362);
var file_msg = map__16362__$1;
var namespace = cljs.core.get.call(null,map__16362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__16362__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__6706__auto___16449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___16449,out){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___16449,out){
return (function (state_16431){
var state_val_16432 = (state_16431[(1)]);
if((state_val_16432 === (7))){
var inst_16415 = (state_16431[(7)]);
var inst_16421 = (state_16431[(2)]);
var inst_16422 = cljs.core.async.put_BANG_.call(null,out,inst_16421);
var inst_16411 = inst_16415;
var state_16431__$1 = (function (){var statearr_16433 = state_16431;
(statearr_16433[(8)] = inst_16422);

(statearr_16433[(9)] = inst_16411);

return statearr_16433;
})();
var statearr_16434_16450 = state_16431__$1;
(statearr_16434_16450[(2)] = null);

(statearr_16434_16450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (6))){
var inst_16427 = (state_16431[(2)]);
var state_16431__$1 = state_16431;
var statearr_16435_16451 = state_16431__$1;
(statearr_16435_16451[(2)] = inst_16427);

(statearr_16435_16451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (5))){
var inst_16425 = cljs.core.async.close_BANG_.call(null,out);
var state_16431__$1 = state_16431;
var statearr_16436_16452 = state_16431__$1;
(statearr_16436_16452[(2)] = inst_16425);

(statearr_16436_16452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (4))){
var inst_16414 = (state_16431[(10)]);
var inst_16419 = figwheel.client.file_reloading.reload_js_file.call(null,inst_16414);
var state_16431__$1 = state_16431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16431__$1,(7),inst_16419);
} else {
if((state_val_16432 === (3))){
var inst_16429 = (state_16431[(2)]);
var state_16431__$1 = state_16431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16431__$1,inst_16429);
} else {
if((state_val_16432 === (2))){
var inst_16414 = (state_16431[(10)]);
var inst_16411 = (state_16431[(9)]);
var inst_16414__$1 = cljs.core.nth.call(null,inst_16411,(0),null);
var inst_16415 = cljs.core.nthnext.call(null,inst_16411,(1));
var inst_16416 = (inst_16414__$1 == null);
var inst_16417 = cljs.core.not.call(null,inst_16416);
var state_16431__$1 = (function (){var statearr_16437 = state_16431;
(statearr_16437[(7)] = inst_16415);

(statearr_16437[(10)] = inst_16414__$1);

return statearr_16437;
})();
if(inst_16417){
var statearr_16438_16453 = state_16431__$1;
(statearr_16438_16453[(1)] = (4));

} else {
var statearr_16439_16454 = state_16431__$1;
(statearr_16439_16454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16432 === (1))){
var inst_16409 = cljs.core.nth.call(null,files,(0),null);
var inst_16410 = cljs.core.nthnext.call(null,files,(1));
var inst_16411 = files;
var state_16431__$1 = (function (){var statearr_16440 = state_16431;
(statearr_16440[(11)] = inst_16409);

(statearr_16440[(9)] = inst_16411);

(statearr_16440[(12)] = inst_16410);

return statearr_16440;
})();
var statearr_16441_16455 = state_16431__$1;
(statearr_16441_16455[(2)] = null);

(statearr_16441_16455[(1)] = (2));


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
});})(c__6706__auto___16449,out))
;
return ((function (switch__6644__auto__,c__6706__auto___16449,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto____0 = (function (){
var statearr_16445 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16445[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto__);

(statearr_16445[(1)] = (1));

return statearr_16445;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto____1 = (function (state_16431){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_16431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e16446){if((e16446 instanceof Object)){
var ex__6648__auto__ = e16446;
var statearr_16447_16456 = state_16431;
(statearr_16447_16456[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16457 = state_16431;
state_16431 = G__16457;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto__ = function(state_16431){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto____1.call(this,state_16431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___16449,out))
})();
var state__6708__auto__ = (function (){var statearr_16448 = f__6707__auto__.call(null);
(statearr_16448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___16449);

return statearr_16448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___16449,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__16458,p__16459){
var map__16462 = p__16458;
var map__16462__$1 = ((cljs.core.seq_QMARK_.call(null,map__16462))?cljs.core.apply.call(null,cljs.core.hash_map,map__16462):map__16462);
var opts = map__16462__$1;
var url_rewriter = cljs.core.get.call(null,map__16462__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__16463 = p__16459;
var map__16463__$1 = ((cljs.core.seq_QMARK_.call(null,map__16463))?cljs.core.apply.call(null,cljs.core.hash_map,map__16463):map__16463);
var file_msg = map__16463__$1;
var file = cljs.core.get.call(null,map__16463__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__16464){
var map__16467 = p__16464;
var map__16467__$1 = ((cljs.core.seq_QMARK_.call(null,map__16467))?cljs.core.apply.call(null,cljs.core.hash_map,map__16467):map__16467);
var file = cljs.core.get.call(null,map__16467__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__16467__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__4208__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4208__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4208__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e16468){var e = e16468;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__16473,p__16474){
var map__16675 = p__16473;
var map__16675__$1 = ((cljs.core.seq_QMARK_.call(null,map__16675))?cljs.core.apply.call(null,cljs.core.hash_map,map__16675):map__16675);
var opts = map__16675__$1;
var load_unchanged_files = cljs.core.get.call(null,map__16675__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__16675__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__16675__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__16676 = p__16474;
var map__16676__$1 = ((cljs.core.seq_QMARK_.call(null,map__16676))?cljs.core.apply.call(null,cljs.core.hash_map,map__16676):map__16676);
var msg = map__16676__$1;
var files = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files){
return (function (state_16800){
var state_val_16801 = (state_16800[(1)]);
if((state_val_16801 === (7))){
var inst_16688 = (state_16800[(7)]);
var inst_16687 = (state_16800[(8)]);
var inst_16690 = (state_16800[(9)]);
var inst_16689 = (state_16800[(10)]);
var inst_16695 = cljs.core._nth.call(null,inst_16688,inst_16690);
var inst_16696 = figwheel.client.file_reloading.eval_body.call(null,inst_16695);
var inst_16697 = (inst_16690 + (1));
var tmp16802 = inst_16688;
var tmp16803 = inst_16687;
var tmp16804 = inst_16689;
var inst_16687__$1 = tmp16803;
var inst_16688__$1 = tmp16802;
var inst_16689__$1 = tmp16804;
var inst_16690__$1 = inst_16697;
var state_16800__$1 = (function (){var statearr_16805 = state_16800;
(statearr_16805[(7)] = inst_16688__$1);

(statearr_16805[(8)] = inst_16687__$1);

(statearr_16805[(11)] = inst_16696);

(statearr_16805[(9)] = inst_16690__$1);

(statearr_16805[(10)] = inst_16689__$1);

return statearr_16805;
})();
var statearr_16806_16875 = state_16800__$1;
(statearr_16806_16875[(2)] = null);

(statearr_16806_16875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (20))){
var inst_16733 = (state_16800[(12)]);
var inst_16737 = (state_16800[(13)]);
var inst_16736 = (state_16800[(14)]);
var inst_16739 = (state_16800[(15)]);
var inst_16732 = (state_16800[(16)]);
var inst_16742 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_16744 = (function (){var files_not_loaded = inst_16739;
var res = inst_16737;
var res_SINGLEQUOTE_ = inst_16736;
var files_SINGLEQUOTE_ = inst_16733;
var all_files = inst_16732;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_16733,inst_16737,inst_16736,inst_16739,inst_16732,inst_16742,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files){
return (function (p__16743){
var map__16807 = p__16743;
var map__16807__$1 = ((cljs.core.seq_QMARK_.call(null,map__16807))?cljs.core.apply.call(null,cljs.core.hash_map,map__16807):map__16807);
var file = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__16807__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_16733,inst_16737,inst_16736,inst_16739,inst_16732,inst_16742,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files))
})();
var inst_16745 = cljs.core.map.call(null,inst_16744,inst_16737);
var inst_16746 = cljs.core.pr_str.call(null,inst_16745);
var inst_16747 = figwheel.client.utils.log.call(null,inst_16746);
var inst_16748 = (function (){var files_not_loaded = inst_16739;
var res = inst_16737;
var res_SINGLEQUOTE_ = inst_16736;
var files_SINGLEQUOTE_ = inst_16733;
var all_files = inst_16732;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_16733,inst_16737,inst_16736,inst_16739,inst_16732,inst_16742,inst_16744,inst_16745,inst_16746,inst_16747,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_16733,inst_16737,inst_16736,inst_16739,inst_16732,inst_16742,inst_16744,inst_16745,inst_16746,inst_16747,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files))
})();
var inst_16749 = setTimeout(inst_16748,(10));
var state_16800__$1 = (function (){var statearr_16808 = state_16800;
(statearr_16808[(17)] = inst_16747);

(statearr_16808[(18)] = inst_16742);

return statearr_16808;
})();
var statearr_16809_16876 = state_16800__$1;
(statearr_16809_16876[(2)] = inst_16749);

(statearr_16809_16876[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (27))){
var inst_16759 = (state_16800[(19)]);
var state_16800__$1 = state_16800;
var statearr_16810_16877 = state_16800__$1;
(statearr_16810_16877[(2)] = inst_16759);

(statearr_16810_16877[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (1))){
var inst_16679 = (state_16800[(20)]);
var inst_16677 = before_jsload.call(null,files);
var inst_16678 = (function (){return ((function (inst_16679,inst_16677,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files){
return (function (p1__16469_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__16469_SHARP_);
});
;})(inst_16679,inst_16677,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files))
})();
var inst_16679__$1 = cljs.core.filter.call(null,inst_16678,files);
var inst_16680 = cljs.core.not_empty.call(null,inst_16679__$1);
var state_16800__$1 = (function (){var statearr_16811 = state_16800;
(statearr_16811[(20)] = inst_16679__$1);

(statearr_16811[(21)] = inst_16677);

return statearr_16811;
})();
if(cljs.core.truth_(inst_16680)){
var statearr_16812_16878 = state_16800__$1;
(statearr_16812_16878[(1)] = (2));

} else {
var statearr_16813_16879 = state_16800__$1;
(statearr_16813_16879[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (24))){
var state_16800__$1 = state_16800;
var statearr_16814_16880 = state_16800__$1;
(statearr_16814_16880[(2)] = null);

(statearr_16814_16880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (4))){
var inst_16724 = (state_16800[(2)]);
var inst_16725 = (function (){return ((function (inst_16724,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files){
return (function (p1__16470_SHARP_){
var and__4208__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__16470_SHARP_);
if(cljs.core.truth_(and__4208__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__16470_SHARP_));
} else {
return and__4208__auto__;
}
});
;})(inst_16724,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files))
})();
var inst_16726 = cljs.core.filter.call(null,inst_16725,files);
var state_16800__$1 = (function (){var statearr_16815 = state_16800;
(statearr_16815[(22)] = inst_16724);

(statearr_16815[(23)] = inst_16726);

return statearr_16815;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_16816_16881 = state_16800__$1;
(statearr_16816_16881[(1)] = (16));

} else {
var statearr_16817_16882 = state_16800__$1;
(statearr_16817_16882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (15))){
var inst_16714 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16818_16883 = state_16800__$1;
(statearr_16818_16883[(2)] = inst_16714);

(statearr_16818_16883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (21))){
var state_16800__$1 = state_16800;
var statearr_16819_16884 = state_16800__$1;
(statearr_16819_16884[(2)] = null);

(statearr_16819_16884[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (31))){
var inst_16767 = (state_16800[(24)]);
var inst_16777 = (state_16800[(2)]);
var inst_16778 = cljs.core.not_empty.call(null,inst_16767);
var state_16800__$1 = (function (){var statearr_16820 = state_16800;
(statearr_16820[(25)] = inst_16777);

return statearr_16820;
})();
if(cljs.core.truth_(inst_16778)){
var statearr_16821_16885 = state_16800__$1;
(statearr_16821_16885[(1)] = (32));

} else {
var statearr_16822_16886 = state_16800__$1;
(statearr_16822_16886[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (32))){
var inst_16767 = (state_16800[(24)]);
var inst_16780 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_16767);
var inst_16781 = cljs.core.pr_str.call(null,inst_16780);
var inst_16782 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_16781)].join('');
var inst_16783 = figwheel.client.utils.log.call(null,inst_16782);
var state_16800__$1 = state_16800;
var statearr_16823_16887 = state_16800__$1;
(statearr_16823_16887[(2)] = inst_16783);

(statearr_16823_16887[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (33))){
var state_16800__$1 = state_16800;
var statearr_16824_16888 = state_16800__$1;
(statearr_16824_16888[(2)] = null);

(statearr_16824_16888[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (13))){
var inst_16700 = (state_16800[(26)]);
var inst_16704 = cljs.core.chunk_first.call(null,inst_16700);
var inst_16705 = cljs.core.chunk_rest.call(null,inst_16700);
var inst_16706 = cljs.core.count.call(null,inst_16704);
var inst_16687 = inst_16705;
var inst_16688 = inst_16704;
var inst_16689 = inst_16706;
var inst_16690 = (0);
var state_16800__$1 = (function (){var statearr_16825 = state_16800;
(statearr_16825[(7)] = inst_16688);

(statearr_16825[(8)] = inst_16687);

(statearr_16825[(9)] = inst_16690);

(statearr_16825[(10)] = inst_16689);

return statearr_16825;
})();
var statearr_16826_16889 = state_16800__$1;
(statearr_16826_16889[(2)] = null);

(statearr_16826_16889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (22))){
var inst_16739 = (state_16800[(15)]);
var inst_16752 = (state_16800[(2)]);
var inst_16753 = cljs.core.not_empty.call(null,inst_16739);
var state_16800__$1 = (function (){var statearr_16827 = state_16800;
(statearr_16827[(27)] = inst_16752);

return statearr_16827;
})();
if(cljs.core.truth_(inst_16753)){
var statearr_16828_16890 = state_16800__$1;
(statearr_16828_16890[(1)] = (23));

} else {
var statearr_16829_16891 = state_16800__$1;
(statearr_16829_16891[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (36))){
var state_16800__$1 = state_16800;
var statearr_16830_16892 = state_16800__$1;
(statearr_16830_16892[(2)] = null);

(statearr_16830_16892[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (29))){
var inst_16768 = (state_16800[(28)]);
var inst_16771 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_16768);
var inst_16772 = cljs.core.pr_str.call(null,inst_16771);
var inst_16773 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_16772)].join('');
var inst_16774 = figwheel.client.utils.log.call(null,inst_16773);
var state_16800__$1 = state_16800;
var statearr_16831_16893 = state_16800__$1;
(statearr_16831_16893[(2)] = inst_16774);

(statearr_16831_16893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (6))){
var inst_16721 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16832_16894 = state_16800__$1;
(statearr_16832_16894[(2)] = inst_16721);

(statearr_16832_16894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (28))){
var inst_16768 = (state_16800[(28)]);
var inst_16765 = (state_16800[(2)]);
var inst_16766 = cljs.core.get.call(null,inst_16765,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_16767 = cljs.core.get.call(null,inst_16765,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_16768__$1 = cljs.core.get.call(null,inst_16765,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_16769 = cljs.core.not_empty.call(null,inst_16768__$1);
var state_16800__$1 = (function (){var statearr_16833 = state_16800;
(statearr_16833[(24)] = inst_16767);

(statearr_16833[(29)] = inst_16766);

(statearr_16833[(28)] = inst_16768__$1);

return statearr_16833;
})();
if(cljs.core.truth_(inst_16769)){
var statearr_16834_16895 = state_16800__$1;
(statearr_16834_16895[(1)] = (29));

} else {
var statearr_16835_16896 = state_16800__$1;
(statearr_16835_16896[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (25))){
var inst_16798 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16800__$1,inst_16798);
} else {
if((state_val_16801 === (34))){
var inst_16766 = (state_16800[(29)]);
var inst_16786 = (state_16800[(2)]);
var inst_16787 = cljs.core.not_empty.call(null,inst_16766);
var state_16800__$1 = (function (){var statearr_16836 = state_16800;
(statearr_16836[(30)] = inst_16786);

return statearr_16836;
})();
if(cljs.core.truth_(inst_16787)){
var statearr_16837_16897 = state_16800__$1;
(statearr_16837_16897[(1)] = (35));

} else {
var statearr_16838_16898 = state_16800__$1;
(statearr_16838_16898[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (17))){
var inst_16726 = (state_16800[(23)]);
var state_16800__$1 = state_16800;
var statearr_16839_16899 = state_16800__$1;
(statearr_16839_16899[(2)] = inst_16726);

(statearr_16839_16899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (3))){
var state_16800__$1 = state_16800;
var statearr_16840_16900 = state_16800__$1;
(statearr_16840_16900[(2)] = null);

(statearr_16840_16900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (12))){
var inst_16717 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16841_16901 = state_16800__$1;
(statearr_16841_16901[(2)] = inst_16717);

(statearr_16841_16901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (2))){
var inst_16679 = (state_16800[(20)]);
var inst_16686 = cljs.core.seq.call(null,inst_16679);
var inst_16687 = inst_16686;
var inst_16688 = null;
var inst_16689 = (0);
var inst_16690 = (0);
var state_16800__$1 = (function (){var statearr_16842 = state_16800;
(statearr_16842[(7)] = inst_16688);

(statearr_16842[(8)] = inst_16687);

(statearr_16842[(9)] = inst_16690);

(statearr_16842[(10)] = inst_16689);

return statearr_16842;
})();
var statearr_16843_16902 = state_16800__$1;
(statearr_16843_16902[(2)] = null);

(statearr_16843_16902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (23))){
var inst_16733 = (state_16800[(12)]);
var inst_16737 = (state_16800[(13)]);
var inst_16759 = (state_16800[(19)]);
var inst_16736 = (state_16800[(14)]);
var inst_16739 = (state_16800[(15)]);
var inst_16732 = (state_16800[(16)]);
var inst_16755 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_16758 = (function (){var files_not_loaded = inst_16739;
var res = inst_16737;
var res_SINGLEQUOTE_ = inst_16736;
var files_SINGLEQUOTE_ = inst_16733;
var all_files = inst_16732;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_16733,inst_16737,inst_16759,inst_16736,inst_16739,inst_16732,inst_16755,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files){
return (function (p__16757){
var map__16844 = p__16757;
var map__16844__$1 = ((cljs.core.seq_QMARK_.call(null,map__16844))?cljs.core.apply.call(null,cljs.core.hash_map,map__16844):map__16844);
var meta_data = cljs.core.get.call(null,map__16844__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_16733,inst_16737,inst_16759,inst_16736,inst_16739,inst_16732,inst_16755,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files))
})();
var inst_16759__$1 = cljs.core.group_by.call(null,inst_16758,inst_16739);
var inst_16760 = cljs.core.seq_QMARK_.call(null,inst_16759__$1);
var state_16800__$1 = (function (){var statearr_16845 = state_16800;
(statearr_16845[(19)] = inst_16759__$1);

(statearr_16845[(31)] = inst_16755);

return statearr_16845;
})();
if(inst_16760){
var statearr_16846_16903 = state_16800__$1;
(statearr_16846_16903[(1)] = (26));

} else {
var statearr_16847_16904 = state_16800__$1;
(statearr_16847_16904[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (35))){
var inst_16766 = (state_16800[(29)]);
var inst_16789 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_16766);
var inst_16790 = cljs.core.pr_str.call(null,inst_16789);
var inst_16791 = [cljs.core.str("not required: "),cljs.core.str(inst_16790)].join('');
var inst_16792 = figwheel.client.utils.log.call(null,inst_16791);
var state_16800__$1 = state_16800;
var statearr_16848_16905 = state_16800__$1;
(statearr_16848_16905[(2)] = inst_16792);

(statearr_16848_16905[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (19))){
var inst_16733 = (state_16800[(12)]);
var inst_16737 = (state_16800[(13)]);
var inst_16736 = (state_16800[(14)]);
var inst_16732 = (state_16800[(16)]);
var inst_16736__$1 = (state_16800[(2)]);
var inst_16737__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_16736__$1);
var inst_16738 = (function (){var res = inst_16737__$1;
var res_SINGLEQUOTE_ = inst_16736__$1;
var files_SINGLEQUOTE_ = inst_16733;
var all_files = inst_16732;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_16733,inst_16737,inst_16736,inst_16732,inst_16736__$1,inst_16737__$1,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files){
return (function (p1__16472_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__16472_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_16733,inst_16737,inst_16736,inst_16732,inst_16736__$1,inst_16737__$1,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files))
})();
var inst_16739 = cljs.core.filter.call(null,inst_16738,inst_16736__$1);
var inst_16740 = cljs.core.not_empty.call(null,inst_16737__$1);
var state_16800__$1 = (function (){var statearr_16849 = state_16800;
(statearr_16849[(13)] = inst_16737__$1);

(statearr_16849[(14)] = inst_16736__$1);

(statearr_16849[(15)] = inst_16739);

return statearr_16849;
})();
if(cljs.core.truth_(inst_16740)){
var statearr_16850_16906 = state_16800__$1;
(statearr_16850_16906[(1)] = (20));

} else {
var statearr_16851_16907 = state_16800__$1;
(statearr_16851_16907[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (11))){
var state_16800__$1 = state_16800;
var statearr_16852_16908 = state_16800__$1;
(statearr_16852_16908[(2)] = null);

(statearr_16852_16908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (9))){
var inst_16719 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16853_16909 = state_16800__$1;
(statearr_16853_16909[(2)] = inst_16719);

(statearr_16853_16909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (5))){
var inst_16690 = (state_16800[(9)]);
var inst_16689 = (state_16800[(10)]);
var inst_16692 = (inst_16690 < inst_16689);
var inst_16693 = inst_16692;
var state_16800__$1 = state_16800;
if(cljs.core.truth_(inst_16693)){
var statearr_16854_16910 = state_16800__$1;
(statearr_16854_16910[(1)] = (7));

} else {
var statearr_16855_16911 = state_16800__$1;
(statearr_16855_16911[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (14))){
var inst_16700 = (state_16800[(26)]);
var inst_16709 = cljs.core.first.call(null,inst_16700);
var inst_16710 = figwheel.client.file_reloading.eval_body.call(null,inst_16709);
var inst_16711 = cljs.core.next.call(null,inst_16700);
var inst_16687 = inst_16711;
var inst_16688 = null;
var inst_16689 = (0);
var inst_16690 = (0);
var state_16800__$1 = (function (){var statearr_16856 = state_16800;
(statearr_16856[(7)] = inst_16688);

(statearr_16856[(8)] = inst_16687);

(statearr_16856[(9)] = inst_16690);

(statearr_16856[(32)] = inst_16710);

(statearr_16856[(10)] = inst_16689);

return statearr_16856;
})();
var statearr_16857_16912 = state_16800__$1;
(statearr_16857_16912[(2)] = null);

(statearr_16857_16912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (26))){
var inst_16759 = (state_16800[(19)]);
var inst_16762 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16759);
var state_16800__$1 = state_16800;
var statearr_16858_16913 = state_16800__$1;
(statearr_16858_16913[(2)] = inst_16762);

(statearr_16858_16913[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (16))){
var inst_16726 = (state_16800[(23)]);
var inst_16728 = (function (){var all_files = inst_16726;
return ((function (all_files,inst_16726,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files){
return (function (p1__16471_SHARP_){
return cljs.core.update_in.call(null,p1__16471_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_16726,state_val_16801,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files))
})();
var inst_16729 = cljs.core.map.call(null,inst_16728,inst_16726);
var state_16800__$1 = state_16800;
var statearr_16859_16914 = state_16800__$1;
(statearr_16859_16914[(2)] = inst_16729);

(statearr_16859_16914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (30))){
var state_16800__$1 = state_16800;
var statearr_16860_16915 = state_16800__$1;
(statearr_16860_16915[(2)] = null);

(statearr_16860_16915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (10))){
var inst_16700 = (state_16800[(26)]);
var inst_16702 = cljs.core.chunked_seq_QMARK_.call(null,inst_16700);
var state_16800__$1 = state_16800;
if(inst_16702){
var statearr_16861_16916 = state_16800__$1;
(statearr_16861_16916[(1)] = (13));

} else {
var statearr_16862_16917 = state_16800__$1;
(statearr_16862_16917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (18))){
var inst_16733 = (state_16800[(12)]);
var inst_16732 = (state_16800[(16)]);
var inst_16732__$1 = (state_16800[(2)]);
var inst_16733__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_16732__$1);
var inst_16734 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_16733__$1);
var state_16800__$1 = (function (){var statearr_16863 = state_16800;
(statearr_16863[(12)] = inst_16733__$1);

(statearr_16863[(16)] = inst_16732__$1);

return statearr_16863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16800__$1,(19),inst_16734);
} else {
if((state_val_16801 === (37))){
var inst_16795 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16864_16918 = state_16800__$1;
(statearr_16864_16918[(2)] = inst_16795);

(statearr_16864_16918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16801 === (8))){
var inst_16687 = (state_16800[(8)]);
var inst_16700 = (state_16800[(26)]);
var inst_16700__$1 = cljs.core.seq.call(null,inst_16687);
var state_16800__$1 = (function (){var statearr_16865 = state_16800;
(statearr_16865[(26)] = inst_16700__$1);

return statearr_16865;
})();
if(inst_16700__$1){
var statearr_16866_16919 = state_16800__$1;
(statearr_16866_16919[(1)] = (10));

} else {
var statearr_16867_16920 = state_16800__$1;
(statearr_16867_16920[(1)] = (11));

}

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
}
}
}
});})(c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files))
;
return ((function (switch__6644__auto__,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto____0 = (function (){
var statearr_16871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16871[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto__);

(statearr_16871[(1)] = (1));

return statearr_16871;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto____1 = (function (state_16800){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_16800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e16872){if((e16872 instanceof Object)){
var ex__6648__auto__ = e16872;
var statearr_16873_16921 = state_16800;
(statearr_16873_16921[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16922 = state_16800;
state_16800 = G__16922;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto__ = function(state_16800){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto____1.call(this,state_16800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files))
})();
var state__6708__auto__ = (function (){var statearr_16874 = f__6707__auto__.call(null);
(statearr_16874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_16874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__,map__16675,map__16675__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__16676,map__16676__$1,msg,files))
);

return c__6706__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__16925,link){
var map__16927 = p__16925;
var map__16927__$1 = ((cljs.core.seq_QMARK_.call(null,map__16927))?cljs.core.apply.call(null,cljs.core.hash_map,map__16927):map__16927);
var file = cljs.core.get.call(null,map__16927__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__16927,map__16927__$1,file){
return (function (p1__16923_SHARP_,p2__16924_SHARP_){
if(cljs.core._EQ_.call(null,p1__16923_SHARP_,p2__16924_SHARP_)){
return p1__16923_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__16927,map__16927__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__16931){
var map__16932 = p__16931;
var map__16932__$1 = ((cljs.core.seq_QMARK_.call(null,map__16932))?cljs.core.apply.call(null,cljs.core.hash_map,map__16932):map__16932);
var current_url_length = cljs.core.get.call(null,map__16932__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__16932__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__16928_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__16928_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__16934 = arguments.length;
switch (G__16934) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__16936){
var map__16938 = p__16936;
var map__16938__$1 = ((cljs.core.seq_QMARK_.call(null,map__16938))?cljs.core.apply.call(null,cljs.core.hash_map,map__16938):map__16938);
var f_data = map__16938__$1;
var request_url = cljs.core.get.call(null,map__16938__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__16938__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4220__auto__ = request_url;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__16939,files_msg){
var map__16961 = p__16939;
var map__16961__$1 = ((cljs.core.seq_QMARK_.call(null,map__16961))?cljs.core.apply.call(null,cljs.core.hash_map,map__16961):map__16961);
var opts = map__16961__$1;
var on_cssload = cljs.core.get.call(null,map__16961__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__16962_16982 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__16963_16983 = null;
var count__16964_16984 = (0);
var i__16965_16985 = (0);
while(true){
if((i__16965_16985 < count__16964_16984)){
var f_16986 = cljs.core._nth.call(null,chunk__16963_16983,i__16965_16985);
figwheel.client.file_reloading.reload_css_file.call(null,f_16986);

var G__16987 = seq__16962_16982;
var G__16988 = chunk__16963_16983;
var G__16989 = count__16964_16984;
var G__16990 = (i__16965_16985 + (1));
seq__16962_16982 = G__16987;
chunk__16963_16983 = G__16988;
count__16964_16984 = G__16989;
i__16965_16985 = G__16990;
continue;
} else {
var temp__4126__auto___16991 = cljs.core.seq.call(null,seq__16962_16982);
if(temp__4126__auto___16991){
var seq__16962_16992__$1 = temp__4126__auto___16991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16962_16992__$1)){
var c__5005__auto___16993 = cljs.core.chunk_first.call(null,seq__16962_16992__$1);
var G__16994 = cljs.core.chunk_rest.call(null,seq__16962_16992__$1);
var G__16995 = c__5005__auto___16993;
var G__16996 = cljs.core.count.call(null,c__5005__auto___16993);
var G__16997 = (0);
seq__16962_16982 = G__16994;
chunk__16963_16983 = G__16995;
count__16964_16984 = G__16996;
i__16965_16985 = G__16997;
continue;
} else {
var f_16998 = cljs.core.first.call(null,seq__16962_16992__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_16998);

var G__16999 = cljs.core.next.call(null,seq__16962_16992__$1);
var G__17000 = null;
var G__17001 = (0);
var G__17002 = (0);
seq__16962_16982 = G__16999;
chunk__16963_16983 = G__17000;
count__16964_16984 = G__17001;
i__16965_16985 = G__17002;
continue;
}
} else {
}
}
break;
}

var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__,map__16961,map__16961__$1,opts,on_cssload){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__,map__16961,map__16961__$1,opts,on_cssload){
return (function (state_16972){
var state_val_16973 = (state_16972[(1)]);
if((state_val_16973 === (2))){
var inst_16968 = (state_16972[(2)]);
var inst_16969 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_16970 = on_cssload.call(null,inst_16969);
var state_16972__$1 = (function (){var statearr_16974 = state_16972;
(statearr_16974[(7)] = inst_16968);

return statearr_16974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16972__$1,inst_16970);
} else {
if((state_val_16973 === (1))){
var inst_16966 = cljs.core.async.timeout.call(null,(100));
var state_16972__$1 = state_16972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16972__$1,(2),inst_16966);
} else {
return null;
}
}
});})(c__6706__auto__,map__16961,map__16961__$1,opts,on_cssload))
;
return ((function (switch__6644__auto__,c__6706__auto__,map__16961,map__16961__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto____0 = (function (){
var statearr_16978 = [null,null,null,null,null,null,null,null];
(statearr_16978[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto__);

(statearr_16978[(1)] = (1));

return statearr_16978;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto____1 = (function (state_16972){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_16972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e16979){if((e16979 instanceof Object)){
var ex__6648__auto__ = e16979;
var statearr_16980_17003 = state_16972;
(statearr_16980_17003[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17004 = state_16972;
state_16972 = G__17004;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto__ = function(state_16972){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto____1.call(this,state_16972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__,map__16961,map__16961__$1,opts,on_cssload))
})();
var state__6708__auto__ = (function (){var statearr_16981 = f__6707__auto__.call(null);
(statearr_16981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_16981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__,map__16961,map__16961__$1,opts,on_cssload))
);

return c__6706__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map