<template>
  <div class="container mx-auto grid md:grid-cols-2">
    <div><img class="mx-auto" :src="item.image" /></div>
    <div class="flex flex-col">
      <div class="my-4">
        <h2>Name: {{ item.name }}</h2>
        <h3>Gender: {{ item.gender }}</h3>
        <p>Specie: {{ item.species }}</p>
        <p>Status: {{ item.status }}</p>
        <p>Type: {{ item.type }}</p>
      </div>

      <div class="my-4">
        <p>Location:</p>
        <p>Name: {{ item.location.name }}</p>
        <p>Type: {{ item.location.type }}</p>
        <p>Dimension: {{ item.location.dimension }}</p>
      </div>
        <div class="my-4">
        <p>Origin:</p>
        <p>Name: {{ item.origin.name }}</p>
        <p>Type: {{ item.origin.type }}</p>
        <p>Dimension: {{ item.origin.dimension }}</p>
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
