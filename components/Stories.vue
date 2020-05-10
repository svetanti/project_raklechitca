<template>
  <div class="stories">
    <h3 class="stories__title">Истории неизлечимых привычек</h3>
    <stories-grid />
    <a href="" class="stories__link-all">Больше статей</a>
  </div>
</template>

<script>
import StoryGrid from '@/components/ui/StoryGrid';
export default {
  components: {
    'stories-grid': StoryGrid,
  },
};
</script>

<style scoped>
.stories {
  max-width: 1320px;
  padding: 100px 0;
}
.stories__title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  text-align: left;
  max-width: 413px;
  margin-bottom: 70px;
}
.stories__link-all {
  display: block;
  text-decoration: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  max-width: 100%;
  height: 82px;
  text-align: center;
  padding: 31px 0;
  background-color: #fbfbfb;
  color: #000000;
}
.stories__link-all:visited {
  color: #000000;
}
</style>
