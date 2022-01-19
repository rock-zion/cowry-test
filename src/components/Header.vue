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
  .header {
    width: 100vw;
    height: 300px;
    background-image: url(https://res.cloudinary.com/rock-zion/image/upload/v1642445678/paul-zoetemeijer-ekBOf6sJYYo-unsplash-min.jpg);
    background-position: top;
    background-size: 100% auto;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }
</style>
