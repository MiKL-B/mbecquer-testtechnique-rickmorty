<template>
  <section class="home">
    <div>
      <button
        v-for="field in fields"
        :key="field.id"
        @click="clickPage(field.id)"
      >
        {{ field.name }}
      </button>
      <component :is="pageCourante" v-model="filter.name"> </component>

      <form v-on:submit.prevent="submitForm">
        <button type="submit" class="border-2">submit</button>
      </form>
    </div>
    <div v-if="pageCourante == 'FieldCharacters' && isSubmit">
      <transition name="fade" class="parent">
        <DatasComponent v-if="show" :filter="filter"></DatasComponent>
        <div v-else class="child">
          <img class="portail" src="../assets/portail.webp" alt="portail" />
        </div>
      </transition>
    </div>
    <!-- <div v-if="pageCourante == 'FieldEpisodes' && isSubmit"></div>
    <div v-if="pageCourante == 'FieldDimensions' && isSubmit"></div> -->
  </section>
</template>

<script>
import FieldCharacters from "@/components/FieldCharacters.vue";
import FieldEpisodes from "@/components/FieldEpisodes.vue";
import FieldDimensions from "@/components/FieldDimensions.vue";
import DatasComponent from "../components/DatasComponent.vue";
export default {
  name: "HomeView",
  components: {
    FieldCharacters,
    FieldEpisodes,
    FieldDimensions,
    DatasComponent,
  },
  data() {
    return {
      isSubmit: false,
      pageCourante: this.FieldCharacters,
      show: false,
      fields: [
        {
          id: 1,
          name: "Characters",
        },
        {
          id: 2,
          name: "Episodes",
        },
        {
          id: 3,
          name: "Dimensions",
        },
      ],

      filter: {
        name: "",
      },
    };
  },

  methods: {
    setShow() {
      setTimeout(() => {
        this.show = true;
      }, 2000);
    },
    submitForm() {
      this.isSubmit = true;
      this.setShow();
      console.log("submit");
    },
    clickPage(field) {
      switch (field) {
        case 1:
          this.pageCourante = "FieldCharacters";
          break;
        case 2:
          this.pageCourante = "FieldEpisodes";
          break;
        case 3:
          this.pageCourante = "FieldDimensions";
          break;
      }
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
    left: 70%;
  }
}
</style>
