<template>
  <div class="card">
    <img
      class="card__photo"
      src="../../static/images/card__photo/photo1.jpg"
      alt="Фото автора"
    />
    <h3 class="card__title">Владимир Тен</h3>
    <p class="card__subtitle">
      Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
    </p>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.card__photo {
  object-fit: cover;
  width: 300px;
  height: 300px;
  object-position: top;
}
</style>
