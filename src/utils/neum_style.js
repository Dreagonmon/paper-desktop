export const colorLuminance = (hex, lum = 0) => {
  // Validate hex string
  let copyHex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    copyHex = copyHex[0] + copyHex[0] + copyHex[1] + copyHex[1] + copyHex[2] + copyHex[2];
  }

  // Convert to decimal and change luminosity
  const colors = [];
  for (let i = 0; i < 3; i++) {
    let c = parseInt(copyHex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255));
    colors.push(c);
  }
  return `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 1.0)`;
};
export const getBlur = (distance) => {
  return 10 + 2 * (distance - 5);
};
export const getBackgroundLum = (intensity) => {
  return (intensity / 100) * 0.7;
};
export const getLightBoxShadow = (color, distance = 5, intensity = 15, direction = 0) => {
  const blur = getBlur(distance);
  const lum = intensity / 100;
  switch (direction) {
    case 3: return `-${distance}px ${distance}px ${blur}px ${colorLuminance(color, lum)}`;
    case 2: return `${distance}px ${distance}px ${blur}px ${colorLuminance(color, lum)}`;
    case 1: return `${distance}px -${distance}px ${blur}px ${colorLuminance(color, lum)}`;
    case 0: default: return `-${distance}px -${distance}px ${blur}px ${colorLuminance(color, lum)}`;
  };
};
export const getDarkBoxShadow = (color, distance = 5, intensity = 15, direction = 0) => {
  const blur = getBlur(distance);
  const lum = (intensity / 100) * -1;
  switch (direction) {
    case 3: return `${distance}px -${distance}px ${blur}px ${colorLuminance(color, lum)}`;
    case 2: return `-${distance}px -${distance}px ${blur}px ${colorLuminance(color, lum)}`;
    case 1: return `-${distance}px ${distance}px ${blur}px ${colorLuminance(color, lum)}`;
    case 0: default: return `${distance}px ${distance}px ${blur}px ${colorLuminance(color, lum)}`;
  };
};
export const getConcavebackground = (color, intensity = 15, direction = 0) => {
  const deg = ["135", "225", "315", "45"][direction]; // top-left
  const lum = getBackgroundLum(intensity);
  return `linear-gradient(${deg}deg, ${colorLuminance(color, lum * -1)}, ${colorLuminance(color, lum)})`;
};
export const getConvexbackground = (color, intensity = 15, direction = 0) => {
  const deg = ["315", "45", "135", "225"][direction]; // top-left
  const lum = getBackgroundLum(intensity);
  return `linear-gradient(${deg}deg, ${colorLuminance(color, lum * -1)}, ${colorLuminance(color, lum)})`;
};
export const getPlainbackground = (color) => {
  return `linear-gradient(0deg, ${color}, ${color})`;
};
