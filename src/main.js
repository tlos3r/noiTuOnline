import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import "./Config/reset.css"
import "bootstrap/dist/css/bootstrap.min.css"
import routes from './Config/routes'
import app from './Config/Firebase'

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router, app).mount('#app')