<template>
  <div class="content-wrapper">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/navBar/NavBar.vue';
import Operations from './views/Operations.vue';

export default {
  components: {
    NavBar,
    Operations
  }
}
</script>

<style scoped>
  .content-wrapper {
    margin-bottom: 20px; 
}
</style>