(function (exports) {
    'use strict';

    exports.linkListComponent = {
        template: '#link-list',
        props: ['links'],
        computed: {
            badges: function () {
                console.log("calculate badges here!");
                return "yeah badges!";
            }
        },
        ready: function () {
            console.log('linkListComponent ready!');
        }
    };

})(window);