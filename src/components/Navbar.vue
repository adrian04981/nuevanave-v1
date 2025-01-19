<template>
  <nav class="navbar">
    <!-- Left Menu -->
    <ul class="menu">
      <li><router-link to="/">INICIO</router-link></li>
      <li><router-link to="/catalogo">CATÁLOGO</router-link></li>
    </ul>

    <!-- Logo -->
    <h1 class="logo">LOGO</h1>

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
        <li><router-link to="/" @click="toggleSidebar">INICIO</router-link></li>
          <li><router-link to="/catalogo" @click="toggleSidebar">CATÁLOGO</router-link></li>
          <li><router-link to="/nosotros" @click="toggleSidebar">NOSOTROS</router-link></li>
          <li><router-link to="/contactanos" @click="toggleSidebar">CONTÁCTANOS</router-link></li>
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
  padding: 0.5rem 15%;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 21px;
  position: relative;
  flex-wrap: wrap;
}

/* Logo */
.logo {
  font-size: 21px;
  text-align: center;
  color: white;
  flex: 1;
  text-align: center;
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
  background: #636363;
  width: 250px;
  height: 100%;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: translateX(0); /* Default visible */
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
  margin-top: 2rem;
}

.sidebar .menu li {
  margin: 1rem 0;
}

.sidebar .menu a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 21px;
  transition: color 0.3s;
}

.sidebar .menu a:hover {
  color: #cccccc;
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

@media (max-width: 1024px) {
  .menu {
    gap: 1.5rem;
  }

  .navbar {
    padding: 1rem 3%;
  }
}
</style>