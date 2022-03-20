<template>
  <section class="my-10">
    <!-- buttons -->
    <button
      v-on:click="resetForm" v-if="isSubmit"
      class="bg-red text-white py-2 px-4 rounded-sm uppercase"
    >
      reset form
    </button>
    <button
      type="button" v-else
      class="bg-green text-white py-2 px-4 mx-4 rounded-sm uppercase"
      @click="toggleModal"
    >
      search
    </button>

    <!-- form -->
    <div class="form">
      <form v-on:submit.prevent="submitForm">
        <FieldsComponent
          v-show="isModalVisible"
          @close="toggleModal"
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
    <!-- display portail & datas -->
    <transition name="fade" class="parent" v-if="isSubmit">
      <div v-if="show" class="child">
        <img class="portail" src="../assets/portail.webp" alt="portail" />
      </div>
      <DatasComponent v-else :filter="filter"></DatasComponent>
    </transition>
  </section>
</template>

<script>
import DatasComponent from "../components/DatasComponent.vue";
import FieldsComponent from "@/components/FieldsComponent.vue";

export default {
  name: "HomeView",
  components: {
    DatasComponent,
    FieldsComponent,
  },
  data() {
    return {
      error: "",
      isModalVisible: false,
      isSubmit: false,
      show: true,
      filter: {
        name: "",
        status: "",
        species: "",
        gender: "",
      },
    };
  },

  methods: {
    //display modal form
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
      this.error = "";
    },
    //display portail
    setShow() {
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
    //handle submit form
    submitForm() {
      if (
        this.filter.name ||
        this.filter.gender ||
        this.filter.status ||
        this.filter.species
      ) {
        this.isSubmit = true;
        this.isModalVisible = false;
        this.setShow();
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
    resetForm() {
      this.isSubmit = false;
      this.show = true;
      this.error = "";
    },
  },
};
</script>
<style>
/* portail */
.portail {
  animation: spinPortail 6s linear infinite;
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
@keyframes spinPortail {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* media queries */
@media screen and (min-width: 768px) {
  .child {
    top: 70%;
    left: 50%;
  }
}
</style>
