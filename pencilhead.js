// let auto = "suzuki";
// console.log(auto);

const autobot = {
    marca: "volvo",
    modelo: 2023,
    color: "azul",
    peso: "1500kg"
};

console.log(autobot.peso);

const persona = {
    primerNombre: "Juan",
    apellido: "Topo",
    edad: 23,
    colorOjos: "verde"
};

console.log(persona["colorOjos"]);

const avion = {
    tanqueCOmbustible: "lleno",
    marca : "void787",
    modelo       : 5566,
    aeropuerto : function() {
      return this.marca + " " + this.modelo;
    }
  };

  console.log(avion.marca);

  let a = 5+(5-10)*3;
  let modulo = 5%2;
  console.log(a);
  console.log(modulo);