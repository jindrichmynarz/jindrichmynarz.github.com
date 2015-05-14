// Compiled by ClojureScript 0.0-3196 {}
goog.provide('db_quiz.dev');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('weasel.repl');
goog.require('figwheel.client');
goog.require('db_quiz.core');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),db_quiz.core.mount_root);
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
db_quiz.core.init_BANG_.call(null);

//# sourceMappingURL=dev.js.map