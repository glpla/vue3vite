<template>
  <div class="nav">
    <ul class="flex">
      <li :class="red" class="border">nav</li>
      <li :class="{ 'red': isOn }">nav</li>
      <li :class="isOn ? 'red' : 'blue'">nav</li>
      <li>nav</li>
      <li>nav</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      red: 'red',
      isOn: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  .flex {
    flex-direction: row;
    justify-content: center;
    .border {
      border: 1px solid #f40;
    }
    li {
      margin: 0 1rem;
    }
    .red {
      color: #f40;
    }
    .blue {
      color: #089;
    }
  }
}
</style>