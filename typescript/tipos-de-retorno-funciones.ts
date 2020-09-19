(() => {
  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  const nombre = () => "Hola Sergio";

  const obtenerSalario = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve("sergio");
    });
  };

  obtenerSalario().then((a) => console.log(a));
})();
