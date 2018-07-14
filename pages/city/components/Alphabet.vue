<template>
    <ul class="list">
        <li
            class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >{{item}}</li>
    </ul>
</template>

<script>
  export default {
    name: "CityAlphabet"
    ,props:{
      cities:Object
    }
    ,computed:{
      letters(){
        const letters = [];
        for(let i in this.cities){
          letters.push(i);
        }
        return letters;
      }
    }
    ,data:function(){
      return {
        touchStatus:false
        ,startY:0
        ,timer:null //用于节流
      }
    }
    ,updated(){
      //第一次是没有数据的，第二次才有，故放在updated里
      this.startY = this.$refs['A'][0].offsetTop;
    }
    ,methods:{
      handleLetterClick(e){
        this.$emit('change', e.target.innerText);
      }
      ,handleTouchStart(){
        this.touchStatus = true;
      }
      ,handleTouchMove(e){
        if(this.touchStatus){
          // const startY = this.$refs['A'][0].offsetTop;
          // console.log(startY);
          if(this.timer){
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79; //clientY是 手指距离视口最顶部的位置 //79是顶部header的高度
            const index = Math.floor((touchY - this.startY) / 20); //要获得索引 故向下取整 //20是每个字母所占据的高度 //touchY是字母A顶部距离list顶部的位置
            if(index>=0&&index<this.letters.length){
              this.$emit('change', this.letters[index]);
            }
          }, 16);
        }
      }
      ,handleTouchEnd(e){
        this.touchStatus = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '~@/assets/variables';

    .list{
        display:flex;
        flex-direction:column;
        justify-content:center;
        position:absolute;
        top:1.58rem;
        right:0;
        bottom:0;
        width:.4rem;
        .item{text-align:center;line-height:.4rem;color:$bgColor;}
    }
</style>