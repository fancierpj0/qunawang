<template>
    <div id="app">
        <!-- 路由的内容，被加载过一次后就会放在内存之中，下一次再进入当前路由时就不会再重新加载（这意味着一个路由对应的那一个组件只会加载一次） -->
        <keep-alive exclude="Detail">
            <!-- router-view显示的是当前路由地址对应的内容 -->
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
  export default {
    name: "app"
  }
</script>

<style scoped>

</style>