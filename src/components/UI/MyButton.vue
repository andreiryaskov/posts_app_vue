<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  width: 150px;
  height: 50px;
  margin-top: 15px;
  background-color: orange;
  color: white;
  border: 3px solid orangered;
  border-radius: 10px;
  align-self: flex-end;
}

</style>
