/*console.log(square(5));
function square(n) { return n*n } //si funciona
*/

/*
console.log(square); // square es creado con un valor inicial indefinido
console.log(square(5)); //TypeError: square no es un funcion
square = function (n) {
  return n * n;
}*/

//pasando funciones como argumentos
let years = [1996, 1983, 1939, 2002];
console.log(years);
let myFuncion = function(arr, fn){
	let newArr = [];
	for(let i = 0; i < arr.length; i++){
		newArr.push(fn(arr[i]));
	}
	return newArr;
}

function calcularEdad(e){
	return 2019 - e;
}

function mayorEdad(e){
	return e >= 18;
}

let edades = myFuncion(years,calcularEdad);
let mayor = myFuncion(edades,mayorEdad);

console.log(edades);
console.log(mayor);


//funciones que retornan funciones
/*var preguntas = function(vehiculo){
	if(vehiculo === 'auto'){
		return function(name){
			console.log('Bienvenido '+ name + '. ¿Qué modelo de auto estas buscando?');
		}
	}else if(vehiculo === 'moto'){
		return function(name){
			console.log('Bienvenido '+ name + '. ¿Qué modelo de moto estas buscando?');
		}
	}else{
		return function(name){
			console.log('Hola ' + name + '. ¿Qué vehiculo estas buscando?');
		}
	}
}

var preguntaAuto = preguntas('auto');

preguntaAuto('Joseph');

preguntas('moto')('Sarah');

var preguntaNull = preguntas();

preguntaNull('Dean');
*/




