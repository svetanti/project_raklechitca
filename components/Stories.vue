<template>
  <div class="containerStories">
    <h3 class="story__title">Истории неизлечимых привычек</h3>
    <story-grid />
    <a href="" class="story__link-all">Больше статей</a>
  </div>
</template>

<script>
import StoryGrid from '@/components/StoryGrid';
export default {
  components: {
    'story-grid': StoryGrid,
  },
};
</script>

<style scoped>
.containerStories {
  max-width: 1320px;
}
.story__title {
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
.story__link-all {
  display: block;
  text-decoration: none;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  max-width: 100%;
  height: 82px;
  text-align: center;
  align-items: center;
}
</style>
