//TIEMPOS DE TRABAJO

//FUNCION QUE CONTROLA EL TIEMPO QUE LLEVAS TRABAJANDO EN UN MISMO PROYECTO
 function tiempo(){

  localStorage.c = (localStorage.c || "0.0");//crono
localStorage.horas=(localStorage.horas|| "0");//c.atras
localStorage.minutos=(localStorage.minutos||"1");//c.atras

 
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



