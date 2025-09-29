import { createRouter,createWebHistory } from "vue-router";
import { isMoblieTerminal } from "../utils/flexible";
import mobileRoutes from './modules/mobile-routes.js'
import pcRoutes from './modules/pc-routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes: isMoblieTerminal.value? mobileRoutes : pcRoutes
})

export default router