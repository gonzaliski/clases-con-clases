// crear las clases Edificio, Piso y Departamento aquí
class Edificio{
  propiedad: Piso[];
  constructor(propiedad:Piso[]){
    this.propiedad = propiedad;
  }
  addDepartamentoToPiso(nombreDePiso:string, departamento: Departamento){
    
    const existePiso= this.propiedad.find(function (item: any){
      if(nombreDePiso == item.nombre){
        return item
      }else{
        return console.log("No existe un piso con ese nombre");
      }
    })
    return existePiso.pushDepartamento(departamento);
}
  getDepartamentosByPiso(nombreDePiso:string):Departamento[]{
    const pisoEncontrado = this.propiedad.find(function (item: any){
      if(nombreDePiso == item.nombre){
        return item
      }
    })
    return pisoEncontrado.departamentos;
  }
}

class Piso{
  nombre: string;
  departamentos: Departamento[] =[];
  constructor(nombre:string){
    this.nombre = nombre;
  }

  pushDepartamento(depto:Departamento){
    return this.departamentos.push(depto);
  }

  getDepartamentos(){
    return this.departamentos
  }

}

class Departamento{
  nombreDepto: string;
  constructor(nombreDepto:string){
  this.nombreDepto = nombreDepto;
}
getName(){
  return this.nombreDepto
}
}


// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
  console.log("nuevo commit desde github");
}
main();
