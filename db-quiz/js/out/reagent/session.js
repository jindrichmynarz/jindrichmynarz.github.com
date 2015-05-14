// Compiled by ClojureScript 0.0-3196 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__12214){
var vec__12215 = p__12214;
var default$ = cljs.core.nth.call(null,vec__12215,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq12212){
var G__12213 = cljs.core.first.call(null,seq12212);
var seq12212__$1 = cljs.core.next.call(null,seq12212);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__12213,seq12212__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 * returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__12218){
var vec__12219 = p__12218;
var default$ = cljs.core.nth.call(null,vec__12219,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq12216){
var G__12217 = cljs.core.first.call(null,seq12216);
var seq12216__$1 = cljs.core.next.call(null,seq12216);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__12217,seq12216__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 * the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq12220){
var G__12221 = cljs.core.first.call(null,seq12220);
var seq12220__$1 = cljs.core.next.call(null,seq12220);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12221,seq12220__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__12222_SHARP_){
return cljs.core.assoc_in.call(null,p1__12222_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 * and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__12225){
var vec__12226 = p__12225;
var default$ = cljs.core.nth.call(null,vec__12226,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq12223){
var G__12224 = cljs.core.first.call(null,seq12223);
var seq12223__$1 = cljs.core.next.call(null,seq12223);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12224,seq12223__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 * specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__12229){
var vec__12230 = p__12229;
var default$ = cljs.core.nth.call(null,vec__12230,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq12227){
var G__12228 = cljs.core.first.call(null,seq12227);
var seq12227__$1 = cljs.core.next.call(null,seq12227);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12228,seq12227__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(){
var argseq__5260__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5260__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__12231_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__12231_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq12232){
var G__12233 = cljs.core.first.call(null,seq12232);
var seq12232__$1 = cljs.core.next.call(null,seq12232);
var G__12234 = cljs.core.first.call(null,seq12232__$1);
var seq12232__$2 = cljs.core.next.call(null,seq12232__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12233,G__12234,seq12232__$2);
});

//# sourceMappingURL=session.js.map