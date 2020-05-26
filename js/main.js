const $form = document.querySelector("#carta-a-santa");

function eliminarPorClase(nombreClase){
  var elemento = document.getElementsByClassName(nombreClase);
  while(elemento.length > 0){
      elemento[0].parentNode.removeChild(elemento[0]);
  }}

const $botonSubmit = $form.submit;
$botonSubmit.onclick=function(event){
  
  
  

    eliminarPorClase("mensaje-error");


  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form.descripcionRegalo.value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    
    nombre:errorNombre,
    ciudad:errorCiudad,
    descripcionRegalo: errorDescripcionRegalo,
  } 
  
   manejarErrores(errores);



  
   


  
   event.preventDefault();
   //document.querySelector("#carta-a-santa").reset();

}

document.querySelector("#carta-a-santa").reset();





