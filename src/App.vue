<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import TopHeader from './components/TopHeader.vue'
import UserInfo from './components/UserInfo.vue'
import FormCom from './components/FormCom.vue'
import Mock from './components/Mock.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <!-- <TopHeader class="top-header"></TopHeader> -->
  <!-- <UserInfo class="user-info"></UserInfo> -->
  <!-- <FormCom></FormCom> -->
  <Mock></Mock>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 80vw;
  max-width: 1280px;
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 50px;
}
.top-header {
  background-color: #f40;
}
</style>
