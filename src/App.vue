<template>
  <!-- <h2>{{ age }}</h2>
  <button @click="$store.state.age = 20">点击</button>
  <h2>{{ $store.getters.changeAge }}</h2>
  <button @click="addAge">点击</button>
  <router-link to="bar">马杀鸡</router-link>
  <router-link to="">index</router-link>
  <router-view></router-view> -->
  <Header></Header>
  <BodyPartOne></BodyPartOne>
  <BodyPartTwo></BodyPartTwo>
  <BodyPartThree></BodyPartThree>
  <BodyPartLast></BodyPartLast>
  <Footer></Footer>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
//@ts-ignore
import { useStore } from "@/Vuex";
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
  setup() {
    let store = useStore();
    //console.log(store.state);
    return {
      age: computed(() => {
        return store.state.age;
      }),
      addAge: store.mutations.addage,
    };
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
