function validarNombre(nombre){

    if(nombre.length===0){
      return "el campo Nombre no puede estar vacio";
    }
    if(nombre.length>=50){
      return "el campo nombre no puede tener mas de 50 caracteres";
    }
    if (!/^[A-z ]+$/.test(nombre)){
      return "el campo nombre solo puede contener letras";
    }
    
      return "";
   
    }


    function validarCiudad(ciudad){

        if(ciudad===""){
            return "elija una ciudad";
        }
        return "";
    }


    function validarDescripcionRegalo(descripcionRegalo){

        if(descripcionRegalo===""){
            return "Agregue una descripcion a su regalo";
        }
        if(descripcionRegalo.length>100){
            return "la descripción del regalo solo puede tener menos de 100 caracteres";
        }
        if(!/^[A-z0-9., ]+$/.test(descripcionRegalo)){
            return "La descripción del regalo solo puede contener caracteres alfanumericos";
        }
        return "";
    }



    let errorEsta = {
        valor:false,
    };     



  function manejarErrores(errores){

    const keyErrores=Object.keys(errores);
    keyErrores.forEach(function(i){
        const error = errores[i];
        const $errores = document.getElementById("errores");
            
        
        if(error){

            
            
            $form[i].className="error";
            const $error=document.createElement("li");
            $error.innerText=error;
            $error.className="mensaje-error";
            $errores.appendChild($error);
         
        }
    
        

         else {

            $form[i].className="";
         }
         console.log(error);
    
         
        })
        
    }

 
