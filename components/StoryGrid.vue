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
  grid-template-rows: repeat(2, calc((100% - 120px) / 2));
  grid-template-columns: repeat(4, calc((100% - 70px) / 4));
  row-gap: 70px;
  column-gap: 40px;
  max-width: 1320px;
}
</style>
