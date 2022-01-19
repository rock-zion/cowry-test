<template>
  <form @submit.prevent="handleSubmit" class="search_form">
    <input
      v-model="searchValue"
      type="text"
      placeholder="enter search query here"
    />
  </form>
</template>

<script>
  export default {
    name: 'Search',
  };
</script>

<style lang="scss" scoped>
</style>
