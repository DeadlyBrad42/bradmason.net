(function (exports) {
    'use strict';

    exports.linkListComponent = {
        template: '#link',
        props: ['link'],
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
