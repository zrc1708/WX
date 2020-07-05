import Vue from 'vue'
import store from './store/store'
import App from './App'
import Fly from 'flyio/dist/npm/wx'

Vue.config.productionTip = false
App.mpType = 'app'

// 将store对象放置Vue的原型上，使每个实例都可以使用
Vue.prototype.$store = store

let fly = new Fly

fly.interceptors.request.use((request)=>{
    request.headers["Content-Type"]="json";
    return request;
})


Vue.prototype.$fly = fly

const app = new Vue(App)
app.$mount()
