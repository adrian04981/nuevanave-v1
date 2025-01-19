<template>
  <div>
    <Navbar />
    <main>
      <!-- Transición para las rutas -->
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        mode="out-in"
      >
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  created() {
    // Precargar imágenes al cargar la aplicación
    this.preloadImages([
      "/Nosotros.jpg", // Usa rutas relativas al directorio `public`
      "/Contactanos.jpg",
      "/Catalogo.jpg",
    ]);
  },
  methods: {
    // Método para precargar imágenes
    preloadImages(imageArray) {
      imageArray.forEach((image) => {
        const img = new Image();
        img.src = image; // Asigna la ruta completa
      });
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

main {
  padding: 1rem;
}
</style>
