/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer que tenga PAMI mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/
function mostrar()
{
let nombre;
let obraSocial;
let edad;
let temperatura;
let sexo;
let precio = 600;
let seguir;
let contOsdeMayores = 0;
let flagEdad = 1
let edadMin;
let nombreEdadMin;
let temperaturaEdadMin;
let contPasajeros = 0;
let contPami = 0
let contMujer = 0;
let importeNeto;
let descuento;
let importe;

do{
	nombre = prompt("Ingrese el nombre");
	obraSocial = prompt("Ingrese la obra social (PAMI, OSDE, otras)");
	while(obraSocial != "PAMI" && obraSocial != "OSDE" && obraSocial != "otras"){
		obraSocial = prompt("Error. Ingrese la obra social (PAMI, OSDE, otras)");
	}
	edad = parseInt(prompt("Ingrese la edad"));
	while(isNaN(edad) || edad < 18){
		edad = parseInt(prompt("Error. Ingrese la edad"));
	}
	sexo = prompt("Ingrese el sexo (f o m)");
	while(sexo != 'f' && sexo != 'm'){
		sexo = prompt("Error. Ingrese el sexo (f o m)");
	}
	temperatura = parseFloat(prompt("Ingrese la temperatura"));
	while(isNaN(temperatura) || temperatura < 0){
		temperatura = parseFloat(prompt("Error. Ingrese la temperatura"));
	}
	contPasajeros++;
	importe = precio * contPasajeros;

	if(obraSocial == "OSDE" && edad > 60){
		contOsdeMayores++;
	}
	if(sexo == 'f' && obraSocial == "PAMI" && (flagEdad || edad < edadMin)){
		nombreEdadMin = nombre;
		temperaturaEdadMin = temperatura;
		contMujer++;
		flagEdad = 0;
	}
	if(obraSocial == "PAMI"){
		contPami++;
	}
	seguir = prompt("Desea ingresar otro pasajero?");
}while(seguir == 's')

	if(contPami*100/contPasajeros >= 50){
		descuento = 0.25
	  }
	  if(contOsdeMayores != 0){
		console.log("a) La cantidad de personas con más de 60 años y con  OSDE son "+ contOsdeMayores);
		}
		else{
		  console.log("a) No se ingresaron personas mayores de 60 años con OSDE")
		}
		if(contMujer > 0){
		console.log("b) El nombre "+ nombreEdadMin+" y temperatura " + temperaturaEdadMin+ "°C pertenece a la mujer mas joven con PAMI.");
		}
		else{
		  console.log("b) No se ingresaron mujeres con PAMI");
		}
		
		console.log("c) El valor total del viaje sin descuento es $"+ importe);
		
		if(descuento > 0){
		  importeNeto = importe - importe * descuento;
		console.log("d) El precio con descuento es $" + importeNeto);
		}
		else{
		  console.log("d) No corresponde el descuento");
		}
		}
