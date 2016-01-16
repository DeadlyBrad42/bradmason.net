(function (exports) {
    'use strict';

    exports.linkListComponent = {
        template: '#projectLinkView',
        data: {
            text: [],
            url: "http://www.google.com/",
            type: "pdf"
        },
        computed: {
            badges: function () {
                console.log("calculate badges here!");
                return "yeah badges!";
            }
        }
    };

})(window);
