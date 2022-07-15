import { createApp } from 'vue'
import App from './App.vue'
import "./Config/reset.css"
import "bootstrap/dist/css/bootstrap.min.css"
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import app from './Config/Firebase'

createApp(App).use(app).mount('#app')