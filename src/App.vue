<template>
  <div id="app">
    <transition>
      <NeumDiv class="csss" :distance="5" :inset="inset" :backgroundType="0">
        <NeumDiv :inset="!inset" style="padding:0.5em;">Hello</NeumDiv>
      </NeumDiv>
    </transition>
    <NeumDivButton class="csss" :inset="inset" :backgroundType="0"
      @click="onClick()">
        Dragon
      </NeumDivButton>
  </div>
</template>

<script>
import NeumDiv from "./components/NeumDiv.vue";
import NeumDivButton from "./components/NeumDivButton.vue";

export default {
  name: "App",
  data: function () {
    return {
      inset: false,
    };
  },
  components: {
    NeumDiv,
    NeumDivButton,
  },
  methods: {
    onClick: function () {
      this.inset = !this.inset;
      console.log("clicked");
    },
  },
};
</script>

<style>
.csss {
  padding: 1em;
  width: fit-content;
}

#app {
  text-align: center;
  padding: 1em;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  background: #EFE8CC;
}
</style>
