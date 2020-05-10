<template>
  <div>
    <button class="popup__button">
      <p class="popup__button-description"><slot>Заполнить форму</slot></p>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.popup__button {
  width: 280px;
  height: 52px;
  background: #613a93;
}

.popup__button-description {
  width: 192px;
  height: 18px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  margin: auto;
}
</style>
