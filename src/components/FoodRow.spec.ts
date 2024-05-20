import { beforeEach, describe, it, expect, vi } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import FoodRow from '@/components/FoodRow.vue';
import { createFoodItem } from '@/factories/foodItemFactory';
import { formatTime } from '@/functions/formatTime';

const foodItem = createFoodItem(500, 'Test Item');

describe('FoodRow', () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(() => {
    wrapper = shallowMount(FoodRow, {
      props: {
        foodItem,
      },
      global: {
        components: {
          FontAwesomeIcon: { template: '<div></div>' },
          ModalComp: { template: '<div></div>' },
        },
      },
      setup() {
        return {
          formatTime: () => '12:00',
        };
      },
    });
  });

  it('renders properly', () => {
    expect(wrapper).toBeInstanceOf(VueWrapper);
  });
});
