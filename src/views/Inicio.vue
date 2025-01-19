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
  background-image: url('../assets/Inicio.png');
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
  font-size: 42.8px;
  font-weight: bold;
  color: white;
  position: absolute;
  left: 1rem;
  top: 80%; /* Adjusted from 50% to 60% to move it a bit lower */
  transform: translateY(-50%);
}
</style>
