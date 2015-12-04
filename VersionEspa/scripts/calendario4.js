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



