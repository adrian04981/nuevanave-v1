<template>
  <div class="root">
    <div class="contact-container">
      <!-- Título -->
      <h1 class="contact-title">Contáctanos</h1>

      <!-- Instagram -->
      <div class="contact-item">
        <a href="https://www.instagram.com/nuevanave?igsh=MXgydW5rMmJmaXgwaw==" target="_blank" class="contact-link">
          <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
          <span class="contact-text">@NUEVANAVE</span>
        </a>
      </div>

      <!-- TikTok -->
      <div class="contact-item">
        <a href="https://www.tiktok.com/@nueva.nave?_t=ZM-8tBqXMoq8es&_r=1" target="_blank" class="contact-link">
          <font-awesome-icon :icon="['fab', 'tiktok']" class="icon" />
          <span class="contact-text">@NUEVANAVE</span>
        </a>
      </div>

      <!-- Correo -->
      <div class="contact-item">
        <a href="mailto:NUEVANAVEPERU@GMAIL.COM" class="contact-link">
          <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
          <span class="contact-text">NUEVANAVEPERU@GMAIL.COM</span>
        </a>
      </div>

      <!-- Contacta un asesor -->
      <div class="contact-footer">
        <h2 class="contact-footer-text">Contacta<br />un asesor!</h2>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Fondo */
.root {
  background-image: url('../assets/Contactanos.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
}

/* Contenedor principal */
.contact-container {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  padding: 1rem;
  max-width: 600px;
  width: 90%;
  margin: 2rem auto 0;
}

/* Título */
.contact-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

/* Elementos de contacto */
.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
}

.contact-link {
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-link:hover {
  color: #1abc9c;
}

.icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.contact-text {
  font-size: 1.125rem;
  font-weight: normal;
}

/* Footer de contacto */
.contact-footer {
  margin-top: 3rem;
}

.contact-footer-text {
  font-family: 'TT Bluescreens', sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;
  line-height: 1.2;
}

/* Responsivo basado en el ancho del contenedor */
@media (max-width: 1024px) {
  .contact-container {
    max-width: 700px;
  }

  .contact-title {
    font-size: 2rem;
  }

  .icon {
    font-size: 2.5rem;
  }

  .contact-text {
    font-size: 1rem;
  }

  .contact-footer-text {
    font-size: 2.25rem;
  }
}

@media (max-width: 768px) {
  .contact-container {
    max-width: 500px;
  }

  .contact-title {
    font-size: 1.75rem;
  }

  .icon {
    font-size: 8rem;
  }

  .contact-text {
    font-size: 0.9rem;
  }

  .contact-footer-text {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-container {
    max-width: 320px;
  }

  .contact-title {
    font-size: 1.5rem;
  }

  .icon {
    font-size: 1.8rem;
  }

  .contact-text {
    font-size: 0.8rem;
  }

  .contact-footer-text {
    font-size: 1.75rem;
  }
}

@media (max-: 320px) {
  .contact-container {
    max-width: 280px;
  }

  .contact-title {
    font-size: 1.25rem;
  }

  .icon {
    font-size: 1.5rem;
  }

  .contact-text {
    font-size: 0.75rem;
  }

  .contact-footer-text {
    font-size: 1.5rem;
  }
  @media (max-height: 500px) {
  .contact-container {
    max-width: 100px;
  }

  .contact-title {
    font-size: 1.25rem;
  }

  .icon {
    font-size: 1.5rem;
  }

  .contact-text {
    font-size: 0.75rem;
  }

  .contact-footer-text {
    font-size: 1.5rem;
  }
}
}
</style>
