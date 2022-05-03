import Vue from 'vue'
import VueRouter from 'vue-router'
import Avaleht from "@/views/AvalehtView";
import AvalehtView from "@/views/AvalehtView";
import ToimunudTalgudView from "@/views/ToimunudTalgudView";
import TulevasedTalgudView from "@/views/TulevasedTalgudView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AvalehtView',
    component: AvalehtView
  },
  {
    path: '/Toimunud',
    name: 'ToimunudTalgudView',
    component: ToimunudTalgudView
  },
  {
    path: '/Tulevased',
    name: 'TulevasedTalgudView',
    component: TulevasedTalgudView
  }
]

const router = new VueRouter({
  routes
})

export default router
