<template>
  <div id="app">
    <nav class="border-b-4 border-green-500 grid grid-cols-2 p-4">
      <img
        class="mx-auto md:h-28"
        src="./assets/logo.webp"
        alt="logo"
        title="Accueil"
      />
      <router-link to="/" class="my-auto uppercase text-white mx-auto"
        >accueil</router-link
      >
    </nav>
    <main class="m-2">
      <router-view />
    </main>
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
  color: #2c3e50;
}

nav {

  background: #272727;
}


</style>
