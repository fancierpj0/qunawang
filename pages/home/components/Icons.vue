<template>
    <div class="icons">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon"
                     v-for="item of page"
                     :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
  export default {
    name: "HomeIcons"
    ,props:{
      list:Array
    }
    ,data(){
      return {
        swiperOption:{
          // pagination:'.swiper-pagination'
          // ,loop:true
          // ,autoplay:3500
          // ,autoplayDisableOnInteraction:false
        }
      }
    }
    ,computed:{
      pages(){
        const pages = [];
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if(!pages[page]){
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
      ,showSwiper(){
        return this.list.length;
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '~@/assets/variables';
    @import '~@/assets/mixins';

    .icons /deep/ .swiper-container{
        /*background:pink;*/
        overflow:hidden;
        height:0;
        padding-bottom:50%;
    }

    .icons{
        margin-top:.1rem;
        .icon{
            /*background:red;*/
            position:relative;
            float:left;
            width:25%;
            padding-bottom:25%;
            height:0;
            overflow:hidden;

            .icon-img{
                /*background:blue;*/
                position:absolute;
                left:0;
                top:0;
                right:0;
                bottom:.44rem;
                box-sizing:border-box;
                padding:.1rem;
                .icon-img-content{
                    height:100%;
                    display:block;
                    margin:0 auto;
                }
            }

            .icon-desc{
                /* 绝对定位的跟随性，So没有设置top */
                position:absolute;
                left:0;
                right:0;
                bottom:0;
                height:.44rem;
                line-height:.44rem;
                text-align:center;
                color:$darkTextColor;
                @include ellipsis();
            }
        }
    }
</style>