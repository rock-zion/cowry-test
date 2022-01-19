<template>
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
