import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header'

Vue.prototype.$eventBus = new Vue();


// 声明的是全局组件，只有在vue的项目中，都能使用
Vue.component('Header', Header);

new Vue({
  render: h => h(App),
}).$mount('#app')
