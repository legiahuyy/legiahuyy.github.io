const resource = [

  /* --- CSS --- */
  '/blog/en/assets/css/style.css',

  /* --- JavaScripts --- */
  
  '/blog/en/assets/js/dist/home.min.js',
  '/blog/en/assets/js/dist/page.min.js',
  '/blog/en/assets/js/dist/post.min.js',
  '/blog/en/assets/js/dist/categories.min.js',
  '/blog/en/assets/js/data/search.json',
  '/blog/en/app.js',
  '/blog/en/sw.js',

  /* --- HTML --- */
  '/blog/en/index.html',
  '/blog/en/404.html',
  
    '/blog/en/categories/',
  
    '/blog/en/tags/',
  
    '/blog/en/archives/',
  
    '/blog/en/about/',
  

  /* --- Favicons --- */
  

  '/blog/en/assets/img/favicons/android-chrome-192x192.png',
  '/blog/en/assets/img/favicons/android-chrome-512x512.png',
  '/blog/en/assets/img/favicons/apple-touch-icon.png',
  '/blog/en/assets/img/favicons/favicon-16x16.png',
  '/blog/en/assets/img/favicons/favicon-32x32.png',
  '/blog/en/assets/img/favicons/favicon.ico',
  '/blog/en/assets/img/favicons/mstile-150x150.png',
  '/blog/en/assets/img/favicons/site.webmanifest',
  '/blog/en/assets/img/favicons/browserconfig.xml'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'legiahuyy.github.io',

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

