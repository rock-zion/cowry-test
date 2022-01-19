<template>
        <ProfileImage
          :location="imageObject?.user?.location"
          :name="imageObject?.user?.name"
          :img="imageObject?.user?.profile_image?.medium"
        />
</template>
<script>
  import ProfileImage from './ProfileImage.vue';
  export default {
    name: 'ImageModal',
    data() {
      return {
        imageObject: {},
      };
    },
    methods: {
      toggleModal() {
        this.$store.commit('updateModal');
      },
    },
    mounted() {
      this.imageObject = this.$store.state.singleImageData;
    },
    components: { ProfileImage },
  };
</script>
<style lang="scss" scoped>
</style>
