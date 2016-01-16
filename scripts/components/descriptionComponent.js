(function (exports) {
    'use strict';

    exports.descriptionComponent = {
        template: '#description',
        data: function () {
            return {
                text:  [
                    "I'm Brad Mason, a software developer located in <a href=\"http://maps.google.com/maps?q=pittsburgh,+pa&amp;z=12\">Pittsburgh</a>. I work at <a href=\"http://www.acatar.com/\">Acatar</a>, a small company that believes it can change online education in a big way.",
                    "I spend a lot of my spare time <a href=\"/#games\">making games</a> and <a href=\"/#projects\">building other projects</a>, both because I enjoy expanding my technical knowledge and because I enjoy the act of creating to add something new and interesting to the world."
                ]
            };
        },
        ready: function () {
            console.log('descriptionVm ready!');
        }
    };

})(window);
