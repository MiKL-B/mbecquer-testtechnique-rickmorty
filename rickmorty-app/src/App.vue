<template>
  <div id="app">
    <nav class="grid grid-cols-2 m-4">
      <img
        class="mx-auto md:h-28"
        src="./assets/logo.webp"
        alt="logo"
        title="Rick & Morty"
      />
      <router-link to="/" class="my-auto uppercase font-bold mx-auto"
        >home</router-link
      >
    </nav>
    <keep-alive>
      <router-view />
    </keep-alive>
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
</style>
