import { beforeEach, describe, it, expect } from 'vitest';

import { shallowMount, VueWrapper } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it('renders properly', () => {
    expect(wrapper).toBeInstanceOf(VueWrapper);
  });
});
