<template>
  <footer class="footer">
    <p class="footer__text">Спасибо всем, кто помог состояться этому проекту</p>

    <main-menu class="footer__menu" />

    <ul class="footer__links">
      <li class="footer__social">
        Мы в
        <page-link class="link" :url="links[0].url" :text="links[0].text" /> и
        <page-link class="link" :url="links[1].url" :text="links[1].text" />
      </li>
      <li class="footer__link_share">
        <page-link
          class="link"
          :url="links[2].url"
          :text="links[2].text"
        />&#8599;
      </li>
    </ul>

    <p class="footer__copyright footer__copyright_project">Рак Лечится 2020</p>
    <p class="footer__copyright footer__copyright_authors">
      Сделано студентами Яндекс Практикум
    </p>
  </footer>
</template>

<script>
import Menu from '@/components/Menu';
import Link from '@/components/ui/Link';
export default {
  name: 'Link',
  components: {
    'main-menu': Menu,
    'page-link': Link,
  },
  data() {
    return {
      links: [
        {
          url: 'https://www.instagram.com/raklechitsa/',
          text: 'Инстаграме',
        },
        {
          url:
            'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
          text: 'Youtube',
        },
        {
          url: '#',
          text: 'Поделитесь ',
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  font-family: 'Inter', 'arial', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  min-height: 356px;
  width: calc(100% - 120px);
  margin: 0 auto;
  padding: 60px 0;
  display: grid;
  grid-template-columns: repeat(2, min-content) 1fr;
  grid-template-rows: repeat(3, min-content);
  grid-template-areas:
    'Thanks Nav Links'
    'Thanks . Share'
    'Project-name . Copyright';
  justify-content: space-between;
  align-content: space-between;
}

@media screen and (max-width: 1220px) {
  .footer {
    width: calc(100% - 100px);
    padding: 50px 0;
  }
}

.footer__text {
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
  width: 340px;
  height: min-content;
  margin: 0;
  grid-area: Thanks;
}

.footer__menu {
  grid-area: Nav;
  margin-left: 113px;
}

.footer__links {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 300px;
  justify-self: end;
}

.footer__social {
  grid-area: Links;
  margin-bottom: 44px;
}

.footer__share {
  grid-area: Share;
  color: #121212;
}

.footer__copyright {
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}

.footer__copyright_project {
  grid-area: Project-name;
}

.footer__copyright_authors {
  grid-area: Copyright;
  justify-self: end;
}
</style>
