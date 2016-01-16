(function (exports, projectLinksVm) {
    'use strict';

    exports.projectComponent = {
        template: '#projectView',
        data: {
            title: "title here!",
            datetime: "datetime",
            datetitle: "datetitle",
            tagline: "tagline",
            iamgeUrl: "iamgeUrl",
            // Project links (?)
        },
        computed: {
            badges: function () {
                console.log("calculate badges here!");
                return "yeah badges!";
            }
        }
    };

})(window, window.projectLinksVm);
