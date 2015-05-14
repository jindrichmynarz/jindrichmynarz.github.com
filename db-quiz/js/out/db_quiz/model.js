// Compiled by ClojureScript 0.0-3196 {}
goog.provide('db_quiz.model');
goog.require('cljs.core');
goog.require('cljsjs.mustache');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('db_quiz.config');
db_quiz.model.sentence_start = /\.([A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸ-ŹŻŽƁ-ƂƄƆ-ƇƉ-ƋƎ-ƑƓ-ƔƖ-ƘƜ-ƝƟ-ƠƢƤƦ-ƧƩƬƮ-ƯƱ-ƳƵƷ-ƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺ-ȻȽ-ȾɁɃ-ɆɈɊɌɎͰͲͶΆΈ-ΊΌΎ-ΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹ-ϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀ-ӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԱ-ՖႠ-ჅḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾ-ℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱯⱲⱵⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽ-ꝾꞀꞂꞄꞆꞋＡ-Ｚ]|\ud801[\udc00-\udc27]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e-\udc9f\udca2\udca5-\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca])/;
db_quiz.model.loading_QMARK_ = cljs.core.atom.call(null,false);
/**
 * Render Mustache @template with @data.
 */
db_quiz.model.render_template = (function db_quiz$model$render_template(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return db_quiz.model.render_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

db_quiz.model.render_template.cljs$core$IFn$_invoke$arity$variadic = (function (template,p__9062){
var map__9063 = p__9062;
var map__9063__$1 = ((cljs.core.seq_QMARK_.call(null,map__9063))?cljs.core.apply.call(null,cljs.core.hash_map,map__9063):map__9063);
var data = cljs.core.get.call(null,map__9063__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return Mustache.render(template,cljs.core.clj__GT_js.call(null,data));
});

db_quiz.model.render_template.cljs$lang$maxFixedArity = (1);

db_quiz.model.render_template.cljs$lang$applyTo = (function (seq9060){
var G__9061 = cljs.core.first.call(null,seq9060);
var seq9060__$1 = cljs.core.next.call(null,seq9060);
return db_quiz.model.render_template.cljs$core$IFn$_invoke$arity$variadic(G__9061,seq9060__$1);
});
db_quiz.model.delete_parenthesized_parts = (function db_quiz$model$delete_parenthesized_parts(text){
return clojure.string.replace.call(null,text,/\s*\([^)]+\)/,"");
});
db_quiz.model.clear_label = (function db_quiz$model$clear_label(label){
return clojure.string.trim.call(null,db_quiz.model.delete_parenthesized_parts.call(null,label));
});
db_quiz.model.clear_tokens = (function db_quiz$model$clear_tokens(tokens){
return cljs.core.filter.call(null,(function (token){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})\.?$/,token));
}),tokens);
});
/**
 * Split @s into tokens delimited by whitespace.
 */
db_quiz.model.tokenize = (function db_quiz$model$tokenize(s){
return clojure.string.split.call(null,s,/\s+|-/);
});
/**
 * Convert @tokens into an abbreviation.
 */
db_quiz.model.abbreviate = (function db_quiz$model$abbreviate(tokens){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (s){
if((clojure.string.lower_case.call(null,s).indexOf("ch") === (0))){
return "Ch";
} else {
return cljs.core.first.call(null,s);
}
}),tokens));
});
/**
 * Replace a set of @surface-forms appearing in @description with @abbreviation.
 */
db_quiz.model.replace_surface_forms = (function db_quiz$model$replace_surface_forms(description,abbreviation,surface_forms){
var G__9069 = surface_forms;
var vec__9070 = G__9069;
var surface_form = cljs.core.nth.call(null,vec__9070,(0),null);
var the_rest = cljs.core.nthnext.call(null,vec__9070,(1));
var result = description;
var G__9069__$1 = G__9069;
var result__$1 = result;
while(true){
var vec__9071 = G__9069__$1;
var surface_form__$1 = cljs.core.nth.call(null,vec__9071,(0),null);
var the_rest__$1 = cljs.core.nthnext.call(null,vec__9071,(1));
var result__$2 = result__$1;
var clean_result = clojure.string.replace.call(null,result__$2,surface_form__$1,abbreviation);
if(cljs.core.not.call(null,the_rest__$1)){
return clean_result;
} else {
var G__9072 = the_rest__$1;
var G__9073 = clean_result;
G__9069__$1 = G__9072;
result__$1 = G__9073;
continue;
}
break;
}
});
/**
 * Predicate that validates a @surface-form.
 */
db_quiz.model.clean_surface_form_QMARK_ = (function db_quiz$model$clean_surface_form_QMARK_(surface_form){
return true;
});
/**
 * Replace spoilers suggesting @label from @description
 */
db_quiz.model.despoilerify = (function db_quiz$model$despoilerify(p__9074){
var map__9076 = p__9074;
var map__9076__$1 = ((cljs.core.seq_QMARK_.call(null,map__9076))?cljs.core.apply.call(null,cljs.core.hash_map,map__9076):map__9076);
var item = map__9076__$1;
var surfaceForms = cljs.core.get.call(null,map__9076__$1,new cljs.core.Keyword(null,"surfaceForms","surfaceForms",991438459));
var description = cljs.core.get.call(null,map__9076__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var label = cljs.core.get.call(null,map__9076__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var clean_label = db_quiz.model.clear_label.call(null,label);
var tokens = db_quiz.model.clear_tokens.call(null,db_quiz.model.tokenize.call(null,clean_label));
var abbreviation = db_quiz.model.abbreviate.call(null,tokens);
var surface_forms = cljs.core.sort_by.call(null,cljs.core.comp.call(null,cljs.core._,cljs.core.count),cljs.core.filter.call(null,db_quiz.model.clean_surface_form_QMARK_,cljs.core.conj.call(null,clojure.string.split.call(null,surfaceForms,"|"),clean_label,label)));
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"abbreviation","abbreviation",-2106594275),abbreviation,new cljs.core.Keyword(null,"description","description",-1428560544),db_quiz.model.replace_surface_forms.call(null,clojure.string.replace.call(null,db_quiz.model.delete_parenthesized_parts.call(null,description),db_quiz.model.sentence_start,". $1"),abbreviation,surface_forms),new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.join.call(null," ",tokens),new cljs.core.Keyword(null,"surface-forms","surface-forms",1809810174),surface_forms);
});
/**
 * Send a SPARQL query from file on @query-path to @sparql-endpoint.
 */
db_quiz.model.sparql_query = (function db_quiz$model$sparql_query(){
var argseq__5260__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return db_quiz.model.sparql_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5260__auto__);
});

db_quiz.model.sparql_query.cljs$core$IFn$_invoke$arity$variadic = (function (sparql_endpoint,query_path,p__9080){
var map__9081 = p__9080;
var map__9081__$1 = ((cljs.core.seq_QMARK_.call(null,map__9081))?cljs.core.apply.call(null,cljs.core.hash_map,map__9081):map__9081);
var data = cljs.core.get.call(null,map__9081__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var query_channel = cljs_http.client.get.call(null,query_path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,new cljs.core.Keyword(null,"body","body",-2049205669)))], null));
var extract_values = ((function (query_channel,map__9081,map__9081__$1,data){
return (function (result){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (query_channel,map__9081,map__9081__$1,data){
return (function (p__9082){
var vec__9083 = p__9082;
var k = cljs.core.nth.call(null,vec__9083,(0),null);
var v = cljs.core.nth.call(null,vec__9083,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v)], null);
});})(query_channel,map__9081,map__9081__$1,data))
,result));
});})(query_channel,map__9081,map__9081__$1,data))
;
var sparql_results = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,extract_values),new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"body","body",-2049205669))));
cljs.core.reset_BANG_.call(null,db_quiz.model.loading_QMARK_,true);

var c__6706__auto___9110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6706__auto___9110,query_channel,extract_values,sparql_results,map__9081,map__9081__$1,data){
return (function (){
var f__6707__auto__ = (function (){var switch__6644__auto__ = ((function (c__6706__auto___9110,query_channel,extract_values,sparql_results,map__9081,map__9081__$1,data){
return (function (state_9100){
var state_val_9101 = (state_9100[(1)]);
if((state_val_9101 === (4))){
var inst_9095 = (state_9100[(2)]);
var state_9100__$1 = state_9100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9100__$1,(3),sparql_results,inst_9095);
} else {
if((state_val_9101 === (3))){
var inst_9097 = (state_9100[(2)]);
var inst_9098 = cljs.core.reset_BANG_.call(null,db_quiz.model.loading_QMARK_,false);
var state_9100__$1 = (function (){var statearr_9102 = state_9100;
(statearr_9102[(7)] = inst_9097);

return statearr_9102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9100__$1,inst_9098);
} else {
if((state_val_9101 === (2))){
var inst_9085 = (state_9100[(2)]);
var inst_9086 = db_quiz.model.render_template.call(null,inst_9085,new cljs.core.Keyword(null,"data","data",-232669377),data);
var inst_9087 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_9088 = [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_9089 = ["application/sparql-results+json",inst_9086];
var inst_9090 = cljs.core.PersistentHashMap.fromArrays(inst_9088,inst_9089);
var inst_9091 = [inst_9090];
var inst_9092 = cljs.core.PersistentHashMap.fromArrays(inst_9087,inst_9091);
var inst_9093 = cljs_http.client.jsonp.call(null,sparql_endpoint,inst_9092);
var state_9100__$1 = state_9100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9100__$1,(4),inst_9093);
} else {
if((state_val_9101 === (1))){
var state_9100__$1 = state_9100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9100__$1,(2),query_channel);
} else {
return null;
}
}
}
}
});})(c__6706__auto___9110,query_channel,extract_values,sparql_results,map__9081,map__9081__$1,data))
;
return ((function (switch__6644__auto__,c__6706__auto___9110,query_channel,extract_values,sparql_results,map__9081,map__9081__$1,data){
return (function() {
var db_quiz$model$state_machine__6645__auto__ = null;
var db_quiz$model$state_machine__6645__auto____0 = (function (){
var statearr_9106 = [null,null,null,null,null,null,null,null];
(statearr_9106[(0)] = db_quiz$model$state_machine__6645__auto__);

(statearr_9106[(1)] = (1));

return statearr_9106;
});
var db_quiz$model$state_machine__6645__auto____1 = (function (state_9100){
while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_9100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6647__auto__;
}
break;
}
}catch (e9107){if((e9107 instanceof Object)){
var ex__6648__auto__ = e9107;
var statearr_9108_9111 = state_9100;
(statearr_9108_9111[(5)] = ex__6648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9112 = state_9100;
state_9100 = G__9112;
continue;
} else {
return ret_value__6646__auto__;
}
break;
}
});
db_quiz$model$state_machine__6645__auto__ = function(state_9100){
switch(arguments.length){
case 0:
return db_quiz$model$state_machine__6645__auto____0.call(this);
case 1:
return db_quiz$model$state_machine__6645__auto____1.call(this,state_9100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
db_quiz$model$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = db_quiz$model$state_machine__6645__auto____0;
db_quiz$model$state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = db_quiz$model$state_machine__6645__auto____1;
return db_quiz$model$state_machine__6645__auto__;
})()
;})(switch__6644__auto__,c__6706__auto___9110,query_channel,extract_values,sparql_results,map__9081,map__9081__$1,data))
})();
var state__6708__auto__ = (function (){var statearr_9109 = f__6707__auto__.call(null);
(statearr_9109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6706__auto___9110);

return statearr_9109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6708__auto__);
});})(c__6706__auto___9110,query_channel,extract_values,sparql_results,map__9081,map__9081__$1,data))
);


return sparql_results;
});

db_quiz.model.sparql_query.cljs$lang$maxFixedArity = (2);

db_quiz.model.sparql_query.cljs$lang$applyTo = (function (seq9077){
var G__9078 = cljs.core.first.call(null,seq9077);
var seq9077__$1 = cljs.core.next.call(null,seq9077);
var G__9079 = cljs.core.first.call(null,seq9077__$1);
var seq9077__$2 = cljs.core.next.call(null,seq9077__$1);
return db_quiz.model.sparql_query.cljs$core$IFn$_invoke$arity$variadic(G__9078,G__9079,seq9077__$2);
});

//# sourceMappingURL=model.js.map