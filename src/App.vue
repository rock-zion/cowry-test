<template>
  <transition name="fade">
    <ImageModal v-if="$store.state.displayModal" />
  </transition>
  <Header />
  <div class="container_parent">
    <GalleryContainer />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import GalleryContainer from './components/GalleryContainer.vue';
  import ImageModal from './components/ImageModal.vue';

  export default {
    name: 'App',
    components: {
      Header,
      GalleryContainer,
      ImageModal,
    },

    computed: {
      pageValue: {
        get() {
          return this.$store.state.searchValue;
        },
        set(newPageValue) {
          this.$store.dispatch('addMoreImages');
        },
      },
    },

    mounted() {
      this.$store.dispatch('fetchSearch');
    },

    created() {
      window.addEventListener('scroll', this.handleScroll);
    },

    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
      handleScroll() {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.$store.commit('updatePage');
          this.$store.dispatch('addMoreImages');
        }
      },
    },
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  #app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input {
    outline: none;
    border: none;
  }

  .container_parent {
    width: 100%;
    position: relative;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
