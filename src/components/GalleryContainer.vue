<template>
  <masonry
    :gutter="{ default: '30px', 700: '20px', 400: '0px' }"
    :cols="{ default: 3, 1000: 3, 700: 2, 400: 1 }"
    v-if="$store.state.imageData.length !== 0"
    class="container"
  >
    <PictureThumbnail
      v-for="item in $store.state.imageData"
      v-bind:key="item?.id"
      :name="item?.user?.name"
      :location="item?.user?.location"
      :description="item?.alt_description"
      :img="item?.urls?.thumb"
      :data="item"
      :loading="$store.state.loading"
    />
  </masonry>
</template>

<script>
  import PictureThumbnail from './PictureThumbnail.vue';
  import ThumbnailLoading from './ThumbnailLoading.vue';

  export default {
    name: 'GalleryContainer',
    components: {
      PictureThumbnail,
      ThumbnailLoading,
    },
  };
</script>

<style lang="scss" scoped>
  .loading_wrapper,
  .container {
    width: 70%;
    max-width: 1000px;
    padding-top: 16px;
    z-index: 450;
  }
  .container {
    height: fit-content;
    margin-top: -50px;
  }

  .container > div:not(:last-child) {
    margin-right: 20px;
  }

  .loading_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
  }
</style>
