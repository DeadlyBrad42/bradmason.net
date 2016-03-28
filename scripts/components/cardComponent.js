(function (exports, descriptionComponent, projectListComponent, linkListComponent) {
    'use strict';

    exports.cardComponent = {
        template: '#card',
        props: {
            title: {
                validator: function (val) {
                    // title can be string or undefined (initially)
                    return val === undefined || typeof val === 'string';
                },
                required: true
            },
            text: {
                validator: function (val) {
                    // text can be object or undefined (initially)
                    return val === undefined || typeof val === 'object';
                },
                required: false
            },
            projects: {
                validator: function (val) {
                    // projects can be object or undefined (initially)
                    return val === undefined || typeof val === 'object';
                },
                required: false
            },
            links: {
                validator: function (val) {
                    // links can be object or undefined (initially)
                    return val === undefined || typeof val === 'object';
                },
                required: false
            }
        },
        ready: function () {
            // console.log('cardComponent ready!');
        }
    };

})(window, window.descriptionComponent, window.projectListComponent, window.linkListComponent);
