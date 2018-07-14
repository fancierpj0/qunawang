//让低版本浏览器支持promise等
import 'babel-polyfill';

//引入vue全家桶
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';

//解决浏览器表现的不一致性
import './assets/reset.css';
//解决移动端1像素边框的问题
import './assets/border.css';

//解决移动端某些机型点击有300ms问题
import fastClick from 'fastclick';

fastClick.attach(document.body);

//引入iconfont
import './assets/iconfont.css';

//引入vue-awesome-swiper@2.6.7
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = true;

Vue.use(VueAwesomeSwiper);

new Vue({
  router
  , store
  , render: h => h(App)
}).$mount('#app');