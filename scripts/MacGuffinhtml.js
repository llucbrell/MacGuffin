
//GENERADOR DE MACGUFFIN



function MacGuffin(domelement){


domelement.innerHTML="<div id=\"MacGuffin\"><header id=\"MacGuffinCabecera\"><div id=\"logoApp\"><h1 id=\"NombreApp\">MacGuffin</h1><div id=\"botones\">  <button title=\"SHIFT+ALT+B\" accesskey=\"B\" onclick=\"ejecutacomando(\'bold\')\" class=\"botonformato\"><b>b</b></button><button title=\"SHIFT+ALT+I\" accesskey=\"I\" onclick=\"ejecutacomando(\'italic\')\" class=\"botonformato\"><i>i</i></button>  <button title=\"SHIFT+ALT+U\" accesskey=\"U\" onclick=\"ejecutacomando(\'underline\')\" class=\"botonformato\"><u>u</u></button>  <button title=\"CNTRL+Z\" onclick=\"ejecutacomando(\'undo\')\" class=\"botonformato\"><img src=\"imagenes/undo.gif\" id=\"undo\"></i></button>  <button title=\"CNTRL+Y\" onclick=\"ejecutacomando(\'redo\')\" class=\"botonformato\"> <img src=\"imagenes/undo.gif\" id=\"redo\"></i></button>  <button title=\"Dialogo SHIFT+ALT+D\" accesskey=\"D\" onclick=\"ejecutacomando(\'formatblock\', \'h4\') \" class=\"botonformato\"> <img src=\"imagenes/bocadillodoble.png\" id=\"bocadillo\"></i></button>  <button title=\"Personaje SHIFT+ALT+C\" accesskey=\"C\" onclick=\"ejecutacomando(\'formatblock\', \'h3\')\" class=\"botonformato\"> <img src=\"imagenes/personazul.png\" id=\"personaje\"></i></button>  <button title=\"Escena SHIFT+ALT+E\" accesskey=\"E\" onclick=\"ejecutacomando(\'formatblock\', \'h2\')\" class=\"botonformato\"> <img src=\"imagenes/clap.png\" id=\"escena\"></i></button> <button title=\"Transición SHIFT+ALT+T\" accesskey=\"T\" onclick=\"ejecutacomando('formatblock', 'h5')\" class=\"botonformato\"> <img src=\"imagenes/trans.png\" id=\"trans\"></i></button>  <button id=\"imprimir\" title=\"Imprimir SHIFT+ALT+P\" accesskey=\"P\"  class=\"botonformato\"> <img src=\"imagenes/print3.png\" id=\"print\"></i></button>  <button title=\"Guardar SHIFT+ALT+S\" accesskey=\"S\" onclick=\"saveTextAsFile()\" class=\"botonformato\"> <img src=\"imagenes/save.png\" id=\"guardar\"></i></button>  <button title=\"Portada Guión SHIFT+ALT+W\" accesskey=\"W\" onclick=\"portada()\" class=\"botonformato\"> <img src=\"imagenes/caratula2.png\" id=\"caratula\"></i></button> <button title=\"Diccionarios SHITFT+ALT+Q\" id=\"diccionariox\" accesskey=\"Q\" onclick=\"mostrardiccionarios()\" class=\"botonformato\">D</button> <button title=\"Reloj SHITFT+ALT+R\" id=\"relox\" accesskey=\"R\" onclick=\"mostrarrelojes()\" class=\"botonformato\">clk</button><button title=\"Calencario SHITFT+ALT+E\" id=\"calendariox\" accesskey=\"E\" onclick=\"mostrarcalendarios()\" class=\"botonformato\">cal</button><div> <br><form name=\"formulario\"><div id=\"barraespaciadora\"><span  id=\"cargaboton\">Abrir Archivo</span><input  type=\"file\" name=\"archivos\"id=\"archivos\"></div></form></div></div></div><div class=\"hidebox\" id=\"dicciobox\" value=\"\">  <button name=\"RAE\" onclick=\"tipediccio(\'Rae\')\" class=\"botonformato\"><img src=\"imagenes/rae.ico\" id=\"rae\"></i></button>  <button name=\"Sinonimos Wordrefernece\" onclick=\"tipediccio(\'Word\')\" class=\"botonformato\"><img src=\"imagenes/wordreference.png\" id=\"wordreference\"></i></button>  <button name=\"diccionario de jerga\" onclick=\"tipediccio(\'jerga\')\" class=\"botonformato\"><img src=\"imagenes/JHH.gif\" id=\"JHH\"></i></button>  <input class=\"inputsguf\" type=\"text\" id=\"terminos\"  placeholder=\"Términos de búsqueda\" value=\"\" />  <button class=\"botondiccio\" id=\"boton\" type=\"button\" onclick=\"buscar()\">Buscar</button>  <div id=\"iframedicbox\"></div></div><div class=\"hidebox\" id=\"relojbox\" value=\"\">  <button id=\"control\" onclick=\"mostrarcrono(false)\">alarma de trabajo</button> <button id=\"proyecto\" onclick=\"mostrarcrono(true)\">tiempo en proyecto</button>  <div class=\"hidebox\" id=\"proyectotime\">  <button name=\"cronometro\" id=\"cambiar\" class=\"botonformato\">C</button>  <button name=\"cuentaatras\"  id=\"inicializar\"  class=\"botonformato\">D</button><div id=\"visor\"><span id=\"crono\">0.0</span>Segundos</div>  </div><div class=\"hidebox\" id=\"controltime\">    <form name=\"frm\">   <select type=\"text\" name=\"hour\"/>  <option value =\"0\">0</option>      <option value =\"1\">1</option>  <option value =\"2\">2</option>  <option value =\"3\">3</option>  <option value =\"4\">4</option>  <option value =\"5\">5</option>  <option value =\"6\">6</option>  <option value =\"7\">7</option> <option value =\"8\">8</option>            </select>          <select type=\"text\" name=\"mins\"/>  <option value =\"0\">0</option>  <option value =\"15\">15</option>  <option value =\"30\">30</option>  <option value =\"45\">45</option></select>            <input type=\"button\" value=\"ok\" onclick=\"startcuenta()\">        </form><span id=\"hours\"></span><span id=\"Reloj\" class=\"numeros\">0</span> </div></div><div class=\"hidebox\" id=\"calendarbox\" value=\"\"><button id=\"Lcalendar\" onclick=\"mostraronlinecal(true)\">LocalCalendar</button><button id=\"Ocalendar\" onclick=\"mostraronlinecal(false)\">OnlineCalendar</button><div class=\"hidebox\" id=\"divonlinecalendar\"><button id=\"Addonlinecalendar\" onclick=\"despliegainput(true)\">+</button><div class=\"hidebox\" id=\"divaddcalendar\">  <button class=\"botoncalendar\" id=\"boton\" type=\"button\" onclick=\"addcalendar()\">N Calendario</button>  <input class=\"inputsguff\" type=\"text\" id=\"inputcalendar\"  placeholder=\"Código HTML proporcionado por google\" value=\"\" /> </div> <div class=\"hidebox\" id=\"insertonlinecalendar\">OnlineCalendar integra de momento sólo calendarios de Google Calendar. Una vez insertado, se ejecutará sólo en este navegador, para otros navegadores tendrás que instalarlo de nuevo. Ok, ahora sólo tienes que seguir las instrucciones de este <a name=\"instrucciones google\" href=\"https://support.google.com/calendar/answer/41207?hl=es\" id=\"linkgooglecalendar\">link...</a> </div></div><div class=\"hidebox\" id=\"divlocalcalendar\"><div class=\"hidebox\" id=\"diveventcalendar\"><button id=\"Addonlinecalendar\" onclick=\"despliegainput(true)\">+</button> <div class=\"hidebox\" id=\"divaddcalendar\">   <input class=\"inputsguff\" type=\"text\" id=\"inputloccalendar\"  placeholder=\"Nombre del evento a recordar\" value=\"\" /> </div> </div><div id=\"insertlocalcalendar\" style=\"margin:10px 0 30px 0; border:dashed 1px red; width:205px; height:230px;\"></div><div id=\"fechas\"><button class=\"botoncalendar\" onclick=\"reiniciafechas()\">Reiniciar fechas</button><div id=\"fechaslocalcal\"><span id=\"spanaviso\">No hay ninguna fecha seleccionada, recuerda que todos los recordatorios que introduzcas son accesibles sólo en este navegador. Si usas otro navegador, deberás volver a introducirlos.</span></div></div></div></div></header><section>   <div id=\"portada\" contentEditable=\"true\" value=\"\"><h1 id=\"tituloguion\">Título</h1><h3 id=\"autor\">Escritor</h3><h5>Telf. e-mail, etc,.</h5></div>  <div id=\"scriptWindow\" spellcheck=\"true\" contentEditable=\"true\">  <h2>1.int.habitación</h2>  <br>  <p>Se abre el navegador y aparece un editor de guiones online. Es un editor sencillo, minimalista, poco recargado, veloz y lo mejor de todo es que se puede trabajar con él de manera online.</p>  <p>Dos hermanos conversan ante el ordenador como no prestandole mucha atención.</p>  <br>  <h3>Lucas</h3>  <h4>¡Mira lo que he hecho! </h4>  <br>  <h3>Blanca</h3>  <h4>¿Eso? ¿Para qué sirve?</h4>  <br>  <h3>Lucas</h3>  <h4>¡Para escribir guiones! </h4>  <br>  <h3>Blanca</h3>  <h4>¿De veras crees que alguien va a querer usar eso?</h4>  <br>  <p>Lucas agacha la cabeza.. sintiéndose estúpido. El entorno de edición parece que funciona, porque el que quiera, sólo tiene que borrar estas dos escenas y empezar a escribir.</p>  <h5>fundido en negro</h5>  <br>  <h2>2.ext.lorem ipsum</h2>  <br>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam ut sem vel venenatis. Donec lacus eros, faucibus ac magna sed, tristique volutpat diam. Nullam rutrum tempus turpis in porttitor. Sed risus massa, tempor id rhoncus vitae, molestie et neque. Maecenas vel aliquet sem. Donec nec tortor sodales, blandit massa eget, sodales arcu. Vivamus tristique sed dolor quis vehicula. Aliquam erat purus, venenatis sed magna consequat, tempus dignissim enim. Nam dapibus, turpis non egestas scelerisque, nunc sem ullamcorper mi, quis pulvinar sapien dolor at enim. Aenean tristique lacus nec scelerisque sagittis. Sed elementum vitae ipsum eu malesuada. Aenean vel libero sed nunc ultrices tincidunt eget et leo. Nulla commodo iaculis posuere. Sed turpis nibh, rutrum non metus lobortis, maximus cursus nulla. </p></div></section></div>";
/*

if (alto !==undefined){
	$( "#scriptWindow" ).css( "width", 200px);
}

if (ancho !==undefined){
   document.getElementById("scriptWindow").style.width= ancho + "px"+";";
}
*/
/*if(url!==undefined){
   
   document.getElementById("scriptWindow").innerHTML= urlGuffin;

}
*/





activabotones(true, false, false, false, false);

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






