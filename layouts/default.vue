<template>
  <div class="main-container">
    <container class="container__mobile-menu">
      <mobile-menu v-if="isMobileMenuOpened" class="mobile-menu">
        <button
          type="button"
          class="menu__link header__share"
          @click="$store.commit('popup/open')"
        >
          Рассказать историю
        </button>
      </mobile-menu>
    </container>
    <break-line class="break-line_mobile-menu" />
    <main-header />
    <break-line class="break-line" v-if="$route.path !== '/'" />
    <popup v-if="this.$store.state.popup.popupShown"></popup>
    <nuxt />
    <social v-if="socialShown" />
    <main-footer @shareClick="showSocial" />
  </div>
</template>

<script>
import Container from '@/components/Container';
import BreakLine from '@/components/ui/BreakLine';
import MobileMenu from '@/components/MobileMenu';
import Header from '@/components/Header';
import popup from '@/components/popup';
import Social from '@/components/Social';
import Footer from '@/components/Footer';

export default {
  components: {
    container: Container,
    'break-line': BreakLine,
    'mobile-menu': MobileMenu,
    'main-header': Header,
    popup,
    social: Social,
    'main-footer': Footer,
  },
  computed: {
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
    socialShown() {
      return this.$store.getters['data/social/getSocialShown'];
    },
  },
  methods: {
    showSocial() {
      this.$store.commit('data/social/toggleSocial');
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', 'Arial', sans-serif;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}

#__layout {
  overflow: hidden;
}

.main-container {
  max-width: 1440px;
  margin: 0 auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.mobile-menu {
  display: none;
}

.break-line_mobile-menu {
  display: none;
}

.mobile-menu__link {
  text-decoration: none;
  transition: 0.3s;
}

.mobile-menu__link:hover {
  opacity: 0.8;
}

@media screen and (max-width: 1023px) {
  .mobile-menu {
    width: 100%;
    font-size: 16px;
    line-height: 1;
    font-weight: normal;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, min-content) max-content;
    grid-gap: 30px;
    margin: 18px 0;
  }

  .header__share {
    width: fit-content;
    border: none;
    margin: 0;
    padding: 0;
    background-color: #fff;
    color: #121212;
    font-size: 16px;
    line-height: 1;
    font-weight: normal;
    transition: 0.3s;
  }

  .header__share:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .break-line_mobile-menu {
    display: block;
  }
}

@media screen and (max-width: 730px) {
  .mobile-menu {
    font-size: 13px;
    grid-template-columns: 1fr;
    grid-gap: 18px;
  }

  .header__share {
    font-size: 13px;
  }
}
</style>
