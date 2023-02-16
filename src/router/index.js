import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login.vue";
import About from "../views/about.vue";
import Home from "../views/home.vue";
import dashboard from "../views/master/dashboard.vue";
import notification from "../views/notification.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    name: "Dashboard",
    path: "/home",
    component: dashboard,
    children: [
      { path: "/home", name: "dashboard", component: dashboard },
      {
        path: "/notification",
        name: "Notification",
        component: notification,
      },
    ],
  },
];
const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
