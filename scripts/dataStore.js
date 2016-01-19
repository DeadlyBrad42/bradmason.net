(function (exports) {
    'use strict';

    var xhr;

    exports.dataStore = {
        getData: function (callback) {
            // Initiate AJAX request
            xhr = new XMLHttpRequest();
            xhr.open('GET', '/data.json', true);
            xhr.send(null);

            xhr.addEventListener("load", function (something, something1, something2) {
                callback(JSON.parse(this.responseText));
            });
        }
    };

})(window);
