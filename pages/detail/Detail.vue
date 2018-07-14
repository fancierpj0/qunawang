<template>
    <div>
        <detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner.vue';
    import DetailHeader from './components/Header.vue';
    import DetailList from './components/List.vue';
    import axios from 'axios';
  export default {
    //递归组件
    //取消缓存时会用到这个名字
    //dev-tool查看组件时标签用的名字
    name: "Default"
    ,components:{
      DetailBanner
      ,DetailHeader
      ,DetailList
    }
    ,data(){
      return {
        sightName:''
        ,bannerImg:''
        ,gallaryImgs:[]
        ,list:[]
      }
    }
    ,methods:{
      getDetailInfo(){
        axios.get('/mock/detail.json',{
          params:{
            id:this.$route.params.id
          }
        }).then(this.handleGetDataSucc);
      }
      ,handleGetDataSucc(res){
        res = res.data;
        if(res.ret && res.data){
          const data = res.data;
          // console.log(data);
          this.sightName = data.sightName;
          this.bannerImg = data.bannerImg;
          this.gallaryImgs = data.gallaryImgs;
          this.list = data.categoryList;
        }
      }
    }
    ,mounted(){
      this.getDetailInfo();
    }
    //因为有keep-alive缓存 而每次进Detail页面可能id的值不一样 So，进来时要重新获取 采用activated生命周期
    //或则在keep-alive上配置exclude
    ,activated(){

    }
  }
</script>

<style lang="scss" scoped>
    .content{
        height: 50rem;}
</style>