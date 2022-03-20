<template>
  <section class="my-10">
    <!-- background -->
    <div id="bg">
      <img class="background" src="../assets/background.webp" />
    </div>
    <!-- buttons -->
    <button
      v-on:click="reset"
      class="bg-red text-white py-2 px-4 rounded-sm uppercase"
    >
      reset form
    </button>
    <button
      type="button"
      class="bg-green text-white py-2 px-4 mx-4 rounded-sm uppercase"
      @click="showModal"
    >
      Search
    </button>

    <!-- form -->
    <div class="form">
      <form v-on:submit.prevent="submitForm">
        <FieldsComponent
          v-show="isModalVisible"
          @close="closeModal"
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
        >
          <!-- error field required -->
          <template v-slot:header>
            <span v-if="error" class="text-red uppercase text-center my-2">
              {{ error }}</span
            >
          </template></FieldsComponent
        >
      </form>
    </div>
    <!-- <button
        class="border-b-2 border-green-500 mx-2 my-4"
        v-for="field in fields"
        :key="field.id"
        @click="clickPage(field.id)"
      >
        {{ field.name }}
      </button>
      <component :is="activeComponent" v-model="filter.name"> </component> -->
    <!-- v-if="activeComponent && isSubmit" -->
    <!-- transition data -->
    <transition name="fade" class="parent" v-if="isSubmit">
      <div v-if="show" class="child">
        <img class="portail" src="../assets/portail.webp" alt="portail" />
      </div>
      <DatasComponent v-else :filter="filter"></DatasComponent>
    </transition>
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
      error: "",
      isModalVisible: false,
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
        gender: "",
      },
    };
  },

  methods: {
    showModal() {
      this.isModalVisible = true;
      this.error = "";
    },
    closeModal() {
      this.isModalVisible = false;
      this.error = "";
    },
    setShow() {
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
    submitForm() {
      if (
        this.filter.name ||
        this.filter.gender ||
        this.filter.status ||
        this.filter.species
      ) {
        this.isSubmit = true;
        this.setShow();
        this.isModalVisible = false;
      }

      if (
        !this.filter.name ||
        !this.filter.gender ||
        !this.filter.status ||
        !this.filter.species
      ) {
        this.error = "one field required";
      }
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
      this.show = true;
      this.error = "";
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (min-width: 768px) {
  .child {
    top: 70%;
    left: 50%;
  }
}
#bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: -10;
}
#bg img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
  opacity: 50%;
}
</style>
