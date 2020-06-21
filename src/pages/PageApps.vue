<template>
  <NeumDiv class="root" :inset="true">
    <div style="font-size: 6em;" v-if="apps.length==0">
      <NeumText>……</NeumText>
    </div>
    <div v-if="apps.length!=0" id="app-drawer">
      <div v-for="app in apps" :key="app.activity" class="app-item" @click="launch(app.package,app.activity)">
        <div><img :src="getIconSrc(app.package,app.activity)" /></div>
        {{ app.name }}
      </div>
      <!--  -->
    </div>
  </NeumDiv>
</template>

<script>
import NeumDiv from "../components/NeumDiv";
import NeumText from "../components/NeumText";
import { launcher } from "android-web-launcher";
// launcher.startDebugSession();
export default {
  name: "PageApps",
  components: {
    NeumDiv,
    NeumText,
  },
  data: function () {
    return {
      apps: [],
    };
  },
  methods: {
    getIconSrc: function (packageName, activity) {
      return launcher.getApplicationIconSrc(packageName, activity, 128);
    },
    launch: async function (packageName, activity) {
      await launcher.launchApplication(packageName, activity);
    },
  },
  mounted: async function () {
    await launcher.requestPermission("launcher");
    this.apps = await launcher.getApplicationList();
    console.log(this.apps);
  },
};
</script>

<style scoped>
.root {
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 5vw 0;
  scrollbar-width: 0;
}
#app-drawer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
}
.app-item {
  padding-bottom: 5vw;
  font-size: 0.8em;
}
.app-item img {
  max-width: 80%;
}
</style>
