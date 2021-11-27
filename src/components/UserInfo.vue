<template>
  <h2 class="user-title" :class="$attrs.class">user information</h2>
  <div class="user">
    <span class="oper">name</span>
    <span class="oper" @click="orderBy = 'age', order = !order">age</span>
    <span class="oper">gender</span>
    <span class="oper" @click="orderBy = 'like', order = !order">like</span>
    <span class="oper">operation</span>
    <span class="oper">
      <em v-if="order" class="iconfont icon-cc-arrow-up"></em>
      <em v-else class="iconfont icon-cc-arrow-down"></em>
    </span>
  </div>
  <div v-for="item in userOrder" :key="item.id" class="user">
    <span>{{ item.name }}</span>
    <span>{{ item.age }}</span>
    <span>{{ item.gender }}</span>
    <span>{{ item.like }}</span>
    <button @click="test(item.id, $event), sum()">delete</button>
  </div>
  <div class="fa" @click.self="fa">
    <div class="son" @click="son"></div>
  </div>
  <a href="https://www.baidu.com" @click="info">www.baidu.com</a>
</template>

<script>
import user from '../assets/data/user.js'
export default {
  data() {
    return {
      user,
      orderBy: 'name',
      order: true
    }
  },
  methods: {
    test(id, $e) {
      console.log(id, $e);
    },
    sum() {
      console.log('multi-function');
    },
    fa() {
      console.log('fa');
    },
    son() {
      console.log('son');
    },
    info(e) {
      e.preventDefault();
      console.log(e);
    }
  },
  computed: {
    userOrder() {
      return this.user.sort((a, b) => {
        return this.order ? a[this.orderBy] - b[this.orderBy] : b[this.orderBy] - a[this.orderBy]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  span {
    display: inline-block;
    width: 8rem;
    &.oper {
      font-weight: 700;
      text-transform: uppercase;
      line-height: 2;
    }
    &.oper:nth-child(2) {
      cursor: pointer;
      color: #f40;
    }
    &.oper:nth-child(4) {
      cursor: pointer;
      color: #f40;
    }
  }
}
.fa {
  width: 400px;
  height: 300px;
  background-color: #f40;
  .son {
    width: 100px;
    height: 60px;
    background-color: #089;
  }
}
</style>