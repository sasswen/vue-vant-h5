<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"><router-link to="/about">标签</router-link></van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      active: 0
    }
  }
};
</script>
