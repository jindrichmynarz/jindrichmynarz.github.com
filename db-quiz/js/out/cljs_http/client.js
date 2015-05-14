// Compiled by ClojureScript 0.0-3196 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4208__auto__ = v;
if(cljs.core.truth_(and__4208__auto__)){
return (v > (0));
} else {
return and__4208__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__12264_SHARP_,p2__12263_SHARP_){
var vec__12266 = clojure.string.split.call(null,p2__12263_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__12266,(0),null);
var v = cljs.core.nth.call(null,vec__12266,(1),null);
return cljs.core.assoc.call(null,p1__12264_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__12267_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__12267_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__12268){
var vec__12270 = p__12268;
var k = cljs.core.nth.call(null,vec__12270,(0),null);
var v = cljs.core.nth.call(null,vec__12270,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__12271_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__12271_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__4208__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__4208__auto__){
var and__4208__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__4208__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__4208__auto____$1;
}
} else {
return and__4208__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 * Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__12272_SHARP_){
return cljs_http.client.decode_body.call(null,p1__12272_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12275){
var vec__12276 = p__12275;
var default_headers = cljs.core.nth.call(null,vec__12276,(0),null);
return ((function (vec__12276,default_headers){
return (function (request){
var temp__4124__auto__ = (function (){var or__4220__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var default_headers__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__12276,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq12273){
var G__12274 = cljs.core.first.call(null,seq12273);
var seq12273__$1 = cljs.core.next.call(null,seq12273);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__12274,seq12273__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12279){
var vec__12280 = p__12279;
var accept = cljs.core.nth.call(null,vec__12280,(0),null);
return ((function (vec__12280,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__4220__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__12280,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq12277){
var G__12278 = cljs.core.first.call(null,seq12277);
var seq12277__$1 = cljs.core.next.call(null,seq12277);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__12278,seq12277__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12283){
var vec__12284 = p__12283;
var content_type = cljs.core.nth.call(null,vec__12284,(0),null);
return ((function (vec__12284,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__4220__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__12284,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq12281){
var G__12282 = cljs.core.first.call(null,seq12281);
var seq12281__$1 = cljs.core.next.call(null,seq12281);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__12282,seq12281__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 * Content Type header.
 * 
 * A :transit-opts map can be optionally provided with the following keys:
 * 
 * :encoding                #{:json, :json-verbose}
 * :decoding                #{:json, :json-verbose}
 * :encoding/decoding-opts  appropriate map of options to be passed to
 * transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__12286 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__12286__$1 = ((cljs.core.seq_QMARK_.call(null,map__12286))?cljs.core.apply.call(null,cljs.core.hash_map,map__12286):map__12286);
var encoding_opts = cljs.core.get.call(null,map__12286__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var encoding = cljs.core.get.call(null,map__12286__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__12290 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__12290__$1 = ((cljs.core.seq_QMARK_.call(null,map__12290))?cljs.core.apply.call(null,cljs.core.hash_map,map__12290):map__12290);
var decoding_opts = cljs.core.get.call(null,map__12290__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var decoding = cljs.core.get.call(null,map__12290__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var transit_decode = ((function (map__12290,map__12290__$1,decoding_opts,decoding){
return (function (p1__12287_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__12287_SHARP_,decoding,decoding_opts);
});})(map__12290,map__12290__$1,decoding_opts,decoding))
;
return cljs.core.async.map.call(null,((function (map__12290,map__12290__$1,decoding_opts,decoding,transit_decode){
return (function (p1__12288_SHARP_){
return cljs_http.client.decode_body.call(null,p1__12288_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__12290,map__12290__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 * Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__12291_SHARP_){
return cljs_http.client.decode_body.call(null,p1__12291_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__12294){
var map__12295 = p__12294;
var map__12295__$1 = ((cljs.core.seq_QMARK_.call(null,map__12295))?cljs.core.apply.call(null,cljs.core.hash_map,map__12295):map__12295);
var req = map__12295__$1;
var query_params = cljs.core.get.call(null,map__12295__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__12298){
var map__12299 = p__12298;
var map__12299__$1 = ((cljs.core.seq_QMARK_.call(null,map__12299))?cljs.core.apply.call(null,cljs.core.hash_map,map__12299):map__12299);
var request = map__12299__$1;
var request_method = cljs.core.get.call(null,map__12299__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var form_params = cljs.core.get.call(null,map__12299__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
if(cljs.core.truth_((function (){var and__4208__auto__ = form_params;
if(cljs.core.truth_(and__4208__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4208__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__12306_12312 = cljs.core.seq.call(null,params);
var chunk__12307_12313 = null;
var count__12308_12314 = (0);
var i__12309_12315 = (0);
while(true){
if((i__12309_12315 < count__12308_12314)){
var vec__12310_12316 = cljs.core._nth.call(null,chunk__12307_12313,i__12309_12315);
var k_12317 = cljs.core.nth.call(null,vec__12310_12316,(0),null);
var v_12318 = cljs.core.nth.call(null,vec__12310_12316,(1),null);
form_data.append(cljs.core.name.call(null,k_12317),v_12318);

var G__12319 = seq__12306_12312;
var G__12320 = chunk__12307_12313;
var G__12321 = count__12308_12314;
var G__12322 = (i__12309_12315 + (1));
seq__12306_12312 = G__12319;
chunk__12307_12313 = G__12320;
count__12308_12314 = G__12321;
i__12309_12315 = G__12322;
continue;
} else {
var temp__4126__auto___12323 = cljs.core.seq.call(null,seq__12306_12312);
if(temp__4126__auto___12323){
var seq__12306_12324__$1 = temp__4126__auto___12323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12306_12324__$1)){
var c__5005__auto___12325 = cljs.core.chunk_first.call(null,seq__12306_12324__$1);
var G__12326 = cljs.core.chunk_rest.call(null,seq__12306_12324__$1);
var G__12327 = c__5005__auto___12325;
var G__12328 = cljs.core.count.call(null,c__5005__auto___12325);
var G__12329 = (0);
seq__12306_12312 = G__12326;
chunk__12307_12313 = G__12327;
count__12308_12314 = G__12328;
i__12309_12315 = G__12329;
continue;
} else {
var vec__12311_12330 = cljs.core.first.call(null,seq__12306_12324__$1);
var k_12331 = cljs.core.nth.call(null,vec__12311_12330,(0),null);
var v_12332 = cljs.core.nth.call(null,vec__12311_12330,(1),null);
form_data.append(cljs.core.name.call(null,k_12331),v_12332);

var G__12333 = cljs.core.next.call(null,seq__12306_12324__$1);
var G__12334 = null;
var G__12335 = (0);
var G__12336 = (0);
seq__12306_12312 = G__12333;
chunk__12307_12313 = G__12334;
count__12308_12314 = G__12335;
i__12309_12315 = G__12336;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__12339){
var map__12340 = p__12339;
var map__12340__$1 = ((cljs.core.seq_QMARK_.call(null,map__12340))?cljs.core.apply.call(null,cljs.core.hash_map,map__12340):map__12340);
var request = map__12340__$1;
var request_method = cljs.core.get.call(null,map__12340__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var multipart_params = cljs.core.get.call(null,map__12340__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
if(cljs.core.truth_((function (){var and__4208__auto__ = multipart_params;
if(cljs.core.truth_(and__4208__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4208__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__12341_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__12341_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__12345){
var map__12346 = p__12345;
var map__12346__$1 = ((cljs.core.seq_QMARK_.call(null,map__12346))?cljs.core.apply.call(null,cljs.core.hash_map,map__12346):map__12346);
var req = map__12346__$1;
var query_params = cljs.core.get.call(null,map__12346__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__12346,map__12346__$1,req,query_params){
return (function (p1__12342_SHARP_){
return cljs.core.merge.call(null,p1__12342_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__12346,map__12346__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 * an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12349){
var vec__12350 = p__12349;
var credentials = cljs.core.nth.call(null,vec__12350,(0),null);
return ((function (vec__12350,credentials){
return (function (req){
var credentials__$1 = (function (){var or__4220__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__12350,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq12347){
var G__12348 = cljs.core.first.call(null,seq12347);
var seq12347__$1 = cljs.core.next.call(null,seq12347);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__12348,seq12347__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12353){
var vec__12354 = p__12353;
var req = cljs.core.nth.call(null,vec__12354,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq12351){
var G__12352 = cljs.core.first.call(null,seq12351);
var seq12351__$1 = cljs.core.next.call(null,seq12351);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__12352,seq12351__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12357){
var vec__12358 = p__12357;
var req = cljs.core.nth.call(null,vec__12358,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq12355){
var G__12356 = cljs.core.first.call(null,seq12355);
var seq12355__$1 = cljs.core.next.call(null,seq12355);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__12356,seq12355__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12361){
var vec__12362 = p__12361;
var req = cljs.core.nth.call(null,vec__12362,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq12359){
var G__12360 = cljs.core.first.call(null,seq12359);
var seq12359__$1 = cljs.core.next.call(null,seq12359);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__12360,seq12359__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12365){
var vec__12366 = p__12365;
var req = cljs.core.nth.call(null,vec__12366,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq12363){
var G__12364 = cljs.core.first.call(null,seq12363);
var seq12363__$1 = cljs.core.next.call(null,seq12363);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__12364,seq12363__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12369){
var vec__12370 = p__12369;
var req = cljs.core.nth.call(null,vec__12370,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq12367){
var G__12368 = cljs.core.first.call(null,seq12367);
var seq12367__$1 = cljs.core.next.call(null,seq12367);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__12368,seq12367__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12373){
var vec__12374 = p__12373;
var req = cljs.core.nth.call(null,vec__12374,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq12371){
var G__12372 = cljs.core.first.call(null,seq12371);
var seq12371__$1 = cljs.core.next.call(null,seq12371);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__12372,seq12371__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12377){
var vec__12378 = p__12377;
var req = cljs.core.nth.call(null,vec__12378,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq12375){
var G__12376 = cljs.core.first.call(null,seq12375);
var seq12375__$1 = cljs.core.next.call(null,seq12375);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__12376,seq12375__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12381){
var vec__12382 = p__12381;
var req = cljs.core.nth.call(null,vec__12382,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq12379){
var G__12380 = cljs.core.first.call(null,seq12379);
var seq12379__$1 = cljs.core.next.call(null,seq12379);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__12380,seq12379__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12385){
var vec__12386 = p__12385;
var req = cljs.core.nth.call(null,vec__12386,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq12383){
var G__12384 = cljs.core.first.call(null,seq12383);
var seq12383__$1 = cljs.core.next.call(null,seq12383);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__12384,seq12383__$1);
});

//# sourceMappingURL=client.js.map