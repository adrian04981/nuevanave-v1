<template>
  <div class="root">
    <div class="text">
      ¿será esta tu<br>
      Nueva Nave?
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400&display=swap');

.root {
  background-image: url('../assets/Inicio.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}

.text {
  font-family: 'League Spartan', sans-serif;
  font-size: 80px;
  font-weight: bold;
  color: white;
  position: absolute;
  left: 5rem;
  top: 80%;
  transform: translateY(-50%);
}

/* Media queries for responsiveness */
@media (max-width: 1200px) {
  .text {
    font-size: 60px;
    left: 4rem;
  }
}

@media (max-width: 992px) {
  .text {
    font-size: 60px;
    left: 3rem;
  }
}

@media (max-width: 768px) {
  .text {
    font-size: 60px;
    left: 2rem;
  }
}

@media (max-width: 576px) {
  .text {
    font-size: 60px;
    left: 1rem;
    top: 70%;
  }
}
</style>