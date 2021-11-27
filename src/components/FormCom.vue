<template>
  <form action>
    <input type="text" v-model.lazy="info.title" />
    {{ info.title }}
    <textarea v-model="info.desc"></textarea>
    <input type="checkbox" v-model="info.hobby" value="read" />read
    <input type="checkbox" v-model="info.hobby" value="sing" />sing
    <input type="checkbox" v-model="info.hobby" value="dance" />dance
    <label>
      <input type="radio" v-model="info.gender" value="male" />male
    </label>
    <label>
      <input type="radio" v-model="info.gender" value="female" />female
    </label>
    <select v-model="info.citys">
      <option :value="{ name: 'beijing' }">beijing</option>
      <option :value="{ name: 'guilin' }">guilin</option>
      <option :value="{ name: 'guangzhou' }">guangzhou</option>
    </select>
  </form>
  <!-- 检验数据的双向绑定 -->
  <div>{{ info }}</div>
</template>

<script>
let info = { title: 'cnplaman', desc: 'lorem here', isSel: true, hobby: [], gender: '', citys: {} }
export default {
  data() {
    return {
      info
    }
  },
}
</script>

<style lang="scss" scoped>
</style>