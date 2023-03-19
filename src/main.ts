import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import fontAwesome from './plugins/fontAwesome';

import './styles/base.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(fontAwesome);

app.mount('#app');
