
// yg di copy paste
import { createApp } from 'vue';
import { createPinia } from 'pinia';
const pinia = createPinia();

import App from './App.vue';
import { router } from './helpers';

// setup fake backend
import { fakeBackend } from './helpers';
fakeBackend();

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');

// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')