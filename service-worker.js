/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/paper-desktop/js/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/paper-desktop/js/workbox-v4.3.1"});

importScripts(
  "/paper-desktop/js/precache-manifest.2905cacb46ec869bf3ae063058972383.js"
);

workbox.core.setCacheNameDetails({prefix: "paper-desktop"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "directoryIndex": "index.html"
});

workbox.precaching.cleanupOutdatedCaches();
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/"), {
  
  blacklist: [/\/api\//],
});
