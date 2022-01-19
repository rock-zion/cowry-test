<template>
  <div v-if="$store.state.imageData.length !== 0" class="container">
    <PictureThumbnail
      v-for="item in $store.state.imageData"
      v-bind:key="item?.id"
      :name="item?.user?.name"
      :location="item?.user?.location"
      :description="item?.alt_description"
      :img="item?.urls?.thumb"
      :data="item"
    />
  </div>

  <div v-if="$store.state.loading" class="loading_wrapper">
    <ThumbnailLoading />
    <ThumbnailLoading />
    <ThumbnailLoading />
  </div>
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
</style>
