<template>
  <div class="container">
    <h1>Главная страница</h1>
    <a href="http://localhost:3000/stories">страница со всеми историями</a>
    <a href="http://localhost:3000/stories/1">страница с конкретной историей</a>
    <stories />
    <instagram />
    <your_story />
    <statistic />
  </div>
</template>

<script>
import Stories from '@/components/Stories';
import Instagram from '~/components/Instagram';
import TellYourStory from '~/components/TellYourStory';
import Statistic from '@/components/Statistic';
export default {
  components: {
    stories: Stories,
    instagram: Instagram,
    your_story: TellYourStory,
    statistic: Statistic,
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
