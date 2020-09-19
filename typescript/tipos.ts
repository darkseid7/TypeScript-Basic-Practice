(function () {
  let mensaje: string = "hola";
  let numero: number = 123;
  let booleano: boolean = true; // false
  let hoy: Date = new Date();

  let cualquiercosa: string | number;
  cualquiercosa = mensaje;
  cualquiercosa = numero;

  let spiderman = {
    nombre: "Peter",
    edad: 30,
  };

  spiderman = {
    nombre: "Sergio",
    edad: 20,
  };
  console.log(cualquiercosa);
  console.log(spiderman.nombre);
})();
