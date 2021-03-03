/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio solo de los estudiantes
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/
function mostrar()
{
  let nombre;
  let situacion;
  let cantidadMaterias;
  let sexo;
  let nota;
  let edad;
  let seguir;
  let flagNota = 1;
  let notaMax;
  let nombreNotaMax;
  let flagEdad = 1;
  let edadMax;
  let nombreEdadMax;
  let acumBuscando = 0;
  let acumTrabajando = 0;
  let acumEstudia = 0;
  let contBuscando = 0;
  let contTrabajando = 0;
  let contSoloEstudia = 0;
  let flagMenor = 1;
  let menorCantidad;
  let nombreMenorCant;
  let edadMenorCant;
  let promedioBuscando;
  let promedioTrabajando;
  let promedioEstudia;

  do{
    nombre = prompt("Ingrese el nombre");
 situacion = prompt("Ingrese el situacion laboral (buscando/trabajando/solo estudiante)");
	while(situacion != "buscando" && situacion != "trabajando" && situacion != "solo estudiante"){
		situacion = prompt("Error. Ingrese el situacion laboral (buscando/trabajando/solo estudiante)");
	}

	cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias"));
		while(isNaN(cantidadMaterias) || cantidadMaterias < 0 || cantidadMaterias > 8){

			cantidadMaterias = parseInt(prompt("Error. Ingrese la cantidad de materias"));
		}
	edad = parseInt(prompt("Ingrese la edad"));
		while(isNaN(edad) || edad < 18){
			edad = parseInt(prompt("Error. Ingrese la edad"));
		}
   nota = parseFloat(prompt("Ingrese la nota promedio"));
  while(isNaN(nota) || nota < 0 || nota > 10)

  
		sexo = prompt("Ingrese el sexo (f/m/nobinario)")
		while(isNaN(sexo) == false || sexo != 'f' && sexo != 'm' & sexo != "nobinario"){
			sexo = prompt("Error. Ingrese el sexo (f/m/nobinario)")
    }
    
    switch(situacion){
      case "buscando":
        acumBuscando += nota;
        contBuscando++;
        if(flagMenor || cantidadMaterias < menorCantidad){
          menorCantidad = cantidadMaterias;
          edadMenorCant = edad;
          nombreMenorCant = nombre;
          flagMenor = 0;
        }
        break;

      case "trabajando":
        acumTrabajando += nota;
        contTrabajando++;
        break;

      case "solo estudiante":
        acumEstudia += nota;
        contSoloEstudia++;
        if(flagNota || nota > notaMax){
          notaMax = nota;
          nombreNotaMax = nombre;
          flagNota = 0;
        }
        if(flagEdad || edad > edadMax){
          edadMax = edad;
          nombreEdadMax = nombre;
          flagEdad = 0;
        }
        break;
  }
   seguir = prompt("Quiere ingresar otro estudiante?");
}while(seguir == 's');
if(contBuscando != 0){
	promedioBuscando = acumBuscando / contBuscando;
}
else{
	promedioBuscando = "no se ingresaron almunos buscando trabajo"
}
if(contTrabajando != 0){
	promedioTrabajando = acumTrabajando / contTrabajando;
}
else{
	promedioTrabajando = "no se ingresaron alumnos que esten trabajando"
}
if(contSoloEstudia != 0){
	promedioEstudia = acumEstudia /contSoloEstudia;
}
else{
	promedioEstudia = "no se ingresaron no alumnos que solo estudian "
}

if(contSoloEstudia != 0){
  console.log("A - El nombre del mejor promedio de los que solo estudia es "+ nombreNotaMax)
}
else{
  console.log("A - No se ingresaron alumnos que solo estudian");
}
if(contSoloEstudia != 0){
  console.log("B - El nombre del mas viejo de los alumnos que solo estudia es " + nombreEdadMax);
}
else{
  console.log("B - No se ingresaron alumnos que solo estudian")
}
console.log("C - El promedio de alumnos que solo estudian "+ promedioEstudia+ " el promedio de los que trabajan es "+ promedioTrabajando+ " y el promedio de los que estan buscando es "+ promedioBuscando);
if(contBuscando != 0){
  console.log("D - El alumno que cursa menos cantidad de materias y que esta buscando trabajando tiene "+ edadMenorCant+" años y se llama "+nombreMenorCant );
}
else{
  console.log("D - No se ingresaron alumnos que esten buscando trabajo")
}

/*) El nombre del mejor promedio solo de los estudiantes
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/
}

