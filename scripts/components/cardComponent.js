(function (exports, descriptionComponent, projectListComponent, linkListComponent) {
    'use strict';

    exports.cardComponent = {
        template: '#card',
        data: function () {
            return {
                title: 'title here!',
                text: [
                    "I'm Brad Mason, a software developer located in <a href=\"http://maps.google.com/maps?q=pittsburgh,+pa&amp;z=12\">Pittsburgh</a>. I work at <a href=\"http://www.acatar.com/\">Acatar</a>, a small company that believes it can change online education in a big way.",
                    "I spend a lot of my spare time <a href=\"/#games\">making games</a> and <a href=\"/#projects\">building other projects</a>, both because I enjoy expanding my technical knowledge and because I enjoy the act of creating to add something new and interesting to the world."
                ],
                projects: [
                    {
                        title: "title here!",
                        tagline: "tagline!",
                        datetime: "datetime!",
                        dateTitle: "datetitle!",
                        iamgeUrl: "iamgeUrl!",
                        description: [
                            "This is a test of the emergency brodcast system.",
                            "It is only a test.",
                            "Please remain calm, and do not carry on."
                        ],
                        links: [
                            {
                                text: 'Google!',
                                url: "http://www.google.com/",
                                type: "pdf"
                            }, {
                                text: 'Twitter!',
                                url: "http://www.twitter.com/",
                                type: "email"
                            }
                        ]
                    }
                ],
                links: [
                    {
                        text: 'Not Google!',
                        url: "http://www.bind.com/",
                        type: "pdf"
                    }, {
                        text: 'Not Twitter!',
                        url: "http://www.facebook.com/",
                        type: "email"
                    }
                ]
            };
        },
        ready: function () {
            console.log('cardComponent ready!');
        }
    };

})(window, window.descriptionComponent, window.projectListComponent, window.linkListComponent);
