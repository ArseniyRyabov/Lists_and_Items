<template>
  <MyPage/>
</template>

<script>
import MyPage from './components/MyPage.vue'

export default {
  name: 'App',
  components: {
    MyPage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
