(() => {
  // Uso de Let y Const
  const nombre = "Ricardo Tapia";
  const edad = 23;

  const PERSONAJE = {
    nombre: nombre,
    edad: edad,
  };

  // Cree una interfaz que sirva para validar el siguiente objeto
  interface batman {
    nombre: string;
    artesMarciales: string[];
  }

  const batman: batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"],
  };

  // Convertir esta funcion a una funcion de flecha
  // function resultadoDoble( a, b ){
  //   return (a + b) * 2
  // }
  const resultadoDoble = (a: number, b: number) => (a + b) * 2;

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger(nombre: string, poder?: string, arma: string = "arco") {
    let mensaje: string;
    if (poder) {
      mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    } else {
      mensaje = nombre + " tiene un " + arma;
    }
    console.log(mensaje);
  }

  getAvenger("Howk Eye", "Aguila");

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class Rectangulo {
    constructor(public base: number, public altura: number) {}
    calcularArea(): number {
      return this.base * this.altura;
    }
  }

  let getArea = new Rectangulo(20, 30);
  console.log(`El area del rectangulo es: ${getArea.calcularArea()}`);

  // Las funciones flecha no modifican el objeto "this" al ser ejecutada
})();
