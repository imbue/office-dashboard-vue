import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.dashboard = {}
window.dashboard.openWeatherApiKey = process.env.VUE_APP_OPEN_WEATHER_API_KEY

new Vue({
  render: h => h(App)
}).$mount('#app')
