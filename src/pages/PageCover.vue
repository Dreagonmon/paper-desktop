<template>
  <div class="root">
    <div style="font-size: 6em;">
      <NeumText>{{time}}</NeumText>
    </div>
    <div style="font-size: 6em;">
      <NeumText>--------</NeumText>
    </div>
    <div style="font-size: 6em;">
      <NeumText>{{year}}</NeumText>
    </div>
    <div style="font-size: 6em;">
      <NeumText>{{date}}</NeumText>
    </div>
  </div>
</template>

<script>
import NeumText from "../components/NeumText";
import moment from "moment";
export default {
  name: "PageCover",
  components: {
    NeumText,
  },
  data: function () {
    return {
      time: "",
      year: "",
      date: "",
      timerId: 0,
    };
  },
  mounted: function () {
    const now = moment();
    this.time = now.format("HH:mm");
    this.year = now.format("YYYY");
    this.date = now.format("MM-DD");
    setInterval(() => {
      const now = moment();
      this.time = now.format("HH:mm");
      this.year = now.format("YYYY");
      this.date = now.format("MM-DD");
    }, 1000);
  },
  beforeDestroy: function () {
    clearInterval(this.timerId);
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
}
</style>
