<template>
  <div @click="toggleModal(data)" class="img_wrapper">
    <img :alt="description" :src="img" />
    <div class="name_wrapper">
      <span>{{ name }}</span>
      <span>{{ location }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PictureThumbnail',
    props: {
      img: String,
      name: String,
      location: String,
      description: String,
      data: Object,
    },
    methods: {
      toggleModal(data) {
        this.$store.commit('updateModal');
        this.$store.commit('updateSingleImageData',data);
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
