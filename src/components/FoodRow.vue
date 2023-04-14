<script setup lang="ts">
import type { FoodItem } from '@/factories/foodItemFactory';
import { ref } from 'vue';
import { useCaloriesStore } from '@/stores/caloriesStore';
import { formatTime } from '@/functions/formatTime';

const caloriesStore = useCaloriesStore();

const props = defineProps({
  foodItem: {
    type: Object,
    required: true,
  }
});

const showDeleteModal = ref(false);
</script>

<template>
  <tr>
    <td>{{ formatTime(foodItem.time) }}</td>
    <td>{{ foodItem.calories }}</td>
    <td>{{ foodItem.name }}</td>
    <td>
      <button type="button"
              class="delete-button"
              :aria-label="`Delete ${foodItem.name}`"
              @click="() => { showDeleteModal = true; }">
        <font-awesome-icon icon="far fa-trash-can" />
      </button>
      <modal v-if="showDeleteModal" :id="`delete-modal-${foodItem.time}`">
        <template v-slot:title>Delete Item?</template>
        <template v-slot:body>
          <p>Do you want to delete {{ foodItem.name }}?</p>
          <div class="buttons-container buttons-container--multiple">
            <button class="button button--small" @click.native="() => { showDeleteModal = false; }">No</button>
            <button class="button button--small" @click.native="() => { caloriesStore.deleteFood(<FoodItem>foodItem); }">Yes</button>
          </div>
        </template>
      </modal>
    </td>
  </tr>
</template>