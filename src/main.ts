import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { FontAwesomePlugin } from './plugins/FontAwesomePlugin';
import { ApiClientPlugin } from './plugins/ApiClient';

import Modal from './components/Modal.vue';

import './styles/base.scss';

const app = createApp(App);

app.use(createPinia());

app.use(router);
app.use(FontAwesomePlugin);
app.use(ApiClientPlugin);

app.component('modal', Modal);

app.mount('#app');
