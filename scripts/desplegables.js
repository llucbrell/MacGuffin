//ABRE DESPLEGABLES MEDIANTE BOTÓN

//Esconde y muestra la portada
function portada(){
     if ($("#portada").val()==="vis"){
       
      $("#portada").show("slow");
      $("#portada").val("");
     }
     else{
      $("#portada").val("vis");
      $("#portada").hide("slow");
       
     }

}



function abrirycerrarconfoco(desplegable, abretexto, cierratexto){
//Abre un desplegable con el foco sobre un input o caja
//de texto, al cerra, hace lo mismo de vuelta sobre el
// input o caja de texto editable.
   if ($("#desplegable").val()==="vis"){
       
      $("#desplegable").show("slow");
      $("#desplegable").val("");
      $('#abretexto').focus();
      //hay que añadir la última posición
      // para mejorar la respuesta
     }
     else{
      $("#desplegable").val("vis");
      $("#desplegable").hide("slow");
      $("#cierratexto").focus();
       
     }

}

