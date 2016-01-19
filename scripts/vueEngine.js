(function (exports, appData, cardComponent) {
    'use strict';

    exports.vueEngine = {
        el: '#content',
        data: {
            'currentData': {},
            'appData': {}
        },
        ready: function () {
            // console.log('vueEngine ready!');
        },
        methods: {
            setView: function (view) {
                this.currentData = this.appData.views[view];
            },
            setAppData: function (appData) {
                this.appData = appData;
            }
        },
        computed: {
            getData: function () {
                return this.currentData;
            }
        },
        components: {
            'card': cardComponent
        }
    };

})(window, window.appData, window.cardComponent);
