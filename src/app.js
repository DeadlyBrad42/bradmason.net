import Vue from 'vue';
import { router } from './lib/router.js';
import { dataStore } from './dataStore.js';
import { vueEngine } from './vueEngine.js';
import { descriptionComponent } from './components/descriptionComponent.js';
import { linkComponent } from './components/linkComponent.js';
import { projectComponent } from './components/projectComponent.js';
import { cardComponent } from './components/cardComponent.js';
import './lib/konami.js';
import './styles/portfolio.less';

// Blatant advertising and shameless self-promotion
console.log('This page\'s source code is available over at https://github.com/DeadlyBrad42/bradmason.net :)');

// Initialize Vue components
Vue.component('vue-description', descriptionComponent);
Vue.component('vue-link', linkComponent);
Vue.component('vue-project', projectComponent);
Vue.component('vue-card', cardComponent);

// Start Vue
Vue.config.debug = true;
var app = new Vue(vueEngine);

// Register routes
router.registerRoute('', function () {
    app.setView('about');
});
router.registerRoute('about', function () {
    app.setView('about');
});
router.registerRoute('projects', function () {
    app.setView('projects');
});
router.registerRoute('games', function () {
    app.setView('games');
});

// Get the initial app data
dataStore.getData(function (initialData) {
    app.setAppData(initialData);

    // initialize the routing engine
    router.init();
});

// Export the app
export { app };
