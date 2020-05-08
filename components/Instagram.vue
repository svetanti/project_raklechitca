<template>
  <section class="instagram">
    <h3 class="instagram-header">
      Рассказывайте ваши истории в инстаграм
      <span class="instagram-header-tag">#этонелечится</span>
    </h3>
    <div class="content-container">
      <div class="text-content">
        <p class="subtitle subtitle__underline">
          <span class="subtitle subtitle__text">Инстаграм</span>
        </p>
        <p class="paragraph">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>
      <div class="insta-grid">
        <div class="insta-card"></div>
        <div class="insta-card"></div>
        <div class="insta-card"></div>
        <div class="insta-card"></div>
        <div class="insta-card"></div>
        <div class="insta-card"></div>
        <div class="insta-card"></div>
        <div class="insta-card"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Instagram',
};
</script>

<style scoped>
.instagram {
  max-width: 1320px;
  font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  text-align: left;
}

.instagram-header {
  background-color: #613a93;
  color: white;
  padding: 20px 0;
  text-transform: uppercase;
  font-size: 30px;
  line-height: 45px;
  font-weight: 400;
  text-align: center;
}

.instagram-header-tag {
  display: block;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}

.content-container {
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
}

.text-content {
  width: 26%;
}

.subtitle {
  margin-bottom: 30px;
}

.subtitle__underline {
  font-size: 34px;
  background: linear-gradient(
    to top,
    black,
    black 4px,
    transparent 4px,
    transparent
  );
  width: fit-content;
}

.subtitle__text {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.paragraph {
  font-size: 18px;
  line-height: 22px;
}

.insta-grid {
  width: 66%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 30px;
}

.insta-card {
  background-image: url('../static/Images/shitty_lobster_photo.jpeg');
  background-size: cover;
  background-position: center;
}
.insta-card:before {
  content: '';
  padding-top: 100%;
  float: left;
}

@media screen and (max-width: 1399px) {
  .instagram {
    max-width: 1180px;
  }

  .instagram-header {
    font-size: 28px;
  }

  .instagram-header-tag {
    font-size: 38px;
  }

  .content-container {
    margin: 90px 0;
  }

  .subtitle__text {
    font-size: 28px;
    line-height: 32px;
  }

  .paragraph {
    font-size: 16px;
    line-height: 20px;
  }

  .insta-grid {
    width: 65%;
    grid-gap: 27px;
  }
}
</style>
