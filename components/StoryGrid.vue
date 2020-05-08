<template>
  <div class="containerStory">
    <my-Card />
    <my-Card />
    <my-Card />
    <my-Card />
    <my-Card />
    <my-Card />
    <my-Card />
    <my-Card />
  </div>
</template>

<script>
import Card from '@/components/ui/Card';

export default {
  components: {
    'my-Card': Card,
  },
};
</script>

<style scoped>
.containerStory {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  row-gap: 70px;
  column-gap: 40px;
  max-width: 1320px;
}
@media screen and (max-width: 1280px) {
  .containerStory {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
