<template>
  <div class="grid text-left modal-backdrop">
    <div class="modal p-4">
      <!-- close modal -->
      <button type="button" class="text-right text-xl" @click="close">x</button>
      <slot name="header"></slot>
      <!-- fields -->
      <slot name="body">
        <input
          class="border-2 border-grey px-4 py-2 uppercase focus:border-green-400 outline-none rounded-sm"
          type="text"
          :value="name"
          name="name"
          placeholder="name"
          @input="$emit('name', $event.target.value)"
        />

        <div
          v-for="input in inputs"
          :key="input.id"
          class="grid grid-cols-2 border-b-2 border-grey px-4 py-2 my-2 uppercase"
        >
          <label :for="input.label">
            {{ input.label }}
          </label>
          <input
            :class="input.class"
            :id="input.label"
            :type="input.type"
            :placeholder="input.placeholder"
            :value="input.value"
            :name="input.name"
            @input="$emit(`${input.value}`, $event.target.value)"
          />
        </div>
      </slot>
      <!-- submit -->
      <input
        type="submit"
        class="bg-green text-white py-2 my-4 rounded-sm uppercase cursor-pointer w-full"
        value="submit"
      />

      <!-- reset fields -->
      <button type="reset" class="bg-red text-white rounded-sm py-2 uppercase">
        Reset fields
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldsComponent",
  props: {
    name: String,
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },

  data() {
    return {
      inputs: [
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
          name: "gender",
        },
        {
          id: 5,
          label: "male",
          type: "radio",
          value: "male",
          name: "gender",
        },
        {
          id: 6,
          label: "alive",
          type: "radio",
          value: "alive",
          name: "status",
        },
        {
          id: 7,
          label: "dead",
          type: "radio",
          value: "dead",
          name: "status",
        },
      ],
    };
  },
};
</script>
<style>
input {
  accent-color: #49cb12;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}
</style>
