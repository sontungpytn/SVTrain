import Vue from 'vue'
import { BootstrapVueIcons, BootstrapVue } from 'bootstrap-vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
// eslint-disable-next-line import/no-unresolved
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'
import 'jsoneditor/dist/jsoneditor.css'
import VoerroTagsInput from '@voerro/vue-tagsinput'
import VueGallery from 'vue-gallery'

import VueAuthImage from 'vue-auth-image'
import Notifications from 'vue-notification'
import './icons' // icon
import ProductZoomer from 'vue-product-zoomer'
import store from './store'
import router from './router'
import './permissions'
import App from './App.vue'
import SField from './components/field/Index.vue'

Vue.component('VGallery', VueGallery)
Vue.component('SField', SField)

Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueAuthImage)
Vue.use(ProductZoomer)

Vue.component('v-icon', Icon)
Vue.component('tags-input', VoerroTagsInput)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
