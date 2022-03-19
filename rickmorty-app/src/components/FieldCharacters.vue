<template>
  <input class="border-2" type="search" :value="value" @input="$emit('input', $event.target.value)"
 />
     <!-- fields characters here -->
</template>
<script>
export default {
  name: "FieldCharacters",
  props: {
    value: String,
  },
  data() {
    return {
      filter: {
        name: "",
      },
    };
  },
};
</script>
