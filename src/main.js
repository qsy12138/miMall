import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message }  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'

//MockJs开关，当我们使用mockjs的方法时，必须要配置该方法
const mock = false;
if(mock){
  require('./mock/api') //这里强调使用require的方式加载js文件，import属于预编译加载，如果使用import的，请求就会永远被拦截，而require属于编译时加载，它会去看这个if判断，根据if判断决定是否加载
}

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api' //当跨域方式为接口代理时，使用/api这种方式作为baseURL，需要注意的是，当我们不与后台进行接口联调的而使用mockjs的时候，baseURL要注释掉
axios.defaults.timeout = 8000 //默认的请求超时时间

//接口错误拦截
axios.interceptors.response.use(function (response) { 
  let res = response.data
  let path = location.hash
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){ //当未登录时
    if(path !='#/index'){
      if(path !='#/index'){
        window.location.href = '/#/login'
      }
      return Promise.reject(res)
    }
  }else{
    Message.warning(res.msg)
    return Promise.reject(res)
  }
 })

Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
