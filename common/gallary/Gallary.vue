<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide
                    v-for="(item,index) in imgs"
                    :key="index"
                >
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CommonGallary"
    ,props:{
      imgs:{
        type:Array
        ,default(){
          return [];
        }
      }
    }
    ,data:function(){
      return {
        swiperOptions:{
          pagination:'.swiper-pagination'
          //分数
          ,paginationType:'fraction'
          //解决v-show 第一次不显示 swiper计算宽高出错的问题
          ,observeParents:true
          ,observer:true
        }
      }
    }
    ,methods:{
      handleGallaryClick(){
        this.$emit('close');
      }
    }
  }
</script>

<style lang="scss" scoped>
    .container /deep/ .swiper-container {
        overflow:inherit !important;
    }

    .container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        z-index:99;
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background:#000;
        .wrapper{
            width: 100%;
            /*overflow:hidden;*/
            height:0;
            padding-bottom:100%;
            .gallary-img{
                width: 100%;
            }
            .swiper-pagination{
                /* swiper的pagination自带absolute */
                color:#fff;
                bottom:-1rem;
            }
        }
    }
</style>