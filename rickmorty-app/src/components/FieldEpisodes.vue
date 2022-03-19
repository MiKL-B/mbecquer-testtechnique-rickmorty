<template>
  <div class="flex flex-col w-60 mx-auto gap-4 my-4">
    <input
      class="border-2 border-gray-800 rounded-sm pl-2 p-1 my-2"
      type="text"
      name="episode"
      placeholder="episode"
    />
    <input
      class="border-2 border-gray-800 rounded-sm pl-2 p-1 my-2"
      type="text"
      name="name"
      placeholder="name"
    />
  </div>
</template>

<script>
export default {
  name: "FieldEpisodes",
};
</script>
