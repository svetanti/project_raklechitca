<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 1320px;
  padding: 0 60px;
}

@media screen and (max-width: 1439px) {
  .container {
    padding: 0 50px;
  }
}

@media screen and (max-width: 730px) {
  .container {
    padding: 0 15px;
  }
}
</style>
