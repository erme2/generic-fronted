require('./bootstrap');

// setting up jQuery
import $ from 'jquery';
window.$ = window.jQuery = $;

// setting up Vue
window.Vue = require('vue');
 // Vue.component('example-component', require('./vue-components/component.vue'));
const app = new Vue({
    el: '#vue_test',
    data: {
        message: "vue is working :)"
    }
});

// feather
const feather = require('feather-icons');
