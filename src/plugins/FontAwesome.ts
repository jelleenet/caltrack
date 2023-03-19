import type { App } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faDeleteLeft);

export default {
  install: (app: App) => {
    app.component('font-awesome-icon', FontAwesomeIcon);
  }
};