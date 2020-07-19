<template>
  <header class="header">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo"
      >Проект Благотворительного Фонда Константина Хабенского</nuxt-link
    >
    <p class="header__logo" v-else>
      Проект Благотворительного Фонда Константина Хабенского
    </p>
    <main-menu class="header__menu">
      <button
        type="button"
        class="menu__link header__share"
        @click="$store.commit('popup/open')"
      >
        Рассказать историю
      </button>
    </main-menu>
    <hamburger-menu class="header__mobile-icon" />
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import Hamburger from './ui/Hamburger.vue';

export default {
  components: {
    'main-menu': Menu,
    'hamburger-menu': Hamburger,
  },
};
</script>

<style scoped>
.header {
  min-height: 76px;
  width: calc(100% - 120px);
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

.header__logo {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  width: 340px;
  height: min-content;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  color: #000;
}

.header__logo:visited {
  color: #000;
}

.header__share {
  width: fit-content;
  border: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  color: #121212;
  font-size: 18px;
  line-height: 24px;
  font-weight: normal;
  transition: 0.3s;
}

.header__share:hover {
  cursor: pointer;
  opacity: 0.8;
}

.header__mobile-icon {
  display: none;
}

@media screen and (max-width: 1429px) {
  .header {
    min-height: 72px;
    width: calc(100% - 100px);
  }
  .header__logo {
    line-height: 18px;
  }
  .header__share {
    font-size: 16px;
  }
}

@media screen and (max-width: 1023px) {
  .header__menu {
    display: none;
  }

  .header__mobile-icon {
    display: block;
  }
}

@media screen and (max-width: 730px) {
  .header {
    min-height: 64px;
    width: calc(100% - 30px);
  }
  .header__logo {
    width: 216px;
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
