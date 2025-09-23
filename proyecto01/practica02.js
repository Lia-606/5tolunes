// 11. Generar una secuencia de Fibonacci:
function generarFibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log("10 primeros números de Fibonacci:", generarFibonacci(10));

// 12. Adivinar un número entre 1 y 10:
function adivinarNumero() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let intento;
  do {
    intento = parseInt(prompt("Adivina un número del 1 al 10:"));
    if (intento < numeroSecreto) {
      console.log("Muy bajo. Intenta otra vez.");
    } else if (intento > numeroSecreto) {
      console.log("Muy alto. Intenta otra vez.");
    }
  } while (intento !== numeroSecreto);
  console.log("¡Correcto! El número era " + numeroSecreto);
}


// 13. Sumar una secuencia regresiva desde un número ingresado:
function sumaRegresiva(num) {
  let suma = 0;
  for (let i = num; i >= 0; i--) {
    suma += i;
  }
  return suma;
}
console.log("Suma regresiva desde 5:", sumaRegresiva(5));

// 14. Validar entrada de usuario mayor que 0 usando while:
function pedirNumeroPositivo() {
  let num = 0;
  while (num <= 0 || isNaN(num)) {
    num = parseInt(prompt("Ingrese un número mayor que 0:"));
  }
  console.log("Número válido:", num);
  return num;
}


// 15. Mostrar menú con opciones y usar while para repetir hasta salir:
function mostrarMenu() {
  let opcion;
  do {
    opcion = prompt(
      "Menú:\n1. Opción 1\n2. Opción 2\n3. Salir\nIngrese una opción:"
    );
    switch (opcion) {
      case "1":
        console.log("Elegiste opción 1");
        break;
      case "2":
        console.log("Elegiste opción 2");
        break;
      case "3":
        console.log("Saliendo del menú...");
        break;
      default:
        console.log("Opción no válida");
    }
  } while (opcion !== "3");
}


// 16. Sumar solo los números impares entre 1 y 50:
function sumarImpares() {
  let suma = 0;
  for (let i = 1; i <= 50; i += 2) {
    suma += i;
  }
  return suma;
}
console.log("Suma de los números impares entre 1 y 50:", sumarImpares());

// 17. Contador de intentos para login (3 intentos usando while)
function contadorIntentosLogin() {
  const usuarioCorrecto = "usuario";
  const contrasenaCorrecta = "1234";
  let intentos = 0;
  let accesoConcedido = false;

  while (intentos < 3 && !accesoConcedido) {
    let usuarioIngresado = prompt("Ingrese su usuario:");
    let contrasenaIngresada = prompt("Ingrese su contraseña:");
    intentos++;

    if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {
      console.log("Acceso concedido");
      accesoConcedido = true;
    } else {
      console.log(`Intento ${intentos}: Usuario o contraseña incorrectos.`);
    }
  }

  if (!accesoConcedido) {
    console.log("Acceso denegado. Se agotaron los intentos.");
  }
}


// 18. Sumar hasta que el usuario ingrese 0 usando while
function sumarHastaCero() {
  let sumaTotal = 0;
  let numeroIngresado;

  while (true) {
    numeroIngresado = parseInt(prompt("Ingrese un número (0 para terminar):"));
    if (numeroIngresado === 0) {
      break;
    }
    if (!isNaN(numeroIngresado)) {
      sumaTotal += numeroIngresado;
    }
  }
  console.log("Suma total:", sumaTotal);
  return sumaTotal;
}


// 19. Imprimir la serie de Fibonacci hasta que un número supere 100 usando while
function fibonacciHasta100() {
  let fibo = [0, 1];
  let siguiente = fibo[0] + fibo[1];
  while (siguiente <= 100) {
    fibo.push(siguiente);
    let len = fibo.length;
    siguiente = fibo[len - 1] + fibo[len - 2];
  }
  console.log("Serie de Fibonacci hasta 100:", fibo);
  return fibo;
}
fibonacciHasta100();


// 20. Imprimir los múltiplos de 3 menores a 50 usando while
function multiplosDe3Hasta50() {
  let i = 3;
  let multiplos = [];
  while (i < 50) {
    multiplos.push(i);
    i += 3;
  }
  console.log("Múltiplos de 3 menores a 50:", multiplos);
  return multiplos;
}
multiplosDe3Hasta50();
