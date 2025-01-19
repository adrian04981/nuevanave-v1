import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importar el router

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"; // Íconos de marcas
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Ícono de correo electrónico

// Agregar íconos a la librería
library.add(faInstagram, faTiktok, faEnvelope);

const app = createApp(App);

app.use(router); // Usar el router
app.component("font-awesome-icon", FontAwesomeIcon); // Registrar el componente Font Awesome

app.mount("#app");
