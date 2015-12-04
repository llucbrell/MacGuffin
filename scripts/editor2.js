

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
