<template>
  <Header></Header>
  <BodyPartOne></BodyPartOne>
  <BodyPartTwo></BodyPartTwo>
  <BodyPartThree></BodyPartThree>
  <BodyPartLast></BodyPartLast>
  <Footer></Footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
//@ts-ignore
import Header from "./components/Header.vue";
import BodyPartOne from "./components/BodyPartOne.vue";
import BodyPartTwo from "./components/BodyPartTwo.vue";
import BodyPartThree from "./components/BodyPartThree.vue";
import BodyPartLast from "./components/BodyPartLast.vue";
//@ts-ignore
import Footer from "./components/Footer.vue";
export default defineComponent({
  name: "App",
  components: {
    Header,
    BodyPartOne,
    BodyPartTwo,
    BodyPartThree,
    BodyPartLast,
    Footer,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
