const user = {
    name:"Daniel ",
    lastName:"Quishpe",
    age:21,
    address:{
        city:"Quito",
        telephone:"0984745570",
        street:"Mitad del Mundo "
    },
    pasatiempos:['voly','musica','futbol','video juegos'],
    state:true,
    favorito (){
        return `pasatiempos favorito ${this.pasatiempos[0]}`
    },
    segundo: function (){
        return `o jugar ${this.pasatiempos[3]}`
    }
}
console.log(user.state);
console.log(user.favorito());
console.log(user.segundo());

const {name,lastName,age,address} = user
 console.log(name,lastName,age,address);

 Object.seal(user)
 console.log(Object.isSealed(user))
 user.age= 20
 console.log(user);

 const extraInformation = {
    Friends:['Camila','Anahi','Arom','Sacon'],
    state:true,
}
const allInformation = {...user,...extraInformation}
console.log(allInformation)


console.log("Obtener las claves:",Object.keys(user))
console.log("Obtener los valores:",Object.values(user))
console.log("Obtener las claves y valores en un array:",Object.entries(user))