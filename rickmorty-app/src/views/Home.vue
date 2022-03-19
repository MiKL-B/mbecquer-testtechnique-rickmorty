<template>
  <section class="grid md:grid-cols-2">
    <div class="mx-auto p-4 flex flex-col float-left shadow-2xl">
      <!-- <button
        class="border-b-2 border-green-500 mx-2 my-4"
        v-for="field in fields"
        :key="field.id"
        @click="clickPage(field.id)"
      >
        {{ field.name }}
      </button>
      <component :is="activeComponent" v-model="filter.name"> </component> -->

      <form v-on:submit.prevent="submitForm" class="mx-auto">
        <div class="text-left">
       
          <FieldsComponent
            :name="filter.name"
            @name="filter.name = $event"
            :human="filter.species"
            @human="filter.species = $event"
            :alien="filter.species"
            @alien="filter.species = $event"
            :female="filter.gender"
            @female="filter.gender = $event"
            :male="filter.gender"
            @male="filter.gender = $event"
            :alive="filter.status"
            @alive="filter.status = $event"
            :dead="filter.status"
            @dead="filter.status = $event"
          ></FieldsComponent>
        </div>

        <input
          type="submit"
          class="bg-green-500 text-white py-2 my-4 rounded-sm uppercase cursor-pointer w-full"
          value="submit"
        />
      </form>
      <button
        v-on:click="reset"
        class="bg-red-500 text-white py-2 rounded-sm uppercase"
      >
        reset
      </button>
    </div>
    <!-- v-if="activeComponent && isSubmit" -->
    <div v-if="isSubmit">
      <transition name="fade" class="parent">
        <div v-if="show" class="child">
          <img class="portail" src="../assets/portail.webp" alt="portail" />
        </div>
        <DatasComponent v-else :filter="filter"></DatasComponent>
      </transition>
    </div>
  </section>
</template>

<script>
// import FieldCharacters from "@/components/FieldCharacters.vue";
// import FieldEpisodes from "@/components/FieldEpisodes.vue";
// import FieldDimensions from "@/components/FieldDimensions.vue";
import DatasComponent from "../components/DatasComponent.vue";
import FieldsComponent from "@/components/FieldsComponent.vue";
export default {
  name: "HomeView",
  components: {
    // FieldCharacters,
    // FieldEpisodes,
    // FieldDimensions,
    DatasComponent,
    FieldsComponent,
  },
  data() {
    return {
      isSubmit: false,
      // activeComponent: this.FieldCharacters,
      show: true,
    
      // fields: [
      //   {
      //     id: 1,
      //     name: "Characters",
      //   },
      //   {
      //     id: 2,
      //     name: "Episodes",
      //   },
      //   {
      //     id: 3,
      //     name: "Dimensions",
      //   },
      // ],

      filter: {
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
      },
    };
  },

  methods: {
    setShow() {
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
    submitForm() {
      this.isSubmit = true;
      this.setShow();
    },
    // clickPage(field) {
    //   switch (field) {
    //     case 1:
    //       this.activeComponent = "FieldCharacters";
    //       break;
    //     case 2:
    //       this.activeComponent = "FieldEpisodes";
    //       break;
    //     case 3:
    //       this.activeComponent = "FieldDimensions";
    //       break;
    //   }
    // },
    reset() {
      this.isSubmit = false;
    },
  },
};
</script>
<style>
.portail {
  animation: spinPortail 6s linear infinite;
}
@keyframes spinPortail {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.home-container {
  display: grid;
  border: 2px solid red;
  grid-template-columns: 1fr;
}
@media screen and (min-width: 768px) {
  .home-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .child {
    top: 50%;
    left: 70%;
  }
}
</style>
