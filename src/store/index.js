import { createStore } from 'vuex'

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
  },
  actions: {
  },
  modules: {
  }
})
