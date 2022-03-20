<template>
  <div class="grid mx-4">
    <div class="bg-white shadow-2xl mx-auto grid md:grid-cols-2">
      <!-- image character -->
      <img class="p-4 mx-auto h-full" :src="item.image" :alt="item.name" />
      <div>
        <!-- information character -->
        <h2 class="mt-4 text-green">{{ item.name }}</h2>
        <div class="text-left p-4">
          <p class="text-green">Informations:</p>
          <ul>
            <li>Gender: {{ item.gender }}</li>
            <li>Specie: {{ item.species }}</li>
            <li>Status: {{ item.status }}</li>
            <li>Type: {{ item.type }}</li>
          </ul>

          <p class="text-green">Location:</p>
          <ul>
            <li>Name: {{ item.location.name }}</li>
            <li>Type: {{ item.location.type }}</li>
            <li>Dimension: {{ item.location.dimension }}</li>
          </ul>

          <p class="text-green">Origin:</p>
          <ul>
            <li>Name: {{ item.origin.name }}</li>
            <li>Type: {{ item.origin.type }}</li>
            <li>Dimension: {{ item.origin.dimension }}</li>
          </ul>
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
