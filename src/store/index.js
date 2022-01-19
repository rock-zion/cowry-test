import { createStore } from 'vuex';
import { HTTP } from '../utils/https-common';

export default createStore({
  state: {
    imageData: [],
    singleImageData: {},
    per_page: 8,
    page: 1,
    errors: [],
    loading: false,
    searchValue: 'African',
    displayModal: false,
  },
  mutations: {
    setSearchValue(state, newSearchValue) {
      state.searchValue = newSearchValue;
    },

    updateLoading(state) {
      state.loading = !state.loading;
    },

    updatePage(state) {
      state.page = state.page + 1;
    },

    updateSingleImageData(state, payload) {
      console.log(payload);
      state.singleImageData = payload;
    },

    updatePerPage(state, payload) {
      state.per_page = payload;
    },

    updateModal(state, payload) {
      state.displayModal = !state.displayModal;
    },

    clearImageData(state) {
      state.imageData = [];
    },

    updateImageData(state, payload) {
      state.imageData.push(...payload.data.results);
    },
  },

  actions: {
    async fetchSearch(context) {
      const { state } = context;
      context.commit('updateLoading');
      try {
        const response = await HTTP.get(
          `/search/photos?query=${state.searchValue}&per_page=${
            state.per_page
          }&page=${1}`
        );
        context.commit('updateLoading');
        context.commit('updateImageData', response);
      } catch (e) {
        state.errors.push(e);
      }
    },

    async addMoreImages(context) {
      const { state } = context;
      context.commit('updateLoading');
      try {
        const response = await HTTP.get(
          `/search/photos?query=${state.searchValue}&per_page=${state.per_page}&page=${state.page}`
        );
        context.commit('updateLoading');
        context.commit('updateImageData', response);
      } catch (e) {
        state.errors.push(e);
      }
    },
  },
});
