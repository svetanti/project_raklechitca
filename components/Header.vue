<template>
  <header class="header">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo"
      >Проект Благотворительного Фонда Константина Хабенского</nuxt-link
    >
    <h1 class="header__logo" v-else>
      Проект Благотворительного Фонда Константина Хабенского
    </h1>
    <main-menu class="header__menu">
      <nuxt-link to="#" class="menu__link header__link_share"
        >Рассказать историю</nuxt-link
      >
    </main-menu>
  </header>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  components: {
    'main-menu': Menu,
  },
};
</script>

<style scoped>
.header {
  font-family: 'Inter', 'arial', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  min-height: 76px;
  width: calc(100% - 120px);
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 1220px) {
  .header {
    width: calc(100% - 100px);
  }
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

.header__link_share {
  color: #121212;
}
</style>
