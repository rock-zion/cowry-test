<template>
  <div class="thumbnail_wrapper">
    <div class="bg">
      <div class="line"></div>
      <div class="line_small"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ThumbnailLoading',
  };
</script>
<style lang="scss" scoped>
  .thumbnail_wrapper {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
  }

  .bg {
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    padding: 16px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }

  .bg > div:not(:last-child) {
    margin-bottom: 4px;
  }

  .bg > div:last-child {
    width: 70%;
  }

  .bg > div {
    height: 8px;
    width: 100%;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    animation-name: shimmer;
    -webkit-animation-name: shimmer;
    animation-timing-function: linear;
    -webkit-animation-timing-function: linear;
    border-radius: 24px;

    background-image: linear-gradient(
      to right,
      #ffffff 0%,
      #e9ebee 20%,
      #ffffff 40%,
      #ffffff 100%
    );
    background-repeat: no-repeat;
    position: relative;
    background: #ffffff;
  }

  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
</style>
