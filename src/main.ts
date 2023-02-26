import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/components/style/scss/element-default.scss';
import './assets/main.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
