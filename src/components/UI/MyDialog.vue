<template>
  <div
      class="dialog"
      v-if="show"
      @click="hideDialog"
  >
    <div
        class="dialog__content"
        @click.stop
    >
      <slot></slot>
    </div>

  </div>

</template>

<script>
import toggleMixins from "@/mixins/toggleMixins";

export default {
  name: 'my-dialog',
  mixins: [
      toggleMixins,
  ]
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-width: 300px;
  min-height: 250px;
  padding: 15px;
}
</style>
