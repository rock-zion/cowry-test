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
</style>
