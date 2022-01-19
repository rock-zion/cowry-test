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
  .img_wrapper {
    position: relative;
    width: 100%;
    margin: 0 1rem 1rem 0;
    display: inline-block;
    height: auto;
  }

  .img_wrapper img {
    width: 100%;
    border-radius: 8px;
    height: auto;
  }

  .name_wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 3px;
    border-radius: 8px;
    z-index: 100;
    color: white;
    background: rgba($color: #000000, $alpha: 0.2);
    display: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0;
    transition: all 1;
  }

  .img_wrapper:hover > .name_wrapper {
    opacity: 1;
  }

  .name_wrapper > span {
    margin-left: 24px;
    font-weight: 700;
  }

  .name_wrapper > span:last-child {
    margin-bottom: 24px;
    font-size: 12px;
  }
</style>
