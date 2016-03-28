(function (exports, appData, cardComponent) {
    'use strict';

    exports.vueEngine = {
        el: '#content',
        data: {
            'currentView': {},
            'appData': {}
        },
        ready: function () {
            // console.log('vueEngine ready!');
        },
        methods: {
            setView: function (view) {
                this.currentView = this.appData.views[view];
            },
            setAppData: function (appData) {
                this.appData = appData;
            }
        },
        computed: {
            getData: function () {
                return this.currentView;
            }
        },
        components: {
            'card': cardComponent
        }
    };

})(window, window.appData, window.cardComponent);
