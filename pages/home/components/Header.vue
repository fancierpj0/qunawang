<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                <!-- getters，类似于组件中的computed，根据state里的数据算出新的数据 -->
                {{this.doubleCity}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
  export default {
    name: "HomeHeader"
    //同React mapState
    ,computed:{
      ...mapState(['city'])
      ,...mapGetters(['doubleCity'])
    }
    ,props:{
      // city:String
    }
  }
</script>

<style lang="scss" scoped>
    /* 1rem = htmlのfont-size = 50px */
    /*
        设计图是按照两倍屏来设计的，量出来的距离除以2，才是要设置的像素距离
        ，又因为rem设置为了50px，So假如我们量出来是100px，除以2,50px，因为rem=50px，故设置为1rem，同理如果量出来是50px，除以2，为25px，25px/50px -> 设置为0.5rem，比较直观 就是量出来的直接除以100，然后单位换成rem

        @代表src/目录
        如果是css的引用，要使用~@
    */
    @import "~@/assets/variables";
    @import "~@/assets/mixins";

    .header{
        display:flex;
        /* .86rem */
        line-height: $headerHeight;
        background:$bgColor;
        color:#fff;
        .header-left{
            width: .64rem;
            float:left;
            .back-icon{
                text-align:center;
                font-size:.4rem;
            }
        }
        .header-input{
            background:#ffffff;
            color:#ccc;
            border-radius:.1rem;

            flex:1;
            height:.64rem;
            line-height: .64rem;
            margin-top:.12rem;
            margin-left:.2rem;
            padding-left:.2rem;
        }
        .header-right{
            color:#fff;

            min-width:1.04rem;
            padding:0 .1rem;
            float:right;
            text-align:center;

            @include ellipsis();
            .arrow-icon{
                margin-left:-.02rem;
                font-size:.24rem;
            }
        }
    }
</style>