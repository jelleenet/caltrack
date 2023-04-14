import { beforeEach, describe, it, expect } from 'vitest';

import { shallowMount, VueWrapper } from '@vue/test-utils';
import DefaultNav from '@/components/DefaultNav.vue';
import router from '@/router';
import { FontAwesomePlugin } from '@/plugins/FontAwesomePlugin';

describe('DefaultNav', () => {
  let wrapper: VueWrapper|null = null;

  beforeEach(() => {
    wrapper = shallowMount(DefaultNav, {
      global: {
        plugins: [router, FontAwesomePlugin],
      }
    });
  });

  it('renders properly', () => {
    expect(wrapper).toBeInstanceOf(VueWrapper);
  });
});
