import { cardComponent } from './components/cardComponent.js';

export const vueEngine = {
    el: '#content',
    data: {
        'currentView': {},
        'appData': {}
    },
    ready: function () {
        // console.log('vueEngine ready!');
    },
    methods: {
        setView: function (view) {
            this.currentView = this.appData.views[view];
        },
        setAppData: function (appData) {
            this.appData = appData;
        }
    },
    computed: {
        getData: function () {
            return this.currentView;
        }
    },
    components: {
        'card': cardComponent
    }
};
