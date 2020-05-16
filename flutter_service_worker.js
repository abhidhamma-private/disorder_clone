'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e0a87284ab36f03e38c852ab87af9386",
"assets/assets/fonts/KakaoLight.woff": "1fa068e1d49ebd44544e9da0732a2955",
"assets/assets/fonts/KlavikaBold.otf": "e8a9d7a8c7a90eaca5ea1ca65606636f",
"assets/FontManifest.json": "ad8cc4bce98b9058ab52d5d1d0c43d85",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6655a1b12ba369115e22d71d43e3d8f1",
"/": "6655a1b12ba369115e22d71d43e3d8f1",
"main.dart.js": "fe21bb4c1e1d36033f694bcb6e8ec49d",
"manifest.json": "3d21e3acee004c2676b64a5b764abd07"
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
