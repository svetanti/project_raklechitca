<template>
  <div>
    <section class="storiesBlock">
      <div class="storyDescription">
        <h2 class="storyDescription__title">
          Расскажите свою<br />
          историю
        </h2>
        <p class="storyDescription__subtitle">
          Мы публикуем новые истории на<br />
          сайте раз в неделю. Есть 2 варианта<br />
          поделиться своей историей<br />
          неизлечимых привычек, навязчивых<br />
          идей и болезненных привязанностей.
        </p>
      </div>

      <div class="buttonDescription">
        <div class="options">
          <p class="option__first">1-й вариант</p>
          <p class="option__second">2-й вариант</p>
        </div>
        <div class="options__description">
          <p class="option__first-description">
            Заполнить подробную форму прямо на сайте и мы опубликуем вашу<br />
            историю после проверки. Пожалуйста, заполняйте все пункты<br />
            корректно, если вы испытаете какие-то сложности, воспользуйтесь<br />
            2-м вариантом.
          </p>
          <p class="option__second-description">
            Оставить контакт (почту или номер телефона) и мы свяжемся с вами,<br />
            зададим вопросы, уточним детали вашей истории.
          </p>

          <Button
            @custom-click="$store.commit('popup/open')"
            className="popup__button"
          >
            <p class="popup__button-description">
              <slot>Заполнить форму</slot>
            </p>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import button from '@/components/blocks/button';
import popup from '@/components/blocks/popup';
// import optionFirst from '@/components/ui/optionFirst';
// import optionSecond from '@/components/ui/optionSecond';

export default {
  components: {
    Button: button,
  },
  // methods: {
  //   popupShown() {
  //     this.$store.commit('popup/toggglePopup')
  //   },
  // },
  methods: {
    popupHandler() {
      console.log('Click here');
      this.popupShown = !this.popupShown;
    },
  },
  data() {
    return {
      popupShown: false,
    };
  },
};
</script>

<style scoped>
.storiesBlock {
  display: flex;
  flex-direction: row;
  width: 1440px;
  height: 522px;
  background: #f7f7f7;
}

.storyDescription {
  display: flex;
  flex-direction: column;
  width: 473px;
  height: 522px;
  margin-right: 122px;
}

.storyDescription__title {
  width: 413px;
  height: 72px;
  margin: 100px 0px 32px 60px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  text-align: left;
}

.storyDescription__subtitle {
  width: 340px;
  height: 110px;
  margin: 0px 0px 208px 60px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  text-align: left;
}

.buttonDescription {
  display: flex;
  flex-direction: row;
  width: 845px;
  height: 522px;
  justify-content: space-between;
  /* display: none; */
}

.options {
  display: flex;
  flex-direction: column;
  margin: 204px 40px 264px 0px;
}

.option__first {
  display: flex;
  width: 105px;
  height: 22px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #000000;
  margin: 0px 0px 10px 0px;
}

.option__second {
  display: flex;
  width: 107px;
  height: 22px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #a2a2a2;
}

.options__description {
  display: flex;
  width: 640px;
  height: 552px;
  flex-direction: column;
}
.option__first-description {
  display: flex;
  width: 640px;
  height: 88px;
  margin: 204px 60px 78px 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  text-align: left;
}
.option__second-description {
  display: flex;
  width: 640px;
  height: 44px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  margin: 204px 60px 122px 0px;
  text-align: left;
  display: none;
}

.overlay {
  width: 1440px;
  height: 900px;
  z-index: 2;
  background: #000000;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  width: 920px;
  height: 600px;
  background: #ffffff;
  justify-content: center;
  align-items: center;
  margin: auto;
  z-index: 3;
}

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
.popup__header {
  display: flex;
}

.icon__close {
  width: 20px;
  height: 20px;
  margin: 43px 42px 0px 0px;
  border: 0;
}
.popup__question {
  display: flex;
  width: 840px;
  height: 24px;
  margin: 0px 40px 134px 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
}
.popup__input {
  display: flex;
  width: 840px;
  height: 24px;
  margin: 0px 40px 10px 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #666666;
  border: 0;
}
.input__underline {
  width: 840px;
  height: 0px;
  margin: 0px 40px 200px 40px;

  border: 1px solid #e7e7e7;
  box-sizing: border-box;
}
.popup__block {
  display: flex;
  padding: 0;
}

.popupBack__button {
  display: flex;
  width: 48px;
  height: 20px;
  margin: 16px 30px 56px 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #c0c0c0;
  background: white;
  padding: 0;
  border: 0;
}
.popupNext__button {
  display: flex;
  width: 226px;
  height: 52px;
  margin: 0px 576px 40px 0px;
  background: #613a93;
  padding: 0;
  border: 0;
}
.popupNext__description {
  display: flex;
  width: 66px;
  height: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  margin: auto;
  padding: 0;
}
</style>
