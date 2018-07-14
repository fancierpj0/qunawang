<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
  import HomeHeader from './components/Header.vue';
  import HomeSwiper from './components/Swiper.vue';
  import HomeIcons from './components/Icons.vue';
  import HomeRecommend from './components/Recommend.vue';
  import HomeWeekend from './components/Weekend.vue';
  import axios from 'axios';
  import {mapState} from 'vuex';

  export default {
    name: "Home"
    ,components:{
      HomeHeader
      ,HomeSwiper
      ,HomeIcons
      ,HomeRecommend
      ,HomeWeekend
    }
    ,data(){
      return {
        // city:''
        swiperList:[]
        ,iconList:[]
        ,recommendList:[]
        ,weekendList:[]
        ,lastCity:''
      }
    }
    ,computed:{
      ...mapState(['city'])
    }
    ,methods:{
      getHomeInfo(){
        axios.get(`/mock/index.json?city=${this.city}`).then(this.getHomeInfoSucc);
      }
      ,getHomeInfoSucc(res){
        // console.log(res);
        res = res.data;
        if(res.ret&&res.data){
          const data = res.data;
          // this.city = data.city;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      }
    }
    ,mounted(){
      // console.log('mounted');
      this.getHomeInfo();
      this.lastCity = this.city;
    }
    //此声明周期函数，当页面重新被显示时会执行
    ,activated(){
      if(this.lastCity !== this.city){
        this.getHomeInfo();
        this.lastCity = this.city;
      }
    }
  }
</script>

<style>

</style>