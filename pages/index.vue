<template>
  <div class="container">
    <header></header>
    <!-- <h1>Главная страница</h1> -->

    <videoBlock />
    <a href="http://localhost:3000/stories">страница со всеми историями</a>
    <a href="http://localhost:3000/stories/1">страница с конкретной историей</a>
  </div>
</template>

<script>
import video from '@/components/video';
export default {
  components: {
    videoBlock: video,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>
