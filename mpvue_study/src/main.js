import Vue from 'vue'
import store from './store/store'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

// 将store对象放置Vue的原型上，使每个实例都可以使用
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
