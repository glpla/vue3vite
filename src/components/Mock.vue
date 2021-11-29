<template>
  <h2 class="title">jokes</h2>
  <div class="jokes">
    <div v-for="(item,ind) in jokes" :key="item.sid">{{ ind + 1 }}:{{ item.text }}</div>
  </div>
  <h2>event</h2>
  <div @click="inc">{{ name }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
3
const name = ref(0)
const jokes = ref([])

function inc() {
  name.value++
}

function getJokes() {
  let api = 'https://api.apiopen.top/getJoke?page=1&count=10&type=text'
  fetch(api).then((res) => {
    return res.json()
  }).then(result => {
    console.log(result);
    jokes.value = result.result
  })
}

onMounted(getJokes)
</script>

<style lang="scss" scoped>
</style>