var id = window.location.href.substring(window.location.href.indexOf("=")+1);

getFilmId();
//fonction qui récupére l'id du film
function getFilmId(){
   $.ajax({
       type:"GET",
       url:"http://192.168.1.47:13250/films/" + id,
       dataType: 'json',
       success: function(data){
           detailsFilm(data);
       },
       error : function(param1,param2) {
           alert("erreur");
           
       }
   }); 
};

//fonction qui affiche les détails de film
function detailsFilm(film){
    
    $("#titre").append(
            $("<div>")
            .append($("<h2>").text(film.titre)))
            .append($("<hr>"))
            .append($("<div>").addClass("row2")
            .append($("<div>"))
            .append($("<img>").attr("src", film.jaquette).addClass("mr-3"))
            .append($("<div>").addClass("col-lg-8 col-md-6 col-sm-12")
            .append($("<ul>")
            .append($("<li>").text(film.dateDeSortie))
            .append($("<li>").text(film.réalisateur))
            .append($("<li>").text(film.acteur))
            .append($("<li>").text(film.genres))
            .append($("<li>").text(film.nationalité)))
            .append($("<h3>").text("Synopsis:").addClass("synopsis")
            .append($("<h6>").text(film.synopsis)))))
            .append($("<hr>")); 
}