
//DICCIONARIOS 






var diccionariosurls=["http://lema.rae.es/drae/?val=", "http://www.wordreference.com/sinonimos/", "http://www.jergasdehablahispana.org/index.php?tipobusqueda=0&pais=&palabra="];
var diccionario="http://lema.rae.es/drae/?val="
var busqueda;

//función que inicia el botón de buscar y que crea un nuevo iframe para visionar los links de respuesta

 

function mostrardiccionarios(){

   if ($("#dicciobox").val()==="vis"){
       
      $("#dicciobox").show("slow");
      $("#dicciobox").val("");
      $('#terminos').focus();//hay que añadir la última posición
     }
     else{
      $("#dicciobox").val("vis");
      $("#dicciobox").hide("slow");
      $("#scriptWindow").focus();
       
     }

}
  
function tipediccio(tipodic){
 if (tipodic==="Rae"){
   diccionario= diccionariosurls[0];
   $("#terminos").focus();
    }
 else if(tipodic==="jerga"){
  diccionario= diccionariosurls[2];
   $("#terminos").focus();
 }
 else{
   diccionario= diccionariosurls[1];
   $("#terminos").focus();
 }





}

function mostrarbusqueda(busqueda){
 
 

  var busqueda, iframedic="<iframe src='" + busqueda + "' id=\"iframedic\"></iframe>";
  $("#iframedicbox").html(iframedic);

  //limpiamos el input terminos para tener mayor comodidad a la hora de realizar las búsquedas
  $("#terminos").val("");
  $("#terminos").focus();
   
}








//función quecoloca los términos dentro del buscador seleccionado

function buscar(url){


var a=$('#terminos').val();

busqueda= diccionario+ a;
    
    mostrarbusqueda(busqueda);
  }





