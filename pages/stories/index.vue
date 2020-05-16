<template>
  <div class="stories-page__container">
    <h3 class="stories-page__title">Истории неизлечимых привычек</h3>

    <div class="stories-page__search">
      <input class="stories-page__space" type="text" />
      <button class="stories-page__button">Поиск</button>
    </div>

    <storyGrid />

    <ul class="stories-page__page-list-container">
      <li class="stories-page__element-list">
        <span class="stories-page__number">1</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">2</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">3</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">4</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">5</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">6</span>
      </li>
      <li class="stories-page__element-list">
        <span class="stories-page__number">7</span>
      </li>
    </ul>
  </div>
</template>

<script>
import StoryGrid from '@/components/ui/StoryGrid';
export default {
  components: {
    storyGrid: StoryGrid,
  },
};
</script>

<style scoped>
.stories-page__container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 100px 60px 120px 60px;
}
.stories-page__title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  text-align: left;
  max-width: 413px;
  margin-bottom: 70px;
  margin-right: auto;
}
.stories-page__search {
  width: 100%;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.stories-page__space {
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  width: calc(100% - 251px);
  height: 52px;
  margin-right: 20px;
  padding: 3px 10px;

  font-size: 24px;
}

.stories-page__button {
  background-color: #613a93;
  border: 2px solid white;
  width: 226px;
  height: 52px;
  padding: 0px;

  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
  cursor: pointer;
}
.stories-page__button:hover {
  background-color: white;
  border: 2px solid #613a93;
  color: #613a93;

  transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
}
.stories-page__page-list-container {
  display: flex;
  flex-direction: row;
  list-style-type: none;
}
.stories-page__element-list {
  display: block;
  width: 58px;
  height: 58px;
  margin-right: 10px;
  background-color: #fbfbfb;
  padding: 20px;
  cursor: pointer;
}
.stories-page__element-list:hover {
  background-color: #f4f4f4;
}
.stories-page__number {
  color: #181818;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
</style>
