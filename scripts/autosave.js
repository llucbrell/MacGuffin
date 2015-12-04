
//AUTOSAVE



function autosave(domelement){




	var localsaved= JSON.parse(localStorage.autosave);
    mostrarscript(localsaved);


 $("#scrìptwindow").on("change", function(){
 	saveonlocal();

 });


 function mostrarscript(localsaved){
   var localsaved=JSON.parse(localStorage.autosave);

 	 domelement.innerHTML= localsaved;
 }



function saveonlocal(){
   //localsaved=JSON.parse(localStorage.autosave);
   //localsaved.push($("#scrìptWindow").html());
   var changed=domelement.val();
   localStorage.autosave=JSON.stringify(changed);


}





}






