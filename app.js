let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function AsignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};
function condicionesIniciales(){
    AsignarTextoElemento('h1', 'Juego del numero secreto');
    AsignarTextoElemento('p', `Escribe un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
};
condicionesIniciales();
function generarNumeroSecreto() {
        
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length === numeroMaximo){
        AsignarTextoElemento('p', `Ya se sortearon todos los numeros posibles`);
    }else{
        //Si el numeroGenerado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            //Si el numeroGenerado no esta incluido en la lista, se returna el numero y se incluye en la lista
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    };

};
function verificarIntento(){

    
    

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroSecreto === numeroUsuario){
        AsignarTextoElemento('p', `¡Acertaste el numero! en ${intentos} ${(intentos === 1) ? 'intento.' : 'intentos.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acierta
        if(numeroUsuario >> numeroSecreto){
            AsignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            AsignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
};
function limpiarCaja(){

    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    return;
};
function reiniciarJuego(){

    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero aleatorio
    //Reiniciar numero de intentos
    condicionesIniciales();
    //Deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
};
