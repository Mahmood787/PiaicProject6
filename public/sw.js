var CACHE_NAME = 'quiz-app-cache-v1';
console.log("service worker registered")
var urlsToCache = [
    '/',
    'static/js/0.chunk.js',
    'static/js/main.chunk.js',
    'static/js/bundle.js',
  '/static/js/2.26adcc8e.chunk.js',
  'static/js/1.chunk.js',
  '/static/css/main.6f8137e1.chunk.css',
  '/static/js/main.5e1103c4.chunk.js',
  '/offline.html',
  'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy',
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple",
  "https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple",
];

self.addEventListener('install', function(event) {
    console.log("log from installation")
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      }).catch((err)=>{console.log('error:',err);})
  );
});

self.addEventListener('activate', function(event){
    console.log('service has been avtivated')
})
const options = {
  ignoreVary: true,
};
  self.addEventListener('fetch', function(event) {
      event.respondWith(
        caches.match(event.request,options)
          .then(function(response) {
              return response || fetch(event.request);
          }))}) 
      
