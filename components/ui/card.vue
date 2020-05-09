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
.card {
  max-width: 300px;
  font-family: 'Inter';
}
.card__photo {
  width: 300px;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 18px;
}
.card__title {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;

  text-align: left;
  margin-bottom: 14px;
}
.card__subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  text-align: left;
  color: #666666;
  max-width: 250px;
}
</style>