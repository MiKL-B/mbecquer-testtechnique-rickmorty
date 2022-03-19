<template>
  <div>
    <label :for="input.name" v-for="input in inputs" :key="input.id">
      {{ input.label }}
      <input
        :id="input.name"
        :type="input.type"
        :placeholder="input.placeholder"
        :value="input.value"
        :name="input.name"
        @input="$emit(`${input.value}`, $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "FieldsComponent",

  data() {
    return {
      inputs: [
        {
          id: 1,
          type: "search",
          placeholder: "name",
          value: "name",
          name: "name",
        },
        {
          id: 2,
          label: "human",
          type: "radio",
          value: "human",
          name: "species",
        },
        {
          id: 3,
          label: "alien",
          type: "radio",
          value: "alien",
          name: "species",
        },
        {
          id: 4,
          label: "female",
          type: "radio",
          value: "female",
          name: "female",
        },
        {
          id: 5,
          label: "male",
          type: "radio",
          value: "male",
          name: "male",
        },
        {
          id: 6,
          label: "alive",
          type: "radio",
          value: "alive",
          name: "alive",
        },
        {
          id: 7,
          label: "dead",
          type: "radio",
          value: "dead",
          name: "dead",
        },
      ],
    };
  },
};
</script>
