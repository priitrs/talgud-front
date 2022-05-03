import Vue from 'vue'
import VueRouter from 'vue-router'
import Avaleht from "@/views/AvalehtView";
import AvalehtView from "@/views/AvalehtView";
import ToimunudTalgudView from "@/views/ToimunudTalgudView";
import TulevasedTalgudView from "@/views/TulevasedTalgudView";
import TalgudLisainfoView from "@/views/TalgudLisainfoView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'avalehtRoute',
    component: AvalehtView
  },
  {
    path: '/toimunud',
    name: 'toimunudRoute',
    component: ToimunudTalgudView
  },
  {
    path: '/tulevased',
    name: 'tulevasedRoute',
    component: TulevasedTalgudView
  },
  {
    path: '/lisainfo',
    name: 'lisainfoRoute',
    component: TalgudLisainfoView
  }
]

const router = new VueRouter({
  routes
})

export default router
