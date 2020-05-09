<template>
  <div class="container">
    <header></header>
    <h1>Главная страница</h1>
    <a href="http://localhost:3000/stories">страница со всеми историями</a>
    <a href="http://localhost:3000/stories/1">страница с конкретной историей</a>
    <stories />
  </div>
</template>

<script>
import Stories from '@/components/Stories';
export default {
  components: {
    stories: Stories,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
