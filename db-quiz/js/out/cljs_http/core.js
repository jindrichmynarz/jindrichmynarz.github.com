// Compiled by ClojureScript 0.0-3196 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 * with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4126__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4126__auto__)){
var req = temp__4126__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var seq__12587 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__12592 = null;
var count__12593 = (0);
var i__12594 = (0);
while(true){
if((i__12594 < count__12593)){
var h_name = cljs.core._nth.call(null,chunk__12592,i__12594);
var seq__12595_12599 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__12596_12600 = null;
var count__12597_12601 = (0);
var i__12598_12602 = (0);
while(true){
if((i__12598_12602 < count__12597_12601)){
var h_val_12603 = cljs.core._nth.call(null,chunk__12596_12600,i__12598_12602);
xhr.headers.set(h_name,h_val_12603);

var G__12604 = seq__12595_12599;
var G__12605 = chunk__12596_12600;
var G__12606 = count__12597_12601;
var G__12607 = (i__12598_12602 + (1));
seq__12595_12599 = G__12604;
chunk__12596_12600 = G__12605;
count__12597_12601 = G__12606;
i__12598_12602 = G__12607;
continue;
} else {
var temp__4126__auto___12608 = cljs.core.seq.call(null,seq__12595_12599);
if(temp__4126__auto___12608){
var seq__12595_12609__$1 = temp__4126__auto___12608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12595_12609__$1)){
var c__5005__auto___12610 = cljs.core.chunk_first.call(null,seq__12595_12609__$1);
var G__12611 = cljs.core.chunk_rest.call(null,seq__12595_12609__$1);
var G__12612 = c__5005__auto___12610;
var G__12613 = cljs.core.count.call(null,c__5005__auto___12610);
var G__12614 = (0);
seq__12595_12599 = G__12611;
chunk__12596_12600 = G__12612;
count__12597_12601 = G__12613;
i__12598_12602 = G__12614;
continue;
} else {
var h_val_12615 = cljs.core.first.call(null,seq__12595_12609__$1);
xhr.headers.set(h_name,h_val_12615);

var G__12616 = cljs.core.next.call(null,seq__12595_12609__$1);
var G__12617 = null;
var G__12618 = (0);
var G__12619 = (0);
seq__12595_12599 = G__12616;
chunk__12596_12600 = G__12617;
count__12597_12601 = G__12618;
i__12598_12602 = G__12619;
continue;
}
} else {
}
}
break;
}

var G__12620 = seq__12587;
var G__12621 = chunk__12592;
var G__12622 = count__12593;
var G__12623 = (i__12594 + (1));
seq__12587 = G__12620;
chunk__12592 = G__12621;
count__12593 = G__12622;
i__12594 = G__12623;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12587);
if(temp__4126__auto__){
var seq__12587__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12587__$1)){
var c__5005__auto__ = cljs.core.chunk_first.call(null,seq__12587__$1);
var G__12624 = cljs.core.chunk_rest.call(null,seq__12587__$1);
var G__12625 = c__5005__auto__;
var G__12626 = cljs.core.count.call(null,c__5005__auto__);
var G__12627 = (0);
seq__12587 = G__12624;
chunk__12592 = G__12625;
count__12593 = G__12626;
i__12594 = G__12627;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__12587__$1);
var seq__12588_12628 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__12589_12629 = null;
var count__12590_12630 = (0);
var i__12591_12631 = (0);
while(true){
if((i__12591_12631 < count__12590_12630)){
var h_val_12632 = cljs.core._nth.call(null,chunk__12589_12629,i__12591_12631);
xhr.headers.set(h_name,h_val_12632);

var G__12633 = seq__12588_12628;
var G__12634 = chunk__12589_12629;
var G__12635 = count__12590_12630;
var G__12636 = (i__12591_12631 + (1));
seq__12588_12628 = G__12633;
chunk__12589_12629 = G__12634;
count__12590_12630 = G__12635;
i__12591_12631 = G__12636;
continue;
} else {
var temp__4126__auto___12637__$1 = cljs.core.seq.call(null,seq__12588_12628);
if(temp__4126__auto___12637__$1){
var seq__12588_12638__$1 = temp__4126__auto___12637__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12588_12638__$1)){
var c__5005__auto___12639 = cljs.core.chunk_first.call(null,seq__12588_12638__$1);
var G__12640 = cljs.core.chunk_rest.call(null,seq__12588_12638__$1);
var G__12641 = c__5005__auto___12639;
var G__12642 = cljs.core.count.call(null,c__5005__auto___12639);
var G__12643 = (0);
seq__12588_12628 = G__12640;
chunk__12589_12629 = G__12641;
count__12590_12630 = G__12642;
i__12591_12631 = G__12643;
continue;
} else {
var h_val_12644 = cljs.core.first.call(null,seq__12588_12638__$1);
xhr.headers.set(h_name,h_val_12644);

var G__12645 = cljs.core.next.call(null,seq__12588_12638__$1);
var G__12646 = null;
var G__12647 = (0);
var G__12648 = (0);
seq__12588_12628 = G__12645;
chunk__12589_12629 = G__12646;
count__12590_12630 = G__12647;
i__12591_12631 = G__12648;
continue;
}
} else {
}
}
break;
}

var G__12649 = cljs.core.next.call(null,seq__12587__$1);
var G__12650 = null;
var G__12651 = (0);
var G__12652 = (0);
seq__12587 = G__12649;
chunk__12592 = G__12650;
count__12593 = G__12651;
i__12594 = G__12652;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__12653){
var map__12656 = p__12653;
var map__12656__$1 = ((cljs.core.seq_QMARK_.call(null,map__12656))?cljs.core.apply.call(null,cljs.core.hash_map,map__12656):map__12656);
var request = map__12656__$1;
var default_headers = cljs.core.get.call(null,map__12656__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__12656__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var timeout = (function (){var or__4220__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__12657 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__12657,default_headers);

G__12657.setTimeoutInterval(timeout);

G__12657.setWithCredentials(send_credentials);

return G__12657;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__12658){
var map__12684 = p__12658;
var map__12684__$1 = ((cljs.core.seq_QMARK_.call(null,map__12684))?cljs.core.apply.call(null,cljs.core.hash_map,map__12684):map__12684);
var request = map__12684__$1;
var cancel = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var body = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4220__auto__ = request_method;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__12684,map__12684__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponseText(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__12684,map__12684__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__6706__auto___12709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___12709,channel,request_url,method,headers__$1,xhr__$1,map__12684,map__12684__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___12709,channel,request_url,method,headers__$1,xhr__$1,map__12684,map__12684__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_12695){
var state_val_12696 = (state_12695[(1)]);
if((state_val_12696 === (5))){
var inst_12693 = (state_12695[(2)]);
var state_12695__$1 = state_12695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12695__$1,inst_12693);
} else {
if((state_val_12696 === (4))){
var state_12695__$1 = state_12695;
var statearr_12697_12710 = state_12695__$1;
(statearr_12697_12710[(2)] = null);

(statearr_12697_12710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12696 === (3))){
var inst_12690 = xhr__$1.abort();
var state_12695__$1 = state_12695;
var statearr_12698_12711 = state_12695__$1;
(statearr_12698_12711[(2)] = inst_12690);

(statearr_12698_12711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12696 === (2))){
var inst_12686 = (state_12695[(2)]);
var inst_12687 = xhr__$1.isComplete();
var inst_12688 = cljs.core.not.call(null,inst_12687);
var state_12695__$1 = (function (){var statearr_12699 = state_12695;
(statearr_12699[(7)] = inst_12686);

return statearr_12699;
})();
if(inst_12688){
var statearr_12700_12712 = state_12695__$1;
(statearr_12700_12712[(1)] = (3));

} else {
var statearr_12701_12713 = state_12695__$1;
(statearr_12701_12713[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12696 === (1))){
var state_12695__$1 = state_12695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12695__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__6706__auto___12709,channel,request_url,method,headers__$1,xhr__$1,map__12684,map__12684__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__6644__auto__,c__6706__auto___12709,channel,request_url,method,headers__$1,xhr__$1,map__12684,map__12684__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var cljs_http$core$xhr_$_state_machine__6645__auto__ = null;
var cljs_http$core$xhr_$_state_machine__6645__auto____0 = (function (){
var statearr_12705 = [null,null,null,null,null,null,null,null];
(statearr_12705[(0)] = cljs_http$core$xhr_$_state_machine__6645__auto__);

(statearr_12705[(1)] = (1));

return statearr_12705;
});
var cljs_http$core$xhr_$_state_machine__6645__auto____1 = (function (state_12695){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_12695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e12706){if((e12706 instanceof Object)){
var ex__6648__auto__ = e12706;
var statearr_12707_12714 = state_12695;
(statearr_12707_12714[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12715 = state_12695;
state_12695 = G__12715;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__6645__auto__ = function(state_12695){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__6645__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__6645__auto____1.call(this,state_12695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__6645__auto____0;
cljs_http$core$xhr_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__6645__auto____1;
return cljs_http$core$xhr_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___12709,channel,request_url,method,headers__$1,xhr__$1,map__12684,map__12684__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__6708__auto__ = (function (){var statearr_12708 = f__6707__auto__.call(null);
(statearr_12708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___12709);

return statearr_12708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___12709,channel,request_url,method,headers__$1,xhr__$1,map__12684,map__12684__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__12716){
var map__12732 = p__12716;
var map__12732__$1 = ((cljs.core.seq_QMARK_.call(null,map__12732))?cljs.core.apply.call(null,cljs.core.hash_map,map__12732):map__12732);
var request = map__12732__$1;
var cancel = cljs.core.get.call(null,map__12732__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var callback_name = cljs.core.get.call(null,map__12732__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var timeout = cljs.core.get.call(null,map__12732__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_12747 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__12732,map__12732__$1,request,cancel,callback_name,timeout){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__12732,map__12732__$1,request,cancel,callback_name,timeout))
,((function (channel,jsonp__$1,map__12732,map__12732__$1,request,cancel,callback_name,timeout){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__12732,map__12732__$1,request,cancel,callback_name,timeout))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_12747], null));

if(cljs.core.truth_(cancel)){
var c__6706__auto___12748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___12748,req_12747,channel,jsonp__$1,map__12732,map__12732__$1,request,cancel,callback_name,timeout){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___12748,req_12747,channel,jsonp__$1,map__12732,map__12732__$1,request,cancel,callback_name,timeout){
return (function (state_12737){
var state_val_12738 = (state_12737[(1)]);
if((state_val_12738 === (2))){
var inst_12734 = (state_12737[(2)]);
var inst_12735 = jsonp__$1.cancel(req_12747);
var state_12737__$1 = (function (){var statearr_12739 = state_12737;
(statearr_12739[(7)] = inst_12734);

return statearr_12739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12737__$1,inst_12735);
} else {
if((state_val_12738 === (1))){
var state_12737__$1 = state_12737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12737__$1,(2),cancel);
} else {
return null;
}
}
});})(c__6706__auto___12748,req_12747,channel,jsonp__$1,map__12732,map__12732__$1,request,cancel,callback_name,timeout))
;
return ((function (switch__6644__auto__,c__6706__auto___12748,req_12747,channel,jsonp__$1,map__12732,map__12732__$1,request,cancel,callback_name,timeout){
return (function() {
var cljs_http$core$jsonp_$_state_machine__6645__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__6645__auto____0 = (function (){
var statearr_12743 = [null,null,null,null,null,null,null,null];
(statearr_12743[(0)] = cljs_http$core$jsonp_$_state_machine__6645__auto__);

(statearr_12743[(1)] = (1));

return statearr_12743;
});
var cljs_http$core$jsonp_$_state_machine__6645__auto____1 = (function (state_12737){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_12737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e12744){if((e12744 instanceof Object)){
var ex__6648__auto__ = e12744;
var statearr_12745_12749 = state_12737;
(statearr_12745_12749[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12750 = state_12737;
state_12737 = G__12750;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__6645__auto__ = function(state_12737){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__6645__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__6645__auto____1.call(this,state_12737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__6645__auto____0;
cljs_http$core$jsonp_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__6645__auto____1;
return cljs_http$core$jsonp_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___12748,req_12747,channel,jsonp__$1,map__12732,map__12732__$1,request,cancel,callback_name,timeout))
})();
var state__6708__auto__ = (function (){var statearr_12746 = f__6707__auto__.call(null);
(statearr_12746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___12748);

return statearr_12746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___12748,req_12747,channel,jsonp__$1,map__12732,map__12732__$1,request,cancel,callback_name,timeout))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__12751){
var map__12753 = p__12751;
var map__12753__$1 = ((cljs.core.seq_QMARK_.call(null,map__12753))?cljs.core.apply.call(null,cljs.core.hash_map,map__12753):map__12753);
var request__$1 = map__12753__$1;
var request_method = cljs.core.get.call(null,map__12753__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map