//Sumar elementos de un array
function sumarElementos(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

const numeros = [1, 2, 3, 4, 5];
console.log(sumarElementos(numeros)); 

//Numero mayor y menor

function mayorYMenor(arr) {
  let mayor = arr[0];
  let menor = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) mayor = arr[i];
    if (arr[i] < menor) menor = arr[i];
  }
  
  return { mayor, menor };
}


const numeros2 = [3, 7, 1, 9, 4];
const resultado = mayorYMenor(numeros2);
console.log(`Mayor: ${resultado.mayor}, Menor: ${resultado.menor}`);

//Contar elementos pares

function contarPares(arr) {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      contador++;
    }
  }
  return contador;
}


const numeros3 = [1, 2, 3, 4, 5, 6];
console.log(contarPares(numeros3)); 

//Ordenar un array de menor amayor sin usar .sort()

function ordenarArray(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
    
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


const numeros4 = [5, 2, 9, 1, 5, 6];
console.log(ordenarArray(numeros4)); 


//Buscar un elemento en un array 

function buscarElemento(arr, elemento) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      return i; 
    }
  }
  return -1; 
}


const lista = ['manzana', 'banana', 'pera'];
console.log(buscarElemento(lista, 'banana')); 
console.log(buscarElemento(lista, 'pera')); 

//Revertir sin usar reverse

function invertirArray(arr) {
  let nuevoArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    nuevoArray.push(arr[i]);
  }
  return nuevoArray;
}

const arreglo = [1, 2, 3, 4];
console.log(invertirArray(arreglo)); 

//convertir a mayuscula sin usar top upper

function aMayusculas(arr) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    let palabra = arr[i];
    let palabraMayus = '';
    for (let j = 0; j < palabra.length; j++) {
      let codigo = palabra.charCodeAt(j);
      if (codigo >= 97 && codigo <= 122) {

        palabraMayus += String.fromCharCode(codigo - 32);
      } else {
        palabraMayus += palabra[j];
      }
    }
    resultado.push(palabraMayus);
  }
  return resultado;
}

const palabras = ['hola', 'mundo'];
console.log(aMayusculas(palabras)); 

//sumar solo numeros postivos 

function sumarPositivos(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      suma += arr[i];
    }
  }
  return suma;
}

// Ejemplo
const numerospositivos = [10, -5, 7, -3, 2];
console.log(sumarPositivos(numerospositivos)); 

//Primer multiplo de 5

function primerMultiploDeCinco(arr) {
  return arr.find(num => num % 5 === 0);
}

const listaNumeros = [3, 8, 11, 20, 25];
console.log("Primer múltiplo de 5:", primerMultiploDeCinco(listaNumeros));  // Resultado: 20

//tabla de multiplicar

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un número para ver su tabla de multiplicar: ", function(numero) {
  numero = parseInt(numero);

  console.log(`\nTabla del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }

  rl.close();
});
