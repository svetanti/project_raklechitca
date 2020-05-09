<template>
  <section class="your-story">
    <div class="content-container">
      <h3 class="your-story-header">Расскажите свою историю</h3>
      <div class="description-container">
        <div class="description-side">
          <p class="description-text">
            Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
            поделиться своей историей неизлечимых привычек, навязчивых идей и
            болезненных привязанностей.
          </p>
          <div class="variant-toggler">
            <p class="variant variant_active">1-й вариант</p>
            <p class="variant">2-й вариант</p>
          </div>
        </div>
        <div class="variant-side">
          <p class="variant-text">
            Заполнить подробную форму прямо на сайте и мы опубликуем вашу
            историю после проверки. Пожалуйста, заполняйте все пункты корректно,
            если вы испытаете какие-то сложности, воспользуйтесь 2&#8209;м
            вариантом.
          </p>
          <!--            <p class="variant-text">Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.</p>-->
        </div>
      </div>
      <button class="form-button" type="button">Заполнить форму</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TellYourStory',
};
</script>

<style scoped>
.your-story {
  width: 100vw;
  background-color: #f7f7f7;
  font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  color: #666666;
  padding: 100px 0;
}

.content-container {
  max-width: 1320px;
  margin: 0 auto;
}

.your-story-header {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: black;
  width: 410px;
  margin-bottom: 30px;
}

.description-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}

.description-side {
  width: calc(50% - 20px);
  display: flex;
  justify-content: space-between;
}

.variant-side {
  width: calc(50% - 20px);
  display: block;
}

.description-text {
  width: 55%;
}

.variant-toggler {
  text-align: right;
  min-width: 110px;
  width: 21%;
  line-height: 1.7em;
}

.variant {
  /* Оставил пока пустым. Пока не уверен, как именно здесь будет выглядеть переключение отображаемых абзацев.
    Если модификатором, то нужен и блок. Если без мдоификатора, то нужно будет слегка изменить. */
}

.variant_active {
  font-weight: 500;
  color: black;
}

.form-button {
  width: 20%;
  max-width: 280px;
  min-width: 180px;
  height: 52px;
  background-color: #613a93;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  position: absolute;
  left: calc(50% + 20px);
}

@media screen and (max-width: 1399px) {
  .content-container {
    max-width: 1180px;
  }

  .your-story-header {
    font-size: 28px;
    line-height: 32px;
    width: 380px;
  }

  .description-container {
    margin-bottom: 65px;
  }

  .description-text {
    font-size: 16px;
    line-height: 20px;
  }

  .form-button {
    height: 48px;
    width: 18%;
  }
}
</style>
