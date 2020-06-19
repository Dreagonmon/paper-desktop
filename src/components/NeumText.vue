<script>
import NeumElement from "./NeumElement";
export default {
  name: "NeumText",
  components: {
    NeumElement,
  },
  functional: true,
  render: function (createElement, context) {
    const data = {
      ...context.data,
      props: {
        element: "span",
        name: "text",
      },
    };
    return createElement(NeumElement, data, context.children);
  },
};
</script>

<style>
  .neum-box-text {
    color: var(--neum-color);
    transition: all 0.1s cubic-bezier(0.4, 0.1, 0.1, 0.4) 0s;
    text-shadow: var(--neum-shadow-light), var(--neum-shadow-dark);
  }
</style>
