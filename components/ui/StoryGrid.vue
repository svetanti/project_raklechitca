<template>
  <div class="story-grid">
    <story-grid__card />
    <story-grid__card />
    <story-grid__card />
    <story-grid__card />
    <story-grid__card />
    <story-grid__card />
    <story-grid__card />
    <story-grid__card />
  </div>
</template>

<script>
import Card from '@/components/ui/Card';

export default {
  components: {
    'story-grid__card': Card,
  },
};
</script>

<style scoped>
.story-grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  row-gap: 70px;
  column-gap: 40px;
  max-width: 1320px;
  margin-bottom: 70px;
}
@media screen and (max-width: 1280px) {
  .story-grid {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
