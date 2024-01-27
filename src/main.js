import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import './assets/style/media.scss';
import "./assets/style/animate.scss";
createApp(App).use(store).mount('#app')

