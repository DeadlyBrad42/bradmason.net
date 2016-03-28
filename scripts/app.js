(function (exports, Vue, router, dataStore, vueEngine, descriptionComponent, linkListComponent, projectListComponent, cardComponent) {
    'use strict';

    var app;

    // Blatant advertising and shameless self-promotion
    console.log('This page\'s source code is available over at https://github.com/DeadlyBrad42/bradmason.net :)');


    // Intialize Vue components
    Vue.component('vue-description', descriptionComponent);
    Vue.component('vue-link', linkComponent);
    Vue.component('vue-project', projectComponent);
    Vue.component('vue-card', cardComponent);

    // Start Vue
    Vue.config.debug = true;
    app = new Vue(vueEngine);



    // Register routes
    router.registerRoute('', function () {
        app.setView('about');
        // analytics('/');
    });
    router.registerRoute('about', function () {
        app.setView('about');
        // analytics('/about');
    });
    router.registerRoute('projects', function () {
        app.setView('projects');
        // analytics('/about');
    });
    router.registerRoute('games', function () {
        app.setView('games');
        // analytics('/games');
    });

    // Get the initial app data
    dataStore.getData(function (initialData) {
        app.setAppData(initialData);

        // initialize the routing engine
        router.init();
    });

    // Export the app
    exports.app = app;

})(window, Vue, window.router, window.dataStore, window.vueEngine, window.descriptionComponent, window.linkComponent, window.projectComponent, window.cardComponent);
