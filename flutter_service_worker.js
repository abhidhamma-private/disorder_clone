'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01b53901d315a565092303fd8324f988",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "056fc39e0f6a3073619e95b1900e33dd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "49944a48efdbcb2c1497fefa8f2fe742",
".git/logs/refs/heads/master": "49944a48efdbcb2c1497fefa8f2fe742",
".git/logs/refs/remotes/origin/master": "9163a9695f38de7b97c73d2f47db345c",
".git/objects/09/3a2613d1a0ddbe66320536265bdd7dfec34605": "9f4e0ae2e32da719f70bf9ec68f1d94b",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/1db0244ed16c673337f9af34cad2da096d0614": "6b68321fea47d9bc6340c423e4b9d195",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1a/a0726a32364117561978566cb43c1a9291662a": "50704094ddeddf4f5c6286fc67cc695a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/32/3e2e3b2e65339d6a4e237758f263eaf5621eaf": "0b6b54867917d777a9dd30b4b191de04",
".git/objects/46/ec320f67b4ec4d364fd862c260b2532f50b301": "eef6d92b2958045b3d2af71b41d2007c",
".git/objects/49/cf667db7f58e9a82ca4f2e630e7871ee0dea94": "23c5ea52c29852d039487ed786e667cb",
".git/objects/54/a0dcd5f242be75e2f650130f0fc44d6c6b78ef": "5b60a67da0798c50a2ce7d1a00088efd",
".git/objects/5b/75bbfe1c582b6c3e697ac2d8abfd371cfbfd8b": "10858fb2475819bdc9cf9b2826753406",
".git/objects/5e/27c3aa33726356bd2cc3e62a39ec791229e0d4": "ba86d72cefab814329cd37611794cf7d",
".git/objects/66/c61531f11ac52e55e6f8b66ebb57e24eb3cb7e": "11d73560185d5b6056b82cfdc9af5f2a",
".git/objects/68/f3d8c3f5495ba0f2c0d4074153553bff04c3d3": "99396d399d295375bd07ce7da06f9ae5",
".git/objects/7a/ce563a893c0e13cce41a16b791adee5b6a76ae": "5ea084c8ca0da76e15a2f41b1ce7775d",
".git/objects/7e/63ed72a8f70a20ee77c9169d2c238e10369878": "6ac3bd5b361875967dfbb3fc0e23c95d",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/86/8fd4443c9eb77f212264493d26b3418629bc97": "556c2aa92b7ee46adf27f924e6885fbe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/da3ab71717fff8a4def72b00c483f29648bd34": "062ac76de6864e6da6a5929e9e81cfe1",
".git/objects/91/e6a127a04c442e5e14538c702e25c52d200852": "4d328aedca97f7f2a7a6bf8eb01dfa06",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a0/19a85d4dac5675e9c3b36aaaba34ba8d41d3f9": "145a7e87b101033491291da88a0419bd",
".git/objects/a3/64f49142e4ef66d863f9be38bbb5433975921b": "61cb95d2e2ba01185d09f25d0b19b0fd",
".git/objects/a5/cec3c7d5711b38fe807251364643d17c068663": "6b441cf23571ee333450d184c63e8a2f",
".git/objects/a6/dfc73b75f745ef5976af002327126969cf15c2": "44d09353165b0b614d39a01853f9cbf6",
".git/objects/ae/a8c26c68848489fd540fcb8e97e4ded9502f00": "7585eba622a3ad28d4df449c30983e65",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/2887dae0dda29fe93d37bb09e11d6cbb70dc36": "fb49a3b359724731654c45b6afa15a20",
".git/objects/c2/146e7970c21ea5be04f5b699665d7654be2fe9": "f364cd56178a21f80833a3fd678c09b0",
".git/objects/cf/337b8e03499176f82a66d6bfa09c2a5ee28dc7": "3454cc754e31f517afe7944dd7311c22",
".git/objects/d8/0e5cecb59001fb593124fa764e7e8258c3c08d": "6af04ea28c9cbd9b1f08af4b2abc90e7",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e0/d86da0ecb3d05921e93c7c557e3179a41f107f": "f3d324d894d57e5a62d89496486d52f9",
".git/objects/e3/f01573a2b39a3301706ecbc5df8bb3ad03d82c": "79cab62d8972552bb2e0abbef7241709",
".git/objects/e9/e58b5e459691ea47e2088d5f49624cbaad3b3d": "4531a75f42104b0242166936178d44a7",
".git/objects/ea/146a8af2133c6af5ec07658c46928e51fcfcb0": "f7441e89510dd663547c116a65077c17",
".git/objects/eb/8fca5e2ddfad0b9bfe4c089e91087ac8dfdc0f": "0b90d2b8af06b54b825a7c9db44745e5",
".git/objects/f4/d91a4a9aa0d230381742d78dc3bdcbfaffab65": "cbcca89d96c2322860ca2e848390a96a",
".git/objects/f4/e1d4c155f2d8a183d52c2a63490cdf46bddd18": "51cea7a82561cd8335c5ff4b8269188f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "e0ff2b89ce36eedac5a711dab6bea025",
".git/refs/remotes/origin/master": "e0ff2b89ce36eedac5a711dab6bea025",
"assets/AssetManifest.json": "677ac5334163edf9f3a9f6082491aed7",
"assets/assets/fonts/KakaoBold.woff": "98ea5e9fe5b66354e23ee0d90175da1b",
"assets/assets/fonts/KakaoLight.woff": "1fa068e1d49ebd44544e9da0732a2955",
"assets/assets/fonts/KlavikaBold.otf": "e8a9d7a8c7a90eaca5ea1ca65606636f",
"assets/FontManifest.json": "471f069502d442e1e242a176269f3f6a",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6655a1b12ba369115e22d71d43e3d8f1",
"/": "6655a1b12ba369115e22d71d43e3d8f1",
"main.dart.js": "0d79059e18dfd30b4375810272d252ff",
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
