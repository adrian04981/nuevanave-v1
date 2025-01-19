<template>
  <div class="root">
    <h1 class="title">NOSOTROS</h1>
    <p class="description">
      En Nueva Nave, nos especializamos en la venta por consignación de vehículos de gama media y alta, utilizando un modelo moderno y eficiente que opera completamente en línea. Este enfoque permite a los propietarios vender su vehículo a través de nosotros, facilitando el proceso sin necesidad de que se encarguen de todas las gestiones.
    </p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.root {
  background-image: url('../assets/Nosotros.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem;
}

.title {
  font-family: 'Open Sans', sans-serif;
  font-size: 45px;
  font-weight: bold;
  color: white;
  text-align: left;
  margin-left: 2rem;
}

.description {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin: 2rem 0 2rem 2rem;
  max-width: 35%;
  text-align: justify;
}

@media (max-width: 768px) {
  .title {
    font-size: 35px;
    margin-left: 1rem;
  }

  .description {
    font-size: 18px;
    margin: 1rem 0 1rem 1rem;
    max-width: 80%;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 25px;
    margin-left: 0.5rem;
  }

  .description {
    font-size: 16px;
    margin: 0.5rem 0 0.5rem 0.5rem;
    max-width: 90%;
  }
}
</style>