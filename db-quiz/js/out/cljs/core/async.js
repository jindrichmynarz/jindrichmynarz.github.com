// Compiled by ClojureScript 0.0-3196 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t12759 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12759 = (function (f,fn_handler,meta12760){
this.f = f;
this.fn_handler = fn_handler;
this.meta12760 = meta12760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12759.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12761){
var self__ = this;
var _12761__$1 = this;
return self__.meta12760;
});

cljs.core.async.t12759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12761,meta12760__$1){
var self__ = this;
var _12761__$1 = this;
return (new cljs.core.async.t12759(self__.f,self__.fn_handler,meta12760__$1));
});

cljs.core.async.t12759.cljs$lang$type = true;

cljs.core.async.t12759.cljs$lang$ctorStr = "cljs.core.async/t12759";

cljs.core.async.t12759.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t12759");
});

cljs.core.async.__GT_t12759 = (function cljs$core$async$fn_handler_$___GT_t12759(f__$1,fn_handler__$1,meta12760){
return (new cljs.core.async.t12759(f__$1,fn_handler__$1,meta12760));
});

}

return (new cljs.core.async.t12759(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__12763 = buff;
if(G__12763){
var bit__4894__auto__ = null;
if(cljs.core.truth_((function (){var or__4220__auto__ = bit__4894__auto__;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return G__12763.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__12763.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12763);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12763);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__12765 = arguments.length;
switch (G__12765) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__12768 = arguments.length;
switch (G__12768) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12770 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12770);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12770,ret){
return (function (){
return fn1.call(null,val_12770);
});})(val_12770,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__12772 = arguments.length;
switch (G__12772) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5105__auto___12774 = n;
var x_12775 = (0);
while(true){
if((x_12775 < n__5105__auto___12774)){
(a[x_12775] = (0));

var G__12776 = (x_12775 + (1));
x_12775 = G__12776;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12777 = (i + (1));
i = G__12777;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12781 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12781 = (function (flag,alt_flag,meta12782){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12782 = meta12782;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12781.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12783){
var self__ = this;
var _12783__$1 = this;
return self__.meta12782;
});})(flag))
;

cljs.core.async.t12781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12783,meta12782__$1){
var self__ = this;
var _12783__$1 = this;
return (new cljs.core.async.t12781(self__.flag,self__.alt_flag,meta12782__$1));
});})(flag))
;

cljs.core.async.t12781.cljs$lang$type = true;

cljs.core.async.t12781.cljs$lang$ctorStr = "cljs.core.async/t12781";

cljs.core.async.t12781.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t12781");
});})(flag))
;

cljs.core.async.__GT_t12781 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t12781(flag__$1,alt_flag__$1,meta12782){
return (new cljs.core.async.t12781(flag__$1,alt_flag__$1,meta12782));
});})(flag))
;

}

return (new cljs.core.async.t12781(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t12787 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12787 = (function (cb,flag,alt_handler,meta12788){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12788 = meta12788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12787.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12789){
var self__ = this;
var _12789__$1 = this;
return self__.meta12788;
});

cljs.core.async.t12787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12789,meta12788__$1){
var self__ = this;
var _12789__$1 = this;
return (new cljs.core.async.t12787(self__.cb,self__.flag,self__.alt_handler,meta12788__$1));
});

cljs.core.async.t12787.cljs$lang$type = true;

cljs.core.async.t12787.cljs$lang$ctorStr = "cljs.core.async/t12787";

cljs.core.async.t12787.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t12787");
});

cljs.core.async.__GT_t12787 = (function cljs$core$async$alt_handler_$___GT_t12787(cb__$1,flag__$1,alt_handler__$1,meta12788){
return (new cljs.core.async.t12787(cb__$1,flag__$1,alt_handler__$1,meta12788));
});

}

return (new cljs.core.async.t12787(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12790_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12790_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12791_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12791_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4220__auto__ = wport;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12792 = (i + (1));
i = G__12792;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4220__auto__ = ret;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4208__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4208__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4208__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12795){
var map__12796 = p__12795;
var map__12796__$1 = ((cljs.core.seq_QMARK_.call(null,map__12796))?cljs.core.apply.call(null,cljs.core.hash_map,map__12796):map__12796);
var opts = map__12796__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12793){
var G__12794 = cljs.core.first.call(null,seq12793);
var seq12793__$1 = cljs.core.next.call(null,seq12793);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12794,seq12793__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__12798 = arguments.length;
switch (G__12798) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6706__auto___12847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___12847){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___12847){
return (function (state_12822){
var state_val_12823 = (state_12822[(1)]);
if((state_val_12823 === (7))){
var inst_12818 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
var statearr_12824_12848 = state_12822__$1;
(statearr_12824_12848[(2)] = inst_12818);

(statearr_12824_12848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (1))){
var state_12822__$1 = state_12822;
var statearr_12825_12849 = state_12822__$1;
(statearr_12825_12849[(2)] = null);

(statearr_12825_12849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (4))){
var inst_12801 = (state_12822[(7)]);
var inst_12801__$1 = (state_12822[(2)]);
var inst_12802 = (inst_12801__$1 == null);
var state_12822__$1 = (function (){var statearr_12826 = state_12822;
(statearr_12826[(7)] = inst_12801__$1);

return statearr_12826;
})();
if(cljs.core.truth_(inst_12802)){
var statearr_12827_12850 = state_12822__$1;
(statearr_12827_12850[(1)] = (5));

} else {
var statearr_12828_12851 = state_12822__$1;
(statearr_12828_12851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (13))){
var state_12822__$1 = state_12822;
var statearr_12829_12852 = state_12822__$1;
(statearr_12829_12852[(2)] = null);

(statearr_12829_12852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (6))){
var inst_12801 = (state_12822[(7)]);
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12822__$1,(11),to,inst_12801);
} else {
if((state_val_12823 === (3))){
var inst_12820 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12822__$1,inst_12820);
} else {
if((state_val_12823 === (12))){
var state_12822__$1 = state_12822;
var statearr_12830_12853 = state_12822__$1;
(statearr_12830_12853[(2)] = null);

(statearr_12830_12853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (2))){
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12822__$1,(4),from);
} else {
if((state_val_12823 === (11))){
var inst_12811 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
if(cljs.core.truth_(inst_12811)){
var statearr_12831_12854 = state_12822__$1;
(statearr_12831_12854[(1)] = (12));

} else {
var statearr_12832_12855 = state_12822__$1;
(statearr_12832_12855[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (9))){
var state_12822__$1 = state_12822;
var statearr_12833_12856 = state_12822__$1;
(statearr_12833_12856[(2)] = null);

(statearr_12833_12856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (5))){
var state_12822__$1 = state_12822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12834_12857 = state_12822__$1;
(statearr_12834_12857[(1)] = (8));

} else {
var statearr_12835_12858 = state_12822__$1;
(statearr_12835_12858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (14))){
var inst_12816 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
var statearr_12836_12859 = state_12822__$1;
(statearr_12836_12859[(2)] = inst_12816);

(statearr_12836_12859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (10))){
var inst_12808 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
var statearr_12837_12860 = state_12822__$1;
(statearr_12837_12860[(2)] = inst_12808);

(statearr_12837_12860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (8))){
var inst_12805 = cljs.core.async.close_BANG_.call(null,to);
var state_12822__$1 = state_12822;
var statearr_12838_12861 = state_12822__$1;
(statearr_12838_12861[(2)] = inst_12805);

(statearr_12838_12861[(1)] = (10));


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
});})(c__6706__auto___12847))
;
return ((function (switch__6644__auto__,c__6706__auto___12847){
return (function() {
var cljs$core$async$state_machine__6645__auto__ = null;
var cljs$core$async$state_machine__6645__auto____0 = (function (){
var statearr_12842 = [null,null,null,null,null,null,null,null];
(statearr_12842[(0)] = cljs$core$async$state_machine__6645__auto__);

(statearr_12842[(1)] = (1));

return statearr_12842;
});
var cljs$core$async$state_machine__6645__auto____1 = (function (state_12822){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_12822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e12843){if((e12843 instanceof Object)){
var ex__6648__auto__ = e12843;
var statearr_12844_12862 = state_12822;
(statearr_12844_12862[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12863 = state_12822;
state_12822 = G__12863;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$state_machine__6645__auto__ = function(state_12822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6645__auto____1.call(this,state_12822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6645__auto____0;
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6645__auto____1;
return cljs$core$async$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___12847))
})();
var state__6708__auto__ = (function (){var statearr_12845 = f__6707__auto__.call(null);
(statearr_12845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___12847);

return statearr_12845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___12847))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13047){
var vec__13048 = p__13047;
var v = cljs.core.nth.call(null,vec__13048,(0),null);
var p = cljs.core.nth.call(null,vec__13048,(1),null);
var job = vec__13048;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6706__auto___13230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___13230,res,vec__13048,v,p,job,jobs,results){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___13230,res,vec__13048,v,p,job,jobs,results){
return (function (state_13053){
var state_val_13054 = (state_13053[(1)]);
if((state_val_13054 === (2))){
var inst_13050 = (state_13053[(2)]);
var inst_13051 = cljs.core.async.close_BANG_.call(null,res);
var state_13053__$1 = (function (){var statearr_13055 = state_13053;
(statearr_13055[(7)] = inst_13050);

return statearr_13055;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13053__$1,inst_13051);
} else {
if((state_val_13054 === (1))){
var state_13053__$1 = state_13053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13053__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6706__auto___13230,res,vec__13048,v,p,job,jobs,results))
;
return ((function (switch__6644__auto__,c__6706__auto___13230,res,vec__13048,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0 = (function (){
var statearr_13059 = [null,null,null,null,null,null,null,null];
(statearr_13059[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__);

(statearr_13059[(1)] = (1));

return statearr_13059;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1 = (function (state_13053){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e13060){if((e13060 instanceof Object)){
var ex__6648__auto__ = e13060;
var statearr_13061_13231 = state_13053;
(statearr_13061_13231[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13232 = state_13053;
state_13053 = G__13232;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__ = function(state_13053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1.call(this,state_13053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___13230,res,vec__13048,v,p,job,jobs,results))
})();
var state__6708__auto__ = (function (){var statearr_13062 = f__6707__auto__.call(null);
(statearr_13062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___13230);

return statearr_13062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___13230,res,vec__13048,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13063){
var vec__13064 = p__13063;
var v = cljs.core.nth.call(null,vec__13064,(0),null);
var p = cljs.core.nth.call(null,vec__13064,(1),null);
var job = vec__13064;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5105__auto___13233 = n;
var __13234 = (0);
while(true){
if((__13234 < n__5105__auto___13233)){
var G__13065_13235 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13065_13235) {
case "async":
var c__6706__auto___13237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13234,c__6706__auto___13237,G__13065_13235,n__5105__auto___13233,jobs,results,process,async){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (__13234,c__6706__auto___13237,G__13065_13235,n__5105__auto___13233,jobs,results,process,async){
return (function (state_13078){
var state_val_13079 = (state_13078[(1)]);
if((state_val_13079 === (7))){
var inst_13074 = (state_13078[(2)]);
var state_13078__$1 = state_13078;
var statearr_13080_13238 = state_13078__$1;
(statearr_13080_13238[(2)] = inst_13074);

(statearr_13080_13238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13079 === (6))){
var state_13078__$1 = state_13078;
var statearr_13081_13239 = state_13078__$1;
(statearr_13081_13239[(2)] = null);

(statearr_13081_13239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13079 === (5))){
var state_13078__$1 = state_13078;
var statearr_13082_13240 = state_13078__$1;
(statearr_13082_13240[(2)] = null);

(statearr_13082_13240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13079 === (4))){
var inst_13068 = (state_13078[(2)]);
var inst_13069 = async.call(null,inst_13068);
var state_13078__$1 = state_13078;
if(cljs.core.truth_(inst_13069)){
var statearr_13083_13241 = state_13078__$1;
(statearr_13083_13241[(1)] = (5));

} else {
var statearr_13084_13242 = state_13078__$1;
(statearr_13084_13242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13079 === (3))){
var inst_13076 = (state_13078[(2)]);
var state_13078__$1 = state_13078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13078__$1,inst_13076);
} else {
if((state_val_13079 === (2))){
var state_13078__$1 = state_13078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13078__$1,(4),jobs);
} else {
if((state_val_13079 === (1))){
var state_13078__$1 = state_13078;
var statearr_13085_13243 = state_13078__$1;
(statearr_13085_13243[(2)] = null);

(statearr_13085_13243[(1)] = (2));


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
});})(__13234,c__6706__auto___13237,G__13065_13235,n__5105__auto___13233,jobs,results,process,async))
;
return ((function (__13234,switch__6644__auto__,c__6706__auto___13237,G__13065_13235,n__5105__auto___13233,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0 = (function (){
var statearr_13089 = [null,null,null,null,null,null,null];
(statearr_13089[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__);

(statearr_13089[(1)] = (1));

return statearr_13089;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1 = (function (state_13078){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e13090){if((e13090 instanceof Object)){
var ex__6648__auto__ = e13090;
var statearr_13091_13244 = state_13078;
(statearr_13091_13244[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13245 = state_13078;
state_13078 = G__13245;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__ = function(state_13078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1.call(this,state_13078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__;
})()
;})(__13234,switch__6644__auto__,c__6706__auto___13237,G__13065_13235,n__5105__auto___13233,jobs,results,process,async))
})();
var state__6708__auto__ = (function (){var statearr_13092 = f__6707__auto__.call(null);
(statearr_13092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___13237);

return statearr_13092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(__13234,c__6706__auto___13237,G__13065_13235,n__5105__auto___13233,jobs,results,process,async))
);


break;
case "compute":
var c__6706__auto___13246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13234,c__6706__auto___13246,G__13065_13235,n__5105__auto___13233,jobs,results,process,async){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (__13234,c__6706__auto___13246,G__13065_13235,n__5105__auto___13233,jobs,results,process,async){
return (function (state_13105){
var state_val_13106 = (state_13105[(1)]);
if((state_val_13106 === (7))){
var inst_13101 = (state_13105[(2)]);
var state_13105__$1 = state_13105;
var statearr_13107_13247 = state_13105__$1;
(statearr_13107_13247[(2)] = inst_13101);

(statearr_13107_13247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13106 === (6))){
var state_13105__$1 = state_13105;
var statearr_13108_13248 = state_13105__$1;
(statearr_13108_13248[(2)] = null);

(statearr_13108_13248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13106 === (5))){
var state_13105__$1 = state_13105;
var statearr_13109_13249 = state_13105__$1;
(statearr_13109_13249[(2)] = null);

(statearr_13109_13249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13106 === (4))){
var inst_13095 = (state_13105[(2)]);
var inst_13096 = process.call(null,inst_13095);
var state_13105__$1 = state_13105;
if(cljs.core.truth_(inst_13096)){
var statearr_13110_13250 = state_13105__$1;
(statearr_13110_13250[(1)] = (5));

} else {
var statearr_13111_13251 = state_13105__$1;
(statearr_13111_13251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13106 === (3))){
var inst_13103 = (state_13105[(2)]);
var state_13105__$1 = state_13105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13105__$1,inst_13103);
} else {
if((state_val_13106 === (2))){
var state_13105__$1 = state_13105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13105__$1,(4),jobs);
} else {
if((state_val_13106 === (1))){
var state_13105__$1 = state_13105;
var statearr_13112_13252 = state_13105__$1;
(statearr_13112_13252[(2)] = null);

(statearr_13112_13252[(1)] = (2));


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
});})(__13234,c__6706__auto___13246,G__13065_13235,n__5105__auto___13233,jobs,results,process,async))
;
return ((function (__13234,switch__6644__auto__,c__6706__auto___13246,G__13065_13235,n__5105__auto___13233,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0 = (function (){
var statearr_13116 = [null,null,null,null,null,null,null];
(statearr_13116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__);

(statearr_13116[(1)] = (1));

return statearr_13116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1 = (function (state_13105){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e13117){if((e13117 instanceof Object)){
var ex__6648__auto__ = e13117;
var statearr_13118_13253 = state_13105;
(statearr_13118_13253[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13254 = state_13105;
state_13105 = G__13254;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__ = function(state_13105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1.call(this,state_13105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__;
})()
;})(__13234,switch__6644__auto__,c__6706__auto___13246,G__13065_13235,n__5105__auto___13233,jobs,results,process,async))
})();
var state__6708__auto__ = (function (){var statearr_13119 = f__6707__auto__.call(null);
(statearr_13119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___13246);

return statearr_13119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(__13234,c__6706__auto___13246,G__13065_13235,n__5105__auto___13233,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13255 = (__13234 + (1));
__13234 = G__13255;
continue;
} else {
}
break;
}

var c__6706__auto___13256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___13256,jobs,results,process,async){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___13256,jobs,results,process,async){
return (function (state_13141){
var state_val_13142 = (state_13141[(1)]);
if((state_val_13142 === (9))){
var inst_13134 = (state_13141[(2)]);
var state_13141__$1 = (function (){var statearr_13143 = state_13141;
(statearr_13143[(7)] = inst_13134);

return statearr_13143;
})();
var statearr_13144_13257 = state_13141__$1;
(statearr_13144_13257[(2)] = null);

(statearr_13144_13257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13142 === (8))){
var inst_13127 = (state_13141[(8)]);
var inst_13132 = (state_13141[(2)]);
var state_13141__$1 = (function (){var statearr_13145 = state_13141;
(statearr_13145[(9)] = inst_13132);

return statearr_13145;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13141__$1,(9),results,inst_13127);
} else {
if((state_val_13142 === (7))){
var inst_13137 = (state_13141[(2)]);
var state_13141__$1 = state_13141;
var statearr_13146_13258 = state_13141__$1;
(statearr_13146_13258[(2)] = inst_13137);

(statearr_13146_13258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13142 === (6))){
var inst_13127 = (state_13141[(8)]);
var inst_13122 = (state_13141[(10)]);
var inst_13127__$1 = cljs.core.async.chan.call(null,(1));
var inst_13128 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13129 = [inst_13122,inst_13127__$1];
var inst_13130 = (new cljs.core.PersistentVector(null,2,(5),inst_13128,inst_13129,null));
var state_13141__$1 = (function (){var statearr_13147 = state_13141;
(statearr_13147[(8)] = inst_13127__$1);

return statearr_13147;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13141__$1,(8),jobs,inst_13130);
} else {
if((state_val_13142 === (5))){
var inst_13125 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13141__$1 = state_13141;
var statearr_13148_13259 = state_13141__$1;
(statearr_13148_13259[(2)] = inst_13125);

(statearr_13148_13259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13142 === (4))){
var inst_13122 = (state_13141[(10)]);
var inst_13122__$1 = (state_13141[(2)]);
var inst_13123 = (inst_13122__$1 == null);
var state_13141__$1 = (function (){var statearr_13149 = state_13141;
(statearr_13149[(10)] = inst_13122__$1);

return statearr_13149;
})();
if(cljs.core.truth_(inst_13123)){
var statearr_13150_13260 = state_13141__$1;
(statearr_13150_13260[(1)] = (5));

} else {
var statearr_13151_13261 = state_13141__$1;
(statearr_13151_13261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13142 === (3))){
var inst_13139 = (state_13141[(2)]);
var state_13141__$1 = state_13141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13141__$1,inst_13139);
} else {
if((state_val_13142 === (2))){
var state_13141__$1 = state_13141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13141__$1,(4),from);
} else {
if((state_val_13142 === (1))){
var state_13141__$1 = state_13141;
var statearr_13152_13262 = state_13141__$1;
(statearr_13152_13262[(2)] = null);

(statearr_13152_13262[(1)] = (2));


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
});})(c__6706__auto___13256,jobs,results,process,async))
;
return ((function (switch__6644__auto__,c__6706__auto___13256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0 = (function (){
var statearr_13156 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__);

(statearr_13156[(1)] = (1));

return statearr_13156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1 = (function (state_13141){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e13157){if((e13157 instanceof Object)){
var ex__6648__auto__ = e13157;
var statearr_13158_13263 = state_13141;
(statearr_13158_13263[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13264 = state_13141;
state_13141 = G__13264;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__ = function(state_13141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1.call(this,state_13141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___13256,jobs,results,process,async))
})();
var state__6708__auto__ = (function (){var statearr_13159 = f__6707__auto__.call(null);
(statearr_13159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___13256);

return statearr_13159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___13256,jobs,results,process,async))
);


var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__,jobs,results,process,async){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__,jobs,results,process,async){
return (function (state_13197){
var state_val_13198 = (state_13197[(1)]);
if((state_val_13198 === (7))){
var inst_13193 = (state_13197[(2)]);
var state_13197__$1 = state_13197;
var statearr_13199_13265 = state_13197__$1;
(statearr_13199_13265[(2)] = inst_13193);

(statearr_13199_13265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (20))){
var state_13197__$1 = state_13197;
var statearr_13200_13266 = state_13197__$1;
(statearr_13200_13266[(2)] = null);

(statearr_13200_13266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (1))){
var state_13197__$1 = state_13197;
var statearr_13201_13267 = state_13197__$1;
(statearr_13201_13267[(2)] = null);

(statearr_13201_13267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (4))){
var inst_13162 = (state_13197[(7)]);
var inst_13162__$1 = (state_13197[(2)]);
var inst_13163 = (inst_13162__$1 == null);
var state_13197__$1 = (function (){var statearr_13202 = state_13197;
(statearr_13202[(7)] = inst_13162__$1);

return statearr_13202;
})();
if(cljs.core.truth_(inst_13163)){
var statearr_13203_13268 = state_13197__$1;
(statearr_13203_13268[(1)] = (5));

} else {
var statearr_13204_13269 = state_13197__$1;
(statearr_13204_13269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (15))){
var inst_13175 = (state_13197[(8)]);
var state_13197__$1 = state_13197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13197__$1,(18),to,inst_13175);
} else {
if((state_val_13198 === (21))){
var inst_13188 = (state_13197[(2)]);
var state_13197__$1 = state_13197;
var statearr_13205_13270 = state_13197__$1;
(statearr_13205_13270[(2)] = inst_13188);

(statearr_13205_13270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (13))){
var inst_13190 = (state_13197[(2)]);
var state_13197__$1 = (function (){var statearr_13206 = state_13197;
(statearr_13206[(9)] = inst_13190);

return statearr_13206;
})();
var statearr_13207_13271 = state_13197__$1;
(statearr_13207_13271[(2)] = null);

(statearr_13207_13271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (6))){
var inst_13162 = (state_13197[(7)]);
var state_13197__$1 = state_13197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13197__$1,(11),inst_13162);
} else {
if((state_val_13198 === (17))){
var inst_13183 = (state_13197[(2)]);
var state_13197__$1 = state_13197;
if(cljs.core.truth_(inst_13183)){
var statearr_13208_13272 = state_13197__$1;
(statearr_13208_13272[(1)] = (19));

} else {
var statearr_13209_13273 = state_13197__$1;
(statearr_13209_13273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (3))){
var inst_13195 = (state_13197[(2)]);
var state_13197__$1 = state_13197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13197__$1,inst_13195);
} else {
if((state_val_13198 === (12))){
var inst_13172 = (state_13197[(10)]);
var state_13197__$1 = state_13197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13197__$1,(14),inst_13172);
} else {
if((state_val_13198 === (2))){
var state_13197__$1 = state_13197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13197__$1,(4),results);
} else {
if((state_val_13198 === (19))){
var state_13197__$1 = state_13197;
var statearr_13210_13274 = state_13197__$1;
(statearr_13210_13274[(2)] = null);

(statearr_13210_13274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (11))){
var inst_13172 = (state_13197[(2)]);
var state_13197__$1 = (function (){var statearr_13211 = state_13197;
(statearr_13211[(10)] = inst_13172);

return statearr_13211;
})();
var statearr_13212_13275 = state_13197__$1;
(statearr_13212_13275[(2)] = null);

(statearr_13212_13275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (9))){
var state_13197__$1 = state_13197;
var statearr_13213_13276 = state_13197__$1;
(statearr_13213_13276[(2)] = null);

(statearr_13213_13276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (5))){
var state_13197__$1 = state_13197;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13214_13277 = state_13197__$1;
(statearr_13214_13277[(1)] = (8));

} else {
var statearr_13215_13278 = state_13197__$1;
(statearr_13215_13278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (14))){
var inst_13175 = (state_13197[(8)]);
var inst_13177 = (state_13197[(11)]);
var inst_13175__$1 = (state_13197[(2)]);
var inst_13176 = (inst_13175__$1 == null);
var inst_13177__$1 = cljs.core.not.call(null,inst_13176);
var state_13197__$1 = (function (){var statearr_13216 = state_13197;
(statearr_13216[(8)] = inst_13175__$1);

(statearr_13216[(11)] = inst_13177__$1);

return statearr_13216;
})();
if(inst_13177__$1){
var statearr_13217_13279 = state_13197__$1;
(statearr_13217_13279[(1)] = (15));

} else {
var statearr_13218_13280 = state_13197__$1;
(statearr_13218_13280[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (16))){
var inst_13177 = (state_13197[(11)]);
var state_13197__$1 = state_13197;
var statearr_13219_13281 = state_13197__$1;
(statearr_13219_13281[(2)] = inst_13177);

(statearr_13219_13281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (10))){
var inst_13169 = (state_13197[(2)]);
var state_13197__$1 = state_13197;
var statearr_13220_13282 = state_13197__$1;
(statearr_13220_13282[(2)] = inst_13169);

(statearr_13220_13282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (18))){
var inst_13180 = (state_13197[(2)]);
var state_13197__$1 = state_13197;
var statearr_13221_13283 = state_13197__$1;
(statearr_13221_13283[(2)] = inst_13180);

(statearr_13221_13283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13198 === (8))){
var inst_13166 = cljs.core.async.close_BANG_.call(null,to);
var state_13197__$1 = state_13197;
var statearr_13222_13284 = state_13197__$1;
(statearr_13222_13284[(2)] = inst_13166);

(statearr_13222_13284[(1)] = (10));


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
});})(c__6706__auto__,jobs,results,process,async))
;
return ((function (switch__6644__auto__,c__6706__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0 = (function (){
var statearr_13226 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__);

(statearr_13226[(1)] = (1));

return statearr_13226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1 = (function (state_13197){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e13227){if((e13227 instanceof Object)){
var ex__6648__auto__ = e13227;
var statearr_13228_13285 = state_13197;
(statearr_13228_13285[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13286 = state_13197;
state_13197 = G__13286;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__ = function(state_13197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1.call(this,state_13197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__,jobs,results,process,async))
})();
var state__6708__auto__ = (function (){var statearr_13229 = f__6707__auto__.call(null);
(statearr_13229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_13229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__,jobs,results,process,async))
);

return c__6706__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__13288 = arguments.length;
switch (G__13288) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__13291 = arguments.length;
switch (G__13291) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__13294 = arguments.length;
switch (G__13294) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6706__auto___13346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___13346,tc,fc){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___13346,tc,fc){
return (function (state_13320){
var state_val_13321 = (state_13320[(1)]);
if((state_val_13321 === (7))){
var inst_13316 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
var statearr_13322_13347 = state_13320__$1;
(statearr_13322_13347[(2)] = inst_13316);

(statearr_13322_13347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (1))){
var state_13320__$1 = state_13320;
var statearr_13323_13348 = state_13320__$1;
(statearr_13323_13348[(2)] = null);

(statearr_13323_13348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (4))){
var inst_13297 = (state_13320[(7)]);
var inst_13297__$1 = (state_13320[(2)]);
var inst_13298 = (inst_13297__$1 == null);
var state_13320__$1 = (function (){var statearr_13324 = state_13320;
(statearr_13324[(7)] = inst_13297__$1);

return statearr_13324;
})();
if(cljs.core.truth_(inst_13298)){
var statearr_13325_13349 = state_13320__$1;
(statearr_13325_13349[(1)] = (5));

} else {
var statearr_13326_13350 = state_13320__$1;
(statearr_13326_13350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (13))){
var state_13320__$1 = state_13320;
var statearr_13327_13351 = state_13320__$1;
(statearr_13327_13351[(2)] = null);

(statearr_13327_13351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (6))){
var inst_13297 = (state_13320[(7)]);
var inst_13303 = p.call(null,inst_13297);
var state_13320__$1 = state_13320;
if(cljs.core.truth_(inst_13303)){
var statearr_13328_13352 = state_13320__$1;
(statearr_13328_13352[(1)] = (9));

} else {
var statearr_13329_13353 = state_13320__$1;
(statearr_13329_13353[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (3))){
var inst_13318 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13320__$1,inst_13318);
} else {
if((state_val_13321 === (12))){
var state_13320__$1 = state_13320;
var statearr_13330_13354 = state_13320__$1;
(statearr_13330_13354[(2)] = null);

(statearr_13330_13354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (2))){
var state_13320__$1 = state_13320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13320__$1,(4),ch);
} else {
if((state_val_13321 === (11))){
var inst_13297 = (state_13320[(7)]);
var inst_13307 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13320__$1,(8),inst_13307,inst_13297);
} else {
if((state_val_13321 === (9))){
var state_13320__$1 = state_13320;
var statearr_13331_13355 = state_13320__$1;
(statearr_13331_13355[(2)] = tc);

(statearr_13331_13355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (5))){
var inst_13300 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13301 = cljs.core.async.close_BANG_.call(null,fc);
var state_13320__$1 = (function (){var statearr_13332 = state_13320;
(statearr_13332[(8)] = inst_13300);

return statearr_13332;
})();
var statearr_13333_13356 = state_13320__$1;
(statearr_13333_13356[(2)] = inst_13301);

(statearr_13333_13356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (14))){
var inst_13314 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
var statearr_13334_13357 = state_13320__$1;
(statearr_13334_13357[(2)] = inst_13314);

(statearr_13334_13357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (10))){
var state_13320__$1 = state_13320;
var statearr_13335_13358 = state_13320__$1;
(statearr_13335_13358[(2)] = fc);

(statearr_13335_13358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13321 === (8))){
var inst_13309 = (state_13320[(2)]);
var state_13320__$1 = state_13320;
if(cljs.core.truth_(inst_13309)){
var statearr_13336_13359 = state_13320__$1;
(statearr_13336_13359[(1)] = (12));

} else {
var statearr_13337_13360 = state_13320__$1;
(statearr_13337_13360[(1)] = (13));

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
});})(c__6706__auto___13346,tc,fc))
;
return ((function (switch__6644__auto__,c__6706__auto___13346,tc,fc){
return (function() {
var cljs$core$async$state_machine__6645__auto__ = null;
var cljs$core$async$state_machine__6645__auto____0 = (function (){
var statearr_13341 = [null,null,null,null,null,null,null,null,null];
(statearr_13341[(0)] = cljs$core$async$state_machine__6645__auto__);

(statearr_13341[(1)] = (1));

return statearr_13341;
});
var cljs$core$async$state_machine__6645__auto____1 = (function (state_13320){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e13342){if((e13342 instanceof Object)){
var ex__6648__auto__ = e13342;
var statearr_13343_13361 = state_13320;
(statearr_13343_13361[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13362 = state_13320;
state_13320 = G__13362;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$state_machine__6645__auto__ = function(state_13320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6645__auto____1.call(this,state_13320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6645__auto____0;
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6645__auto____1;
return cljs$core$async$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___13346,tc,fc))
})();
var state__6708__auto__ = (function (){var statearr_13344 = f__6707__auto__.call(null);
(statearr_13344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___13346);

return statearr_13344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___13346,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__){
return (function (state_13409){
var state_val_13410 = (state_13409[(1)]);
if((state_val_13410 === (7))){
var inst_13405 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
var statearr_13411_13427 = state_13409__$1;
(statearr_13411_13427[(2)] = inst_13405);

(statearr_13411_13427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13410 === (6))){
var inst_13398 = (state_13409[(7)]);
var inst_13395 = (state_13409[(8)]);
var inst_13402 = f.call(null,inst_13395,inst_13398);
var inst_13395__$1 = inst_13402;
var state_13409__$1 = (function (){var statearr_13412 = state_13409;
(statearr_13412[(8)] = inst_13395__$1);

return statearr_13412;
})();
var statearr_13413_13428 = state_13409__$1;
(statearr_13413_13428[(2)] = null);

(statearr_13413_13428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13410 === (5))){
var inst_13395 = (state_13409[(8)]);
var state_13409__$1 = state_13409;
var statearr_13414_13429 = state_13409__$1;
(statearr_13414_13429[(2)] = inst_13395);

(statearr_13414_13429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13410 === (4))){
var inst_13398 = (state_13409[(7)]);
var inst_13398__$1 = (state_13409[(2)]);
var inst_13399 = (inst_13398__$1 == null);
var state_13409__$1 = (function (){var statearr_13415 = state_13409;
(statearr_13415[(7)] = inst_13398__$1);

return statearr_13415;
})();
if(cljs.core.truth_(inst_13399)){
var statearr_13416_13430 = state_13409__$1;
(statearr_13416_13430[(1)] = (5));

} else {
var statearr_13417_13431 = state_13409__$1;
(statearr_13417_13431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13410 === (3))){
var inst_13407 = (state_13409[(2)]);
var state_13409__$1 = state_13409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13409__$1,inst_13407);
} else {
if((state_val_13410 === (2))){
var state_13409__$1 = state_13409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13409__$1,(4),ch);
} else {
if((state_val_13410 === (1))){
var inst_13395 = init;
var state_13409__$1 = (function (){var statearr_13418 = state_13409;
(statearr_13418[(8)] = inst_13395);

return statearr_13418;
})();
var statearr_13419_13432 = state_13409__$1;
(statearr_13419_13432[(2)] = null);

(statearr_13419_13432[(1)] = (2));


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
});})(c__6706__auto__))
;
return ((function (switch__6644__auto__,c__6706__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6645__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6645__auto____0 = (function (){
var statearr_13423 = [null,null,null,null,null,null,null,null,null];
(statearr_13423[(0)] = cljs$core$async$reduce_$_state_machine__6645__auto__);

(statearr_13423[(1)] = (1));

return statearr_13423;
});
var cljs$core$async$reduce_$_state_machine__6645__auto____1 = (function (state_13409){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e13424){if((e13424 instanceof Object)){
var ex__6648__auto__ = e13424;
var statearr_13425_13433 = state_13409;
(statearr_13425_13433[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13434 = state_13409;
state_13409 = G__13434;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6645__auto__ = function(state_13409){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6645__auto____1.call(this,state_13409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6645__auto____0;
cljs$core$async$reduce_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6645__auto____1;
return cljs$core$async$reduce_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__))
})();
var state__6708__auto__ = (function (){var statearr_13426 = f__6707__auto__.call(null);
(statearr_13426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_13426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__))
);

return c__6706__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__13436 = arguments.length;
switch (G__13436) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__){
return (function (state_13461){
var state_val_13462 = (state_13461[(1)]);
if((state_val_13462 === (7))){
var inst_13443 = (state_13461[(2)]);
var state_13461__$1 = state_13461;
var statearr_13463_13487 = state_13461__$1;
(statearr_13463_13487[(2)] = inst_13443);

(statearr_13463_13487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13462 === (1))){
var inst_13437 = cljs.core.seq.call(null,coll);
var inst_13438 = inst_13437;
var state_13461__$1 = (function (){var statearr_13464 = state_13461;
(statearr_13464[(7)] = inst_13438);

return statearr_13464;
})();
var statearr_13465_13488 = state_13461__$1;
(statearr_13465_13488[(2)] = null);

(statearr_13465_13488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13462 === (4))){
var inst_13438 = (state_13461[(7)]);
var inst_13441 = cljs.core.first.call(null,inst_13438);
var state_13461__$1 = state_13461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13461__$1,(7),ch,inst_13441);
} else {
if((state_val_13462 === (13))){
var inst_13455 = (state_13461[(2)]);
var state_13461__$1 = state_13461;
var statearr_13466_13489 = state_13461__$1;
(statearr_13466_13489[(2)] = inst_13455);

(statearr_13466_13489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13462 === (6))){
var inst_13446 = (state_13461[(2)]);
var state_13461__$1 = state_13461;
if(cljs.core.truth_(inst_13446)){
var statearr_13467_13490 = state_13461__$1;
(statearr_13467_13490[(1)] = (8));

} else {
var statearr_13468_13491 = state_13461__$1;
(statearr_13468_13491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13462 === (3))){
var inst_13459 = (state_13461[(2)]);
var state_13461__$1 = state_13461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13461__$1,inst_13459);
} else {
if((state_val_13462 === (12))){
var state_13461__$1 = state_13461;
var statearr_13469_13492 = state_13461__$1;
(statearr_13469_13492[(2)] = null);

(statearr_13469_13492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13462 === (2))){
var inst_13438 = (state_13461[(7)]);
var state_13461__$1 = state_13461;
if(cljs.core.truth_(inst_13438)){
var statearr_13470_13493 = state_13461__$1;
(statearr_13470_13493[(1)] = (4));

} else {
var statearr_13471_13494 = state_13461__$1;
(statearr_13471_13494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13462 === (11))){
var inst_13452 = cljs.core.async.close_BANG_.call(null,ch);
var state_13461__$1 = state_13461;
var statearr_13472_13495 = state_13461__$1;
(statearr_13472_13495[(2)] = inst_13452);

(statearr_13472_13495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13462 === (9))){
var state_13461__$1 = state_13461;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13473_13496 = state_13461__$1;
(statearr_13473_13496[(1)] = (11));

} else {
var statearr_13474_13497 = state_13461__$1;
(statearr_13474_13497[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13462 === (5))){
var inst_13438 = (state_13461[(7)]);
var state_13461__$1 = state_13461;
var statearr_13475_13498 = state_13461__$1;
(statearr_13475_13498[(2)] = inst_13438);

(statearr_13475_13498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13462 === (10))){
var inst_13457 = (state_13461[(2)]);
var state_13461__$1 = state_13461;
var statearr_13476_13499 = state_13461__$1;
(statearr_13476_13499[(2)] = inst_13457);

(statearr_13476_13499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13462 === (8))){
var inst_13438 = (state_13461[(7)]);
var inst_13448 = cljs.core.next.call(null,inst_13438);
var inst_13438__$1 = inst_13448;
var state_13461__$1 = (function (){var statearr_13477 = state_13461;
(statearr_13477[(7)] = inst_13438__$1);

return statearr_13477;
})();
var statearr_13478_13500 = state_13461__$1;
(statearr_13478_13500[(2)] = null);

(statearr_13478_13500[(1)] = (2));


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
});})(c__6706__auto__))
;
return ((function (switch__6644__auto__,c__6706__auto__){
return (function() {
var cljs$core$async$state_machine__6645__auto__ = null;
var cljs$core$async$state_machine__6645__auto____0 = (function (){
var statearr_13482 = [null,null,null,null,null,null,null,null];
(statearr_13482[(0)] = cljs$core$async$state_machine__6645__auto__);

(statearr_13482[(1)] = (1));

return statearr_13482;
});
var cljs$core$async$state_machine__6645__auto____1 = (function (state_13461){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e13483){if((e13483 instanceof Object)){
var ex__6648__auto__ = e13483;
var statearr_13484_13501 = state_13461;
(statearr_13484_13501[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13502 = state_13461;
state_13461 = G__13502;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$state_machine__6645__auto__ = function(state_13461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6645__auto____1.call(this,state_13461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6645__auto____0;
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6645__auto____1;
return cljs$core$async$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__))
})();
var state__6708__auto__ = (function (){var statearr_13485 = f__6707__auto__.call(null);
(statearr_13485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_13485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__))
);

return c__6706__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj13504 = {};
return obj13504;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4208__auto__ = _;
if(and__4208__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4208__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4856__auto__ = (((_ == null))?null:_);
return (function (){var or__4220__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj13506 = {};
return obj13506;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t13728 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13728 = (function (cs,ch,mult,meta13729){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13729 = meta13729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13728.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13728.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13728.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13728.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13728.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13730){
var self__ = this;
var _13730__$1 = this;
return self__.meta13729;
});})(cs))
;

cljs.core.async.t13728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13730,meta13729__$1){
var self__ = this;
var _13730__$1 = this;
return (new cljs.core.async.t13728(self__.cs,self__.ch,self__.mult,meta13729__$1));
});})(cs))
;

cljs.core.async.t13728.cljs$lang$type = true;

cljs.core.async.t13728.cljs$lang$ctorStr = "cljs.core.async/t13728";

cljs.core.async.t13728.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t13728");
});})(cs))
;

cljs.core.async.__GT_t13728 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t13728(cs__$1,ch__$1,mult__$1,meta13729){
return (new cljs.core.async.t13728(cs__$1,ch__$1,mult__$1,meta13729));
});})(cs))
;

}

return (new cljs.core.async.t13728(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6706__auto___13949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___13949,cs,m,dchan,dctr,done){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___13949,cs,m,dchan,dctr,done){
return (function (state_13861){
var state_val_13862 = (state_13861[(1)]);
if((state_val_13862 === (7))){
var inst_13857 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13863_13950 = state_13861__$1;
(statearr_13863_13950[(2)] = inst_13857);

(statearr_13863_13950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (20))){
var inst_13762 = (state_13861[(7)]);
var inst_13772 = cljs.core.first.call(null,inst_13762);
var inst_13773 = cljs.core.nth.call(null,inst_13772,(0),null);
var inst_13774 = cljs.core.nth.call(null,inst_13772,(1),null);
var state_13861__$1 = (function (){var statearr_13864 = state_13861;
(statearr_13864[(8)] = inst_13773);

return statearr_13864;
})();
if(cljs.core.truth_(inst_13774)){
var statearr_13865_13951 = state_13861__$1;
(statearr_13865_13951[(1)] = (22));

} else {
var statearr_13866_13952 = state_13861__$1;
(statearr_13866_13952[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (27))){
var inst_13802 = (state_13861[(9)]);
var inst_13809 = (state_13861[(10)]);
var inst_13733 = (state_13861[(11)]);
var inst_13804 = (state_13861[(12)]);
var inst_13809__$1 = cljs.core._nth.call(null,inst_13802,inst_13804);
var inst_13810 = cljs.core.async.put_BANG_.call(null,inst_13809__$1,inst_13733,done);
var state_13861__$1 = (function (){var statearr_13867 = state_13861;
(statearr_13867[(10)] = inst_13809__$1);

return statearr_13867;
})();
if(cljs.core.truth_(inst_13810)){
var statearr_13868_13953 = state_13861__$1;
(statearr_13868_13953[(1)] = (30));

} else {
var statearr_13869_13954 = state_13861__$1;
(statearr_13869_13954[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (1))){
var state_13861__$1 = state_13861;
var statearr_13870_13955 = state_13861__$1;
(statearr_13870_13955[(2)] = null);

(statearr_13870_13955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (24))){
var inst_13762 = (state_13861[(7)]);
var inst_13779 = (state_13861[(2)]);
var inst_13780 = cljs.core.next.call(null,inst_13762);
var inst_13742 = inst_13780;
var inst_13743 = null;
var inst_13744 = (0);
var inst_13745 = (0);
var state_13861__$1 = (function (){var statearr_13871 = state_13861;
(statearr_13871[(13)] = inst_13745);

(statearr_13871[(14)] = inst_13744);

(statearr_13871[(15)] = inst_13742);

(statearr_13871[(16)] = inst_13779);

(statearr_13871[(17)] = inst_13743);

return statearr_13871;
})();
var statearr_13872_13956 = state_13861__$1;
(statearr_13872_13956[(2)] = null);

(statearr_13872_13956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (39))){
var state_13861__$1 = state_13861;
var statearr_13876_13957 = state_13861__$1;
(statearr_13876_13957[(2)] = null);

(statearr_13876_13957[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (4))){
var inst_13733 = (state_13861[(11)]);
var inst_13733__$1 = (state_13861[(2)]);
var inst_13734 = (inst_13733__$1 == null);
var state_13861__$1 = (function (){var statearr_13877 = state_13861;
(statearr_13877[(11)] = inst_13733__$1);

return statearr_13877;
})();
if(cljs.core.truth_(inst_13734)){
var statearr_13878_13958 = state_13861__$1;
(statearr_13878_13958[(1)] = (5));

} else {
var statearr_13879_13959 = state_13861__$1;
(statearr_13879_13959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (15))){
var inst_13745 = (state_13861[(13)]);
var inst_13744 = (state_13861[(14)]);
var inst_13742 = (state_13861[(15)]);
var inst_13743 = (state_13861[(17)]);
var inst_13758 = (state_13861[(2)]);
var inst_13759 = (inst_13745 + (1));
var tmp13873 = inst_13744;
var tmp13874 = inst_13742;
var tmp13875 = inst_13743;
var inst_13742__$1 = tmp13874;
var inst_13743__$1 = tmp13875;
var inst_13744__$1 = tmp13873;
var inst_13745__$1 = inst_13759;
var state_13861__$1 = (function (){var statearr_13880 = state_13861;
(statearr_13880[(13)] = inst_13745__$1);

(statearr_13880[(14)] = inst_13744__$1);

(statearr_13880[(15)] = inst_13742__$1);

(statearr_13880[(18)] = inst_13758);

(statearr_13880[(17)] = inst_13743__$1);

return statearr_13880;
})();
var statearr_13881_13960 = state_13861__$1;
(statearr_13881_13960[(2)] = null);

(statearr_13881_13960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (21))){
var inst_13783 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13885_13961 = state_13861__$1;
(statearr_13885_13961[(2)] = inst_13783);

(statearr_13885_13961[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (31))){
var inst_13809 = (state_13861[(10)]);
var inst_13813 = done.call(null,null);
var inst_13814 = cljs.core.async.untap_STAR_.call(null,m,inst_13809);
var state_13861__$1 = (function (){var statearr_13886 = state_13861;
(statearr_13886[(19)] = inst_13813);

return statearr_13886;
})();
var statearr_13887_13962 = state_13861__$1;
(statearr_13887_13962[(2)] = inst_13814);

(statearr_13887_13962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (32))){
var inst_13801 = (state_13861[(20)]);
var inst_13802 = (state_13861[(9)]);
var inst_13803 = (state_13861[(21)]);
var inst_13804 = (state_13861[(12)]);
var inst_13816 = (state_13861[(2)]);
var inst_13817 = (inst_13804 + (1));
var tmp13882 = inst_13801;
var tmp13883 = inst_13802;
var tmp13884 = inst_13803;
var inst_13801__$1 = tmp13882;
var inst_13802__$1 = tmp13883;
var inst_13803__$1 = tmp13884;
var inst_13804__$1 = inst_13817;
var state_13861__$1 = (function (){var statearr_13888 = state_13861;
(statearr_13888[(20)] = inst_13801__$1);

(statearr_13888[(9)] = inst_13802__$1);

(statearr_13888[(21)] = inst_13803__$1);

(statearr_13888[(12)] = inst_13804__$1);

(statearr_13888[(22)] = inst_13816);

return statearr_13888;
})();
var statearr_13889_13963 = state_13861__$1;
(statearr_13889_13963[(2)] = null);

(statearr_13889_13963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (40))){
var inst_13829 = (state_13861[(23)]);
var inst_13833 = done.call(null,null);
var inst_13834 = cljs.core.async.untap_STAR_.call(null,m,inst_13829);
var state_13861__$1 = (function (){var statearr_13890 = state_13861;
(statearr_13890[(24)] = inst_13833);

return statearr_13890;
})();
var statearr_13891_13964 = state_13861__$1;
(statearr_13891_13964[(2)] = inst_13834);

(statearr_13891_13964[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (33))){
var inst_13820 = (state_13861[(25)]);
var inst_13822 = cljs.core.chunked_seq_QMARK_.call(null,inst_13820);
var state_13861__$1 = state_13861;
if(inst_13822){
var statearr_13892_13965 = state_13861__$1;
(statearr_13892_13965[(1)] = (36));

} else {
var statearr_13893_13966 = state_13861__$1;
(statearr_13893_13966[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (13))){
var inst_13752 = (state_13861[(26)]);
var inst_13755 = cljs.core.async.close_BANG_.call(null,inst_13752);
var state_13861__$1 = state_13861;
var statearr_13894_13967 = state_13861__$1;
(statearr_13894_13967[(2)] = inst_13755);

(statearr_13894_13967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (22))){
var inst_13773 = (state_13861[(8)]);
var inst_13776 = cljs.core.async.close_BANG_.call(null,inst_13773);
var state_13861__$1 = state_13861;
var statearr_13895_13968 = state_13861__$1;
(statearr_13895_13968[(2)] = inst_13776);

(statearr_13895_13968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (36))){
var inst_13820 = (state_13861[(25)]);
var inst_13824 = cljs.core.chunk_first.call(null,inst_13820);
var inst_13825 = cljs.core.chunk_rest.call(null,inst_13820);
var inst_13826 = cljs.core.count.call(null,inst_13824);
var inst_13801 = inst_13825;
var inst_13802 = inst_13824;
var inst_13803 = inst_13826;
var inst_13804 = (0);
var state_13861__$1 = (function (){var statearr_13896 = state_13861;
(statearr_13896[(20)] = inst_13801);

(statearr_13896[(9)] = inst_13802);

(statearr_13896[(21)] = inst_13803);

(statearr_13896[(12)] = inst_13804);

return statearr_13896;
})();
var statearr_13897_13969 = state_13861__$1;
(statearr_13897_13969[(2)] = null);

(statearr_13897_13969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (41))){
var inst_13820 = (state_13861[(25)]);
var inst_13836 = (state_13861[(2)]);
var inst_13837 = cljs.core.next.call(null,inst_13820);
var inst_13801 = inst_13837;
var inst_13802 = null;
var inst_13803 = (0);
var inst_13804 = (0);
var state_13861__$1 = (function (){var statearr_13898 = state_13861;
(statearr_13898[(20)] = inst_13801);

(statearr_13898[(9)] = inst_13802);

(statearr_13898[(21)] = inst_13803);

(statearr_13898[(27)] = inst_13836);

(statearr_13898[(12)] = inst_13804);

return statearr_13898;
})();
var statearr_13899_13970 = state_13861__$1;
(statearr_13899_13970[(2)] = null);

(statearr_13899_13970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (43))){
var state_13861__$1 = state_13861;
var statearr_13900_13971 = state_13861__$1;
(statearr_13900_13971[(2)] = null);

(statearr_13900_13971[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (29))){
var inst_13845 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13901_13972 = state_13861__$1;
(statearr_13901_13972[(2)] = inst_13845);

(statearr_13901_13972[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (44))){
var inst_13854 = (state_13861[(2)]);
var state_13861__$1 = (function (){var statearr_13902 = state_13861;
(statearr_13902[(28)] = inst_13854);

return statearr_13902;
})();
var statearr_13903_13973 = state_13861__$1;
(statearr_13903_13973[(2)] = null);

(statearr_13903_13973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (6))){
var inst_13793 = (state_13861[(29)]);
var inst_13792 = cljs.core.deref.call(null,cs);
var inst_13793__$1 = cljs.core.keys.call(null,inst_13792);
var inst_13794 = cljs.core.count.call(null,inst_13793__$1);
var inst_13795 = cljs.core.reset_BANG_.call(null,dctr,inst_13794);
var inst_13800 = cljs.core.seq.call(null,inst_13793__$1);
var inst_13801 = inst_13800;
var inst_13802 = null;
var inst_13803 = (0);
var inst_13804 = (0);
var state_13861__$1 = (function (){var statearr_13904 = state_13861;
(statearr_13904[(20)] = inst_13801);

(statearr_13904[(9)] = inst_13802);

(statearr_13904[(30)] = inst_13795);

(statearr_13904[(29)] = inst_13793__$1);

(statearr_13904[(21)] = inst_13803);

(statearr_13904[(12)] = inst_13804);

return statearr_13904;
})();
var statearr_13905_13974 = state_13861__$1;
(statearr_13905_13974[(2)] = null);

(statearr_13905_13974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (28))){
var inst_13801 = (state_13861[(20)]);
var inst_13820 = (state_13861[(25)]);
var inst_13820__$1 = cljs.core.seq.call(null,inst_13801);
var state_13861__$1 = (function (){var statearr_13906 = state_13861;
(statearr_13906[(25)] = inst_13820__$1);

return statearr_13906;
})();
if(inst_13820__$1){
var statearr_13907_13975 = state_13861__$1;
(statearr_13907_13975[(1)] = (33));

} else {
var statearr_13908_13976 = state_13861__$1;
(statearr_13908_13976[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (25))){
var inst_13803 = (state_13861[(21)]);
var inst_13804 = (state_13861[(12)]);
var inst_13806 = (inst_13804 < inst_13803);
var inst_13807 = inst_13806;
var state_13861__$1 = state_13861;
if(cljs.core.truth_(inst_13807)){
var statearr_13909_13977 = state_13861__$1;
(statearr_13909_13977[(1)] = (27));

} else {
var statearr_13910_13978 = state_13861__$1;
(statearr_13910_13978[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (34))){
var state_13861__$1 = state_13861;
var statearr_13911_13979 = state_13861__$1;
(statearr_13911_13979[(2)] = null);

(statearr_13911_13979[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (17))){
var state_13861__$1 = state_13861;
var statearr_13912_13980 = state_13861__$1;
(statearr_13912_13980[(2)] = null);

(statearr_13912_13980[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (3))){
var inst_13859 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13861__$1,inst_13859);
} else {
if((state_val_13862 === (12))){
var inst_13788 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13913_13981 = state_13861__$1;
(statearr_13913_13981[(2)] = inst_13788);

(statearr_13913_13981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (2))){
var state_13861__$1 = state_13861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13861__$1,(4),ch);
} else {
if((state_val_13862 === (23))){
var state_13861__$1 = state_13861;
var statearr_13914_13982 = state_13861__$1;
(statearr_13914_13982[(2)] = null);

(statearr_13914_13982[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (35))){
var inst_13843 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13915_13983 = state_13861__$1;
(statearr_13915_13983[(2)] = inst_13843);

(statearr_13915_13983[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (19))){
var inst_13762 = (state_13861[(7)]);
var inst_13766 = cljs.core.chunk_first.call(null,inst_13762);
var inst_13767 = cljs.core.chunk_rest.call(null,inst_13762);
var inst_13768 = cljs.core.count.call(null,inst_13766);
var inst_13742 = inst_13767;
var inst_13743 = inst_13766;
var inst_13744 = inst_13768;
var inst_13745 = (0);
var state_13861__$1 = (function (){var statearr_13916 = state_13861;
(statearr_13916[(13)] = inst_13745);

(statearr_13916[(14)] = inst_13744);

(statearr_13916[(15)] = inst_13742);

(statearr_13916[(17)] = inst_13743);

return statearr_13916;
})();
var statearr_13917_13984 = state_13861__$1;
(statearr_13917_13984[(2)] = null);

(statearr_13917_13984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (11))){
var inst_13742 = (state_13861[(15)]);
var inst_13762 = (state_13861[(7)]);
var inst_13762__$1 = cljs.core.seq.call(null,inst_13742);
var state_13861__$1 = (function (){var statearr_13918 = state_13861;
(statearr_13918[(7)] = inst_13762__$1);

return statearr_13918;
})();
if(inst_13762__$1){
var statearr_13919_13985 = state_13861__$1;
(statearr_13919_13985[(1)] = (16));

} else {
var statearr_13920_13986 = state_13861__$1;
(statearr_13920_13986[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (9))){
var inst_13790 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13921_13987 = state_13861__$1;
(statearr_13921_13987[(2)] = inst_13790);

(statearr_13921_13987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (5))){
var inst_13740 = cljs.core.deref.call(null,cs);
var inst_13741 = cljs.core.seq.call(null,inst_13740);
var inst_13742 = inst_13741;
var inst_13743 = null;
var inst_13744 = (0);
var inst_13745 = (0);
var state_13861__$1 = (function (){var statearr_13922 = state_13861;
(statearr_13922[(13)] = inst_13745);

(statearr_13922[(14)] = inst_13744);

(statearr_13922[(15)] = inst_13742);

(statearr_13922[(17)] = inst_13743);

return statearr_13922;
})();
var statearr_13923_13988 = state_13861__$1;
(statearr_13923_13988[(2)] = null);

(statearr_13923_13988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (14))){
var state_13861__$1 = state_13861;
var statearr_13924_13989 = state_13861__$1;
(statearr_13924_13989[(2)] = null);

(statearr_13924_13989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (45))){
var inst_13851 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13925_13990 = state_13861__$1;
(statearr_13925_13990[(2)] = inst_13851);

(statearr_13925_13990[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (26))){
var inst_13793 = (state_13861[(29)]);
var inst_13847 = (state_13861[(2)]);
var inst_13848 = cljs.core.seq.call(null,inst_13793);
var state_13861__$1 = (function (){var statearr_13926 = state_13861;
(statearr_13926[(31)] = inst_13847);

return statearr_13926;
})();
if(inst_13848){
var statearr_13927_13991 = state_13861__$1;
(statearr_13927_13991[(1)] = (42));

} else {
var statearr_13928_13992 = state_13861__$1;
(statearr_13928_13992[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (16))){
var inst_13762 = (state_13861[(7)]);
var inst_13764 = cljs.core.chunked_seq_QMARK_.call(null,inst_13762);
var state_13861__$1 = state_13861;
if(inst_13764){
var statearr_13929_13993 = state_13861__$1;
(statearr_13929_13993[(1)] = (19));

} else {
var statearr_13930_13994 = state_13861__$1;
(statearr_13930_13994[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (38))){
var inst_13840 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13931_13995 = state_13861__$1;
(statearr_13931_13995[(2)] = inst_13840);

(statearr_13931_13995[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (30))){
var state_13861__$1 = state_13861;
var statearr_13932_13996 = state_13861__$1;
(statearr_13932_13996[(2)] = null);

(statearr_13932_13996[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (10))){
var inst_13745 = (state_13861[(13)]);
var inst_13743 = (state_13861[(17)]);
var inst_13751 = cljs.core._nth.call(null,inst_13743,inst_13745);
var inst_13752 = cljs.core.nth.call(null,inst_13751,(0),null);
var inst_13753 = cljs.core.nth.call(null,inst_13751,(1),null);
var state_13861__$1 = (function (){var statearr_13933 = state_13861;
(statearr_13933[(26)] = inst_13752);

return statearr_13933;
})();
if(cljs.core.truth_(inst_13753)){
var statearr_13934_13997 = state_13861__$1;
(statearr_13934_13997[(1)] = (13));

} else {
var statearr_13935_13998 = state_13861__$1;
(statearr_13935_13998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (18))){
var inst_13786 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13936_13999 = state_13861__$1;
(statearr_13936_13999[(2)] = inst_13786);

(statearr_13936_13999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (42))){
var state_13861__$1 = state_13861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13861__$1,(45),dchan);
} else {
if((state_val_13862 === (37))){
var inst_13820 = (state_13861[(25)]);
var inst_13733 = (state_13861[(11)]);
var inst_13829 = (state_13861[(23)]);
var inst_13829__$1 = cljs.core.first.call(null,inst_13820);
var inst_13830 = cljs.core.async.put_BANG_.call(null,inst_13829__$1,inst_13733,done);
var state_13861__$1 = (function (){var statearr_13937 = state_13861;
(statearr_13937[(23)] = inst_13829__$1);

return statearr_13937;
})();
if(cljs.core.truth_(inst_13830)){
var statearr_13938_14000 = state_13861__$1;
(statearr_13938_14000[(1)] = (39));

} else {
var statearr_13939_14001 = state_13861__$1;
(statearr_13939_14001[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (8))){
var inst_13745 = (state_13861[(13)]);
var inst_13744 = (state_13861[(14)]);
var inst_13747 = (inst_13745 < inst_13744);
var inst_13748 = inst_13747;
var state_13861__$1 = state_13861;
if(cljs.core.truth_(inst_13748)){
var statearr_13940_14002 = state_13861__$1;
(statearr_13940_14002[(1)] = (10));

} else {
var statearr_13941_14003 = state_13861__$1;
(statearr_13941_14003[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__6706__auto___13949,cs,m,dchan,dctr,done))
;
return ((function (switch__6644__auto__,c__6706__auto___13949,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6645__auto__ = null;
var cljs$core$async$mult_$_state_machine__6645__auto____0 = (function (){
var statearr_13945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13945[(0)] = cljs$core$async$mult_$_state_machine__6645__auto__);

(statearr_13945[(1)] = (1));

return statearr_13945;
});
var cljs$core$async$mult_$_state_machine__6645__auto____1 = (function (state_13861){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e13946){if((e13946 instanceof Object)){
var ex__6648__auto__ = e13946;
var statearr_13947_14004 = state_13861;
(statearr_13947_14004[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14005 = state_13861;
state_13861 = G__14005;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6645__auto__ = function(state_13861){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6645__auto____1.call(this,state_13861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6645__auto____0;
cljs$core$async$mult_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6645__auto____1;
return cljs$core$async$mult_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___13949,cs,m,dchan,dctr,done))
})();
var state__6708__auto__ = (function (){var statearr_13948 = f__6707__auto__.call(null);
(statearr_13948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___13949);

return statearr_13948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___13949,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__14007 = arguments.length;
switch (G__14007) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj14010 = {};
return obj14010;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5260__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5260__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14015){
var map__14016 = p__14015;
var map__14016__$1 = ((cljs.core.seq_QMARK_.call(null,map__14016))?cljs.core.apply.call(null,cljs.core.hash_map,map__14016):map__14016);
var opts = map__14016__$1;
var statearr_14017_14020 = state;
(statearr_14017_14020[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__14016,map__14016__$1,opts){
return (function (val){
var statearr_14018_14021 = state;
(statearr_14018_14021[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14016,map__14016__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_14019_14022 = state;
(statearr_14019_14022[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14011){
var G__14012 = cljs.core.first.call(null,seq14011);
var seq14011__$1 = cljs.core.next.call(null,seq14011);
var G__14013 = cljs.core.first.call(null,seq14011__$1);
var seq14011__$2 = cljs.core.next.call(null,seq14011__$1);
var G__14014 = cljs.core.first.call(null,seq14011__$2);
var seq14011__$3 = cljs.core.next.call(null,seq14011__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14012,G__14013,G__14014,seq14011__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t14142 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14142 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14143){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14143 = meta14143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14142.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14142.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14142.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14142.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14142.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14142.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14142.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14142.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14144){
var self__ = this;
var _14144__$1 = this;
return self__.meta14143;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14144,meta14143__$1){
var self__ = this;
var _14144__$1 = this;
return (new cljs.core.async.t14142(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14143__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14142.cljs$lang$type = true;

cljs.core.async.t14142.cljs$lang$ctorStr = "cljs.core.async/t14142";

cljs.core.async.t14142.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t14142");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14142 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14142(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14143){
return (new cljs.core.async.t14142(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14143));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14142(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6706__auto___14261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___14261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___14261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14214){
var state_val_14215 = (state_14214[(1)]);
if((state_val_14215 === (7))){
var inst_14158 = (state_14214[(7)]);
var inst_14163 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14158);
var state_14214__$1 = state_14214;
var statearr_14216_14262 = state_14214__$1;
(statearr_14216_14262[(2)] = inst_14163);

(statearr_14216_14262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (20))){
var inst_14173 = (state_14214[(8)]);
var state_14214__$1 = state_14214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14214__$1,(23),out,inst_14173);
} else {
if((state_val_14215 === (1))){
var inst_14148 = (state_14214[(9)]);
var inst_14148__$1 = calc_state.call(null);
var inst_14149 = cljs.core.seq_QMARK_.call(null,inst_14148__$1);
var state_14214__$1 = (function (){var statearr_14217 = state_14214;
(statearr_14217[(9)] = inst_14148__$1);

return statearr_14217;
})();
if(inst_14149){
var statearr_14218_14263 = state_14214__$1;
(statearr_14218_14263[(1)] = (2));

} else {
var statearr_14219_14264 = state_14214__$1;
(statearr_14219_14264[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (24))){
var inst_14166 = (state_14214[(10)]);
var inst_14158 = inst_14166;
var state_14214__$1 = (function (){var statearr_14220 = state_14214;
(statearr_14220[(7)] = inst_14158);

return statearr_14220;
})();
var statearr_14221_14265 = state_14214__$1;
(statearr_14221_14265[(2)] = null);

(statearr_14221_14265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (4))){
var inst_14148 = (state_14214[(9)]);
var inst_14154 = (state_14214[(2)]);
var inst_14155 = cljs.core.get.call(null,inst_14154,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14156 = cljs.core.get.call(null,inst_14154,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14157 = cljs.core.get.call(null,inst_14154,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14158 = inst_14148;
var state_14214__$1 = (function (){var statearr_14222 = state_14214;
(statearr_14222[(11)] = inst_14156);

(statearr_14222[(12)] = inst_14157);

(statearr_14222[(7)] = inst_14158);

(statearr_14222[(13)] = inst_14155);

return statearr_14222;
})();
var statearr_14223_14266 = state_14214__$1;
(statearr_14223_14266[(2)] = null);

(statearr_14223_14266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (15))){
var state_14214__$1 = state_14214;
var statearr_14224_14267 = state_14214__$1;
(statearr_14224_14267[(2)] = null);

(statearr_14224_14267[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (21))){
var inst_14166 = (state_14214[(10)]);
var inst_14158 = inst_14166;
var state_14214__$1 = (function (){var statearr_14225 = state_14214;
(statearr_14225[(7)] = inst_14158);

return statearr_14225;
})();
var statearr_14226_14268 = state_14214__$1;
(statearr_14226_14268[(2)] = null);

(statearr_14226_14268[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (13))){
var inst_14210 = (state_14214[(2)]);
var state_14214__$1 = state_14214;
var statearr_14227_14269 = state_14214__$1;
(statearr_14227_14269[(2)] = inst_14210);

(statearr_14227_14269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (22))){
var inst_14208 = (state_14214[(2)]);
var state_14214__$1 = state_14214;
var statearr_14228_14270 = state_14214__$1;
(statearr_14228_14270[(2)] = inst_14208);

(statearr_14228_14270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (6))){
var inst_14212 = (state_14214[(2)]);
var state_14214__$1 = state_14214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14214__$1,inst_14212);
} else {
if((state_val_14215 === (25))){
var state_14214__$1 = state_14214;
var statearr_14229_14271 = state_14214__$1;
(statearr_14229_14271[(2)] = null);

(statearr_14229_14271[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (17))){
var inst_14188 = (state_14214[(14)]);
var state_14214__$1 = state_14214;
var statearr_14230_14272 = state_14214__$1;
(statearr_14230_14272[(2)] = inst_14188);

(statearr_14230_14272[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (3))){
var inst_14148 = (state_14214[(9)]);
var state_14214__$1 = state_14214;
var statearr_14231_14273 = state_14214__$1;
(statearr_14231_14273[(2)] = inst_14148);

(statearr_14231_14273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (12))){
var inst_14188 = (state_14214[(14)]);
var inst_14169 = (state_14214[(15)]);
var inst_14174 = (state_14214[(16)]);
var inst_14188__$1 = inst_14169.call(null,inst_14174);
var state_14214__$1 = (function (){var statearr_14232 = state_14214;
(statearr_14232[(14)] = inst_14188__$1);

return statearr_14232;
})();
if(cljs.core.truth_(inst_14188__$1)){
var statearr_14233_14274 = state_14214__$1;
(statearr_14233_14274[(1)] = (17));

} else {
var statearr_14234_14275 = state_14214__$1;
(statearr_14234_14275[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (2))){
var inst_14148 = (state_14214[(9)]);
var inst_14151 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14148);
var state_14214__$1 = state_14214;
var statearr_14235_14276 = state_14214__$1;
(statearr_14235_14276[(2)] = inst_14151);

(statearr_14235_14276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (23))){
var inst_14199 = (state_14214[(2)]);
var state_14214__$1 = state_14214;
if(cljs.core.truth_(inst_14199)){
var statearr_14236_14277 = state_14214__$1;
(statearr_14236_14277[(1)] = (24));

} else {
var statearr_14237_14278 = state_14214__$1;
(statearr_14237_14278[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (19))){
var inst_14196 = (state_14214[(2)]);
var state_14214__$1 = state_14214;
if(cljs.core.truth_(inst_14196)){
var statearr_14238_14279 = state_14214__$1;
(statearr_14238_14279[(1)] = (20));

} else {
var statearr_14239_14280 = state_14214__$1;
(statearr_14239_14280[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (11))){
var inst_14173 = (state_14214[(8)]);
var inst_14179 = (inst_14173 == null);
var state_14214__$1 = state_14214;
if(cljs.core.truth_(inst_14179)){
var statearr_14240_14281 = state_14214__$1;
(statearr_14240_14281[(1)] = (14));

} else {
var statearr_14241_14282 = state_14214__$1;
(statearr_14241_14282[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (9))){
var inst_14166 = (state_14214[(10)]);
var inst_14166__$1 = (state_14214[(2)]);
var inst_14167 = cljs.core.get.call(null,inst_14166__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14168 = cljs.core.get.call(null,inst_14166__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14169 = cljs.core.get.call(null,inst_14166__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_14214__$1 = (function (){var statearr_14242 = state_14214;
(statearr_14242[(10)] = inst_14166__$1);

(statearr_14242[(15)] = inst_14169);

(statearr_14242[(17)] = inst_14168);

return statearr_14242;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14214__$1,(10),inst_14167);
} else {
if((state_val_14215 === (5))){
var inst_14158 = (state_14214[(7)]);
var inst_14161 = cljs.core.seq_QMARK_.call(null,inst_14158);
var state_14214__$1 = state_14214;
if(inst_14161){
var statearr_14243_14283 = state_14214__$1;
(statearr_14243_14283[(1)] = (7));

} else {
var statearr_14244_14284 = state_14214__$1;
(statearr_14244_14284[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (14))){
var inst_14174 = (state_14214[(16)]);
var inst_14181 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14174);
var state_14214__$1 = state_14214;
var statearr_14245_14285 = state_14214__$1;
(statearr_14245_14285[(2)] = inst_14181);

(statearr_14245_14285[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (26))){
var inst_14204 = (state_14214[(2)]);
var state_14214__$1 = state_14214;
var statearr_14246_14286 = state_14214__$1;
(statearr_14246_14286[(2)] = inst_14204);

(statearr_14246_14286[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (16))){
var inst_14184 = (state_14214[(2)]);
var inst_14185 = calc_state.call(null);
var inst_14158 = inst_14185;
var state_14214__$1 = (function (){var statearr_14247 = state_14214;
(statearr_14247[(18)] = inst_14184);

(statearr_14247[(7)] = inst_14158);

return statearr_14247;
})();
var statearr_14248_14287 = state_14214__$1;
(statearr_14248_14287[(2)] = null);

(statearr_14248_14287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (10))){
var inst_14173 = (state_14214[(8)]);
var inst_14174 = (state_14214[(16)]);
var inst_14172 = (state_14214[(2)]);
var inst_14173__$1 = cljs.core.nth.call(null,inst_14172,(0),null);
var inst_14174__$1 = cljs.core.nth.call(null,inst_14172,(1),null);
var inst_14175 = (inst_14173__$1 == null);
var inst_14176 = cljs.core._EQ_.call(null,inst_14174__$1,change);
var inst_14177 = (inst_14175) || (inst_14176);
var state_14214__$1 = (function (){var statearr_14249 = state_14214;
(statearr_14249[(8)] = inst_14173__$1);

(statearr_14249[(16)] = inst_14174__$1);

return statearr_14249;
})();
if(cljs.core.truth_(inst_14177)){
var statearr_14250_14288 = state_14214__$1;
(statearr_14250_14288[(1)] = (11));

} else {
var statearr_14251_14289 = state_14214__$1;
(statearr_14251_14289[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (18))){
var inst_14169 = (state_14214[(15)]);
var inst_14168 = (state_14214[(17)]);
var inst_14174 = (state_14214[(16)]);
var inst_14191 = cljs.core.empty_QMARK_.call(null,inst_14169);
var inst_14192 = inst_14168.call(null,inst_14174);
var inst_14193 = cljs.core.not.call(null,inst_14192);
var inst_14194 = (inst_14191) && (inst_14193);
var state_14214__$1 = state_14214;
var statearr_14252_14290 = state_14214__$1;
(statearr_14252_14290[(2)] = inst_14194);

(statearr_14252_14290[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14215 === (8))){
var inst_14158 = (state_14214[(7)]);
var state_14214__$1 = state_14214;
var statearr_14253_14291 = state_14214__$1;
(statearr_14253_14291[(2)] = inst_14158);

(statearr_14253_14291[(1)] = (9));


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
});})(c__6706__auto___14261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6644__auto__,c__6706__auto___14261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6645__auto__ = null;
var cljs$core$async$mix_$_state_machine__6645__auto____0 = (function (){
var statearr_14257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14257[(0)] = cljs$core$async$mix_$_state_machine__6645__auto__);

(statearr_14257[(1)] = (1));

return statearr_14257;
});
var cljs$core$async$mix_$_state_machine__6645__auto____1 = (function (state_14214){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_14214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e14258){if((e14258 instanceof Object)){
var ex__6648__auto__ = e14258;
var statearr_14259_14292 = state_14214;
(statearr_14259_14292[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14293 = state_14214;
state_14214 = G__14293;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6645__auto__ = function(state_14214){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6645__auto____1.call(this,state_14214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6645__auto____0;
cljs$core$async$mix_$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6645__auto____1;
return cljs$core$async$mix_$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___14261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6708__auto__ = (function (){var statearr_14260 = f__6707__auto__.call(null);
(statearr_14260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___14261);

return statearr_14260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___14261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj14295 = {};
return obj14295;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4208__auto__ = p;
if(and__4208__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4208__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4856__auto__ = (((p == null))?null:p);
return (function (){var or__4220__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4208__auto__ = p;
if(and__4208__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4208__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4856__auto__ = (((p == null))?null:p);
return (function (){var or__4220__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__14297 = arguments.length;
switch (G__14297) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4208__auto__ = p;
if(and__4208__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4208__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4856__auto__ = (((p == null))?null:p);
return (function (){var or__4220__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4208__auto__ = p;
if(and__4208__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4856__auto__ = (((p == null))?null:p);
return (function (){var or__4220__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__14301 = arguments.length;
switch (G__14301) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4220__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4220__auto__,mults){
return (function (p1__14299_SHARP_){
if(cljs.core.truth_(p1__14299_SHARP_.call(null,topic))){
return p1__14299_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14299_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4220__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14302 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14302 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta14303){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta14303 = meta14303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14302.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14302.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14302.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t14302.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14302.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14302.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14302.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14304){
var self__ = this;
var _14304__$1 = this;
return self__.meta14303;
});})(mults,ensure_mult))
;

cljs.core.async.t14302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14304,meta14303__$1){
var self__ = this;
var _14304__$1 = this;
return (new cljs.core.async.t14302(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta14303__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14302.cljs$lang$type = true;

cljs.core.async.t14302.cljs$lang$ctorStr = "cljs.core.async/t14302";

cljs.core.async.t14302.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t14302");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14302 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t14302(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14303){
return (new cljs.core.async.t14302(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14303));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14302(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6706__auto___14425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___14425,mults,ensure_mult,p){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___14425,mults,ensure_mult,p){
return (function (state_14376){
var state_val_14377 = (state_14376[(1)]);
if((state_val_14377 === (7))){
var inst_14372 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14378_14426 = state_14376__$1;
(statearr_14378_14426[(2)] = inst_14372);

(statearr_14378_14426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (20))){
var state_14376__$1 = state_14376;
var statearr_14379_14427 = state_14376__$1;
(statearr_14379_14427[(2)] = null);

(statearr_14379_14427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (1))){
var state_14376__$1 = state_14376;
var statearr_14380_14428 = state_14376__$1;
(statearr_14380_14428[(2)] = null);

(statearr_14380_14428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (24))){
var inst_14355 = (state_14376[(7)]);
var inst_14364 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14355);
var state_14376__$1 = state_14376;
var statearr_14381_14429 = state_14376__$1;
(statearr_14381_14429[(2)] = inst_14364);

(statearr_14381_14429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (4))){
var inst_14307 = (state_14376[(8)]);
var inst_14307__$1 = (state_14376[(2)]);
var inst_14308 = (inst_14307__$1 == null);
var state_14376__$1 = (function (){var statearr_14382 = state_14376;
(statearr_14382[(8)] = inst_14307__$1);

return statearr_14382;
})();
if(cljs.core.truth_(inst_14308)){
var statearr_14383_14430 = state_14376__$1;
(statearr_14383_14430[(1)] = (5));

} else {
var statearr_14384_14431 = state_14376__$1;
(statearr_14384_14431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (15))){
var inst_14349 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14385_14432 = state_14376__$1;
(statearr_14385_14432[(2)] = inst_14349);

(statearr_14385_14432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (21))){
var inst_14369 = (state_14376[(2)]);
var state_14376__$1 = (function (){var statearr_14386 = state_14376;
(statearr_14386[(9)] = inst_14369);

return statearr_14386;
})();
var statearr_14387_14433 = state_14376__$1;
(statearr_14387_14433[(2)] = null);

(statearr_14387_14433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (13))){
var inst_14331 = (state_14376[(10)]);
var inst_14333 = cljs.core.chunked_seq_QMARK_.call(null,inst_14331);
var state_14376__$1 = state_14376;
if(inst_14333){
var statearr_14388_14434 = state_14376__$1;
(statearr_14388_14434[(1)] = (16));

} else {
var statearr_14389_14435 = state_14376__$1;
(statearr_14389_14435[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (22))){
var inst_14361 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
if(cljs.core.truth_(inst_14361)){
var statearr_14390_14436 = state_14376__$1;
(statearr_14390_14436[(1)] = (23));

} else {
var statearr_14391_14437 = state_14376__$1;
(statearr_14391_14437[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (6))){
var inst_14307 = (state_14376[(8)]);
var inst_14355 = (state_14376[(7)]);
var inst_14357 = (state_14376[(11)]);
var inst_14355__$1 = topic_fn.call(null,inst_14307);
var inst_14356 = cljs.core.deref.call(null,mults);
var inst_14357__$1 = cljs.core.get.call(null,inst_14356,inst_14355__$1);
var state_14376__$1 = (function (){var statearr_14392 = state_14376;
(statearr_14392[(7)] = inst_14355__$1);

(statearr_14392[(11)] = inst_14357__$1);

return statearr_14392;
})();
if(cljs.core.truth_(inst_14357__$1)){
var statearr_14393_14438 = state_14376__$1;
(statearr_14393_14438[(1)] = (19));

} else {
var statearr_14394_14439 = state_14376__$1;
(statearr_14394_14439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (25))){
var inst_14366 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14395_14440 = state_14376__$1;
(statearr_14395_14440[(2)] = inst_14366);

(statearr_14395_14440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (17))){
var inst_14331 = (state_14376[(10)]);
var inst_14340 = cljs.core.first.call(null,inst_14331);
var inst_14341 = cljs.core.async.muxch_STAR_.call(null,inst_14340);
var inst_14342 = cljs.core.async.close_BANG_.call(null,inst_14341);
var inst_14343 = cljs.core.next.call(null,inst_14331);
var inst_14317 = inst_14343;
var inst_14318 = null;
var inst_14319 = (0);
var inst_14320 = (0);
var state_14376__$1 = (function (){var statearr_14396 = state_14376;
(statearr_14396[(12)] = inst_14320);

(statearr_14396[(13)] = inst_14319);

(statearr_14396[(14)] = inst_14342);

(statearr_14396[(15)] = inst_14317);

(statearr_14396[(16)] = inst_14318);

return statearr_14396;
})();
var statearr_14397_14441 = state_14376__$1;
(statearr_14397_14441[(2)] = null);

(statearr_14397_14441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (3))){
var inst_14374 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14376__$1,inst_14374);
} else {
if((state_val_14377 === (12))){
var inst_14351 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14398_14442 = state_14376__$1;
(statearr_14398_14442[(2)] = inst_14351);

(statearr_14398_14442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (2))){
var state_14376__$1 = state_14376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14376__$1,(4),ch);
} else {
if((state_val_14377 === (23))){
var state_14376__$1 = state_14376;
var statearr_14399_14443 = state_14376__$1;
(statearr_14399_14443[(2)] = null);

(statearr_14399_14443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (19))){
var inst_14307 = (state_14376[(8)]);
var inst_14357 = (state_14376[(11)]);
var inst_14359 = cljs.core.async.muxch_STAR_.call(null,inst_14357);
var state_14376__$1 = state_14376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14376__$1,(22),inst_14359,inst_14307);
} else {
if((state_val_14377 === (11))){
var inst_14331 = (state_14376[(10)]);
var inst_14317 = (state_14376[(15)]);
var inst_14331__$1 = cljs.core.seq.call(null,inst_14317);
var state_14376__$1 = (function (){var statearr_14400 = state_14376;
(statearr_14400[(10)] = inst_14331__$1);

return statearr_14400;
})();
if(inst_14331__$1){
var statearr_14401_14444 = state_14376__$1;
(statearr_14401_14444[(1)] = (13));

} else {
var statearr_14402_14445 = state_14376__$1;
(statearr_14402_14445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (9))){
var inst_14353 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14403_14446 = state_14376__$1;
(statearr_14403_14446[(2)] = inst_14353);

(statearr_14403_14446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (5))){
var inst_14314 = cljs.core.deref.call(null,mults);
var inst_14315 = cljs.core.vals.call(null,inst_14314);
var inst_14316 = cljs.core.seq.call(null,inst_14315);
var inst_14317 = inst_14316;
var inst_14318 = null;
var inst_14319 = (0);
var inst_14320 = (0);
var state_14376__$1 = (function (){var statearr_14404 = state_14376;
(statearr_14404[(12)] = inst_14320);

(statearr_14404[(13)] = inst_14319);

(statearr_14404[(15)] = inst_14317);

(statearr_14404[(16)] = inst_14318);

return statearr_14404;
})();
var statearr_14405_14447 = state_14376__$1;
(statearr_14405_14447[(2)] = null);

(statearr_14405_14447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (14))){
var state_14376__$1 = state_14376;
var statearr_14409_14448 = state_14376__$1;
(statearr_14409_14448[(2)] = null);

(statearr_14409_14448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (16))){
var inst_14331 = (state_14376[(10)]);
var inst_14335 = cljs.core.chunk_first.call(null,inst_14331);
var inst_14336 = cljs.core.chunk_rest.call(null,inst_14331);
var inst_14337 = cljs.core.count.call(null,inst_14335);
var inst_14317 = inst_14336;
var inst_14318 = inst_14335;
var inst_14319 = inst_14337;
var inst_14320 = (0);
var state_14376__$1 = (function (){var statearr_14410 = state_14376;
(statearr_14410[(12)] = inst_14320);

(statearr_14410[(13)] = inst_14319);

(statearr_14410[(15)] = inst_14317);

(statearr_14410[(16)] = inst_14318);

return statearr_14410;
})();
var statearr_14411_14449 = state_14376__$1;
(statearr_14411_14449[(2)] = null);

(statearr_14411_14449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (10))){
var inst_14320 = (state_14376[(12)]);
var inst_14319 = (state_14376[(13)]);
var inst_14317 = (state_14376[(15)]);
var inst_14318 = (state_14376[(16)]);
var inst_14325 = cljs.core._nth.call(null,inst_14318,inst_14320);
var inst_14326 = cljs.core.async.muxch_STAR_.call(null,inst_14325);
var inst_14327 = cljs.core.async.close_BANG_.call(null,inst_14326);
var inst_14328 = (inst_14320 + (1));
var tmp14406 = inst_14319;
var tmp14407 = inst_14317;
var tmp14408 = inst_14318;
var inst_14317__$1 = tmp14407;
var inst_14318__$1 = tmp14408;
var inst_14319__$1 = tmp14406;
var inst_14320__$1 = inst_14328;
var state_14376__$1 = (function (){var statearr_14412 = state_14376;
(statearr_14412[(12)] = inst_14320__$1);

(statearr_14412[(13)] = inst_14319__$1);

(statearr_14412[(17)] = inst_14327);

(statearr_14412[(15)] = inst_14317__$1);

(statearr_14412[(16)] = inst_14318__$1);

return statearr_14412;
})();
var statearr_14413_14450 = state_14376__$1;
(statearr_14413_14450[(2)] = null);

(statearr_14413_14450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (18))){
var inst_14346 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14414_14451 = state_14376__$1;
(statearr_14414_14451[(2)] = inst_14346);

(statearr_14414_14451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (8))){
var inst_14320 = (state_14376[(12)]);
var inst_14319 = (state_14376[(13)]);
var inst_14322 = (inst_14320 < inst_14319);
var inst_14323 = inst_14322;
var state_14376__$1 = state_14376;
if(cljs.core.truth_(inst_14323)){
var statearr_14415_14452 = state_14376__$1;
(statearr_14415_14452[(1)] = (10));

} else {
var statearr_14416_14453 = state_14376__$1;
(statearr_14416_14453[(1)] = (11));

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
});})(c__6706__auto___14425,mults,ensure_mult,p))
;
return ((function (switch__6644__auto__,c__6706__auto___14425,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6645__auto__ = null;
var cljs$core$async$state_machine__6645__auto____0 = (function (){
var statearr_14420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14420[(0)] = cljs$core$async$state_machine__6645__auto__);

(statearr_14420[(1)] = (1));

return statearr_14420;
});
var cljs$core$async$state_machine__6645__auto____1 = (function (state_14376){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_14376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e14421){if((e14421 instanceof Object)){
var ex__6648__auto__ = e14421;
var statearr_14422_14454 = state_14376;
(statearr_14422_14454[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14455 = state_14376;
state_14376 = G__14455;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$state_machine__6645__auto__ = function(state_14376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6645__auto____1.call(this,state_14376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6645__auto____0;
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6645__auto____1;
return cljs$core$async$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___14425,mults,ensure_mult,p))
})();
var state__6708__auto__ = (function (){var statearr_14423 = f__6707__auto__.call(null);
(statearr_14423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___14425);

return statearr_14423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___14425,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__14457 = arguments.length;
switch (G__14457) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__14460 = arguments.length;
switch (G__14460) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__14463 = arguments.length;
switch (G__14463) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6706__auto___14533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___14533,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___14533,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14502){
var state_val_14503 = (state_14502[(1)]);
if((state_val_14503 === (7))){
var state_14502__$1 = state_14502;
var statearr_14504_14534 = state_14502__$1;
(statearr_14504_14534[(2)] = null);

(statearr_14504_14534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (1))){
var state_14502__$1 = state_14502;
var statearr_14505_14535 = state_14502__$1;
(statearr_14505_14535[(2)] = null);

(statearr_14505_14535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (4))){
var inst_14466 = (state_14502[(7)]);
var inst_14468 = (inst_14466 < cnt);
var state_14502__$1 = state_14502;
if(cljs.core.truth_(inst_14468)){
var statearr_14506_14536 = state_14502__$1;
(statearr_14506_14536[(1)] = (6));

} else {
var statearr_14507_14537 = state_14502__$1;
(statearr_14507_14537[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (15))){
var inst_14498 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
var statearr_14508_14538 = state_14502__$1;
(statearr_14508_14538[(2)] = inst_14498);

(statearr_14508_14538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (13))){
var inst_14491 = cljs.core.async.close_BANG_.call(null,out);
var state_14502__$1 = state_14502;
var statearr_14509_14539 = state_14502__$1;
(statearr_14509_14539[(2)] = inst_14491);

(statearr_14509_14539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (6))){
var state_14502__$1 = state_14502;
var statearr_14510_14540 = state_14502__$1;
(statearr_14510_14540[(2)] = null);

(statearr_14510_14540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (3))){
var inst_14500 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14502__$1,inst_14500);
} else {
if((state_val_14503 === (12))){
var inst_14488 = (state_14502[(8)]);
var inst_14488__$1 = (state_14502[(2)]);
var inst_14489 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14488__$1);
var state_14502__$1 = (function (){var statearr_14511 = state_14502;
(statearr_14511[(8)] = inst_14488__$1);

return statearr_14511;
})();
if(cljs.core.truth_(inst_14489)){
var statearr_14512_14541 = state_14502__$1;
(statearr_14512_14541[(1)] = (13));

} else {
var statearr_14513_14542 = state_14502__$1;
(statearr_14513_14542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (2))){
var inst_14465 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14466 = (0);
var state_14502__$1 = (function (){var statearr_14514 = state_14502;
(statearr_14514[(7)] = inst_14466);

(statearr_14514[(9)] = inst_14465);

return statearr_14514;
})();
var statearr_14515_14543 = state_14502__$1;
(statearr_14515_14543[(2)] = null);

(statearr_14515_14543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (11))){
var inst_14466 = (state_14502[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14502,(10),Object,null,(9));
var inst_14475 = chs__$1.call(null,inst_14466);
var inst_14476 = done.call(null,inst_14466);
var inst_14477 = cljs.core.async.take_BANG_.call(null,inst_14475,inst_14476);
var state_14502__$1 = state_14502;
var statearr_14516_14544 = state_14502__$1;
(statearr_14516_14544[(2)] = inst_14477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14502__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (9))){
var inst_14466 = (state_14502[(7)]);
var inst_14479 = (state_14502[(2)]);
var inst_14480 = (inst_14466 + (1));
var inst_14466__$1 = inst_14480;
var state_14502__$1 = (function (){var statearr_14517 = state_14502;
(statearr_14517[(7)] = inst_14466__$1);

(statearr_14517[(10)] = inst_14479);

return statearr_14517;
})();
var statearr_14518_14545 = state_14502__$1;
(statearr_14518_14545[(2)] = null);

(statearr_14518_14545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (5))){
var inst_14486 = (state_14502[(2)]);
var state_14502__$1 = (function (){var statearr_14519 = state_14502;
(statearr_14519[(11)] = inst_14486);

return statearr_14519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14502__$1,(12),dchan);
} else {
if((state_val_14503 === (14))){
var inst_14488 = (state_14502[(8)]);
var inst_14493 = cljs.core.apply.call(null,f,inst_14488);
var state_14502__$1 = state_14502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14502__$1,(16),out,inst_14493);
} else {
if((state_val_14503 === (16))){
var inst_14495 = (state_14502[(2)]);
var state_14502__$1 = (function (){var statearr_14520 = state_14502;
(statearr_14520[(12)] = inst_14495);

return statearr_14520;
})();
var statearr_14521_14546 = state_14502__$1;
(statearr_14521_14546[(2)] = null);

(statearr_14521_14546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (10))){
var inst_14470 = (state_14502[(2)]);
var inst_14471 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14502__$1 = (function (){var statearr_14522 = state_14502;
(statearr_14522[(13)] = inst_14470);

return statearr_14522;
})();
var statearr_14523_14547 = state_14502__$1;
(statearr_14523_14547[(2)] = inst_14471);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14502__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (8))){
var inst_14484 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
var statearr_14524_14548 = state_14502__$1;
(statearr_14524_14548[(2)] = inst_14484);

(statearr_14524_14548[(1)] = (5));


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
});})(c__6706__auto___14533,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6644__auto__,c__6706__auto___14533,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6645__auto__ = null;
var cljs$core$async$state_machine__6645__auto____0 = (function (){
var statearr_14528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14528[(0)] = cljs$core$async$state_machine__6645__auto__);

(statearr_14528[(1)] = (1));

return statearr_14528;
});
var cljs$core$async$state_machine__6645__auto____1 = (function (state_14502){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_14502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e14529){if((e14529 instanceof Object)){
var ex__6648__auto__ = e14529;
var statearr_14530_14549 = state_14502;
(statearr_14530_14549[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14550 = state_14502;
state_14502 = G__14550;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$state_machine__6645__auto__ = function(state_14502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6645__auto____1.call(this,state_14502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6645__auto____0;
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6645__auto____1;
return cljs$core$async$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___14533,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6708__auto__ = (function (){var statearr_14531 = f__6707__auto__.call(null);
(statearr_14531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___14533);

return statearr_14531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___14533,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__14553 = arguments.length;
switch (G__14553) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6706__auto___14608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___14608,out){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___14608,out){
return (function (state_14583){
var state_val_14584 = (state_14583[(1)]);
if((state_val_14584 === (7))){
var inst_14562 = (state_14583[(7)]);
var inst_14563 = (state_14583[(8)]);
var inst_14562__$1 = (state_14583[(2)]);
var inst_14563__$1 = cljs.core.nth.call(null,inst_14562__$1,(0),null);
var inst_14564 = cljs.core.nth.call(null,inst_14562__$1,(1),null);
var inst_14565 = (inst_14563__$1 == null);
var state_14583__$1 = (function (){var statearr_14585 = state_14583;
(statearr_14585[(7)] = inst_14562__$1);

(statearr_14585[(9)] = inst_14564);

(statearr_14585[(8)] = inst_14563__$1);

return statearr_14585;
})();
if(cljs.core.truth_(inst_14565)){
var statearr_14586_14609 = state_14583__$1;
(statearr_14586_14609[(1)] = (8));

} else {
var statearr_14587_14610 = state_14583__$1;
(statearr_14587_14610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (1))){
var inst_14554 = cljs.core.vec.call(null,chs);
var inst_14555 = inst_14554;
var state_14583__$1 = (function (){var statearr_14588 = state_14583;
(statearr_14588[(10)] = inst_14555);

return statearr_14588;
})();
var statearr_14589_14611 = state_14583__$1;
(statearr_14589_14611[(2)] = null);

(statearr_14589_14611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (4))){
var inst_14555 = (state_14583[(10)]);
var state_14583__$1 = state_14583;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14583__$1,(7),inst_14555);
} else {
if((state_val_14584 === (6))){
var inst_14579 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
var statearr_14590_14612 = state_14583__$1;
(statearr_14590_14612[(2)] = inst_14579);

(statearr_14590_14612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (3))){
var inst_14581 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14583__$1,inst_14581);
} else {
if((state_val_14584 === (2))){
var inst_14555 = (state_14583[(10)]);
var inst_14557 = cljs.core.count.call(null,inst_14555);
var inst_14558 = (inst_14557 > (0));
var state_14583__$1 = state_14583;
if(cljs.core.truth_(inst_14558)){
var statearr_14592_14613 = state_14583__$1;
(statearr_14592_14613[(1)] = (4));

} else {
var statearr_14593_14614 = state_14583__$1;
(statearr_14593_14614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (11))){
var inst_14555 = (state_14583[(10)]);
var inst_14572 = (state_14583[(2)]);
var tmp14591 = inst_14555;
var inst_14555__$1 = tmp14591;
var state_14583__$1 = (function (){var statearr_14594 = state_14583;
(statearr_14594[(11)] = inst_14572);

(statearr_14594[(10)] = inst_14555__$1);

return statearr_14594;
})();
var statearr_14595_14615 = state_14583__$1;
(statearr_14595_14615[(2)] = null);

(statearr_14595_14615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (9))){
var inst_14563 = (state_14583[(8)]);
var state_14583__$1 = state_14583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14583__$1,(11),out,inst_14563);
} else {
if((state_val_14584 === (5))){
var inst_14577 = cljs.core.async.close_BANG_.call(null,out);
var state_14583__$1 = state_14583;
var statearr_14596_14616 = state_14583__$1;
(statearr_14596_14616[(2)] = inst_14577);

(statearr_14596_14616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (10))){
var inst_14575 = (state_14583[(2)]);
var state_14583__$1 = state_14583;
var statearr_14597_14617 = state_14583__$1;
(statearr_14597_14617[(2)] = inst_14575);

(statearr_14597_14617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14584 === (8))){
var inst_14562 = (state_14583[(7)]);
var inst_14564 = (state_14583[(9)]);
var inst_14563 = (state_14583[(8)]);
var inst_14555 = (state_14583[(10)]);
var inst_14567 = (function (){var c = inst_14564;
var v = inst_14563;
var vec__14560 = inst_14562;
var cs = inst_14555;
return ((function (c,v,vec__14560,cs,inst_14562,inst_14564,inst_14563,inst_14555,state_val_14584,c__6706__auto___14608,out){
return (function (p1__14551_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14551_SHARP_);
});
;})(c,v,vec__14560,cs,inst_14562,inst_14564,inst_14563,inst_14555,state_val_14584,c__6706__auto___14608,out))
})();
var inst_14568 = cljs.core.filterv.call(null,inst_14567,inst_14555);
var inst_14555__$1 = inst_14568;
var state_14583__$1 = (function (){var statearr_14598 = state_14583;
(statearr_14598[(10)] = inst_14555__$1);

return statearr_14598;
})();
var statearr_14599_14618 = state_14583__$1;
(statearr_14599_14618[(2)] = null);

(statearr_14599_14618[(1)] = (2));


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
});})(c__6706__auto___14608,out))
;
return ((function (switch__6644__auto__,c__6706__auto___14608,out){
return (function() {
var cljs$core$async$state_machine__6645__auto__ = null;
var cljs$core$async$state_machine__6645__auto____0 = (function (){
var statearr_14603 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14603[(0)] = cljs$core$async$state_machine__6645__auto__);

(statearr_14603[(1)] = (1));

return statearr_14603;
});
var cljs$core$async$state_machine__6645__auto____1 = (function (state_14583){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_14583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e14604){if((e14604 instanceof Object)){
var ex__6648__auto__ = e14604;
var statearr_14605_14619 = state_14583;
(statearr_14605_14619[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14620 = state_14583;
state_14583 = G__14620;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$state_machine__6645__auto__ = function(state_14583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6645__auto____1.call(this,state_14583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6645__auto____0;
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6645__auto____1;
return cljs$core$async$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___14608,out))
})();
var state__6708__auto__ = (function (){var statearr_14606 = f__6707__auto__.call(null);
(statearr_14606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___14608);

return statearr_14606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___14608,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__14622 = arguments.length;
switch (G__14622) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6706__auto___14670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___14670,out){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___14670,out){
return (function (state_14646){
var state_val_14647 = (state_14646[(1)]);
if((state_val_14647 === (7))){
var inst_14628 = (state_14646[(7)]);
var inst_14628__$1 = (state_14646[(2)]);
var inst_14629 = (inst_14628__$1 == null);
var inst_14630 = cljs.core.not.call(null,inst_14629);
var state_14646__$1 = (function (){var statearr_14648 = state_14646;
(statearr_14648[(7)] = inst_14628__$1);

return statearr_14648;
})();
if(inst_14630){
var statearr_14649_14671 = state_14646__$1;
(statearr_14649_14671[(1)] = (8));

} else {
var statearr_14650_14672 = state_14646__$1;
(statearr_14650_14672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (1))){
var inst_14623 = (0);
var state_14646__$1 = (function (){var statearr_14651 = state_14646;
(statearr_14651[(8)] = inst_14623);

return statearr_14651;
})();
var statearr_14652_14673 = state_14646__$1;
(statearr_14652_14673[(2)] = null);

(statearr_14652_14673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (4))){
var state_14646__$1 = state_14646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14646__$1,(7),ch);
} else {
if((state_val_14647 === (6))){
var inst_14641 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14653_14674 = state_14646__$1;
(statearr_14653_14674[(2)] = inst_14641);

(statearr_14653_14674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (3))){
var inst_14643 = (state_14646[(2)]);
var inst_14644 = cljs.core.async.close_BANG_.call(null,out);
var state_14646__$1 = (function (){var statearr_14654 = state_14646;
(statearr_14654[(9)] = inst_14643);

return statearr_14654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14646__$1,inst_14644);
} else {
if((state_val_14647 === (2))){
var inst_14623 = (state_14646[(8)]);
var inst_14625 = (inst_14623 < n);
var state_14646__$1 = state_14646;
if(cljs.core.truth_(inst_14625)){
var statearr_14655_14675 = state_14646__$1;
(statearr_14655_14675[(1)] = (4));

} else {
var statearr_14656_14676 = state_14646__$1;
(statearr_14656_14676[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (11))){
var inst_14623 = (state_14646[(8)]);
var inst_14633 = (state_14646[(2)]);
var inst_14634 = (inst_14623 + (1));
var inst_14623__$1 = inst_14634;
var state_14646__$1 = (function (){var statearr_14657 = state_14646;
(statearr_14657[(8)] = inst_14623__$1);

(statearr_14657[(10)] = inst_14633);

return statearr_14657;
})();
var statearr_14658_14677 = state_14646__$1;
(statearr_14658_14677[(2)] = null);

(statearr_14658_14677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (9))){
var state_14646__$1 = state_14646;
var statearr_14659_14678 = state_14646__$1;
(statearr_14659_14678[(2)] = null);

(statearr_14659_14678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (5))){
var state_14646__$1 = state_14646;
var statearr_14660_14679 = state_14646__$1;
(statearr_14660_14679[(2)] = null);

(statearr_14660_14679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (10))){
var inst_14638 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14661_14680 = state_14646__$1;
(statearr_14661_14680[(2)] = inst_14638);

(statearr_14661_14680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (8))){
var inst_14628 = (state_14646[(7)]);
var state_14646__$1 = state_14646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14646__$1,(11),out,inst_14628);
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
});})(c__6706__auto___14670,out))
;
return ((function (switch__6644__auto__,c__6706__auto___14670,out){
return (function() {
var cljs$core$async$state_machine__6645__auto__ = null;
var cljs$core$async$state_machine__6645__auto____0 = (function (){
var statearr_14665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14665[(0)] = cljs$core$async$state_machine__6645__auto__);

(statearr_14665[(1)] = (1));

return statearr_14665;
});
var cljs$core$async$state_machine__6645__auto____1 = (function (state_14646){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_14646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e14666){if((e14666 instanceof Object)){
var ex__6648__auto__ = e14666;
var statearr_14667_14681 = state_14646;
(statearr_14667_14681[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14682 = state_14646;
state_14646 = G__14682;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$state_machine__6645__auto__ = function(state_14646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6645__auto____1.call(this,state_14646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6645__auto____0;
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6645__auto____1;
return cljs$core$async$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___14670,out))
})();
var state__6708__auto__ = (function (){var statearr_14668 = f__6707__auto__.call(null);
(statearr_14668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___14670);

return statearr_14668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___14670,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t14690 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14690 = (function (ch,f,map_LT_,meta14691){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14691 = meta14691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14690.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14690.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14693 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14693 = (function (fn1,_,meta14691,map_LT_,f,ch,meta14694){
this.fn1 = fn1;
this._ = _;
this.meta14691 = meta14691;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14694 = meta14694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14693.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14683_SHARP_){
return f1.call(null,(((p1__14683_SHARP_ == null))?null:self__.f.call(null,p1__14683_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14695){
var self__ = this;
var _14695__$1 = this;
return self__.meta14694;
});})(___$1))
;

cljs.core.async.t14693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14695,meta14694__$1){
var self__ = this;
var _14695__$1 = this;
return (new cljs.core.async.t14693(self__.fn1,self__._,self__.meta14691,self__.map_LT_,self__.f,self__.ch,meta14694__$1));
});})(___$1))
;

cljs.core.async.t14693.cljs$lang$type = true;

cljs.core.async.t14693.cljs$lang$ctorStr = "cljs.core.async/t14693";

cljs.core.async.t14693.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t14693");
});})(___$1))
;

cljs.core.async.__GT_t14693 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t14693(fn1__$1,___$2,meta14691__$1,map_LT___$1,f__$1,ch__$1,meta14694){
return (new cljs.core.async.t14693(fn1__$1,___$2,meta14691__$1,map_LT___$1,f__$1,ch__$1,meta14694));
});})(___$1))
;

}

return (new cljs.core.async.t14693(fn1,___$1,self__.meta14691,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4208__auto__ = ret;
if(cljs.core.truth_(and__4208__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4208__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t14690.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14690.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14692){
var self__ = this;
var _14692__$1 = this;
return self__.meta14691;
});

cljs.core.async.t14690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14692,meta14691__$1){
var self__ = this;
var _14692__$1 = this;
return (new cljs.core.async.t14690(self__.ch,self__.f,self__.map_LT_,meta14691__$1));
});

cljs.core.async.t14690.cljs$lang$type = true;

cljs.core.async.t14690.cljs$lang$ctorStr = "cljs.core.async/t14690";

cljs.core.async.t14690.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t14690");
});

cljs.core.async.__GT_t14690 = (function cljs$core$async$map_LT__$___GT_t14690(ch__$1,f__$1,map_LT___$1,meta14691){
return (new cljs.core.async.t14690(ch__$1,f__$1,map_LT___$1,meta14691));
});

}

return (new cljs.core.async.t14690(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t14699 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14699 = (function (ch,f,map_GT_,meta14700){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14700 = meta14700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14701){
var self__ = this;
var _14701__$1 = this;
return self__.meta14700;
});

cljs.core.async.t14699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14701,meta14700__$1){
var self__ = this;
var _14701__$1 = this;
return (new cljs.core.async.t14699(self__.ch,self__.f,self__.map_GT_,meta14700__$1));
});

cljs.core.async.t14699.cljs$lang$type = true;

cljs.core.async.t14699.cljs$lang$ctorStr = "cljs.core.async/t14699";

cljs.core.async.t14699.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t14699");
});

cljs.core.async.__GT_t14699 = (function cljs$core$async$map_GT__$___GT_t14699(ch__$1,f__$1,map_GT___$1,meta14700){
return (new cljs.core.async.t14699(ch__$1,f__$1,map_GT___$1,meta14700));
});

}

return (new cljs.core.async.t14699(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t14705 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14705 = (function (ch,p,filter_GT_,meta14706){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14706 = meta14706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14705.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14705.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14705.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14705.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14707){
var self__ = this;
var _14707__$1 = this;
return self__.meta14706;
});

cljs.core.async.t14705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14707,meta14706__$1){
var self__ = this;
var _14707__$1 = this;
return (new cljs.core.async.t14705(self__.ch,self__.p,self__.filter_GT_,meta14706__$1));
});

cljs.core.async.t14705.cljs$lang$type = true;

cljs.core.async.t14705.cljs$lang$ctorStr = "cljs.core.async/t14705";

cljs.core.async.t14705.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t14705");
});

cljs.core.async.__GT_t14705 = (function cljs$core$async$filter_GT__$___GT_t14705(ch__$1,p__$1,filter_GT___$1,meta14706){
return (new cljs.core.async.t14705(ch__$1,p__$1,filter_GT___$1,meta14706));
});

}

return (new cljs.core.async.t14705(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__14709 = arguments.length;
switch (G__14709) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6706__auto___14752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___14752,out){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___14752,out){
return (function (state_14730){
var state_val_14731 = (state_14730[(1)]);
if((state_val_14731 === (7))){
var inst_14726 = (state_14730[(2)]);
var state_14730__$1 = state_14730;
var statearr_14732_14753 = state_14730__$1;
(statearr_14732_14753[(2)] = inst_14726);

(statearr_14732_14753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (1))){
var state_14730__$1 = state_14730;
var statearr_14733_14754 = state_14730__$1;
(statearr_14733_14754[(2)] = null);

(statearr_14733_14754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (4))){
var inst_14712 = (state_14730[(7)]);
var inst_14712__$1 = (state_14730[(2)]);
var inst_14713 = (inst_14712__$1 == null);
var state_14730__$1 = (function (){var statearr_14734 = state_14730;
(statearr_14734[(7)] = inst_14712__$1);

return statearr_14734;
})();
if(cljs.core.truth_(inst_14713)){
var statearr_14735_14755 = state_14730__$1;
(statearr_14735_14755[(1)] = (5));

} else {
var statearr_14736_14756 = state_14730__$1;
(statearr_14736_14756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (6))){
var inst_14712 = (state_14730[(7)]);
var inst_14717 = p.call(null,inst_14712);
var state_14730__$1 = state_14730;
if(cljs.core.truth_(inst_14717)){
var statearr_14737_14757 = state_14730__$1;
(statearr_14737_14757[(1)] = (8));

} else {
var statearr_14738_14758 = state_14730__$1;
(statearr_14738_14758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (3))){
var inst_14728 = (state_14730[(2)]);
var state_14730__$1 = state_14730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14730__$1,inst_14728);
} else {
if((state_val_14731 === (2))){
var state_14730__$1 = state_14730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14730__$1,(4),ch);
} else {
if((state_val_14731 === (11))){
var inst_14720 = (state_14730[(2)]);
var state_14730__$1 = state_14730;
var statearr_14739_14759 = state_14730__$1;
(statearr_14739_14759[(2)] = inst_14720);

(statearr_14739_14759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (9))){
var state_14730__$1 = state_14730;
var statearr_14740_14760 = state_14730__$1;
(statearr_14740_14760[(2)] = null);

(statearr_14740_14760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (5))){
var inst_14715 = cljs.core.async.close_BANG_.call(null,out);
var state_14730__$1 = state_14730;
var statearr_14741_14761 = state_14730__$1;
(statearr_14741_14761[(2)] = inst_14715);

(statearr_14741_14761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (10))){
var inst_14723 = (state_14730[(2)]);
var state_14730__$1 = (function (){var statearr_14742 = state_14730;
(statearr_14742[(8)] = inst_14723);

return statearr_14742;
})();
var statearr_14743_14762 = state_14730__$1;
(statearr_14743_14762[(2)] = null);

(statearr_14743_14762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14731 === (8))){
var inst_14712 = (state_14730[(7)]);
var state_14730__$1 = state_14730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14730__$1,(11),out,inst_14712);
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
});})(c__6706__auto___14752,out))
;
return ((function (switch__6644__auto__,c__6706__auto___14752,out){
return (function() {
var cljs$core$async$state_machine__6645__auto__ = null;
var cljs$core$async$state_machine__6645__auto____0 = (function (){
var statearr_14747 = [null,null,null,null,null,null,null,null,null];
(statearr_14747[(0)] = cljs$core$async$state_machine__6645__auto__);

(statearr_14747[(1)] = (1));

return statearr_14747;
});
var cljs$core$async$state_machine__6645__auto____1 = (function (state_14730){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_14730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e14748){if((e14748 instanceof Object)){
var ex__6648__auto__ = e14748;
var statearr_14749_14763 = state_14730;
(statearr_14749_14763[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14764 = state_14730;
state_14730 = G__14764;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$state_machine__6645__auto__ = function(state_14730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6645__auto____1.call(this,state_14730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6645__auto____0;
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6645__auto____1;
return cljs$core$async$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___14752,out))
})();
var state__6708__auto__ = (function (){var statearr_14750 = f__6707__auto__.call(null);
(statearr_14750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___14752);

return statearr_14750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___14752,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__14766 = arguments.length;
switch (G__14766) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto__){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto__){
return (function (state_14933){
var state_val_14934 = (state_14933[(1)]);
if((state_val_14934 === (7))){
var inst_14929 = (state_14933[(2)]);
var state_14933__$1 = state_14933;
var statearr_14935_14976 = state_14933__$1;
(statearr_14935_14976[(2)] = inst_14929);

(statearr_14935_14976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (20))){
var inst_14899 = (state_14933[(7)]);
var inst_14910 = (state_14933[(2)]);
var inst_14911 = cljs.core.next.call(null,inst_14899);
var inst_14885 = inst_14911;
var inst_14886 = null;
var inst_14887 = (0);
var inst_14888 = (0);
var state_14933__$1 = (function (){var statearr_14936 = state_14933;
(statearr_14936[(8)] = inst_14886);

(statearr_14936[(9)] = inst_14887);

(statearr_14936[(10)] = inst_14885);

(statearr_14936[(11)] = inst_14910);

(statearr_14936[(12)] = inst_14888);

return statearr_14936;
})();
var statearr_14937_14977 = state_14933__$1;
(statearr_14937_14977[(2)] = null);

(statearr_14937_14977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (1))){
var state_14933__$1 = state_14933;
var statearr_14938_14978 = state_14933__$1;
(statearr_14938_14978[(2)] = null);

(statearr_14938_14978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (4))){
var inst_14874 = (state_14933[(13)]);
var inst_14874__$1 = (state_14933[(2)]);
var inst_14875 = (inst_14874__$1 == null);
var state_14933__$1 = (function (){var statearr_14939 = state_14933;
(statearr_14939[(13)] = inst_14874__$1);

return statearr_14939;
})();
if(cljs.core.truth_(inst_14875)){
var statearr_14940_14979 = state_14933__$1;
(statearr_14940_14979[(1)] = (5));

} else {
var statearr_14941_14980 = state_14933__$1;
(statearr_14941_14980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (15))){
var state_14933__$1 = state_14933;
var statearr_14945_14981 = state_14933__$1;
(statearr_14945_14981[(2)] = null);

(statearr_14945_14981[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (21))){
var state_14933__$1 = state_14933;
var statearr_14946_14982 = state_14933__$1;
(statearr_14946_14982[(2)] = null);

(statearr_14946_14982[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (13))){
var inst_14886 = (state_14933[(8)]);
var inst_14887 = (state_14933[(9)]);
var inst_14885 = (state_14933[(10)]);
var inst_14888 = (state_14933[(12)]);
var inst_14895 = (state_14933[(2)]);
var inst_14896 = (inst_14888 + (1));
var tmp14942 = inst_14886;
var tmp14943 = inst_14887;
var tmp14944 = inst_14885;
var inst_14885__$1 = tmp14944;
var inst_14886__$1 = tmp14942;
var inst_14887__$1 = tmp14943;
var inst_14888__$1 = inst_14896;
var state_14933__$1 = (function (){var statearr_14947 = state_14933;
(statearr_14947[(8)] = inst_14886__$1);

(statearr_14947[(9)] = inst_14887__$1);

(statearr_14947[(14)] = inst_14895);

(statearr_14947[(10)] = inst_14885__$1);

(statearr_14947[(12)] = inst_14888__$1);

return statearr_14947;
})();
var statearr_14948_14983 = state_14933__$1;
(statearr_14948_14983[(2)] = null);

(statearr_14948_14983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (22))){
var state_14933__$1 = state_14933;
var statearr_14949_14984 = state_14933__$1;
(statearr_14949_14984[(2)] = null);

(statearr_14949_14984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (6))){
var inst_14874 = (state_14933[(13)]);
var inst_14883 = f.call(null,inst_14874);
var inst_14884 = cljs.core.seq.call(null,inst_14883);
var inst_14885 = inst_14884;
var inst_14886 = null;
var inst_14887 = (0);
var inst_14888 = (0);
var state_14933__$1 = (function (){var statearr_14950 = state_14933;
(statearr_14950[(8)] = inst_14886);

(statearr_14950[(9)] = inst_14887);

(statearr_14950[(10)] = inst_14885);

(statearr_14950[(12)] = inst_14888);

return statearr_14950;
})();
var statearr_14951_14985 = state_14933__$1;
(statearr_14951_14985[(2)] = null);

(statearr_14951_14985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (17))){
var inst_14899 = (state_14933[(7)]);
var inst_14903 = cljs.core.chunk_first.call(null,inst_14899);
var inst_14904 = cljs.core.chunk_rest.call(null,inst_14899);
var inst_14905 = cljs.core.count.call(null,inst_14903);
var inst_14885 = inst_14904;
var inst_14886 = inst_14903;
var inst_14887 = inst_14905;
var inst_14888 = (0);
var state_14933__$1 = (function (){var statearr_14952 = state_14933;
(statearr_14952[(8)] = inst_14886);

(statearr_14952[(9)] = inst_14887);

(statearr_14952[(10)] = inst_14885);

(statearr_14952[(12)] = inst_14888);

return statearr_14952;
})();
var statearr_14953_14986 = state_14933__$1;
(statearr_14953_14986[(2)] = null);

(statearr_14953_14986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (3))){
var inst_14931 = (state_14933[(2)]);
var state_14933__$1 = state_14933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14933__$1,inst_14931);
} else {
if((state_val_14934 === (12))){
var inst_14919 = (state_14933[(2)]);
var state_14933__$1 = state_14933;
var statearr_14954_14987 = state_14933__$1;
(statearr_14954_14987[(2)] = inst_14919);

(statearr_14954_14987[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (2))){
var state_14933__$1 = state_14933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14933__$1,(4),in$);
} else {
if((state_val_14934 === (23))){
var inst_14927 = (state_14933[(2)]);
var state_14933__$1 = state_14933;
var statearr_14955_14988 = state_14933__$1;
(statearr_14955_14988[(2)] = inst_14927);

(statearr_14955_14988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (19))){
var inst_14914 = (state_14933[(2)]);
var state_14933__$1 = state_14933;
var statearr_14956_14989 = state_14933__$1;
(statearr_14956_14989[(2)] = inst_14914);

(statearr_14956_14989[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (11))){
var inst_14899 = (state_14933[(7)]);
var inst_14885 = (state_14933[(10)]);
var inst_14899__$1 = cljs.core.seq.call(null,inst_14885);
var state_14933__$1 = (function (){var statearr_14957 = state_14933;
(statearr_14957[(7)] = inst_14899__$1);

return statearr_14957;
})();
if(inst_14899__$1){
var statearr_14958_14990 = state_14933__$1;
(statearr_14958_14990[(1)] = (14));

} else {
var statearr_14959_14991 = state_14933__$1;
(statearr_14959_14991[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (9))){
var inst_14921 = (state_14933[(2)]);
var inst_14922 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14933__$1 = (function (){var statearr_14960 = state_14933;
(statearr_14960[(15)] = inst_14921);

return statearr_14960;
})();
if(cljs.core.truth_(inst_14922)){
var statearr_14961_14992 = state_14933__$1;
(statearr_14961_14992[(1)] = (21));

} else {
var statearr_14962_14993 = state_14933__$1;
(statearr_14962_14993[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (5))){
var inst_14877 = cljs.core.async.close_BANG_.call(null,out);
var state_14933__$1 = state_14933;
var statearr_14963_14994 = state_14933__$1;
(statearr_14963_14994[(2)] = inst_14877);

(statearr_14963_14994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (14))){
var inst_14899 = (state_14933[(7)]);
var inst_14901 = cljs.core.chunked_seq_QMARK_.call(null,inst_14899);
var state_14933__$1 = state_14933;
if(inst_14901){
var statearr_14964_14995 = state_14933__$1;
(statearr_14964_14995[(1)] = (17));

} else {
var statearr_14965_14996 = state_14933__$1;
(statearr_14965_14996[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (16))){
var inst_14917 = (state_14933[(2)]);
var state_14933__$1 = state_14933;
var statearr_14966_14997 = state_14933__$1;
(statearr_14966_14997[(2)] = inst_14917);

(statearr_14966_14997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14934 === (10))){
var inst_14886 = (state_14933[(8)]);
var inst_14888 = (state_14933[(12)]);
var inst_14893 = cljs.core._nth.call(null,inst_14886,inst_14888);
var state_14933__$1 = state_14933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14933__$1,(13),out,inst_14893);
} else {
if((state_val_14934 === (18))){
var inst_14899 = (state_14933[(7)]);
var inst_14908 = cljs.core.first.call(null,inst_14899);
var state_14933__$1 = state_14933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14933__$1,(20),out,inst_14908);
} else {
if((state_val_14934 === (8))){
var inst_14887 = (state_14933[(9)]);
var inst_14888 = (state_14933[(12)]);
var inst_14890 = (inst_14888 < inst_14887);
var inst_14891 = inst_14890;
var state_14933__$1 = state_14933;
if(cljs.core.truth_(inst_14891)){
var statearr_14967_14998 = state_14933__$1;
(statearr_14967_14998[(1)] = (10));

} else {
var statearr_14968_14999 = state_14933__$1;
(statearr_14968_14999[(1)] = (11));

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
});})(c__6706__auto__))
;
return ((function (switch__6644__auto__,c__6706__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6645__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6645__auto____0 = (function (){
var statearr_14972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14972[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6645__auto__);

(statearr_14972[(1)] = (1));

return statearr_14972;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6645__auto____1 = (function (state_14933){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_14933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e14973){if((e14973 instanceof Object)){
var ex__6648__auto__ = e14973;
var statearr_14974_15000 = state_14933;
(statearr_14974_15000[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15001 = state_14933;
state_14933 = G__15001;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6645__auto__ = function(state_14933){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6645__auto____1.call(this,state_14933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6645__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6645__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto__))
})();
var state__6708__auto__ = (function (){var statearr_14975 = f__6707__auto__.call(null);
(statearr_14975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto__);

return statearr_14975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto__))
);

return c__6706__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__15003 = arguments.length;
switch (G__15003) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__15006 = arguments.length;
switch (G__15006) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__15009 = arguments.length;
switch (G__15009) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6706__auto___15059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___15059,out){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___15059,out){
return (function (state_15033){
var state_val_15034 = (state_15033[(1)]);
if((state_val_15034 === (7))){
var inst_15028 = (state_15033[(2)]);
var state_15033__$1 = state_15033;
var statearr_15035_15060 = state_15033__$1;
(statearr_15035_15060[(2)] = inst_15028);

(statearr_15035_15060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15034 === (1))){
var inst_15010 = null;
var state_15033__$1 = (function (){var statearr_15036 = state_15033;
(statearr_15036[(7)] = inst_15010);

return statearr_15036;
})();
var statearr_15037_15061 = state_15033__$1;
(statearr_15037_15061[(2)] = null);

(statearr_15037_15061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15034 === (4))){
var inst_15013 = (state_15033[(8)]);
var inst_15013__$1 = (state_15033[(2)]);
var inst_15014 = (inst_15013__$1 == null);
var inst_15015 = cljs.core.not.call(null,inst_15014);
var state_15033__$1 = (function (){var statearr_15038 = state_15033;
(statearr_15038[(8)] = inst_15013__$1);

return statearr_15038;
})();
if(inst_15015){
var statearr_15039_15062 = state_15033__$1;
(statearr_15039_15062[(1)] = (5));

} else {
var statearr_15040_15063 = state_15033__$1;
(statearr_15040_15063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15034 === (6))){
var state_15033__$1 = state_15033;
var statearr_15041_15064 = state_15033__$1;
(statearr_15041_15064[(2)] = null);

(statearr_15041_15064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15034 === (3))){
var inst_15030 = (state_15033[(2)]);
var inst_15031 = cljs.core.async.close_BANG_.call(null,out);
var state_15033__$1 = (function (){var statearr_15042 = state_15033;
(statearr_15042[(9)] = inst_15030);

return statearr_15042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15033__$1,inst_15031);
} else {
if((state_val_15034 === (2))){
var state_15033__$1 = state_15033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15033__$1,(4),ch);
} else {
if((state_val_15034 === (11))){
var inst_15013 = (state_15033[(8)]);
var inst_15022 = (state_15033[(2)]);
var inst_15010 = inst_15013;
var state_15033__$1 = (function (){var statearr_15043 = state_15033;
(statearr_15043[(10)] = inst_15022);

(statearr_15043[(7)] = inst_15010);

return statearr_15043;
})();
var statearr_15044_15065 = state_15033__$1;
(statearr_15044_15065[(2)] = null);

(statearr_15044_15065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15034 === (9))){
var inst_15013 = (state_15033[(8)]);
var state_15033__$1 = state_15033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15033__$1,(11),out,inst_15013);
} else {
if((state_val_15034 === (5))){
var inst_15013 = (state_15033[(8)]);
var inst_15010 = (state_15033[(7)]);
var inst_15017 = cljs.core._EQ_.call(null,inst_15013,inst_15010);
var state_15033__$1 = state_15033;
if(inst_15017){
var statearr_15046_15066 = state_15033__$1;
(statearr_15046_15066[(1)] = (8));

} else {
var statearr_15047_15067 = state_15033__$1;
(statearr_15047_15067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15034 === (10))){
var inst_15025 = (state_15033[(2)]);
var state_15033__$1 = state_15033;
var statearr_15048_15068 = state_15033__$1;
(statearr_15048_15068[(2)] = inst_15025);

(statearr_15048_15068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15034 === (8))){
var inst_15010 = (state_15033[(7)]);
var tmp15045 = inst_15010;
var inst_15010__$1 = tmp15045;
var state_15033__$1 = (function (){var statearr_15049 = state_15033;
(statearr_15049[(7)] = inst_15010__$1);

return statearr_15049;
})();
var statearr_15050_15069 = state_15033__$1;
(statearr_15050_15069[(2)] = null);

(statearr_15050_15069[(1)] = (2));


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
});})(c__6706__auto___15059,out))
;
return ((function (switch__6644__auto__,c__6706__auto___15059,out){
return (function() {
var cljs$core$async$state_machine__6645__auto__ = null;
var cljs$core$async$state_machine__6645__auto____0 = (function (){
var statearr_15054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15054[(0)] = cljs$core$async$state_machine__6645__auto__);

(statearr_15054[(1)] = (1));

return statearr_15054;
});
var cljs$core$async$state_machine__6645__auto____1 = (function (state_15033){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_15033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e15055){if((e15055 instanceof Object)){
var ex__6648__auto__ = e15055;
var statearr_15056_15070 = state_15033;
(statearr_15056_15070[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15071 = state_15033;
state_15033 = G__15071;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$state_machine__6645__auto__ = function(state_15033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6645__auto____1.call(this,state_15033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6645__auto____0;
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6645__auto____1;
return cljs$core$async$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___15059,out))
})();
var state__6708__auto__ = (function (){var statearr_15057 = f__6707__auto__.call(null);
(statearr_15057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___15059);

return statearr_15057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___15059,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15073 = arguments.length;
switch (G__15073) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6706__auto___15142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___15142,out){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___15142,out){
return (function (state_15111){
var state_val_15112 = (state_15111[(1)]);
if((state_val_15112 === (7))){
var inst_15107 = (state_15111[(2)]);
var state_15111__$1 = state_15111;
var statearr_15113_15143 = state_15111__$1;
(statearr_15113_15143[(2)] = inst_15107);

(statearr_15113_15143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (1))){
var inst_15074 = (new Array(n));
var inst_15075 = inst_15074;
var inst_15076 = (0);
var state_15111__$1 = (function (){var statearr_15114 = state_15111;
(statearr_15114[(7)] = inst_15076);

(statearr_15114[(8)] = inst_15075);

return statearr_15114;
})();
var statearr_15115_15144 = state_15111__$1;
(statearr_15115_15144[(2)] = null);

(statearr_15115_15144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (4))){
var inst_15079 = (state_15111[(9)]);
var inst_15079__$1 = (state_15111[(2)]);
var inst_15080 = (inst_15079__$1 == null);
var inst_15081 = cljs.core.not.call(null,inst_15080);
var state_15111__$1 = (function (){var statearr_15116 = state_15111;
(statearr_15116[(9)] = inst_15079__$1);

return statearr_15116;
})();
if(inst_15081){
var statearr_15117_15145 = state_15111__$1;
(statearr_15117_15145[(1)] = (5));

} else {
var statearr_15118_15146 = state_15111__$1;
(statearr_15118_15146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (15))){
var inst_15101 = (state_15111[(2)]);
var state_15111__$1 = state_15111;
var statearr_15119_15147 = state_15111__$1;
(statearr_15119_15147[(2)] = inst_15101);

(statearr_15119_15147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (13))){
var state_15111__$1 = state_15111;
var statearr_15120_15148 = state_15111__$1;
(statearr_15120_15148[(2)] = null);

(statearr_15120_15148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (6))){
var inst_15076 = (state_15111[(7)]);
var inst_15097 = (inst_15076 > (0));
var state_15111__$1 = state_15111;
if(cljs.core.truth_(inst_15097)){
var statearr_15121_15149 = state_15111__$1;
(statearr_15121_15149[(1)] = (12));

} else {
var statearr_15122_15150 = state_15111__$1;
(statearr_15122_15150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (3))){
var inst_15109 = (state_15111[(2)]);
var state_15111__$1 = state_15111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15111__$1,inst_15109);
} else {
if((state_val_15112 === (12))){
var inst_15075 = (state_15111[(8)]);
var inst_15099 = cljs.core.vec.call(null,inst_15075);
var state_15111__$1 = state_15111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15111__$1,(15),out,inst_15099);
} else {
if((state_val_15112 === (2))){
var state_15111__$1 = state_15111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15111__$1,(4),ch);
} else {
if((state_val_15112 === (11))){
var inst_15091 = (state_15111[(2)]);
var inst_15092 = (new Array(n));
var inst_15075 = inst_15092;
var inst_15076 = (0);
var state_15111__$1 = (function (){var statearr_15123 = state_15111;
(statearr_15123[(7)] = inst_15076);

(statearr_15123[(8)] = inst_15075);

(statearr_15123[(10)] = inst_15091);

return statearr_15123;
})();
var statearr_15124_15151 = state_15111__$1;
(statearr_15124_15151[(2)] = null);

(statearr_15124_15151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (9))){
var inst_15075 = (state_15111[(8)]);
var inst_15089 = cljs.core.vec.call(null,inst_15075);
var state_15111__$1 = state_15111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15111__$1,(11),out,inst_15089);
} else {
if((state_val_15112 === (5))){
var inst_15079 = (state_15111[(9)]);
var inst_15076 = (state_15111[(7)]);
var inst_15084 = (state_15111[(11)]);
var inst_15075 = (state_15111[(8)]);
var inst_15083 = (inst_15075[inst_15076] = inst_15079);
var inst_15084__$1 = (inst_15076 + (1));
var inst_15085 = (inst_15084__$1 < n);
var state_15111__$1 = (function (){var statearr_15125 = state_15111;
(statearr_15125[(12)] = inst_15083);

(statearr_15125[(11)] = inst_15084__$1);

return statearr_15125;
})();
if(cljs.core.truth_(inst_15085)){
var statearr_15126_15152 = state_15111__$1;
(statearr_15126_15152[(1)] = (8));

} else {
var statearr_15127_15153 = state_15111__$1;
(statearr_15127_15153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (14))){
var inst_15104 = (state_15111[(2)]);
var inst_15105 = cljs.core.async.close_BANG_.call(null,out);
var state_15111__$1 = (function (){var statearr_15129 = state_15111;
(statearr_15129[(13)] = inst_15104);

return statearr_15129;
})();
var statearr_15130_15154 = state_15111__$1;
(statearr_15130_15154[(2)] = inst_15105);

(statearr_15130_15154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (10))){
var inst_15095 = (state_15111[(2)]);
var state_15111__$1 = state_15111;
var statearr_15131_15155 = state_15111__$1;
(statearr_15131_15155[(2)] = inst_15095);

(statearr_15131_15155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (8))){
var inst_15084 = (state_15111[(11)]);
var inst_15075 = (state_15111[(8)]);
var tmp15128 = inst_15075;
var inst_15075__$1 = tmp15128;
var inst_15076 = inst_15084;
var state_15111__$1 = (function (){var statearr_15132 = state_15111;
(statearr_15132[(7)] = inst_15076);

(statearr_15132[(8)] = inst_15075__$1);

return statearr_15132;
})();
var statearr_15133_15156 = state_15111__$1;
(statearr_15133_15156[(2)] = null);

(statearr_15133_15156[(1)] = (2));


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
});})(c__6706__auto___15142,out))
;
return ((function (switch__6644__auto__,c__6706__auto___15142,out){
return (function() {
var cljs$core$async$state_machine__6645__auto__ = null;
var cljs$core$async$state_machine__6645__auto____0 = (function (){
var statearr_15137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15137[(0)] = cljs$core$async$state_machine__6645__auto__);

(statearr_15137[(1)] = (1));

return statearr_15137;
});
var cljs$core$async$state_machine__6645__auto____1 = (function (state_15111){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_15111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e15138){if((e15138 instanceof Object)){
var ex__6648__auto__ = e15138;
var statearr_15139_15157 = state_15111;
(statearr_15139_15157[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15158 = state_15111;
state_15111 = G__15158;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$state_machine__6645__auto__ = function(state_15111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6645__auto____1.call(this,state_15111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6645__auto____0;
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6645__auto____1;
return cljs$core$async$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___15142,out))
})();
var state__6708__auto__ = (function (){var statearr_15140 = f__6707__auto__.call(null);
(statearr_15140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___15142);

return statearr_15140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___15142,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15160 = arguments.length;
switch (G__15160) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6706__auto___15233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___15233,out){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___15233,out){
return (function (state_15202){
var state_val_15203 = (state_15202[(1)]);
if((state_val_15203 === (7))){
var inst_15198 = (state_15202[(2)]);
var state_15202__$1 = state_15202;
var statearr_15204_15234 = state_15202__$1;
(statearr_15204_15234[(2)] = inst_15198);

(statearr_15204_15234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15203 === (1))){
var inst_15161 = [];
var inst_15162 = inst_15161;
var inst_15163 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15202__$1 = (function (){var statearr_15205 = state_15202;
(statearr_15205[(7)] = inst_15163);

(statearr_15205[(8)] = inst_15162);

return statearr_15205;
})();
var statearr_15206_15235 = state_15202__$1;
(statearr_15206_15235[(2)] = null);

(statearr_15206_15235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15203 === (4))){
var inst_15166 = (state_15202[(9)]);
var inst_15166__$1 = (state_15202[(2)]);
var inst_15167 = (inst_15166__$1 == null);
var inst_15168 = cljs.core.not.call(null,inst_15167);
var state_15202__$1 = (function (){var statearr_15207 = state_15202;
(statearr_15207[(9)] = inst_15166__$1);

return statearr_15207;
})();
if(inst_15168){
var statearr_15208_15236 = state_15202__$1;
(statearr_15208_15236[(1)] = (5));

} else {
var statearr_15209_15237 = state_15202__$1;
(statearr_15209_15237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15203 === (15))){
var inst_15192 = (state_15202[(2)]);
var state_15202__$1 = state_15202;
var statearr_15210_15238 = state_15202__$1;
(statearr_15210_15238[(2)] = inst_15192);

(statearr_15210_15238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15203 === (13))){
var state_15202__$1 = state_15202;
var statearr_15211_15239 = state_15202__$1;
(statearr_15211_15239[(2)] = null);

(statearr_15211_15239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15203 === (6))){
var inst_15162 = (state_15202[(8)]);
var inst_15187 = inst_15162.length;
var inst_15188 = (inst_15187 > (0));
var state_15202__$1 = state_15202;
if(cljs.core.truth_(inst_15188)){
var statearr_15212_15240 = state_15202__$1;
(statearr_15212_15240[(1)] = (12));

} else {
var statearr_15213_15241 = state_15202__$1;
(statearr_15213_15241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15203 === (3))){
var inst_15200 = (state_15202[(2)]);
var state_15202__$1 = state_15202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15202__$1,inst_15200);
} else {
if((state_val_15203 === (12))){
var inst_15162 = (state_15202[(8)]);
var inst_15190 = cljs.core.vec.call(null,inst_15162);
var state_15202__$1 = state_15202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15202__$1,(15),out,inst_15190);
} else {
if((state_val_15203 === (2))){
var state_15202__$1 = state_15202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15202__$1,(4),ch);
} else {
if((state_val_15203 === (11))){
var inst_15166 = (state_15202[(9)]);
var inst_15170 = (state_15202[(10)]);
var inst_15180 = (state_15202[(2)]);
var inst_15181 = [];
var inst_15182 = inst_15181.push(inst_15166);
var inst_15162 = inst_15181;
var inst_15163 = inst_15170;
var state_15202__$1 = (function (){var statearr_15214 = state_15202;
(statearr_15214[(7)] = inst_15163);

(statearr_15214[(11)] = inst_15182);

(statearr_15214[(12)] = inst_15180);

(statearr_15214[(8)] = inst_15162);

return statearr_15214;
})();
var statearr_15215_15242 = state_15202__$1;
(statearr_15215_15242[(2)] = null);

(statearr_15215_15242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15203 === (9))){
var inst_15162 = (state_15202[(8)]);
var inst_15178 = cljs.core.vec.call(null,inst_15162);
var state_15202__$1 = state_15202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15202__$1,(11),out,inst_15178);
} else {
if((state_val_15203 === (5))){
var inst_15163 = (state_15202[(7)]);
var inst_15166 = (state_15202[(9)]);
var inst_15170 = (state_15202[(10)]);
var inst_15170__$1 = f.call(null,inst_15166);
var inst_15171 = cljs.core._EQ_.call(null,inst_15170__$1,inst_15163);
var inst_15172 = cljs.core.keyword_identical_QMARK_.call(null,inst_15163,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15173 = (inst_15171) || (inst_15172);
var state_15202__$1 = (function (){var statearr_15216 = state_15202;
(statearr_15216[(10)] = inst_15170__$1);

return statearr_15216;
})();
if(cljs.core.truth_(inst_15173)){
var statearr_15217_15243 = state_15202__$1;
(statearr_15217_15243[(1)] = (8));

} else {
var statearr_15218_15244 = state_15202__$1;
(statearr_15218_15244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15203 === (14))){
var inst_15195 = (state_15202[(2)]);
var inst_15196 = cljs.core.async.close_BANG_.call(null,out);
var state_15202__$1 = (function (){var statearr_15220 = state_15202;
(statearr_15220[(13)] = inst_15195);

return statearr_15220;
})();
var statearr_15221_15245 = state_15202__$1;
(statearr_15221_15245[(2)] = inst_15196);

(statearr_15221_15245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15203 === (10))){
var inst_15185 = (state_15202[(2)]);
var state_15202__$1 = state_15202;
var statearr_15222_15246 = state_15202__$1;
(statearr_15222_15246[(2)] = inst_15185);

(statearr_15222_15246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15203 === (8))){
var inst_15162 = (state_15202[(8)]);
var inst_15166 = (state_15202[(9)]);
var inst_15170 = (state_15202[(10)]);
var inst_15175 = inst_15162.push(inst_15166);
var tmp15219 = inst_15162;
var inst_15162__$1 = tmp15219;
var inst_15163 = inst_15170;
var state_15202__$1 = (function (){var statearr_15223 = state_15202;
(statearr_15223[(7)] = inst_15163);

(statearr_15223[(8)] = inst_15162__$1);

(statearr_15223[(14)] = inst_15175);

return statearr_15223;
})();
var statearr_15224_15247 = state_15202__$1;
(statearr_15224_15247[(2)] = null);

(statearr_15224_15247[(1)] = (2));


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
});})(c__6706__auto___15233,out))
;
return ((function (switch__6644__auto__,c__6706__auto___15233,out){
return (function() {
var cljs$core$async$state_machine__6645__auto__ = null;
var cljs$core$async$state_machine__6645__auto____0 = (function (){
var statearr_15228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15228[(0)] = cljs$core$async$state_machine__6645__auto__);

(statearr_15228[(1)] = (1));

return statearr_15228;
});
var cljs$core$async$state_machine__6645__auto____1 = (function (state_15202){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_15202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e15229){if((e15229 instanceof Object)){
var ex__6648__auto__ = e15229;
var statearr_15230_15248 = state_15202;
(statearr_15230_15248[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15249 = state_15202;
state_15202 = G__15249;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
cljs$core$async$state_machine__6645__auto__ = function(state_15202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6645__auto____1.call(this,state_15202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6645__auto____0;
cljs$core$async$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6645__auto____1;
return cljs$core$async$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___15233,out))
})();
var state__6708__auto__ = (function (){var statearr_15231 = f__6707__auto__.call(null);
(statearr_15231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___15233);

return statearr_15231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___15233,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map