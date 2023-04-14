<script setup lang="ts">
import { computed, reactive } from 'vue';
import type { User } from '@/factories/userFactory';
import { createUser } from '@/factories/userFactory';
import { useUserStore } from '@/stores/userStore';
import { calculateBMR } from '@/functions/calculateBMR';
import { routeLocationKey } from 'vue-router';
import router from '@/router';

const userStore = useUserStore();

/**
 * Builds Unsaved User object
 */
const localValues = computed(() => {
  const tempUser = createUser();

  settingsGroups.forEach((group) => {
    group.fields.forEach((field) => {
      if (!field.disabled) {
        tempUser[<keyof User>field.name] = field.value;
      }
    })
  });

  return tempUser;
});


/**
 * Maintains BMR based on localValues
 */
const bmr = computed(() => calculateBMR(localValues.value));

/**
 * Saves localUser back to store
 */
 function saveSettings() {
  userStore.updateUserSettings(localValues.value);
  router.push({ name: 'home' });
};

/**
 * The form fields/settings presented to the user
 */
const settingsGroups = reactive([
  {
    title: 'Body',
    fields: [
      {
        name: 'height',
        id: 'setting-height',
        label: 'Height',
        type: 'number',
        inputMode: 'numeric',
        step: '0.1',
        unit: 'cm',
        value: userStore.user.height,
      },
      {
        name: 'weight',
        id: 'setting-weight',
        label: 'Weight',
        type: 'number',
        inputMode: 'numeric',
        step: '0.1',
        unit: 'kg',
        value: userStore.user.weight,
      },
      {
        name: 'bodyFat',
        id: 'setting-bodyFat',
        label: 'Body Fat',
        type: 'number',
        inputMode: 'numeric',
        step: '0.1',
        unit: '%',
        value: userStore.user.bodyFat,
      },
      {
        name: 'bmr',
        id: 'setting-bmr',
        label: 'BMR',
        type: 'number',
        inputMode: 'numeric',
        step: '1',
        unit: 'cal',
        value: bmr,
        disabled: true,
      },
    ],
  },
  {
    title: 'Goals',
    fields: [
      {
        name: 'targetDeficit',
        id: 'setting-deficit',
        label: 'Target deficit',
        type: 'number',
        inputMode: 'numeric',
        step: '1',
        unit: 'cal',
        value: userStore.user.targetDeficit,
      },
      {
        name: 'activityMultiplier',
        id: 'setting-activity-multiplier',
        label: 'Activity multiplier',
        type: 'number',
        inputMode: 'numeric',
        step: '0.1',
        unit: 'x',
        value: userStore.user.activityMultiplier,
      },
    ],
  },
]);
</script>

<template>
  <main>
    <form @submit.prevent="saveSettings">
      <div class="block">
        <div class="block__title">
          <h1 class="h1">Settings</h1>
        </div>
        <div v-for="(group, g) in settingsGroups" :key="`section-${g}`">
          <section class="settings-group">
            <div class="settings-group__title">
              <h2 class="h3">{{ group.title }}</h2>
            </div>
            <div class="settings-group__fields">
              <div
                v-for="(field, f) in group.fields"
                :key="`section-${g}-field-${f}`"
                class="input-row"
              >
                <label :for="field.id">{{ field.label }}</label>
                <input
                  :name="field.name"
                  :id="field.id"
                  :type="field.type"
                  :input-mode="field.inputMode"
                  v-model="field.value"
                  :disabled="field.disabled ? true : false"
                  :step="field.step"
                  min="0"
                  required
                />
                <span class="input-row__postfix">{{ field.unit }}</span>
              </div>
            </div>
          </section>
          <div v-if="g < settingsGroups.length - 1" class="block__spacer"></div>
        </div>
      </div>
      <div class="buttons-container">
        <button type="submit" class="button save-button">Save</button>
      </div>
    </form>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/typography';

.settings-group {
  display: flex;
  width: 100%;
  align-items: stretch;

  &__title {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--padding-form);

    background-color: var(--color-blue);
    color: #fff;

    border-right: var(--border);

    h2 {
      writing-mode: tb-rl;
      transform: rotate(-180deg);
    }
  }

  &__fields {
    flex: 0 1 auto;
    width: 100%;
  }
}
</style>
