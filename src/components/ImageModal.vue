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
    components: { ProfileImage },
  };
</script>
<style lang="scss" scoped>
</style>
