//ACCEDER 
var p1=document.forms[0].classList
//CAMBIAR CONTENIDO
p1.textContent = 'Permite cambiar el contenido'; 
//CREAR UN BOTON
const p2=document.querySelector('#search-178')
const  button = document.createElement('button');
button
button.innerText="EXITOSO"
p2.appendChild(button)

//FUNCION DEL BOTON
button.addEventListener('click', function() {
    alert('Se dio click');
  });


  //DAR COLOR AL BOTTON
  const p2=document.querySelector('button')
  p2.addEventListener("mouseenter",function () {
    const p2=document.querySelector("button")
    p2.style.border="10px blue"
})
  //ELIMINAMOS EL BOTTON
  const p2=document.querySelector('button')
  p2.remove()