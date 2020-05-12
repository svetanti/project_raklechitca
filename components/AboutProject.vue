<template>
  <section class="about-project">
    <h2 class="about-project__title">#РАКЛЕЧИТСЯ</h2>
    <p class="about-project__subtitle">О проекте</p>
    <div class="about-project__container">
      <div
        class="about-project__container about-project__container_information"
      >
        <p class="about-project__company-creator">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </p>
        <ul class="about-project__list-names">
          <li class="about-project__name">Рак Лечится</li>
          <li class="about-project__name about-project__name_company">
            Фонд Хабенского
          </li>
        </ul>
      </div>
      <ul class="about-project__description">
        <li class="about-project__paragraph">
          Есть вещи, которые не лечатся. Особенности характера, страстные
          увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
          приобрели в детстве. Список можно продолжать до бесконечности, но одна
          болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и
          лучшее доказательство — люди с их неизлечимыми особенностями, которые
          сумели победить рак.
        </li>
        <li class="about-project__paragraph">
          Рак лечится — проект Благотворительного Фонда Константина Хабенского и
          Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей
          к раку и заставить каждого поверить: онкологическое заболевание — это
          не приговор.
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about-project {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #613a93;
  max-width: 100%;
}
.about-project__title {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #ffffff;
  margin: 90px 0 70px 0;
}
.about-project__subtitle {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #ffffff;
  margin-right: auto;
  margin-bottom: 32px;
}
.about-project__company-creator {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  max-width: 340px;
  color: #dedede;
}
.about-project__list-names {
  list-style-type: none;
}
.about-project__name {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #ffffff;
}
.about-project__name_company {
  font-weight: normal;
  color: #c9c9c9;
}
.about-project__description {
  list-style-type: none;
}
.about-project__paragraph:first-child {
  margin-bottom: 20px;
}
.about-project__paragraph {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #dedede;
  max-width: 640px;
}
.about-project__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
}
.about-project__container_information {
  max-width: 640px;
}
</style>
