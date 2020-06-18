module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/paper-desktop/" : "/",
  css: { extract: false },
  pwa: {
    themeColor: "#EFE8CC",
    msTileColor: "#EFE8CC",
    manifestOptions: {
      display: "fullscreen",
    },
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
      maskIcon: "img/icons/safari-pinned-tab.svg",
      msTileImage: "img/icons/msapplication-icon-144x144.png",
    },
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      cleanupOutdatedCaches: true,
      skipWaiting: true,
      clientsClaim: true,
      directoryIndex: "index.html",
    },
  },
};
