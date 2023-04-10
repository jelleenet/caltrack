<script setup lang="ts">
import type { UserState } from '@/stores/userStore';
import { useUserStore } from '@/stores/userStore';
import { computed, reactive } from 'vue';

const userStore = useUserStore();

let bmr = computed(() => {
  // Katch-McArdle Formula
  return Math.round(370 + 21.6 * ((userStore.weight * (100 - userStore.bodyFat)) / 100));
});

const fields = [
  {
    title: 'Body',
    fields: [
      {
        id: 'setting-height',
        label: 'Height',
        type: 'number',
        inputMode: 'numeric',
        unit: 'cm',
        model: userStore.height,
      },
      {
        id: 'setting-weight',
        label: 'Weight',
        type: 'number',
        inputMode: 'numeric',
        unit: 'kg',
        model: userStore.weight,
      },
      {
        id: 'setting-bodyFat',
        label: 'Body Fat',
        type: 'number',
        inputMode: 'numeric',
        unit: '%',
        model: userStore.bodyFat,
      },
      {
        id: 'setting-bmr',
        label: 'BMR',
        type: 'number',
        inputMode: 'numeric',
        unit: 'cal',
        model: bmr.value,
        disabled: true,
      },
    ],
  },
  {
    title: 'Goals',
    fields: [
      {
        id: 'setting-deficit',
        label: 'Target deficit',
        type: 'number',
        inputMode: 'numeric',
        unit: 'cal',
        model: userStore.targetDeficit,
      },
      {
        id: 'setting-activity-multiplier',
        label: 'Activity multiplier',
        type: 'number',
        inputMode: 'numeric',
        unit: '',
        model: userStore.activityMultiplier,
      },
    ],
  },
];

const dump = () => {
  console.log('userStore', userStore.$state, 'bmr', bmr.value);
};
</script>

<template>
  <main>
    <form>
      <div class="settings-form">
        <h1 class="settings-form__title h1">Settings</h1>
        <template v-for="(section, s) in fields" :key="`section-${s}`">
          <section class="section">
            <div class="section__title">
              <h2 class="h3">{{ section.title }}</h2>
            </div>
            <div class="section__fields">
              <div
                v-for="(field, f) in section.fields"
                :key="`section-${s}-field-${f}`"
                class="section__item"
              >
                <label :for="field.id">{{ field.label }}</label>
                <input
                  :id="field.id"
                  :type="field.type"
                  :input-mode="field.inputMode"
                  v-model="field.model"
                  :disabled="field.disabled ? true : false"
                  min="0"
                />
                <span>{{ field.unit }}</span>
              </div>
            </div>
          </section>
          <div v-if="s < fields.length - 1" class="section-spacer"></div>
        </template>
      </div>
    </form>
    <button @click="dump()">Dump</button>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/typography';

$border: 1px solid var(--color-text);

.settings-form {
  display: flex;
  flex-wrap: wrap;
  border: $border;

  &__title {
    flex: 0 0 100%;
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
