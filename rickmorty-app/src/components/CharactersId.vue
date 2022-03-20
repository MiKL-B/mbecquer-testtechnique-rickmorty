<template>
  <div class="grid mx-4">
    <div id="bg">
      <img class="background" src="../assets/background.webp" />
    </div>
    <div class="bg-white shadow-2xl mx-auto grid md:grid-cols-2">
      <!-- image character -->
      <img class="p-4 mx-auto h-full" :src="item.image" />
      <div>
        <!-- information character -->
        <h2 class="mt-4 text-green">{{ item.name }}</h2>
        <div class="text-left p-4">
          <div>
            <p class="text-green">Information:</p>
            <p>Gender: {{ item.gender }}</p>
            <p>Specie: {{ item.species }}</p>
            <p>Status: {{ item.status }}</p>
            <p>Type: {{ item.type }}</p>
          </div>
          <div class="my-4">
            <p class="text-green">Location:</p>
            <p>Name: {{ item.location.name }}</p>
            <p>Type: {{ item.location.type }}</p>
            <p>Dimension: {{ item.location.dimension }}</p>
          </div>
          <div class="my-4">
            <p class="text-green">Origin:</p>
            <p>Name: {{ item.origin.name }}</p>
            <p>Type: {{ item.origin.type }}</p>
            <p>Dimension: {{ item.origin.dimension }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharactersId",
  data() {
    return {
      item: this.$route.params.id,
    };
  },
};
</script>
