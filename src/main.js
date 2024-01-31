import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import './assets/style/media.scss';
createApp(App).use(store).mount('#app');

