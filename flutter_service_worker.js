'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "555c2a399865157d620dc66582d9750b",
"assets/assets/fonts/KakaoBold.woff": "98ea5e9fe5b66354e23ee0d90175da1b",
"assets/assets/fonts/KakaoLight.woff": "1fa068e1d49ebd44544e9da0732a2955",
"assets/assets/fonts/KlavikaBold.otf": "e8a9d7a8c7a90eaca5ea1ca65606636f",
"assets/assets/image/login.gif": "72dd4068f6fbde6814c9f72d010df8fd",
"assets/FontManifest.json": "471f069502d442e1e242a176269f3f6a",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "8e8eed596d4b4e98423f3dc02988b119",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f50f8e38161b06e6eb340caeee7a03ad",
"/": "f50f8e38161b06e6eb340caeee7a03ad",
"main.dart.js": "42ed5aaea5d42338f1b1ab47ee2cd4f6",
"manifest.json": "f841d3b7708d5b73c88849d6f85f9f13"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
