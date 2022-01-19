<template>
  <form @submit.prevent="handleSubmit" class="search_form">
    <input
      v-if="!$store.state.loading"
      v-model="searchValue"
      type="text"
      placeholder="enter search query here"
    />
    <h1 class="searching_indicator" v-else>
      Searching for <span> "{{ $store.state.searchValue }}" </span>
    </h1>
  </form>
</template>

<script>
  export default {
    name: 'Search',
    methods: {
      handleSubmit() {
        this.$store.commit('clearImageData');
        this.$store.commit('updatePerPage', 12);
        this.$store.dispatch('fetchSearch');
      },
    },
    computed: {
      searchValue: {
        get() {
          return this.$store.state.searchValue;
        },
        set(newSearchValue) {
          this.$store.commit('setSearchValue', newSearchValue);
        },
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
