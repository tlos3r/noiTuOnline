import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import player from './Config/player'

createApp(App).use(player).mount('#app')
