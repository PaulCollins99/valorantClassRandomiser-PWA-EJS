const CACHE = 'classRandomizer';
const cacheable = [
    './',
    './javascripts/buyableItems.js',
    './javascripts/buyLogic.js',
    './javascripts/charSelection.js',
    './javascripts/initialScript.js',
    './javascripts/main.js',
    './javascripts/user.js',
    './images/144.png',
    './stylesheets/style.css',
    './sw.js',
    './manifest.json',
    '/inputNames',
];

async function updateCache(request) {
    const c = await caches.open(CACHE);
    const response = await fetch(request);
    return c.put(request, response);
}

async function handleFetch(request) {
    const c = await caches.open(CACHE);
    const cachedCopy = await c.match(request);
    return cachedCopy || Promise.reject(new Error('no-match'));
}

function interceptFetch(evt) {
    if (evt.request.method != "POST") {
        evt.respondWith(handleFetch(evt.request));
        evt.waitUntil(updateCache(evt.request));
    }  else {
        //do some custom stuff with post cacheing and indexeddb
    }
}


async function prepareCache(evt) {
    const c = await caches.open(CACHE);
    c.addAll(cacheable);
}

self.addEventListener('install', prepareCache);
self.addEventListener('fetch', interceptFetch);