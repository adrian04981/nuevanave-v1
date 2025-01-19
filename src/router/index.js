import { createRouter, createWebHistory } from "vue-router";

// Importar las vistas
import Inicio from "../views/Inicio.vue";
import Catalogo from "../views/Catalogo.vue";
import Nosotros from "../views/Nosotros.vue";
import Contactanos from "../views/Contactanos.vue";

// Configuración de rutas
const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/catalogo",
    name: "Catalogo",
    component: Catalogo,
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: Nosotros,
  },
  {
    path: "/contactanos",
    name: "Contactanos",
    component: Contactanos,
  },
];

// Crear el router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;