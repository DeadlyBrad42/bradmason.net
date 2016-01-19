(function (exports, Vue, Router, dataStore, vueEngine, descriptionComponent, linkListComponent, projectListComponent, cardComponent) {
    'use strict';

    var app;

    // Blatant advertising and shameless self-promotion
    console.log('This page\'s source code is available over at https://github.com/DeadlyBrad42/bradmason.net for your viewing pleasure.');


    // Intialize Vue components
    Vue.component('vue-description', descriptionComponent);
    Vue.component('vue-link', linkListComponent);
    Vue.component('vue-project', projectListComponent);
    Vue.component('vue-card', cardComponent);

    // Start Vue
    Vue.config.debug = true;
    app = new Vue(vueEngine);



    // Register routes
    // var router = new Router({
    //     '/': function() {
    //         app.currentData = appData;
    //         analytics('/');
    //     },
    //     '/about': function() {
    //         app.currentData = appData;
    //         analytics('/about');
    //     },
    //     '/projects': function() {
    //         app.currentData = appData;
    //         analytics('/projects');
    //     },
    //     '/games': function() {
    //         app.currentData = appData;
    //         analytics('/games');
    //     },
    // });
    // router.init();

    // Get the initial app data
    dataStore.getData(function (initialData) {
        app.setAppData(initialData);
        app.setView('about');
    });

    // Export the app
    exports.app = app;

})(window, Vue, VueRouter, window.dataStore, window.vueEngine, window.descriptionComponent, window.linkListComponent, window.projectListComponent, window.cardComponent);
