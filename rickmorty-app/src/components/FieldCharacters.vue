<template>
  <div class="flex flex-col w-60 mx-auto gap-4 my-4">
    <input
      class="border-2 border-gray-800 rounded-sm pl-2 p-1 my-2"
      type="text"
      :value="value"
      placeholder="name"
      @input="$emit('input', $event.target.value)"
    />
    <div>
      <label>Status: </label>
      <label><input type="radio" value="A" :v-model="state" /> Alive </label>
      <label><input type="radio" value="D" :v-model="state" /> Dead </label>
    </div>
    <div>
      <label>Species: </label>

      <label for="human">
        <input id="human" name="species" type="radio" :value="species" /> Human
      </label>
      <label for="alien">
        <input id="alien" name="species" type="radio" :value="species" /> Alien
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "FieldCharacters",
  props: {
    value: String,
    state: String,
    species: String,
    type: String,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
