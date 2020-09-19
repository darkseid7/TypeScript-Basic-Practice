(() => {
  // Las interfaces sirven básicamente para ponerle reglas a los objetos y para que cualquiera que lo vaya a usar sepa las propiedades y los tipados de estas mismas
  interface Xmen {
    nombre: string;
    edad: number;
    poder?: string;
  }
  const enviarMision = (xmen: Xmen) => {
    console.log(`Enviando a ${xmen.nombre} a la misión`);
  };

  const regresarCuartel = (xmen: Xmen) => {
    console.log(`Regresando a ${xmen.nombre} de la misión`);
  };

  const wolverine: Xmen = {
    nombre: "Logan",
    edad: 20,
  };
  enviarMision(wolverine);
  regresarCuartel(wolverine);
})();
