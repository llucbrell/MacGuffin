
//GENERADOR DE MACGUFFIN



function MacGuffin(domelement){



domelement.innerHTML="<object id=\"MacGuffin\"><header id=\"MacGuffinCabecera\"><div id=\"logoApp\"><h1 id=\"NombreApp\">MacGuffin</h1><div id=\"botones\"><button title=\"SHIFT+ALT+B\" accesskey=\"B\" onclick=\"ejecutacomando(\'bold\')\" class=\"botonformato\"><b>b</b></button><button title=\"SHIFT+ALT+I\" accesskey=\"I\" onclick=\"ejecutacomando(\'italic\')\" class=\"botonformato\"><i>i</i></button><button title=\"SHIFT+ALT+U\" accesskey=\"U\" onclick=\"ejecutacomando(\'underline\')\" class=\"botonformato\"><u>u</u></button><button title=\"CNTRL+Z\" onclick=\"ejecutacomando(\'undo\')\" class=\"botonformato\"><img src=\"imagenes/undo.gif\" id=\"undo\"></i></button><button title=\"CNTRL+Y\" onclick=\"ejecutacomando(\'redo\')\" class=\"botonformato\"> <img src=\"imagenes/undo.gif\" id=\"redo\"></i></button>  <button title=\"Dialogo SHIFT+ALT+D\" accesskey=\"D\" onclick=\"ejecutacomando(\'formatblock\', \'h4\') \" class=\"botonformato\"> <img src=\"imagenes/bocadillodoble.png\" id=\"bocadillo\"></i></button><button title=\"Personaje SHIFT+ALT+C\" accesskey=\"C\" onclick=\"ejecutacomando(\'formatblock\', \'h3\')\" class=\"botonformato\"> <img src=\"imagenes/personazul.png\" id=\"personaje\"></i></button>  <button title=\"Escena SHIFT+ALT+E\" accesskey=\"E\" onclick=\"ejecutacomando(\'formatblock\', \'h2\')\" class=\"botonformato\"> <img src=\"imagenes/clap.png\" id=\"escena\"></i></button> <button title=\"Transición SHIFT+ALT+T\" accesskey=\"T\" onclick=\"ejecutacomando(\'formatblock\', 'h5')\" class=\"botonformato\"> <img src=\"imagenes/trans.png\" id=\"trans\"></i></button>  <button id=\"imprimir\" title=\"Imprimir SHIFT+ALT+P\" accesskey=\"P\"  class=\"botonformato\"> <img src=\"imagenes/print3.png\" id=\"print\"></i></button>  <button title=\"Guardar SHIFT+ALT+S\" accesskey=\"S\" onclick=\"saveTextAsFile()\" class=\"botonformato\"> <img src=\"imagenes/save.png\" id=\"guardar\"></i></button>  <button title=\"Portada Guión SHIFT+ALT+W\" accesskey=\"W\" onclick=\"portada()\" class=\"botonformato\" id=\"bportada\"> <img src=\"imagenes/caratula2.png\" id=\"caratula\"></i></button> <button title=\"Diccionarios SHITFT+ALT+Q\" accesskey=\"Q\" onclick=\"mostrardiccionarios()\" id=\"diccionariox\" class=\"botonformato\"><img src=\"imagenes/interrogante.png\" id=\"diccionario\"></i></button> <button title=\"Reloj SHITFT+ALT+R\" id=\"relox\" accesskey=\"R\" onclick=\"mostrarrelojes()\" class=\"botonformato\"><img src=\"imagenes/reloj2.png\" id=\"reloj\"></i></button><button title=\"Calencario SHITFT+ALT+E\" id=\"calendariox\" accesskey=\"E\" onclick=\"mostrarcalendarios()\" class=\"botonformato\"><img src=\"imagenes/calendario.png\" id=\"calendario\"></i></button><div><br><form name=\"formulario\"><div id=\"barraespaciadora\"><span  id=\"cargaboton\">Abrir Archivo</span><input  type=\"file\" name=\"archivos\"id=\"archivos\"></div></form></div></div></div><div class=\"hidebox\" id=\"dicciobox\" value=\"\"> <div class=\"content\"></button><button onclick=\"mostrardiccionarios()\" class=\"closers\">x</button><div><button name=\"RAE\" onclick=\"tipediccio(\'Rae\')\" class=\"botonformato\"><img src=\"imagenes/rae.ico\" id=\"rae\"></i></button>  <button name=\"Sinonimos Wordrefernece\" onclick=\"tipediccio(\'Word\')\" class=\"botonformato\"><img src=\"imagenes/wordreference.png\" id=\"wordreference\"></i></button>  <button name=\"diccionario de jerga\" onclick=\"tipediccio(\'jerga\')\" class=\"botonformato\"><img src=\"imagenes/JHH.gif\" id=\"JHH\"></i></button></div><div>  <input class=\"inputsguf\" type=\"text\" id=\"terminos\"  placeholder=\"Términos de búsqueda\" value=\"\" />  <button class=\"botondiccio\" id=\"boton\" type=\"button\" onclick=\"buscar()\">Buscar</button></div>  <div id=\"iframedicbox\"></div></div></div><div class=\"hidebox\" id=\"relojbox\" value=\"\">  <div class=\"content\"><button onclick=\"mostrarrelojes()\" class=\"closers\">x</button> <div>  <button id=\"control\" onclick=\"mostrarcrono(false)\">alarma de trabajo</button>  <button id=\"proyecto\" onclick=\"mostrarcrono(true)\">tiempo en proyecto</button>  </div>  <div id=\"proyectotime\">  <button name=\"cronometro\" id=\"cambiar\" class=\"botonformato\">C</button>  <button name=\"cuentaatras\"  id=\"inicializar\"  class=\"botonformato\">D</button>  <span id=\"crono\">0.0</span> Segundos  </div>  <div id=\"controltime\">    <form name=\"frm\">           <select type=\"text\" name=\"hour\"/>  <option value =\"0\">0</option>      <option value =\"1\">1</option>  <option value =\"2\">2</option>  <option value =\"3\">3</option>  <option value =\"4\">4</option>  <option value =\"5\">5</option>  <option value =\"6\">6</option>  <option value =\"7\">7</option>  <option value =\"8\">8</option>          </select>          <select type=\"text\" name=\"mins\"/>  <option value =\"0\">0</option>  <option value =\"15\">15</option>  <option value =\"30\">30</option>  <option value =\"45\">45</option>          </select>            <input type=\"button\" value=\"ok\" onclick=\"startcuenta()\">  </form><span id=\"hours\"></span><span id=\"Reloj\" class=\"numeros\">0</span>  </div> </div></div><div class=\"hidebox\" id=\"calendarbox\" value=\"\"><div class=\"content\"><button onclick=\"mostrarcalendarios()\" class=\"closers\">x</button><div><button id=\"Lcalendar\" onclick=\"mostraronlinecal(true)\">LocalCalendar</button><button id=\"Ocalendar\" onclick=\"mostraronlinecal(false)\">OnlineCalendar</button></div><div id=\"divonlinecalendar\"><button id=\"Addonlinecalendar\" onclick=\"despliegainput(true)\">+</button><div id=\"divaddcalendar\">  <button class=\"botoncalendar\" id=\"boton\" type=\"button\" onclick=\"addcalendar()\">N Calendario</button>  <input class=\"inputsguff\" type=\"text\" id=\"inputcalendar\"  placeholder=\"Código HTML de google\" value=\"\" /> </div> <div id=\"insertonlinecalendar\">OnlineCalendar integra de momento sólo calendarios de Google Calendar. Una vez insertado, se ejecutará sólo en este navegador, para otros navegadores tendrás que instalarlo de nuevo. Ok, ahora sólo tienes que seguir las instrucciones de este <a name=\"instrucciones google\" href=\"https://support.google.com/calendar/answer/41207?hl=es\" id=\"linkgooglecalendar\">link...</a> </div></div><div id=\"divlocalcalendar\"><div id=\"diveventcalendar\"><button id=\"Addonlinecalendar\" onclick=\"despliegainput(true)\">+</button> <div id=\"divaddcalendar\">   <input class=\"inputsguff\" type=\"text\" id=\"inputloccalendar\"  placeholder=\"Nombre del evento a recordar\" value=\"\" /> </div> </div><div id=\"insertlocalcalendar\" style=\"margin:10px 0 30px 0;  width:205px; height:230px;\"></div><div id=\"fechas\"><button class=\"botoncalendar\" onclick=\"reiniciafechas()\">Reiniciar fechas</button><div id=\"fechaslocalcal\"><span id=\"spanaviso\">No hay recordatorio seleccionado. Recuerda, usamos localStorage para almacenar el evento. Si usas otro navegador, deberás volver a introducir dicho evento.</span></div></div></div></div></div></header><section>   <div id=\"portada\" contentEditable=\"true\" value=\"\"><h1 id=\"tituloguion\">Título</h1><h3 id=\"autor\">Escritor</h3><h5>Telf. e-mail, etc,.</h5></div>  <div id=\"scriptWindow\" spellcheck=\"true\" contentEditable=\"true\"> <div id=\"contenidoscript\"> <br></br><h2>1.int.habitación</h2>  <br>  <p>Se abre el navegador y aparece un editor de guiones online. Es un editor sencillo, minimalista, poco recargado, veloz y lo mejor de todo es que se puede trabajar con él de manera online.</p>  <p>Dos hermanos conversan ante el ordenador como no prestandole mucha atención.</p>  <br>  <h3>Lucas</h3>  <h4>¡Mira lo que he hecho! </h4>  <br>  <h3>Blanca</h3>  <h4>¿Eso? ¿Para qué sirve?</h4>  <br>  <h3>Lucas</h3>  <h4>¡Para escribir guiones! </h4>  <br>  <h3>Blanca</h3>  <h4>¿De veras crees que alguien va a querer usar eso?</h4>  <br>  <p>Lucas agacha la cabeza.. sintiéndose estúpido. El entorno de edición parece que funciona, porque el que quiera, sólo tiene que borrar estas dos escenas y empezar a escribir.</p>  <h5>fundido en negro</h5>  <br>  <h2>2.ext.lorem ipsum</h2>  <br>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam ut sem vel venenatis. Donec lacus eros, faucibus ac magna sed, tristique volutpat diam. Nullam rutrum tempus turpis in porttitor. Sed risus massa, tempor id rhoncus vitae, molestie et neque. Maecenas vel aliquet sem. Donec nec tortor sodales, blandit massa eget, sodales arcu. Vivamus tristique sed dolor quis vehicula. Aliquam erat purus, venenatis sed magna consequat, tempus dignissim enim. Nam dapibus, turpis non egestas scelerisque, nunc sem ullamcorper mi, quis pulvinar sapien dolor at enim. Aenean tristique lacus nec scelerisque sagittis. Sed elementum vitae ipsum eu malesuada. Aenean vel libero sed nunc ultrices tincidunt eget et leo. Nulla commodo iaculis posuere. Sed turpis nibh, rutrum non metus lobortis, maximus cursus nulla. </p></div></div>  </section></object>";


//document.getElementById("scriptWindow").innerHTML=
activabotones(true, false, false, false, false, false, false);

generacalendarionline();
mostrarcalendarios();

mostrardiccionarios();
mostrarrelojes();
portada();

tiempo();//crono
mostrarcrono(false);
calendariolocal();//llamamos a jsdatepick
rotulados();

iniciolocalstor();//inicio de la memoria del calendario

}






//Llamada de entrada
function editor(){ 

 
 //texto= documento.innerHTML;
 $("#scriptWindow").contentEditable=true;
//elementoDom.contentEditable=true;

$("#scriptWindow").focus()

 $("#portada").contentEditable=true;


}








//******** QUITANDO LA LINEA ANTERIOR Y PONIENDO ESTO TMBIN FUNCIONA, PERO ME DA UN LIGERO ERROR*********
 // contenido = document.createTextNode(contenido.innerHTML);
    //contenido.innerHTML = "";
   // texto = document.createElement("pre");
   // documento.contentEditable = false;
   // texto.id = "sourceText";
    //texto.contentEditable = true;
    //texto.appendChild(contenido);
   // documento.appendChild(texto);




/*
contenido2 = document.createTextNode(documento2.innerHTML);
    contenido2.innerHTML = "";
    texto2 = document.createElement("pre");
    documento2.contentEditable = false;
    texto2.id = "sourceText";
    texto2.contentEditable = true;
    texto2.appendChild(contenido);
    documento2.appendChild(texto);

 */





//Ejecuta los comandos da formato al texto, etc,.
//es el encargado del formato
function ejecutacomando(comando, valor){
    
    document.execCommand(comando, false, valor); 
   //se puede usar a partir de aquí, if comando === a personaje ejecutacomando (dalogo, h...)etc, aunque creo que lo mejor para agilizar el trabajo sería usar unas short key para cada cosa
    $("#scriptWindow").focus();

}








//CODIGO ROTULADOS

// TITULO
function rotulados(){
var numeroaleatorio= Math.ceil(Math.random()*25);
 document.getElementById("NombreApp").className = "tipofuente"+ numeroaleatorio;
//Texto del reloj cuenta atrás
document.getElementById("Reloj").className= "tipofuente" +numeroaleatorio;
document.getElementById("crono").className= "tipofuente" +numeroaleatorio;


}






//función para activar los botones

//En un futuro se hará un generador de botones 
//para no depender del html


function activabotones(retorno, print, diccionario, calendario, reloj, abrirarchivo, portada){
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
  if(portada===true){
    $("#bportada").show();
  }
  else
  {
    $("#bportada").hide();
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





//GUARDAR Y CARGAR ARCHIVO


 
//PARA CARGAR DATOS

function iniciar(){
cajadatos=document.getElementById('scriptWindow' ) ;
var archivos=document.getElementById('archivos' ) ;
archivos.addEventListener('change' , procesar, false) ;
}

function procesar(e) {
var archivos=e.target.files;
var archivo=archivos[0] ;
var lector=new FileReader() ;
lector.onload=mostrar;
lector.readAsText(archivo) ;
}

function mostrar(e) {
var resultado=e.target.result;
cajadatos.innerHTML=resultado;

}
//listener que ejecuta al cargar un archivo, al pulsar en input...
window.addEventListener('load' , iniciar, false) ;






//GUARDAR CAMBIOS 



//EN ARCHIVO

//falla en explorer

function saveTextAsFile()
{
  var nombrearchivo= $("#tituloguion").html();
  var textToWrite = $("#scriptWindow").html();
  var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
  var fileNameToSaveAs = nombrearchivo +".guf";
  //document.getElementById("tituloguion").value;

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null)
  {
    //solución motores webkit
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  }
  else
  {
    //Solucion motor GECO 
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

function destroyClickedElement(event)
{
  document.body.removeChild(event.target);
}


$("#guardar").on("click", function(){
  saveTextAsFile();
});
 




 //IMPRIME
/*
<script type="text/javascript" 
language="javascript" type="text/javascript" 
src="http://zeptojs.com/zepto.min.js"></script>
*/

// Funciona con Zepto

function imprimir(){
  $("#portada").show("slow");
      $("#portada").val("");
 print();
}




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







  //TIEMPOS DE TRABAJO

//FUNCION QUE CONTROLA EL TIEMPO QUE LLEVAS TRABAJANDO EN UN MISMO PROYECTO
 function tiempo(){

  localStorage.c = (localStorage.c || "0.0");//crono
localStorage.horas=(localStorage.horas|| "0");//c.atras
localStorage.minutos=(localStorage.minutos||"");//c.atras

 
 var t, cl = $("#crono");
  function incr()     { localStorage.c = +localStorage.c + 0.1; }
  function mostrar()  { 
    cl.html((+localStorage.c).toFixed(1)); 
}
  function arrancar() { t=setInterval(function(){incr(); mostrar()}, 100);}
  function parar()    { clearInterval(t);  t=undefined; }
  function cambiar()  { if (!t) arrancar(); else parar(); }

    $("#cambiar").on('click', cambiar);
   $("#inicializar").on('click', function(){ localStorage.c="0.0"; mostrar();});

   // inicializar();
    mostrar();
    cambiar();
}

//display del cronometro
function mostrarcrono(boleano){
  if (boleano===false){
       
      $("#controltime").show("slow");
      $("#proyectotime").hide("slow");

    }
     if(boleano===true){
      $("#controltime").hide("slow");
      $("#proyectotime").show("slow");
       
     }


}



//Display de los relojes
function mostrarrelojes(){

   if ($("#relojbox").val()==="vis"){
       
      $("#relojbox").show("slow");
      $("#relojbox").val("");
      
     }
     else{
      $("#relojbox").val("vis");
      $("#relojbox").hide("slow");
      $("#scriptWindow").focus();
       
     }

}









//ESTABLECE UNA ALARMA DE TIEMPO PARA CADA SESIÓN DE TRABAJO



var reloj=document.getElementById("Reloj");

obj_hours=document.getElementById("hours");
//justonce=0;
var clicks=1;
var  horas, minutos, segundos;
segundos=1;
//arranca al iniciar el programa
function iniciolocalstor(){
  horas=(+localStorage.horas);
  minutos=(+localStorage.minutos);
  reloj=setInterval("countdown();", 1000);
}





function startcuenta(){
if(clicks%2===0){
localStorage.horas= frm.hour.value;
localStorage.minutos= frm.mins.value;
iniciolocalstor();
}
else{

clearInterval(reloj);

   }

clicks+=1;
}



function countdown(){

if(horas==0 &&  minutos==0 &&  segundos==0){
    clearInterval(reloj);
    
    $("#Reloj").html("Puedes establecer una nueva alarma si te parece que has trabajado poco tiempo-- "+ localStorage.horas+ " horas y " + localStorage.minutos+ " minutos.--");
    mostrarrelojes();
    mostrarcrono(false); // Falla, no para de abrirse*/
    //iniciolocalstor();
  }

else{
    segundos= segundos-1;
    if (segundos===-1){
      segundos= 59;
    minutos= (+minutos)-1;
  }
  if (minutos===-1 && horas !=0){
    minutos=59;
    horas= (+horas)-1;
    
  }
  

       $("#Reloj").html(horas+ ":"+ minutos+ ":" + segundos);


 }

}





//CALENDARIOS PARA MARCAR LOS OBJETIVOS


//ONLINE CALENDAR
//De momento sólo funciona con google calendar

 //<iframe src="https://www.google.com/calendar/embed?src=hb0n3utd9la3kr5es116h7tgdg%40group.calendar.google.com&ctz=Europe/Madrid" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
//código para probar

  
function mostrarcalendarios(){
  
  localStorage.calendaron=(localStorage.calendaron ||'""');//calendario online


   if ($("#calendarbox").val()==="vis"){
       
      $("#calendarbox").show("slow");
      $("#calendarbox").val("");
      despliegainput(false);
      mostraronlinecal(true);
      //generacalendarionline(); 
      //mejor situado dentro de la función ready para 
      // conseguir un mejor rendimiento
     }
     else{
      $("#calendarbox").val("vis");
      $("#calendarbox").hide("slow");  
      $("#scriptWindow").focus();
            
     }

}

 function despliegainput(boleano){
           if (boleano===true){
       
      $("#divaddcalendar").show("slow");
     // $("#divaddcalendar").val("");
      $('#terminos').focus();//hay que añadir la última posición
  
     }
     else{
      $("#divaddcalendar").val("vis");
      $("#divaddcalendar").hide("slow");       
     }

 } 

function generacalendarionline(){
 
localStorage.calendaron=(localStorage.calendaron ||'""');//calendario online

  var parsecalendario= JSON.parse(localStorage.calendaron);
     $("#insertonlinecalendar").html(parsecalendario);
      

}


 function mostraronlinecal(boleano){
  if (boleano===false){
       
      $("#divonlinecalendar").show("slow");
      $("#divlocalcalendar").hide("slow");
       despliegainput(false);

    }
     if(boleano===true){
      $("#divonlinecalendar").hide("slow");
      $("#divlocalcalendar").show("slow");
       
     }


}

function addcalendar(){
     
      
      var nuevocalendar = $("#inputcalendar").val(); 
     
         if (nuevocalendar[0]="h"){
          $("#insertonlinecalendar").html("<iframe src=\""+nuevocalendar+"\" style=\"border: 0\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>");
         // 
         }
         if (nuevocalendar[0]== "\""){
          $("#insertonlinecalendar").html("<iframe src="+nuevocalendar+" style=\"border: 0\"></iframe>");

         }
         if (nuevocalendar[0]==="<"){
          //var calendaron=$("#insertonlinecalendar").html(nuevocalendar);
      // var stringcalendar= 
          localStorage.calendaron= JSON.stringify(nuevocalendar);
     
     //var parsecalendario= JSON.parse(localStorage.calendaron);
     //$("#insertonlinecalendar").html(parsecalendario);
      



           $("#insertonlinecalendar").html(nuevocalendar);
         //savecalendar();
         }

         else{
           alert("ha habido algún problema al introducir el código HTML, por favor asegúrate de que introduces el <iframe...></iframe>correctamente");
         }
}
/*
function savecalendar(){
 // localStorage.calendarion=(localStorage.calendarion ||"");

          var calendaron= $("#insertonlinecalendar");
          var stringcalendar= JSON.stringify(calendaron);
          localStorage.calendaron= stringcalendar;
          }

*/
 

// CALENDARIO LOCAL MEDIANTE JSDATEPICK


function calendariolocal(){
localStorage.fechas=(localStorage.fechas ||'[""]');//calendario local
localStorage.año=(localStorage.año ||'[""]');//calendario local
localStorage.mes=(localStorage.mes ||'[""]');//calendario local
localStorage.dia=(localStorage.dia ||'[""]');//calendario local
localStorage.evento=(localStorage.evento||'[""]');//nombre alarma calendario


  var num=0;
var fechalocalstorage=JSON.parse(localStorage.fechas); 
//Esto funciona muy bien

document.getElementById("fechaslocalcal").innerHTML = fechalocalstorage;

g_globalObject = new JsDatePick({
      useMode:1,
      isStripped:true,
      target:"insertlocalcalendar",
      dateFormat:"%d-%M-%Y"
    
    });   
    
    g_globalObject.setOnSelectedDelegate(function(){
      
      var obj = g_globalObject.getSelectedDay();
       mostrarfechas(obj.day, obj.month, obj.year);
       num=+1;
        

    });




   function mostrarfechas(dia, mes, año){



document.getElementById("spanaviso").innerHTML="";
     //document.getElementById("fechaslocalcal").innerHTML = fechalocalstorage;
     var evento=$("#inputloccalendar").val();
       document.getElementById("fechaslocalcal").innerHTML = "<span class=\"spanfechas\" id=\"fech"+num+ "\"" + ">"+ evento+ " " + dia + "/" + mes + "/" + año +"</span>"+ "<br>";
    localStorage.fechas=JSON.stringify($("#fechaslocalcal").html());
  
  localStorage.evento=JSON.stringify(evento);
 localStorage.dia=JSON.stringify(dia); //funciona con la última fecha elegida
    localStorage.mes=JSON.stringify(mes);
    localStorage.año=JSON.stringify(año);
      
   
   }

   




 var diaentrega= comparafechas();
 if (diaentrega===true){
  alert("Hoy tienes que hacer una entrega " + localStorage.evento+ " "+ localStorage.dia + "/"+ localStorage.mes +"/"+ localStorage.año);
 }  
}

function comparafechas(){
var diasalarma=JSON.parse(localStorage.dia); 
var mesalarma=JSON.parse(localStorage.mes); 
var añoalarma=JSON.parse(localStorage.año); 

    var time= new Date;
    var mesnow= time.getMonth()+1;
    var dianow= time.getUTCDate();
    var yearnow= time.getFullYear();
    var toca, i;
//alert("diasalarma:" + dianow +mesnow+ yearnow);
    for (i=0; i<diasalarma; i++){
    if(diasalarma===dianow && mesalarma===mesnow && añoalarma===yearnow){
      toca= true;
      } 
      else{ toca= false;}
   
    if (toca===true){ return true;}
   }

}


function reiniciafechas(){

  

  var nada="";

    document.getElementById("fechaslocalcal").innerHTML= "<span id=\"spanaviso\">No hay ninguna fecha seleccionada, recuerda que todos los recordatorios que introduzcas son accesibles sólo en este navegador. Si usas otro navegador, deberás volver a introducirlos.</span>";
    localStorage.fechas=JSON.stringify($("#fechaslocalcal").html());
    localStorage.dia=JSON.stringify(nada);
    localStorage.mes=JSON.stringify(nada);
    localStorage.año=JSON.stringify(nada);


   }




