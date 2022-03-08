import Vue from 'vue'
import App from './App'
import store from './store'
import helloComponent from './components/hello-component.vue'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.component('helloComponent', helloComponent)

App.mpType = 'app'

const app = new Vue({
    ...App, store
})
app.$mount()

export const minusNum = () => {
    console.log('minusNum');
    return "你好，小程序插件"
}
