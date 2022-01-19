<template>
      <div
        v-if="imageObject?.height > imageObject?.width"
        class="portrait_wrapper"
      >
        <img class="portrait_image" :src="imageObject?.urls?.full" />
      </div>
      <div class="landscape_wrapper" v-else>
        <img class="portrait_image" :src="imageObject?.urls?.full" />
      </div>
      <div class="user_wrapper">
        <ProfileImage
          :location="imageObject?.user?.location"
          :name="imageObject?.user?.name"
          :img="imageObject?.user?.profile_image?.medium"
        />
      </div>
    </div>
  </div>
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
  .modal_overlay {
</style>
