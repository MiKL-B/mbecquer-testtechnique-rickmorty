<template>
  <div id="app">
    <nav class="border-b-4 border-green">
      <router-link to="/">
        <img
          class="mx-auto md:h-36"
          src="./assets/logo.webp"
          alt="logo"
          title="Accueil"
      /></router-link>
    </nav>
    <main class="m-4">
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
  padding: 30px;
  background: #272727;
}

nav a {
  font-weight: bold;
  color: #303030;
}

nav a.router-link-exact-active {
  color: #49cb12;
}
</style>
