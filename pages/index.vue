<template>
  <div class="container">
    <header><header>
    <h1>Главная страница</h1>
    <a href="http://localhost:3000/stories">страница со всеми историями</a>
    <a href="http://localhost:3000/stories/1">страница с конкретной историей</a>
    <p>здесь был Дима</p>
  </div>
</template>

<script>
export default {};
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
