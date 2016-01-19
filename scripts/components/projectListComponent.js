(function (exports, projectLinksVm) {
    'use strict';

    exports.projectListComponent = {
        template: '#project-list',
        props: ['projects'],
        computed: {
            badges: function () {
                console.log("calculate badges here!");
                return "yeah badges!";
            }
        },
        ready: function () {
            console.log('projectListComponent ready!');
        }
    };

})(window, window.projectLinksVm);
