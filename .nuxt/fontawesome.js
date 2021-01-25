import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faSearch as freeFasFaSearch,
  faRubleSign as freeFasFaRubleSign,
  faPhone as freeFasFaPhone,
  faArrowRight as freeFasFaArrowRight
} from '@fortawesome/free-solid-svg-icons'

import {
  faVk as freeFabFaVk,
  faInstagram as freeFabFaInstagram,
  faYoutube as freeFabFaYoutube
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFasFaSearch,
  freeFasFaRubleSign,
  freeFasFaPhone,
  freeFasFaArrowRight,
  freeFabFaVk,
  freeFabFaInstagram,
  freeFabFaYoutube
)

config.autoAddCss = false

Vue.component('fa', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
