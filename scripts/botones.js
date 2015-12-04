//función para activar los botones

//En un futuro se hará un generador de botones 
//para no depender del html


function activabotones(retorno, print, diccionario,calendario,reloj,abrirarchivo){
 if(diccionario==true){
  $("#diccionariox").show();
  }
  else{
    $("#diccionariox").hide();
  
 }
  if(calendario===true){
    $("#calendariox").show();
  }
  else{
    $("#calendariox").hide();
  }
  if (reloj===true){
    $("#relox").show();
  }
  else{
    $("#relox").hide();
  }
	if(abrirarchivo===true){
    $("#barraespaciadora").show();
  }
   else{
    $("#barraespaciadora").hide();
  }

  if(print===true){
//Click listeners de los botones mediante Zepto
    $("#imprimir").on("click", function(){imprimir()});
    $("#imprimir").show();
   }
    else{
    	$("#imprimir").hide();
    }


   if(retorno===true)
//onkeyup sobre input para aceptar el retorno de carro en la barra de búsqueda, hecho con zepto
$("#terminos").bind('keyup', function (e) {
  var key = e.keyCode || e.which;
  if (key === 13) {
    buscar();   
  }
});


}