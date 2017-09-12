import Vue = require('vue/dist/vue');
import Hello = require('./components/Hello.vue')

new Vue({ // eslint-disable-line no-new
  el: '#app',
  delimiters: ['${', '}'],
  components: {
    hello : Hello
  }
})
