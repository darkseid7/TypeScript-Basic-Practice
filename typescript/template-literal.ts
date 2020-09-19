(function () {
  function getEdad(edad: number) {
    return edad + 15 * 30;
  }
  const nombre = "fernando";
  const edad = 33;
  const apellido = "herrera";

  const salida = `${nombre} ${apellido} ${getEdad(edad)}`;
  console.log(salida);
})();
