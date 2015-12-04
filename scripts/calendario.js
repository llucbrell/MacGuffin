//CALENDARIOS PARA MARCAR LOS OBJETIVOS


//ONLINE CALENDAR
//De momento sólo funciona con google calendar

 //<iframe src="https://www.google.com/calendar/embed?src=hb0n3utd9la3kr5es116h7tgdg%40group.calendar.google.com&ctz=Europe/Madrid" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
//código para probar

  
function mostrarcalendarios(){

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
  var num=0;

g_globalObject = new JsDatePick({
      useMode:1,
      isStripped:true,
      target:"insertlocalcalendar",
      dateFormat:"%d-%M-%Y",
      cellColorScheme: "armygreen"
      
      /*selectedDate:{        This is an example of what the full configuration offers.
        day:5,            For full documentation about these settings please see the full version of the code.
        month:9,
        year:2006
      },
      yearsRange:[1978,2020],
      limitToToday:false,
      cellColorScheme:"beige",
      dateFormat:"%m-%d-%Y",
      imgPath:"img/",
      weekStartDay:1*/
    });   
    
    g_globalObject.setOnSelectedDelegate(function(){
      
      var obj = g_globalObject.getSelectedDay();
    // alert("a date was just selected and the date is : " + obj.day + "/" + obj.month + "/" + obj.year);
     document.getElementById("spanaviso").innerHTML="";
     var evento=$("#inputloccalendar").val();
       document.getElementById("fechaslocalcal").innerHTML += "<span class=\"spanfechas\" id=\"fech"+num+ "\"" + ">"+ evento+ " " + obj.day + "/" + obj.month + "/" + obj.year +"</span>"+ "<br>";
    
       
    num=+1;
    
    });
}