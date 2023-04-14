<script setup lang="ts">
</script>

<template>
  <section class="modal-container">
    <div class="modal block">
      <div class="block__title">
        <h2 class="h2"><slot name="title"></slot></h2>
      </div>
      <div class="modal__body">
        <slot name="body"></slot>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-modal-background);
  backdrop-filter: blur(5px);
}

.modal {
  width: 100%;
  max-width: calc(100% - 4rem);
  background-color: var(--color-background);

  &__body {
    padding: var(--padding-form);
    text-align: center;
  }
}
</style>