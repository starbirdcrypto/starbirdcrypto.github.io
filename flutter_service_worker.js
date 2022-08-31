'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1bd79956128f68dda29384dd1ef601c9",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "051d090817004f223014d935c4396f01",
"favicon.ico": "3e4b0a988090be47ed8256a5f88bb643",
"index.html": "ef64b9ff7b8aecc25d356dad70b7b7cb",
"/": "ef64b9ff7b8aecc25d356dad70b7b7cb",
"main.dart.js": "639b647e2093aab2f6e3b5e966dc6878",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "7d442c2453f77917a022d76518b931c5",
"icons/Icon-maskable-192.png": "7d442c2453f77917a022d76518b931c5",
"icons/Icon-maskable-512.png": "7545b5772fa500e088d5ff7ab67282a2",
"icons/Icon-512.png": "7545b5772fa500e088d5ff7ab67282a2",
"manifest.json": "0117a6da26968aed8917801e09018051",
"favicona.ico": "6a1b66c7f8b05428712bd2f8862d3438",
".git/config": "a48acd5e6a1a326795085d79567fddfe",
".git/objects/66/a0930e32469f21cf558a581a70e266131bd936": "1803bcdd0009356fe3bdabb09a9323ee",
".git/objects/50/a86b6b371a193dd104f8c8264398f380367a71": "2c1e0cc28fc94b475dded54e9411cc6f",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/9b/b5d58ea829065a20411daa1c543c63aa22b5de": "8bfd5660d485bc05ebbf8f1fe107f4e1",
".git/objects/05/6f4b55f0368e1836bb51a97c18c73241288e7f": "213291b7e27ada96dc03db52b62b9cf7",
".git/objects/9d/13404bcbcce61f6e77bb01c3c866efaba5d407": "88fb938482fc28c7133ebeab023fc68c",
".git/objects/b5/ed8d8897facf5e7d6b629ebf45e17057f3bce8": "751d162d24914ef8e0c37ecc7f2626f8",
".git/objects/d9/da2bd8fb559233b7c4e1603f5bef63cd41c5c7": "0ab9b937a48149357f96baafd37d40e5",
".git/objects/df/94066a0e723eb37c113af83af188c0aec1cb67": "a75a8946817f62ce4874f45cbe113817",
".git/objects/df/7ff099421eeaf0b15b79cca31c1a3a1723e22a": "d359150aadb43a7dfce7df53321f186a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/10a3082d8671d155353cd3d495dbab31904cc8": "23fc9b692994d48b0210ae71fa671ce6",
".git/objects/ee/fb8739d51f458cf2fbcf345efab3f536f75d43": "45bdc78e6758a0b31dfcdfa75b39467f",
".git/objects/c8/0038dd8d0489a77c709018d46b13d0104eebce": "cc9a55a3035b8bca78982283ca322ebf",
".git/objects/27/5305a20bbb302661e8cb99edf45a7ce9a55840": "c996230d7438be9f87180e28ce7751cd",
".git/objects/27/17daf354f8acaa650f4ad1ddfc7c3f8c40927d": "7c1171701b4ca2c62a9a7f05e0d04650",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/21/a199b0f3db2a357e81e1fa1318f80797bca568": "c2cd5d26fc7666b98cb317682d7e4eaa",
".git/objects/44/82b413d4a1211ba7793a4c3aefb11d6d3c067f": "65fa4159fdb258fbde332252b644ce3b",
".git/objects/2f/7ea635aba64dbbd8610aa88156c9956e4dfc20": "ab8bf2bfa570414574f02296bd7dc79d",
".git/objects/88/1fc4af8957e70f19b6f001fa0752f09cd560b3": "0ad1ed87c24e480640ae1e3544f9119e",
".git/objects/00/b7c6d2e9ff82327bd2be1a0ef072ef7b877391": "3c111b2f7aa2465ba8593ca4837135ee",
".git/objects/98/a29bf3f26de6c0d7540fb06ee3807a8010403d": "da4559ecc7c887b505fca6c8c5d86bd1",
".git/objects/53/01d2f366fbf11a57c39882b192f120343a855c": "9f112102f01522f53037789c38050738",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/a2fc93770ee678a2359ca6c47d8c23cb86b446": "ad68f87f2b3ad5bd840184c31f2cf063",
".git/objects/06/edbf52f3710a2639b465e577c31f3a24092e48": "5005bc606150c2d2648a9446e4ab61a2",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0f/9e0ef803f94acba96aef3d750ae593c466ad34": "180c8506c6b5691313620f00541c8c7c",
".git/objects/a8/0ca3510562b3309f61032ba33daf8eb2498776": "daab878bc201966752e077d1c7c9e9d0",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/679c1ba7109c8c187f13fcec66ea623b9ddecb": "852281f47fa36242c8c2b4eb4f7a93d3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f6/dbf3a6aff2795d42002c90311235e2eaf9eb1b": "52e00aa3b066883865c0bd205411aaf3",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/b578558e3dae8d5f91f03c67a40b389c112142": "1ef4c7640eea79d7e56dd4f35a644d6f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/212d68c2a700655f153ad1d25d4743f7f5051e": "e65e0bb4964237bd7f049e8521177fab",
".git/objects/4f/8044d32194db45102ee534b2e880f20de2651c": "6355fcfc022be5b6a1db348b40d75b16",
".git/objects/4f/22474bf5b08793c8b35e61d90de0a1b6582ad7": "a911f2cc08e0da0e7ff8c236bddc4131",
".git/objects/12/6cad554a39ef9179d2e3bdcb5a0448da476086": "5ddb2c71c55baa96fbc9acf0e56c2f09",
".git/objects/71/251c650b60728c84304493c81fa7caba37e578": "d5ad34839fc2a526d61eeb25945fb654",
".git/objects/2e/7ccfcdba2dd5007cb0b19c9919589bf8be0172": "5a0b1fbdf4e05f60b93c838740856ec8",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/92a0a11788eae97f4ee7fa8664bc62631759d2": "4b7ba0060edf695ab9b2a90739d64b1c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "68d2a21c264a44a4df98b0d6a6b585d5",
".git/logs/refs/heads/main": "ba9c4feba1f3bda193f2d7485e15b40c",
".git/logs/refs/remotes/origin/main": "74b8e2bef010e6446c0369f8cdfddfef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "862d85f8101c1755a44552212b7ca2a1",
".git/refs/remotes/origin/main": "862d85f8101c1755a44552212b7ca2a1",
".git/index": "3c51fde25f4d391cb5000df8fe75d656",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/images/PopupPic.jpeg": "cc86c1bc5e6e7638f0e6d1f77b18e229",
"assets/images/user.png": "931b180015a9ba829e38b186282d878a",
"assets/images/USD.png": "040c174dc6c1aad75a89d05a85cd0905",
"assets/images/background.jpg": "1cca81471319aa19837593f4e70373b1",
"assets/images/BTC.png": "19b5ef5e482295da7d85e8b13b0f9069",
"assets/images/IconRound.png": "3e4b0a988090be47ed8256a5f88bb643",
"assets/images/Triangle.gif": "f02cc701d6d37fdfc1d5ddd0eed23786",
"assets/AssetManifest.json": "8db651e8bd808cbb3620dcc95a67da42",
"assets/NOTICES": "9eaddbe538d3429718ce1bbcf54d6589",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/Icosa.gif": "75dd2a3f456a70dc5f62bfb443f2f9aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "a238a9bc06b87ca593b994ef950eb064",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
