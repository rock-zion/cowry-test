import { createApp } from 'vue';
import masonry from 'vue-next-masonry';

import App from './App.vue';
import store from './store';

createApp(App).use(masonry).use(store).mount('#app');
