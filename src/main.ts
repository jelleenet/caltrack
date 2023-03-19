import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { FontAwesomePlugin } from './plugins/FontAwesomePlugin';

import './styles/base.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(FontAwesomePlugin);

app.mount('#app');
