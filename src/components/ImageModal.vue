<template>
  <div @click.self="toggleModal" class="modal_overlay">
    <div class="modal_content">
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.4);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .modal_content {
    width: 80%;
    max-width: 1000px;
    height: 90vh;
    max-height: 800px;
    background: #ffffff;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .portrait_wrapper {
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background: rgba($color: #000000, $alpha: 0.5);
  }

  .landscape_wrapper {
    height: 80%;
    width: 100%;
    overflow: hidden;
  }

  .landscape_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .portrait_image {
    height: 100%;
  }

  .user_wrapper {
    margin-top: 20px;
  }
</style>
