(function (exports, appData, cardVm, descriptionComponent) {
    'use strict';

    exports.vueEngine = {
        el: '#content',
        data: function () {
            return {
                'currentView': 'description'
            };
        },
        ready: function () {
            console.log('vueEngine ready!');
        },
        methods: {
            setData: function (newData) {

            }
        },
        components: {
            'description': window.descriptionComponent
        }
    };

})(window, window.appData, window.cardVm, window.descriptionComponent);
