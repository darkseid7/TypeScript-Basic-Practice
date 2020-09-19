(() => {
  /* Con esto defino el tipo de dato que va a retornar nuestra promesa*/
  const retirarDinero = (montoRetirar: number): Promise<number> => {
    let dineroAtual = 1000;

    return new Promise((resolve, reject) => {
      if (montoRetirar > dineroAtual) {
        reject("No hay suficientes fondos");
      } else {
        dineroAtual -= montoRetirar;
        resolve(dineroAtual);
      }
    });
  };

  retirarDinero(500)
    .then((montoActual) => console.log(`Me queda ${montoActual}`))
    .catch((err) => console.warn(err));
})();
