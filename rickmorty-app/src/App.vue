<template>
  <div id="app">
    <!-- nav -->
    <nav class="m-4">
      <!-- logo home -->
      <router-link to="/" class="my-auto uppercase font-bold mx-auto">
        <img
          class="mx-auto md:h-28"
          src="./assets/logo.webp"
          alt="logo"
          title="Home"
      /></router-link>
    </nav>
    <!-- background -->
    <div id="bg">
      <img src="./assets/background.webp" alt="fond d'écran" />
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* background image */
#bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: -10;
}
#bg img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
  opacity: 50%;
}
</style>
