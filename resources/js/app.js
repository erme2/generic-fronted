require('./bootstrap');

// setting up jQuery
import $ from 'jquery';
window.$ = window.jQuery = $;

// setting up Vue
import Vue from 'vue';
new Vue({
    el: '#app',
});
