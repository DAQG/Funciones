'use strict';

// USO del  VAR- LET- CONST
// var nproduct =15; "reservada var para declarar variables"
// console.log("Productos totales: " + nproduct);

// let nLocal = 21; "reservada let para declarar variables"
// console.log("Retiro en el local: " + nLocal);

// const nomClien = "Jose Juan"; "reservada const para declarar variables"
// console.log("A nombre de: " + nomClien);

"-----------------------------------------------------------------------------------"


// 'use strict';

// let datoscli = " Jose Juan Velasco Perez "

// console.log("Número de letras:",datoscli.length);
// console.log("Encotrar alguna palabra:",datoscli.includes("Pablo"));
// console.log("Convertir a mayúsculas:",datoscli.toUpperCase());
// console.log("Convertir a minusculas:",datoscli.toLowerCase());
// console.log("Quitar espacios adelante y atrás:",datoscli.trim());
// console.log("Reemplazar una palabra:",datoscli.replace('Jose','Pepito'));
// console.log("Cortar un texto:",datoscli.slice(5,10));
// console.log("Cortar un texto:",datoscli.substring(11,19));
// console.log("Cortar un texto:",datoscli.charAt(6));
// console.log("Repetir un texto:",datoscli.repeat(2));
// console.log("Dividir un texto:",datoscli.split(" "));


"---------------------------------------------------------------------------------"
// 'use strict';

// const cantidad = "15"
// const extra = 4

// console.log(extra,cantidad);
// console.log(typeof(extra), typeof(cantidad));

// console.log("suma:",extra+10);
// console.log("resta:",extra-2);
// console.log("multiplicación:",extra*2);
// console.log("división:",extra/4);
// console.log("módulo:",extra%7);


// 'use strict';

// let prod = extra
// let preciofinal = cantidad

// console.log(Number.parseInt(prod));
// console.log(Number.parseFloat(preciofinal));

// console.log(Number.isInteger(prod));

// console.log(`${+prod + +preciofinal}`, "productos");

"-------------------------------------------------------------------"
'use strict';

let credito = 32
let ahorros = 100
let estadoCuenta
let emailConfirmado=null
credito += 45.12
console.log(credito);
credito="32"
console.log(ahorros == credito)
console.log(estadoCuenta === emailConfirmado);
console.log(ahorros + Number.parseInt(credito));
console.log(ahorros != credito);

"-------------------------------------------------------------------"

'use strict'

const nprodu = ['leche','cafe','azucar','arroz','sal ']
const usuario ={
    nombre:"Byron",
    apellido:"Loarte",
}

// uso del forEach 
nprodu.forEach((t,i)=> console.log(`${i+1} - ${t}`))