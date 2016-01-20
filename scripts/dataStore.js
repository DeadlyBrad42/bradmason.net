(function (exports) {
    'use strict';

    exports.dataStore = {
        getData: function (callback) {
            // Initiate AJAX request
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/data.json', true);
            xhr.send(null);

            xhr.addEventListener("load", function (something, something1, something2) {
                callback(JSON.parse(this.responseText));
            });
        }
    };

})(window);
