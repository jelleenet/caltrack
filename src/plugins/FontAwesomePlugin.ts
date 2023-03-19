import type { App, Plugin } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faDeleteLeft);

export const FontAwesomePlugin: Plugin = {
  install: (app: App) => {
    app.component('font-awesome-icon', FontAwesomeIcon);
  }
};