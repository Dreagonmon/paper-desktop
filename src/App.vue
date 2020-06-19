<template>
  <div id="app">
    <NeumDiv id="content" :inset="!inset">
      <PageCover v-if="!inset" />
      <PageApps v-if="inset" />
    </NeumDiv>
    <NeumButton id="footer" @click="inset=!inset">
      <span>Show {{inset ? "Cover" : "Apps"}}</span>
    </NeumButton>
  </div>
</template>

<script>
import NeumDiv from "./components/NeumDiv";
import NeumButton from "./components/NeumButton";
import PageCover from "./pages/PageCover";
import PageApps from "./pages/PageApps";
export default {
  name: "App",
  data: function () {
    return {
      inset: false,
    };
  },
  components: {
    NeumDiv,
    NeumButton,
    PageCover,
    PageApps,
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
* {
  box-sizing: border-box;
}
#content {
  width: 100%;
  flex: 1 1 auto;
  overflow: hidden;
  width: calc(100% - 2em);
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding: 1em;
}
#footer {
  overflow: hidden;
  height: 4em;
  flex: 0 0 auto;
  width: calc(100% - 2em);
  margin-block-end: 1em;
}
#footer span {
  font-weight: bolder;
  font-size: 1.4em;
  color: rgba(0,0,0,0.2);
}
#app {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 1em; */
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
