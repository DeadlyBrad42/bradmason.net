(function (exports, projectLinksVm) {
    'use strict';

    exports.projectComponent = {
        template: '#project',
        props: {
            title: {
                validator: function (val) {
                    // title can be string or undefined (initially)
                    return val === undefined || typeof val === 'string';
                },
                required: true
            },
            datetime: {
                validator: function (val) {
                    // dateTime can be string or undefined (initially)
                    return val === undefined || typeof val === 'string';
                },
                required: false
            },
            datetitle: {
                validator: function (val) {
                    // dateTitle can be string or undefined (initially)
                    return val === undefined || typeof val === 'string';
                },
                required: false
            },
            imageurl: {
                validator: function (val) {
                    // imageUrl can be string or undefined (initially)
                    return val === undefined || typeof val === 'string';
                },
                required: true
            },
            tagline: {
                validator: function (val) {
                    // tagline can be string or undefined (initially)
                    return val === undefined || typeof val === 'string';
                },
                required: true
            },
            links: {
                validator: function (val) {
                    // links can be object (array) or undefined (initially)
                    return val === undefined || typeof val === 'object';
                },
                required: false
            },
        },
        ready: function () {
            // console.log('projectListComponent ready!');
        }
    };

})(window, window.projectLinksVm);
