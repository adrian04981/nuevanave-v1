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
        <button class="sidebar-close" @click="toggleSidebar">✖</button>
        <ul class="sidebar-menu">
          <li class="sidebar-item">
            <router-link to="/" @click="toggleSidebar" class="sidebar-link">
              <i class="sidebar-icon">🏠</i> INICIO
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/catalogo" @click="toggleSidebar" class="sidebar-link">
              <i class="sidebar-icon">📦</i> CATÁLOGO
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/nosotros" @click="toggleSidebar" class="sidebar-link">
              <i class="sidebar-icon">👥</i> NOSOTROS
            </router-link>
          </li>
          <li class="sidebar-item">
            <router-link to="/contactanos" @click="toggleSidebar" class="sidebar-link">
              <i class="sidebar-icon">📞</i> CONTÁCTANOS
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

<style>
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
  height: 50px;
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

/* Sidebar Overlay */
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

/* Sidebar */
.sidebar {
  background: #2c3e50;
  width: 280px;
  height: 100%;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
}

.sidebar-close {
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.sidebar-close:hover {
  transform: scale(1.1);
}

/* Sidebar Menu */
.sidebar-menu {
  list-style: none;
  width: 100%;
  padding: 0;
}

.sidebar-item {
  margin: 0.5rem 0;
}

.sidebar-link {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-link:hover {
  background-color: #1abc9c;
  color: white;
}

.sidebar-icon {
  margin-right: 0.8rem;
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