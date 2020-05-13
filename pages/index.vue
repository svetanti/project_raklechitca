<template>
  <div class="container" @click="popupHandler">
    <header></header>
    <tellStory @btnClick="popupHandler"></tellStory>
    <popup />
    <videoBlock />
    <!-- v-if ="ModalVisible" -->

    <a href="http://localhost:3000/stories">страница со всеми историями</a>
    <a href="http://localhost:3000/stories/1">страница с конкретной историей</a>
  </div>
</template>

<script>
import video from '@/components/blocks/video';
import popup from '@/components/blocks/popup';
import tellStory from '@/components/blocks/tellStory';
export default {
  components: {
    videoBlock: video,
    popup,
    tellStory,
  },
  methods: {
    popupHandler() {
      this.popupShow = !this.popupShow;
    },
  },
  data() {
    return {
      popupShow: true,
    };
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
