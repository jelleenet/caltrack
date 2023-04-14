<script setup lang="ts">
import { ref } from 'vue';
import { useCaloriesStore } from '@/stores/caloriesStore';

const caloriesStore = useCaloriesStore();
const showModal = ref(false);

const doReset = function (): void {
  caloriesStore.resetStore();
  showModal.value = false;
};
</script>

<template>
  <section class="buttons-container">
    <button
      class="button"
      @click="
        () => {
          showModal = true;
        }
      "
    >
      New Day
    </button>
  </section>
  <modal-comp v-if="showModal" id="new-day-modal">
    <template v-slot:title>Start a new day?</template>
    <template v-slot:body>
      <p class="p">This will wipe food and activity data</p>
      <div class="buttons-container buttons-container--multiple">
        <button
          class="button"
          @click="
            () => {
              showModal = false;
            }
          "
        >
          No
        </button>
        <button id="modal-focus-me" class="button" @click="doReset">Yes</button>
      </div>
    </template>
  </modal-comp>
</template>
