(() => {
  //   class Avenger {
  //     nombre: string;
  //     equipo: string;
  //     nombreReal: string;
  //     puedePelear: boolean;
  //     peleasGanadas: number;

  //     // se ejecuta cada vez que se hace una inicialización o instancia de la clase
  //     constructor(
  //       nombre: string,
  //       equipo: string,
  //       nombreReal: string,
  //       puedePelear: boolean,
  //       peleasGanadas: number
  //     ) {
  //       this.nombre = nombre;
  //       this.equipo = equipo;
  //       this.nombreReal = nombreReal;
  //       this.puedePelear = puedePelear;
  //       this.peleasGanadas = peleasGanadas;
  //     }
  //   }

  //   forma simplificada de meter todas las propiedades en el constructor para inicializarlas de una
  class Avenger {
    // nombre: string;
    // equipo: string;
    // nombreReal: string;
    // puedePelear: boolean;
    // peleasGanadas: number;

    // se ejecuta cada vez que se hace una inicialización o instancia de la clase
    constructor(
      public nombre: string,
      public equipo: string,
      public nombreReal?: string,
      public puedePelear: boolean = true,
      public peleasGanadas: number = 0
    ) {}
  }

  //   se hace la instancia a Avenger
  const antman = new Avenger("Antman", "Capi");
  console.log(antman);
})();
