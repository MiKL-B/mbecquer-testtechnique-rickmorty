<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
<MyComp></MyComp>
  </div>
</template>

<script>
import MyComp from '../components/MyComp.vue'
export default {
  name: "HomeView",
  components: { MyComp },
};
</script>
