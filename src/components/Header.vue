<template>
  <div class="header">
    <Search />
  </div>
</template>
<script>
  import Search from './Search.vue';

  export default {
    name: 'Header',
    components: {
      Search,
    },
  };
</script>
<style lang="scss" scoped>
</style>
