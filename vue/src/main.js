import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Hello from "./components/Hello.vue"

const app=createApp(App);

app.component('Hello',Hello)


app.mount('#app');
