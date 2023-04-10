import type { App, Plugin } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft);
library.add(faDeleteLeft);
library.add(faGear);
library.add(faPersonRunning);
library.add(faPlus);

export const FontAwesomePlugin: Plugin = {
  install: (app: App) => {
    app.component('font-awesome-icon', FontAwesomeIcon);
  },
};
