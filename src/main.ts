import Vue = require('vue/dist/vue');
//import App from './App.vue';
import App = require('./app.vue')

new Vue({ // eslint-disable-line no-new
  el: '#app',
  delimiters: ['${', '}'],
  //render: (h) => h(App),
  render: function (createElement) {
    return createElement(App)
  },
})
