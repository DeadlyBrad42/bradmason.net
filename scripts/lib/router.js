(function (exports, location) {
    'use strict';

    var routes = {};

    exports.router = {
        registerRoute: function (hash, onExecute) {
            if (typeof hash === 'undefined' || typeof hash !== 'string') {
                console.error('An invalid `hash` paramater was passed to the router.');
                return;
            }

            if (typeof onExecute === 'undefined' || typeof onExecute !== 'function') {
                console.error('An invalid `onExecute` paramater was passed to the router.');
                return;
            }

            routes[hash] = onExecute;
        },
        setCurrentRoute: function (route) {
            var routeToExecute = routes[route];

            if (typeof routeToExecute !== 'undefined' && typeof routeToExecute === 'function') {
                routeToExecute();
            } else {
                console.error('Route handler not found!');
            }
        },
        init: function () {
            // Get the current location, minus the hash (if it exists)
            var currentHash = location.hash,
                currentRoute = currentHash.substring(currentHash.indexOf('#') + 1, currentHash.length);

            // Figure out where we're supposed to be and execute that route
            router.setCurrentRoute(currentRoute);

            // Register the onhashchange handler to execute the new routes
            exports.onhashchange = function (event) {
                router.setCurrentRoute(event.newURL.split('#')[1]);
            };
        }
    };

})(window, window.location);
