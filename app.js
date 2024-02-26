let numeroSecreto;
let intentos;
let numerosSorteados = [];
let numeroMaximo = 10;

function condicionesIniciales() {
   asignarTextoElemento('h1', 'juego del numero secreto');
   asignarTextoElemento('p', `escoge un numero del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
   console.log(numeroSecreto);
   console.log(numerosSorteados);
}

function generarNumeroSecreto() {
   if (numerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p', `Ya encontraste los ${numeroMaximo} numeros.`);
      estadoDelBoton('valorUsuario', 0);
   } else {
      let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
      if (numerosSorteados.includes(numeroGenerado)) { 
         return generarNumeroSecreto();
      } else {
         numerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
   }
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   if(numeroSecreto === numeroDeUsuario) {
      asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos != 1 ? ' intentos' : ' intento'}.`);
      estadoDelBoton('reiniciar', 1); // 1 es habilitado 
   } else {
      numeroDeUsuario > numeroSecreto ? asignarTextoElemento('p', 'El numero secreto es menor') : asignarTextoElemento('p', 'EL numero secreto es mayor');
      intentos++;
      limpiarCaja();
   }
}

function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento); //retorna el elemento h1, el titulo 
   // ya se reconoce que titulo es una variable de tipo element del html
   elementoHTML.innerHTML = texto;
   return; //es una buena practica escribir el return
}

function limpiarCaja() {
   document.getElementById('valorUsuario').value = ''; // == document.querySelector('#valorUsuario');
}

function estadoDelBoton(elementoID, estado) {
   estado == 1 ? document.getElementById(elementoID).removeAttribute('disabled') : document.getElementById(elementoID).setAttribute('disabled', true); // me permite remover un atributo del html!!!!
}

function reiniciarJuego() {
   limpiarCaja();
   condicionesIniciales();
   estadoDelBoton('reiniciar', 0);
}


 condicionesIniciales();