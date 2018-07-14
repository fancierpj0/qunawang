import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);


export default new Vuex.Store({

  state

  //无异步的话，不需要actions，直接在组件commit就好
  , actions: {
    changeCity(ctx, city) {
      // console.log('ctx',ctx)
      ctx.commit('changeCity', city);
    }
  }

  ,mutations

  ,getters:{
    doubleCity(state){
      return state.city + ' ' + state.city;
    }
  }
});