const NEUM_DISTANCE = 5; // px
const NEUM_INTENSITY = 15; // intensity/100
const NEUM_COLOR = "#EFE8CC";
const NEUM_RADIUS = "16px";
const NEUM_DIRECTION = 0; // 0 1 2 3 [TOP-LEFT] [TOP-RIGHT] [BOTTOM-RIGHT] [BOTTOM-LEFT]
const NEUM_INSET = false;
export const getTheme = () => {
  return {
    NEUM_DISTANCE,
    NEUM_INTENSITY,
    NEUM_COLOR,
    NEUM_RADIUS,
    NEUM_DIRECTION,
    NEUM_INSET,
  };
};
