(function (exports) {
    'use strict';

    exports.linkComponent = {
        template: '#link',
        props: {
            text: {
                validator: function (val) {
                    // text can be string or undefined (initially)
                    return val === undefined || typeof val === 'string';
                },
                required: true
            },
            url: {
                validator: function (val) {
                    // url can be string or undefined (initially)
                    return val === undefined || typeof val === 'string';
                },
                required: true
            }
        },
        ready: function () {
            // console.log('linkListComponent ready!');
        }
    };

})(window);
