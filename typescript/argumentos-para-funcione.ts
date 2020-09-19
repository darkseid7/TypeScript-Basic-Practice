(function () {
  // el orden a seguir de los argumentos obligatorios, opcionales y con valores por defecto
  function activar(
    quien: string,
    momento?: string,
    objeto: string = "batiseñal"
  ) {
    if (momento) {
      console.log(`${quien} activó la ${objeto} en la ${momento}`);
    } else {
      console.log(`${quien} activó la ${objeto}`);
    }
  }

  activar("Gordon", "tarde");
})();
