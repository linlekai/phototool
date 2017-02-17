import Vue from 'vue'
import Router from 'vue-router'
import core from 'components/core'
import myphoto from 'components/myphoto'
import ranges from 'components/ranges'
import callme from 'components/callme'
import photogallery from 'components/photogallery'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/core',
    name: 'core',
    components: {
      a: core,
      b: ranges
    }
  }, {
    path: '/myphoto',
    name: 'myphoto',
    component: myphoto
  }, {
    path: '/callme',
    name: 'callme',
    component: callme
  }, {
    path: '/photogallery',
    name: 'photogallery',
    component: photogallery
  }]
})
