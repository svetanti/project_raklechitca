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
            <svg
              class="button__left_opacity"
              width="24"
              height="24"
              border="1px"
              solid="BFBFBF"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.5,4.14L19.5,5.86L8.97,12L19.5,18.14L18.5,19.86L5,12L18.5,4.14Z"
              />
            </svg>
          </button>
          <button class="button__right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="mdi-greater-than"
              width="24"
              height="24"
              border="1px"
              solid=" #000000"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.5,4.14L4.5,5.86L15,12L4.5,18.14L5.5,19.86L19,12L5.5,4.14Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="video__block">
        <a
          class="video__container"
          href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
        >
          <svg
            class="video__icon-play"
            alt="Кнопка запуска видео"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            //возможны 2 вида кнопок.Это код для второго вида кнопки
            <!-- <path d="M20.5 1.5375C30.955 1.5375 39.4625 10.045 39.4625 20.5C39.4625 30.955 30.955 39.4625 20.5 39.4625C10.045 39.4625 1.5375 30.955 1.5375 20.5C1.5375 10.045 10.045 1.5375 20.5 1.5375ZM20.5 0C9.17375 0 0 9.17375 0 20.5C0 31.8263 9.17375 41 20.5 41C31.8263 41 41 31.8263 41 20.5C41 9.17375 31.8263 0 20.5 0Z" fill="white"/> -->
            <path
              d="M17.7831 27.0086L27.5206 21.3711C27.8281 21.1661 28.0331 20.8586 28.0331 20.4999C28.0331 20.1411 27.8281 19.7824 27.5206 19.6286L17.7831 13.9911C17.4756 13.7861 17.0656 13.7861 16.7581 13.9911C16.4506 14.1961 16.2456 14.5036 16.2456 14.8624V26.1374C16.2456 26.4961 16.4506 26.8549 16.7581 27.0086C17.0656 27.1624 17.4244 27.2136 17.7831 27.0086Z"
              fill="white"
            />
          </svg>
        </a>
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
