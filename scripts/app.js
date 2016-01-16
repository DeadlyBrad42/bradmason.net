(function (exports, Vue, Router, vueEngine, descriptionComponent, linkListComponent, projectComponent, cardComponent) {
    'use strict';

    // Load data from data.json
    //TODO: Remove this test data
    var appData = {
        "title": "About",
        "text": [
            "I'm Brad Mason, a software developer located in <a href=\"http://maps.google.com/maps?q=pittsburgh,+pa&amp;z=12\">Pittsburgh</a>. I work at <a href=\"http://www.acatar.com/\">Acatar</a>, a small company that believes it can change online education in a big way.",
            "I spend a lot of my spare time <a href=\"/#games\">making games</a> and <a href=\"/#projects\">building other projects</a>, both because I enjoy expanding my technical knowledge and because I enjoy the act of creating to add something new and interesting to the world."
        ],
        "links": [
            {
                "text": "Email",
                "url": "mailto:BradTMason@gmail.com",
                "type": "email"
            },
            {
                "text": "R&eacute;sum&eacute;",
                "url": "/assets/bin/resume.pdf",
                "type": "pdf"
            }
        ]
    };

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

    // Intialize Vue components
    Vue.component('description', descriptionComponent);
    Vue.component('linkList', linkListComponent);
    Vue.component('project', projectComponent);
    Vue.component('card', cardComponent);

    // Start Vue
    Vue.config.debug = true;
    exports.app = new Vue(vueEngine);

})(window, Vue, VueRouter, window.vueEngine, window.descriptionComponent, window.linkListComponent, window.projectComponent, window.cardComponent);
