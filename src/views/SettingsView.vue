<script setup lang="ts">
import type { User } from '@/factories/userFactory';
import { useUserStore } from '@/stores/userStore';
import { computed, reactive} from 'vue';

const userStore = useUserStore();

function dump() {
  const valuesToSave: User = userStore.user;

  settingsGroups.forEach((group) => {
    group.fields.forEach((field) => {
      if (!field.disabled) {
        valuesToSave[field.name as keyof User] = field.value;
      }
    })
  });

  userStore.updateUserSettings(valuesToSave);
};

const bmr = computed(() => {
  // Katch-McArdle Formula
  return Math.round(370 + 21.6 * ((userStore.user.weight * (100 - userStore.user.bodyFat)) / 100));
});

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
        unit: 'cm',
        value: userStore.user.height,
      },
      {
        name: 'weight',
        id: 'setting-weight',
        label: 'Weight',
        type: 'number',
        inputMode: 'numeric',
        unit: 'kg',
        value: userStore.user.weight,
      },
      {
        name: 'bodyFat',
        id: 'setting-bodyFat',
        label: 'Body Fat',
        type: 'number',
        inputMode: 'numeric',
        unit: '%',
        value: userStore.user.bodyFat,
      },
      {
        name: 'bmr',
        id: 'setting-bmr',
        label: 'BMR',
        type: 'number',
        inputMode: 'numeric',
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
        unit: 'cal',
        value: userStore.user.targetDeficit,
      },
      {
        name: 'activityMultiplier',
        id: 'setting-activity-multiplier',
        label: 'Activity multiplier',
        type: 'number',
        inputMode: 'numeric',
        unit: '',
        value: userStore.user.activityMultiplier,
      },
    ],
  },
]);
</script>

<template>
  <main>
    <form @submit.prevent="dump">
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
                  min="0"
                  required
                />
                <span>{{ field.unit }}</span>
              </div>
            </div>
          </section>
          <div v-if="g < settingsGroups.length - 1" class="section-spacer"></div>
        </div>
      </div>
      <button type="submit" style="float: right;">Dump</button>
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

    &:last-of-type {
      border-bottom: unset;
    }

    label,
    input,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    label {
      width: 100px;
    }

    input {
      width: 150px;
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
    }

    span {
      @include header-font;
      font-size: 0.75rem;
      padding-left: var(--padding-form);
    }
  }
}

.section-spacer {
  width: 100%;
  padding: var(--padding-form);
  border-top: 1px solid var(--color-text);
}
</style>
