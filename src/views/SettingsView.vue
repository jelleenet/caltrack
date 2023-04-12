<script setup lang="ts">
import { computed, reactive } from 'vue';
import type { User } from '@/factories/userFactory';
import { createUser } from '@/factories/userFactory';
import { useUserStore } from '@/stores/userStore';
import { calculateBMR } from '@/functions/calculateBMR';

const userStore = useUserStore();

/**
 * Builds Unsaved User object
 */
const localValues = computed(() => {
  const tempUser = createUser();

  settingsGroups.forEach((group) => {
    group.fields.forEach((field) => {
      if (!field.disabled) {
        tempUser[field.name as keyof User] = field.value;
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
 async function saveSettings() {
  await userStore.updateUserSettings(localValues.value);
  console.log(userStore.user);
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
      <div class="settings-form">
        <h1 class="settings-form__title h1">Settings</h1>
        <div v-for="(group, g) in settingsGroups" :key="`section-${g}`">
          <section class="section">
            <div class="section__title">
              <h2 class="h3">{{ group.title }}</h2>
            </div>
            <div class="section__fields">
              <div
                v-for="(field, f) in group.fields"
                :key="`section-${g}-field-${f}`"
                class="section__item"
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
                  required
                />
                <span>{{ field.unit }}</span>
              </div>
            </div>
          </section>
          <div v-if="g < settingsGroups.length - 1" class="section-spacer"></div>
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

$border: 1px solid var(--color-text);

.settings-form {
  border: $border;

  &__title {
    width: 100%;
    text-align: center;
    padding: var(--padding-form);
    background-color: var(--color-dark-background);
    color: #fff;
  }
}

.section {
  display: flex;
  width: 100%;
  align-items: stretch;
  border-top: $border;

  &__title {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--padding-form);

    background-color: var(--color-blue);
    color: #fff;

    border-right: $border;

    h2 {
      writing-mode: tb-rl;
      transform: rotate(-180deg);
    }
  }

  &__fields {
    flex: 0 1 auto;
    border-collapse: collapse;
    width: 100%;
  }

  &__item {
    padding: var(--padding-form);
    border-bottom: $border;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: relative;

    &:last-of-type {
      border-bottom: unset;
    }

    label {
      width: 100px;
      flex: 0 0 auto;
    }

    input {
      width: 150px;
      flex: 1 1 auto;
      padding: var(--padding-form);
      padding-right: calc(var(--padding-form) * 2);
      margin-bottom: 2px;
      border: unset;
      background-color: var(--color-off-background);
      color: var(--color-text);

      &:focus {
        outline: unset;
        box-shadow: inset 0 -1px 0 0 var(--color-text);
      }

      &:disabled {
        background-color: unset;
      }
    }

    span {
      @include header-font;
      text-transform: unset;
      font-size: 0.75rem;
      padding-left: var(--padding-form);
      position: absolute;
      z-index: 1;
      right: calc(var(--padding-form) * 2);
      user-select: none;
    }
  }
}

.section-spacer {
  width: 100%;
  padding: var(--padding-form);
  border-top: 1px solid var(--color-text);
}

.buttons-container {
  margin-top: var(--padding-form);
  display: flex;
  justify-content: flex-end;

  .save-button {
}
}
</style>
