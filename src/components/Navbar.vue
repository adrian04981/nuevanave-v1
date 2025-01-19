<template>
  <nav class="navbar">
    <!-- Left Menu -->
    <ul class="menu">
      <li><router-link to="/">INICIO</router-link></li>
      <li><router-link to="/catalogo">CATÁLOGO</router-link></li>
    </ul>

    <!-- Logo -->
    <img src="../assets/logo.png" alt="LogoPrincipal" class="logo" />

    <!-- Right Menu -->
    <ul class="menu">
      <li><router-link to="/nosotros">NOSOTROS</router-link></li>
      <li><router-link to="/contactanos">CONTÁCTANOS</router-link></li>
    </ul>

    <!-- Hamburger Menu (mobile) -->
    <button @click="toggleSidebar" class="hamburger">
      ☰
    </button>

    <!-- Sidebar -->
    <div v-if="isSidebarOpen" class="sidebar-overlay" @click="toggleSidebar">
      <div class="sidebar" @click.stop>
        <button class="close" @click="toggleSidebar">✖</button>
        <ul class="menu">
          <li>
            <router-link to="/" @click="toggleSidebar">
              <i class="icon">🏠</i> INICIO
            </router-link>
          </li>
          <li>
            <router-link to="/catalogo" @click="toggleSidebar">
              <i class="icon">📦</i> CATÁLOGO
            </router-link>
          </li>
          <li>
            <router-link to="/nosotros" @click="toggleSidebar">
              <i class="icon">👥</i> NOSOTROS
            </router-link>
          </li>
          <li>
            <router-link to="/contactanos" @click="toggleSidebar">
              <i class="icon">📞</i> CONTÁCTANOS
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isSidebarOpen = ref(false);

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    return {
      isSidebarOpen,
      toggleSidebar,
    };
  },
};
</script>

<style scoped>
/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(99, 99, 99, 0.47);
  color: white;
  padding: 0.5rem 20%;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 21px;
  position: relative;
  flex-wrap: wrap;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  height: 50px; /* Ajusta el tamaño según tus necesidades */
/* Ajusta el tamaño según tus necesidades */
  margin-right: 4rem;
}

/* Menu */
.menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: flex-start;
}

.menu a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.menu a:hover {
  color: #cccccc;
}

/* Hamburger Menu (mobile only) */
.hamburger {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

/* Sidebar */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  transition: opacity 0.3s ease-in-out;
}

.sidebar {
  background: #2c3e50;
  width: 300px;
  height: 100%;
  padding: 2rem 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
}

.sidebar .close {
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
}

.sidebar .menu {
  list-style: none;
  padding: 0;
  width: 100%;
  margin-top: 2rem;
}

.sidebar .menu li {
  margin: 1rem 0;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 0;
}

.sidebar .menu li:last-child {
  border-bottom: none;
}

.sidebar .menu a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
}

.sidebar .menu a:hover {
  color: #1abc9c;
}

.sidebar .icon {
  margin-right: 0.5rem;
  font-size: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .menu {
    display: none;
  }

  .hamburger {
    display: block;
  }
}
</style>