import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// use bpmn-js stylesheet
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-js.css'

import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
// properties panel
import '@bpmn-io/properties-panel/assets/properties-panel.css'
// minimap
import 'diagram-js-minimap/assets/diagram-js-minimap.css'
// chooser
import '@bpmn-io/element-template-chooser/dist/element-template-chooser.css'
// import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css'
// form js styles
import '@bpmn-io/form-js/dist/assets/form-js.css'
import '@bpmn-io/form-js/dist/assets/form-js-editor.css'
import '@bpmn-io/form-js/dist/assets/form-js-playground.css'
// main style
import '@/assets/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
