// "use strict";

// function solicitar(tipo) {

//     for (let index = 0; index < 10000000000; index++) 
//     {
//     }
//     return `¡Hola, ya regresé con la ${tipo}!`
// }
// console.log("Espere un momento su factura se procesando...")
// console.log("En proceso...")
// console.log("Ya casi listo...")
// const name = 'Ralph'
// const respuestaEstudiante = solicitar("factura lista")
// console.log(respuestaEstudiante)
// console.log("Su factura se realizo correctamente :)");

//CODIGO ASINCRONO
// "use strict";

// function solicitar(tipo) {
//     console.log(`Tu ${tipo}!`)
// }

// console.log("Espere un momento su factura se procesando...")
// console.log("En proceso..")
// console.log("Ya casi listo...")
// const name = 'Ralph'
// const data = setTimeout(()=>solicitar("factura  esta lista"),5000)
// console.log("Su factura se realizo correctamente :)")

// //PROMESAS

// const conexionBDD= (datosConexion)=>
//     {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>
//         {
//             datosConexion ? resolve("Factura Guardada") : reject("Factura rechazada")
//         },3000)
//     })
// }

// conexionBDD(true)
//     .then((respuesta)=>console.log(respuesta))
//     .catch((ERROR)=>console.log(ERROR))


//ASYNNC AWAIT
// function resolver() {
//     return new Promise(final => {
//       setTimeout(() => {
//         final('respuesta..');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('LLamando');
//     const result = await resolver();
//     console.log(result);
    
//   }
  
//   asyncCall();