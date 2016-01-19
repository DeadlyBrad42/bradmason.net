(function (exports, projectLinksVm) {
    'use strict';

    exports.projectListComponent = {
        template: '#project',
        props: ['project'],
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
