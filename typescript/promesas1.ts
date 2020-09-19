(() => {
  console.log("inicio");

  const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Se terminó el timeout");
    }, 1000);
  });

  prom
    .then((mensaje) => console.log(mensaje))
    .catch((err) => console.warn(err));
  console.log("fin");
})();
