import { getTheme } from "../utils/neum_theme";
import { getDarkBoxShadow, getLightBoxShadow, getConvexbackground, getConcavebackground, getPlainbackground } from "../utils/neum_style";
const Theme = getTheme();
const props = {
  element: {
    require: true,
  },
  radius: {
    default: Theme.NEUM_RADIUS,
  },
  color: {
    default: Theme.NEUM_COLOR,
  },
  distance: {
    default: Theme.NEUM_DISTANCE,
  },
  intensity: {
    default: Theme.NEUM_INTENSITY,
  },
  direction: {
    default: Theme.NEUM_DIRECTION,
  },
  inset: {
    default: Theme.NEUM_INSET,
  },
  backgroundType: {
    default: 0, // 0 1 2 [plain] [concave] [convex]
  },
};
const boxStyle = function (props) {
  let background;
  switch (props.backgroundType) {
    case 2:
      background = getConvexbackground(props.color, props.intensity, props.direction);
      break;
    case 1:
      background = getConcavebackground(props.color, props.intensity, props.direction);
      break;
    case 0: default:
      background = getPlainbackground(props.color);
      break;
  }
  return {
    "--neum-radius": props.radius,
    "--neum-shadow-light": getLightBoxShadow(props.color, props.distance, props.intensity, props.direction),
    "--neum-shadow-dark": getDarkBoxShadow(props.color, props.distance, props.intensity, props.direction),
    "--neum-shadow-light-zero": getLightBoxShadow(props.color, 0, props.intensity, props.direction),
    "--neum-shadow-dark-zero": getDarkBoxShadow(props.color, 0, props.intensity, props.direction),
    "--neum-background": background,
  };
};
export default {
  name: "NeumDiv",
  props: props,
  functional: true,
  render: function (createElement, context) {
    const data = {
      ...context.data,
      style: boxStyle(context.props),
      class: context.props.inset ? [`neum-box-${context.props.element}`, "inset"] : [`neum-box-${context.props.element}`],
    };
    return createElement(context.props.element, data, context.children);
  },
};
