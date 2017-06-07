var cargarPagina = function(){
  setTimeout(transicionSplash,4000) 
};

var transicionSplash = function(){
    location.href = "views/home.html";
};


$(document).ready(cargarPagina);