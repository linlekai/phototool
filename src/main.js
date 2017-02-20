// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import core from 'components/core.vue'
import callme from 'components/callme.vue'
import myphoto from 'components/myphoto.vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<App>
              <core></core>       
              <myphoto></myphoto>
              <callme></callme>
             <App/>
  `,
  components: {
    core,
    App,
    callme,
    myphoto
  },
  data: {},
})
router.push('core')
