<template>
  <div class="container">
    <header></header>
    <tellStory></tellStory>
    <videoBlock />
    <!-- v-if ="ModalVisible" -->

    <a href="http://localhost:3000/stories">страница со всеми историями</a>
    <a href="http://localhost:3000/stories/1">страница с конкретной историей</a>
  </div>
</template>

<script>
import video from '@/components/blocks/video';
// import popup from '@/components/blocks/popup';
import tellStory from '@/components/blocks/tellStory';
export default {
  components: {
    videoBlock: video,
    // popup,
    tellStory,
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
