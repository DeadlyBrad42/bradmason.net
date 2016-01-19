(function (exports, appData, cardComponent) {
    'use strict';

    exports.vueEngine = {
        el: '#content',
        data: {
            'currentData': {}
        },
        ready: function () {
            // console.log('vueEngine ready!');
        },
        methods: {
            setData: function (newData) {
                this.currentData = newData;
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
