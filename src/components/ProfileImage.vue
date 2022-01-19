<template>
  <div class="wrapper">
    <div class="img_wrapper">
      <img :src="img" />
    </div>
    <div class="name_wrapper">
      <span>{{ name }}</span>
      <span>{{ location }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ProfileDetails',
    props: {
      img: String,
      name: String,
      location: String,
    },
  };
</script>
<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
  }

  .img_wrapper {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
  }

  .img_wrapper img {
    width: 100%;
    height: 100%;
  }

  .name_wrapper {
    display: inherit;
    flex-direction: column;
    margin-left: 8px;
  }
</style>
