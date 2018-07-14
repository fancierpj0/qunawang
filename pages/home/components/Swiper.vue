<template>
    <div class="wrapper">
                                        <!-- 不用加() -->
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
            <!--<div class="swiper-button-next" slot="button-next"></div>-->
            <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
        </swiper>
    </div>
</template>

<script>
  export default {
    name: "HomeSwiper"
    ,props:{
      list:Array
    }
    ,data(){
      return {
        swiperOption:{
          pagination:'.swiper-pagination'
          ,loop:true
          ,autoplay:3500
          ,autoplayDisableOnInteraction:false
        }
      }
    }
    ,computed:{
      showSwiper(){
        return this.list.length;
      }
    }
  }
</script>

<!--<style>-->
    <!--.wrapper .swiper-pagination-bullet-active{-->
        <!--background:#fff !important;-->
    <!--}-->
<!--</style>-->
<style lang="scss" scoped>
    /*
        第三方组件的css引入是作为全局css引入的，而这里设置的是scoped的css，无法修饰上
        (scoped的原理是使用属性选择器和类名进行交集，比如.wrapper[data-v-xxx]{})
        解决办法有两种：
            1. 使用'本组件最外层类名 >>> 要穿透的类名'进行穿透 (sass/less的穿透符为 /deep/)
            2. 创建一个没有scoped标签
    */

    .wrapper /deep/ .swiper-pagination-bullet-active{
        background:#fff !important;
    }

    .wrapper{
        overflow:hidden;
        width: 100%;
        height: 0;
        /* 解决抖动，swiper未加载好前是没有高度的 */
        padding-bottom:31.25%;
        background:#eeeeee;

        .swiper-img{width:100%;}
    }
</style>