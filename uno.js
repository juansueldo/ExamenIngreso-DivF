/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos*/
function mostrar()
{
	let producto;
	let precio;
	let cantidad;
	let categoria;
	let fabricante;
	
	let acumAlcohol = 0;
	let acumIAC = 0;
	let acumQUAT = 0;
	let contAlcohol = 0;
	let contIAC = 0;
	let contQUAT = 0;
	let acumUnidadDetergente = 0;;
	let promedioAlcohol;
	let promedioIAC;
	let promedioQUAT;
	let acumDesinfectante = 0;
	let acumBactericida = 0;
	let acumDetergente = 0;
	
	let flag = 1;
	let cantidadMax;
	let categoriaMaxUnidades;
	
	
	let flagCaro = 1;
	let precioMax;
	let categoriaMaxPrecio;
	let fabricanteMaxPrecio;
	
	for(let i = 0; i < 5; i++){
		producto = prompt("Ingrese el producto alcohol/IAC/QUAT");
		while (producto != "alcohol" && producto != "IAC" && producto != "QUAT"){
			producto = prompt("Error. Ingrese el producto alcohol/IAC/QUAT");
		}
		precio = parseFloat(prompt("Ingrese el precio(entre 100 y 300)"));
		while(isNaN(precio) || precio < 100 || precio > 300){
			precio = parseFloat(prompt("Error. Ingrese el precio(entre 100 y 300)"));
		}
		cantidad = parseInt(prompt("Ingrese la cantidad (mayor a 0 y no debe superar 1000)"));
		while(isNaN(cantidad) || cantidad <= 0 || cantidad >1000){
		cantidad = parseInt(prompt("Error. Ingrese la cantidad (mayor a 0 y no debe superar 1000)"));
		}
		categoria = prompt("Ingrese el tipo (desinfectante, bactericida, detergente)");
		while(categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente"){
			categoria = prompt("Error. Ingrese el tipo (desinfectante, bactericida, detergente)");
		}
		fabricante = prompt("Ingrese la marca");

		switch(producto){
			case "alcohol":
			  acumAlcohol += cantidad;
			  contAlcohol++;
			  break;
		   case "IAC":
			 acumIAC += cantidad;
			 contIAC++;
			 break;
		   case "QUAT":
			 acumQUAT += cantidad;
			 contQUAT++;
			 break;
		    }
		switch(categoria){
			case "desinfectante":
				acumDesinfectante += cantidad;
				break;
			case "bactericida":
				acumBactericida += cantidad;
				break;
			case "detergente":
				acumDetergente += cantidad;
				if(precio <= 200){
					acumUnidadDetergente += cantidad;
				break;
		}

			 if(flag || cantidad > cantidadMax){
				cantidadMax = cantidad;
				categoriaMaxUnidades = categoria;
				flag = 0;
			 }

			 }
			 if(flagCaro || precio > precioMax){
				precioMax = precio;
				categoriaMaxPrecio = categoria;
				fabricanteMaxPrecio = fabricante;
				flagCaro = 0;
			 }
}
if( acumBactericida > acumDesinfectante && acumBactericida > acumUnidadDetergente){
	categoriaMaxUnidades = "bactericida";
}
else if(acumDesinfectante > acumBactericida && acumDesinfectante > acumDetergente){
	categoriaMaxUnidades = "desinfectante";
}
else{
	categoriaMaxUnidades = "detergente";
}
	if(contAlcohol > 0){
			promedioAlcohol = acumAlcohol/contAlcohol;
			console.log("A - Del tipo alcohol el promedio es " + promedioAlcohol);
			}
			else{
			console.log(" no se registraron alcoholes")
			}
			if(contIAC > 0){
				promedioIAC = acumIAC /contIAC;
				console.log("A - Del tipo IAC el promedio es " + promedioIAC);
				}
				else{
					console.log(" no se registraron IAC")
				  }
				  if(contQUAT > 0){
					promedioQUAT = acumQUAT /contQUAT;
					console.log("A - Del tipo QUAT el promedio es " + promedioQUAT);
				  }
				  else{
					console.log(" no se registraron QUAT")
				  }
				console.log("B - La categoria con mas cantidad de unidades en total de la compra "+ categoriaMaxUnidades);
				console.log("D - Del tipo detergente con precio menor a $200, la cantidad de unidades es "+ acumUnidadDetergente);
				console.log("E - El fabricante "+ fabricanteMaxPrecio + " y la categoria "+ categoriaMaxPrecio + " pertenece al mas caro de los productos");
				  
	}
