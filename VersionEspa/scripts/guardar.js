
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
  var fileNameToSaveAs = nombrearchivo +".mcg";
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
 