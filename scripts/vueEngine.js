(function (exports, appData, cardComponent) {
    'use strict';

    exports.vueEngine = {
        el: '#content',
        data: function () {
            return {
                'currentView': 'card'
            };
        },
        ready: function () {
            console.log('vueEngine ready!');
        },
        methods: {
            setData: function (newData) {
                // ?
            }
        },
        components: {
            'card': cardComponent
        }
    };

})(window, window.appData, window.cardComponent);
