
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/courses"
  },
  {
    "renderMode": 2,
    "route": "/quizzes"
  },
  {
    "renderMode": 2,
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  }
],
  assets: new Map([
['index.csr.html', {size: 4996, hash: '3d59f01175ded8619a74582c257f1f209483ab63ab7169164ffd3cc38952004c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1036, hash: '4650e75cde9dab71f2146f88d091bd689bb7b650243dc1188e7bbce81edb0ec5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['quizzes/index.html', {size: 11319, hash: '46fc0c60dc3df3ca8609da908f62d8bebeefc27da68d2faced3d62a7b5b8df59', text: () => import('./assets-chunks/quizzes_index_html.mjs').then(m => m.default)}], 
['courses/index.html', {size: 18026, hash: '97942a66cadbe37e1a72bbab0862e2fda33f7450a36488cb06eee36cf29125eb', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 17170, hash: '8f50af6b5c0063ade8dae5f271499218f9d247a649c12ed44aaeb1851e7255f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['profile/index.html', {size: 11343, hash: 'c8126fdc05d9afef78108eaeac1ce7dd76996e9af70a1abfc170b7a007c8ba1c', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)}], 
['dashboard/index.html', {size: 11334, hash: '9f958f881f17c6eb4995975c48ef5aa9277ef13dae60adf358eae6d891a6b196', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)}], 
['styles-A72FAYIM.css', {size: 231699, hash: 'XICnwTmmoFI', text: () => import('./assets-chunks/styles-A72FAYIM_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
