<template>
  <div class="my-page">
    <div class="my-page__wrapper">
      <div class="my-page__tasks">
        <TasksCard/>
      </div>
      <div class="my-page__show">
        <ShowCard/>
      </div>
    </div>
  </div>
</template>

<script>
import TasksCard from './TasksCard.vue'
import ShowCard from './ShowCard.vue'

export default {
  name: 'MyPage',
  components: {
    TasksCard,
    ShowCard
  }
}
</script>

<style lang="scss">
.my-page{
  &__wrapper{
    display: flex;
    justify-content: center;
    margin: 0px auto;
  }
  &__tasks{
    display: flex;
    border: 1px solid #000000;
    margin: 0px 35px 50px 0px;
    width: 45%;
    justify-content: center;
    height: auto;
  }
  &__show{
    display: flex;
    border: 1px solid #000000;
    width: 45%;
    justify-content: center;
    margin: 0px 0px 50px 35px;
    height: auto;
  }
}
</style>