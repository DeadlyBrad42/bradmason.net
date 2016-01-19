(function (exports, descriptionComponent, projectListComponent, linkListComponent) {
    'use strict';

    exports.cardComponent = {
        template: '#card',
        props: ['data'],
        ready: function () {
            // console.log('cardComponent ready!');
        }
    };

})(window, window.descriptionComponent, window.projectListComponent, window.linkListComponent);
