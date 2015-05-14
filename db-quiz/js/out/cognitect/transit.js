// Compiled by ClojureScript 0.0-3196 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__12406_12410 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__12407_12411 = null;
var count__12408_12412 = (0);
var i__12409_12413 = (0);
while(true){
if((i__12409_12413 < count__12408_12412)){
var k_12414 = cljs.core._nth.call(null,chunk__12407_12411,i__12409_12413);
var v_12415 = (b[k_12414]);
(a[k_12414] = v_12415);

var G__12416 = seq__12406_12410;
var G__12417 = chunk__12407_12411;
var G__12418 = count__12408_12412;
var G__12419 = (i__12409_12413 + (1));
seq__12406_12410 = G__12416;
chunk__12407_12411 = G__12417;
count__12408_12412 = G__12418;
i__12409_12413 = G__12419;
continue;
} else {
var temp__4126__auto___12420 = cljs.core.seq.call(null,seq__12406_12410);
if(temp__4126__auto___12420){
var seq__12406_12421__$1 = temp__4126__auto___12420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12406_12421__$1)){
var c__5005__auto___12422 = cljs.core.chunk_first.call(null,seq__12406_12421__$1);
var G__12423 = cljs.core.chunk_rest.call(null,seq__12406_12421__$1);
var G__12424 = c__5005__auto___12422;
var G__12425 = cljs.core.count.call(null,c__5005__auto___12422);
var G__12426 = (0);
seq__12406_12410 = G__12423;
chunk__12407_12411 = G__12424;
count__12408_12412 = G__12425;
i__12409_12413 = G__12426;
continue;
} else {
var k_12427 = cljs.core.first.call(null,seq__12406_12421__$1);
var v_12428 = (b[k_12427]);
(a[k_12427] = v_12428);

var G__12429 = cljs.core.next.call(null,seq__12406_12421__$1);
var G__12430 = null;
var G__12431 = (0);
var G__12432 = (0);
seq__12406_12410 = G__12429;
chunk__12407_12411 = G__12430;
count__12408_12412 = G__12431;
i__12409_12413 = G__12432;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__12434 = arguments.length;
switch (G__12434) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__12436 = (i + (2));
var G__12437 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__12436;
ret = G__12437;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12438_12442 = cljs.core.seq.call(null,v);
var chunk__12439_12443 = null;
var count__12440_12444 = (0);
var i__12441_12445 = (0);
while(true){
if((i__12441_12445 < count__12440_12444)){
var x_12446 = cljs.core._nth.call(null,chunk__12439_12443,i__12441_12445);
ret.push(x_12446);

var G__12447 = seq__12438_12442;
var G__12448 = chunk__12439_12443;
var G__12449 = count__12440_12444;
var G__12450 = (i__12441_12445 + (1));
seq__12438_12442 = G__12447;
chunk__12439_12443 = G__12448;
count__12440_12444 = G__12449;
i__12441_12445 = G__12450;
continue;
} else {
var temp__4126__auto___12451 = cljs.core.seq.call(null,seq__12438_12442);
if(temp__4126__auto___12451){
var seq__12438_12452__$1 = temp__4126__auto___12451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12438_12452__$1)){
var c__5005__auto___12453 = cljs.core.chunk_first.call(null,seq__12438_12452__$1);
var G__12454 = cljs.core.chunk_rest.call(null,seq__12438_12452__$1);
var G__12455 = c__5005__auto___12453;
var G__12456 = cljs.core.count.call(null,c__5005__auto___12453);
var G__12457 = (0);
seq__12438_12442 = G__12454;
chunk__12439_12443 = G__12455;
count__12440_12444 = G__12456;
i__12441_12445 = G__12457;
continue;
} else {
var x_12458 = cljs.core.first.call(null,seq__12438_12452__$1);
ret.push(x_12458);

var G__12459 = cljs.core.next.call(null,seq__12438_12452__$1);
var G__12460 = null;
var G__12461 = (0);
var G__12462 = (0);
seq__12438_12442 = G__12459;
chunk__12439_12443 = G__12460;
count__12440_12444 = G__12461;
i__12441_12445 = G__12462;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12463_12467 = cljs.core.seq.call(null,v);
var chunk__12464_12468 = null;
var count__12465_12469 = (0);
var i__12466_12470 = (0);
while(true){
if((i__12466_12470 < count__12465_12469)){
var x_12471 = cljs.core._nth.call(null,chunk__12464_12468,i__12466_12470);
ret.push(x_12471);

var G__12472 = seq__12463_12467;
var G__12473 = chunk__12464_12468;
var G__12474 = count__12465_12469;
var G__12475 = (i__12466_12470 + (1));
seq__12463_12467 = G__12472;
chunk__12464_12468 = G__12473;
count__12465_12469 = G__12474;
i__12466_12470 = G__12475;
continue;
} else {
var temp__4126__auto___12476 = cljs.core.seq.call(null,seq__12463_12467);
if(temp__4126__auto___12476){
var seq__12463_12477__$1 = temp__4126__auto___12476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12463_12477__$1)){
var c__5005__auto___12478 = cljs.core.chunk_first.call(null,seq__12463_12477__$1);
var G__12479 = cljs.core.chunk_rest.call(null,seq__12463_12477__$1);
var G__12480 = c__5005__auto___12478;
var G__12481 = cljs.core.count.call(null,c__5005__auto___12478);
var G__12482 = (0);
seq__12463_12467 = G__12479;
chunk__12464_12468 = G__12480;
count__12465_12469 = G__12481;
i__12466_12470 = G__12482;
continue;
} else {
var x_12483 = cljs.core.first.call(null,seq__12463_12477__$1);
ret.push(x_12483);

var G__12484 = cljs.core.next.call(null,seq__12463_12477__$1);
var G__12485 = null;
var G__12486 = (0);
var G__12487 = (0);
seq__12463_12467 = G__12484;
chunk__12464_12468 = G__12485;
count__12465_12469 = G__12486;
i__12466_12470 = G__12487;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__12488_12492 = cljs.core.seq.call(null,v);
var chunk__12489_12493 = null;
var count__12490_12494 = (0);
var i__12491_12495 = (0);
while(true){
if((i__12491_12495 < count__12490_12494)){
var x_12496 = cljs.core._nth.call(null,chunk__12489_12493,i__12491_12495);
ret.push(x_12496);

var G__12497 = seq__12488_12492;
var G__12498 = chunk__12489_12493;
var G__12499 = count__12490_12494;
var G__12500 = (i__12491_12495 + (1));
seq__12488_12492 = G__12497;
chunk__12489_12493 = G__12498;
count__12490_12494 = G__12499;
i__12491_12495 = G__12500;
continue;
} else {
var temp__4126__auto___12501 = cljs.core.seq.call(null,seq__12488_12492);
if(temp__4126__auto___12501){
var seq__12488_12502__$1 = temp__4126__auto___12501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12488_12502__$1)){
var c__5005__auto___12503 = cljs.core.chunk_first.call(null,seq__12488_12502__$1);
var G__12504 = cljs.core.chunk_rest.call(null,seq__12488_12502__$1);
var G__12505 = c__5005__auto___12503;
var G__12506 = cljs.core.count.call(null,c__5005__auto___12503);
var G__12507 = (0);
seq__12488_12492 = G__12504;
chunk__12489_12493 = G__12505;
count__12490_12494 = G__12506;
i__12491_12495 = G__12507;
continue;
} else {
var x_12508 = cljs.core.first.call(null,seq__12488_12502__$1);
ret.push(x_12508);

var G__12509 = cljs.core.next.call(null,seq__12488_12502__$1);
var G__12510 = null;
var G__12511 = (0);
var G__12512 = (0);
seq__12488_12492 = G__12509;
chunk__12489_12493 = G__12510;
count__12490_12494 = G__12511;
i__12491_12495 = G__12512;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__12514 = arguments.length;
switch (G__12514) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12516 = cljs.core.clone.call(null,handlers);
x12516.forEach = ((function (x12516,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__12517 = cljs.core.seq.call(null,coll);
var chunk__12518 = null;
var count__12519 = (0);
var i__12520 = (0);
while(true){
if((i__12520 < count__12519)){
var vec__12521 = cljs.core._nth.call(null,chunk__12518,i__12520);
var k = cljs.core.nth.call(null,vec__12521,(0),null);
var v = cljs.core.nth.call(null,vec__12521,(1),null);
f.call(null,v,k);

var G__12524 = seq__12517;
var G__12525 = chunk__12518;
var G__12526 = count__12519;
var G__12527 = (i__12520 + (1));
seq__12517 = G__12524;
chunk__12518 = G__12525;
count__12519 = G__12526;
i__12520 = G__12527;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12517);
if(temp__4126__auto__){
var seq__12517__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12517__$1)){
var c__5005__auto__ = cljs.core.chunk_first.call(null,seq__12517__$1);
var G__12528 = cljs.core.chunk_rest.call(null,seq__12517__$1);
var G__12529 = c__5005__auto__;
var G__12530 = cljs.core.count.call(null,c__5005__auto__);
var G__12531 = (0);
seq__12517 = G__12528;
chunk__12518 = G__12529;
count__12519 = G__12530;
i__12520 = G__12531;
continue;
} else {
var vec__12522 = cljs.core.first.call(null,seq__12517__$1);
var k = cljs.core.nth.call(null,vec__12522,(0),null);
var v = cljs.core.nth.call(null,vec__12522,(1),null);
f.call(null,v,k);

var G__12532 = cljs.core.next.call(null,seq__12517__$1);
var G__12533 = null;
var G__12534 = (0);
var G__12535 = (0);
seq__12517 = G__12532;
chunk__12518 = G__12533;
count__12519 = G__12534;
i__12520 = G__12535;
continue;
}
} else {
return null;
}
}
break;
}
});})(x12516,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x12516;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__12515 = obj;
G__12515.push(kfn.call(null,k),vfn.call(null,v));

return G__12515;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__12537 = arguments.length;
switch (G__12537) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t12538 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t12538 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,meta12539){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.meta12539 = meta12539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t12538.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t12538.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t12538.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t12538.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t12538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12540){
var self__ = this;
var _12540__$1 = this;
return self__.meta12539;
});

cognitect.transit.t12538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12540,meta12539__$1){
var self__ = this;
var _12540__$1 = this;
return (new cognitect.transit.t12538(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,meta12539__$1));
});

cognitect.transit.t12538.cljs$lang$type = true;

cognitect.transit.t12538.cljs$lang$ctorStr = "cognitect.transit/t12538";

cognitect.transit.t12538.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cognitect.transit/t12538");
});

cognitect.transit.__GT_t12538 = (function cognitect$transit$__GT_t12538(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta12539){
return (new cognitect.transit.t12538(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta12539));
});

}

return (new cognitect.transit.t12538(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map