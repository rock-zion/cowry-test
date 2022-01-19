<template>
</template>

<script>
  export default {
    name: 'PictureThumbnail',
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
