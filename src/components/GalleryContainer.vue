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
  .loading_wrapper,
  .container {
    width: 70%;
    max-width: 1000px;
    padding-top: 16px;
    z-index: 450;
    margin: -50px auto 100px auto;
  }
  .container {
    height: fit-content;
    columns: 4 200px;
    column-gap: 32px;
  }

  @media (max-width: 600px) {
    .container {
      column-count: 1;
      -webkit-column-count: 1;
      -moz-column-count: 1;
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 912px) {
    .container {
      column-count: 3;
      -webkit-column-count: 3;
      -moz-column-count: 3;
      // display: flex;
      // flex-direction: column;
    }
  }

  .loading_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
  }
</style>
