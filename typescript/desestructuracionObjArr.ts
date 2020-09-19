(() => {
  const avenger = {
    nombre: "Steve",
    clave: "Capitán América",
    poder: "Droga",
  };

  const extraer = ({ nombre, clave }: any) => {
    console.log(nombre);
    console.log(clave);
    // console.log(poder);
  };
  //   extraer(avenger);
  const heroes: string[] = ["Thor", "Flash", "Batman"];
  const [uno, dos, tres] = heroes;
  console.log(uno);
  console.log(dos);
  console.log(tres);
  const extraerArr = ([, flash, bat]: string[]) => {
    // console.log(thor);
    console.log(flash);
    console.log(bat);
  };

  extraerArr(heroes);
})();
