<template>
  <div>
    <section class="video">
      <div class="description__block">
        <h2 class="description-title">
          Истории людей, победивших рак, но не свои привычки
        </h2>
        <h3 class="description-subtitle">
          Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
          страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
          с их историями.
        </h3>
        <div class="selector">
          <button class="button__left">
            <img class="button__left_opacity" src="/images/button_left.svg" />
          </button>
          <button class="button__right">
            <img src="/images/button_right.svg" />
          </button>
        </div>
      </div>

      <div class="video__block">
        <div class="video__container">
          <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="405"
            src="https://www.youtube.com/embed/coOppM34GtI"
            frameborder="0"
            allowfullscreen
          />
        </div>
        <div class="video__notation">
          <p class="notation__description">
            Все видео вы можете найте на нашем
          </p>
          <a
            class="notation__link"
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            >YouTube канале.</a
          >
        </div>
      </div>
    </section>
    <div class="video__rectangle">
      <p class="rectangle__description">И В ОТЛИЧИЕ ОТ РАКА, #ЭТОНЕЛЕЧИТСЯ</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.video {
  width: 1440px;
  height: 650px;
  background-color: white;
  display: flex;
  flex-direction: row;
}

.description__block {
  width: 413px;
  margin: 110px 40px 100px 60px;
  height: 450px;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.description-title {
  color: #fff;
  width: 413px;
  height: 108px;
  margin: 0px 0px 32px 0px;
  text-align: left;
  background-color: white;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
}
.description-subtitle {
  margin: 0px 73px 150px 0px;
  text-align: left;
  width: 340px;
  height: 110px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}

.selector {
  display: flex;
  flex-direction: row;
  width: 80px;
  height: 40px;
  margin: 0px 333px 0px 0px;
  background: #fbfbfb;
}

.button__left {
  width: 40px;
  height: 40px;
  margin: 0px;
}

.button__left_opacity {
  opacity: 0.2;
}
.button__right {
  width: 40px;
  height: 40px;
  margin: 0px;
}

.video__block {
  width: 864px;
  height: 450px;
  margin: 100px 60px 74px 0px;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.video__container {
  display: flex;
  width: 867px;
  height: 450px;
  display: block;
  background: #ededed;
  background-size: cover;
  margin: 0px 0px 10px 0px;
}
.video__icon-play {
  margin: auto;
  width: 90px;
  height: 90px;
  background: #c4c4c4;
  border-radius: 50%;
}

.notation__description {
  display: flex;
  flex-direction: row;
  height: 16px;
  margin-right: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}
.notation__link {
  display: flex;
  flex-direction: row;
  height: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}
.video__notation {
  display: flex;
  flex-direction: row;
  width: 867px;
  height: 16px;
  margin: 0px 0px 74px 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
}

.video__rectangle {
  width: 1320px;
  height: 86px;
  margin: 0px 60px 100px 60px;
  background: #613a93;
  border: 1px solid #000000;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: flex;
}
.rectangle__description {
  display: flex;
  width: 750px;
  height: 46px;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .video {
    width: 100vw;
  }
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .description__block {
    width: 29vw;
  }
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .description-title {
    display: flex;
    width: 100%;
  }
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .description-subtitle {
    display: flex;
    width: 80%;
  }
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .selector {
    display: flex;
    width: 20%;
  }
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .button__left {
    display: flex;
    width: 100%;
    height: 100%;
  }
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .button__right {
    display: flex;
    width: 100%;
    height: 100%;
  }
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .video__block {
    width: 60vw;
  }
}
@media all and (min-width: 1024px) and (max-width: 1440px) {
  .video__container {
    width: 100%;
    height: 100%;
    display: flex;
  }
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .video__notation {
    width: 60%;
  }
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .video__rectangle {
    width: 92vw;
    height: 86px;
    display: flex;
  }
}

@media all and (min-width: 1024px) and (max-width: 1440px) {
  .rectangle__description {
    display: flex;
    /* width: 57%; */
  }
}
</style>
