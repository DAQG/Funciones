// peticion a API NINJAS
fetch('https://api-ninjas.com/')
  .then(response => response.json())
  .then(data => {

    console.log(data.value);
  })
  .catch(error => {
   
    console.error('No hay conexion:', error);
  });

