//récupére les films
$(document).ready(function(){
   $.ajax({
       type:"GET",
       url:"http://192.168.1.47:13250/films/",
       dataType:'json',
       success: function(data){
           loadPage(data);
       },
       error: function(param1,param2){
           alert("erreur");
       }
   });
});

//fonction qui affiche les films
function loadPage(listeDeFilm) {
    
    
    for (var i = 0; i < listeDeFilm.length; i++) {
        var film = listeDeFilm[i];
        
        $("#content").append(
                $("<div>").addClass("ensemble col-lg-3 col-md-4 col-sm-12")
                .append($("<h4>").addClass("title").text(film.titre))
                .append($("<a>").attr("href","./detail.html?id="+ film.id)
                .append($("<img>").addClass("title").attr("src",film.jaquette)))
                );
    }
}