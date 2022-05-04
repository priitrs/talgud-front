import Vue from 'vue'
import VueRouter from 'vue-router'
import AvalehtView from "@/views/AvalehtView";
import ToimunudTalgudView from "@/views/ToimunudTalgudView";
import TulevasedTalgudView from "@/views/TulevasedTalgudView";
import TalgudLisainfoView from "@/views/TalgudLisainfoView";
import UuedTalgudView from "@/views/UuedTalgudView";
import MinuTalgudView from "@/views/MinuTalgudView";
import LoginView from "@/views/LoginView";
import RegistrationView from "@/views/RegistrationView";

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
  },
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'registrationRoute',
    component: RegistrationView
  }

]

const router = new VueRouter({
  routes
})

export default router
