<script>
import NeumElement from "./NeumElement";
export default {
  name: "NeumDiv",
  components: {
    NeumElement,
  },
  functional: true,
  render: function (createElement, context) {
    const data = {
      ...context.data,
      props: {
        element: "div",
      },
    };
    return createElement(NeumElement, data, context.children);
  },
};
</script>

<style>
  .neum-box-div {
    border-radius: var(--neum-radius);
    background-image: var(--neum-background);
    transition: all 0.1s cubic-bezier(0.4, 0.1, 0.1, 0.4) 0s;
    box-shadow: inset var(--neum-shadow-light-zero), inset var(--neum-shadow-dark-zero), var(--neum-shadow-light), var(--neum-shadow-dark);
  }
  .neum-box-div.inset {
    box-shadow: inset var(--neum-shadow-light), inset var(--neum-shadow-dark), var(--neum-shadow-light-zero), var(--neum-shadow-dark-zero);
  }
</style>
