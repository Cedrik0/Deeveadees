//var id = window.location.href.substring(window.location.href.indexOf("=")+1);
var listeDeFilm = [];

$(document).ready(function(){
   $.ajax({
       type:"GET",
       url:"http://192.168.0.15:13250/films/",
       dataType:"json",
       success: function(data){
           listeDeFilm = data;
           loadPage2(data);
       },
       error: function(param1,param2){
           alert("erreur");
       }
   });
   
});
function loadPage2(){
    $("#deleteModif").empty();
    for(var i = 0; i < listeDeFilm.length; i++){
        
        $("#deleteModif").append(
                $("<tr>")
                .append($("<td>").text(listeDeFilm[i].id + ". "))
                .append($("<td>").text(listeDeFilm[i].titre + " :"))
                .append($("<td>")
                .append($("<button>").attr("type", "button").addClass("btn btn-warning")
                .attr("onclick","ModifFilm(" + listeDeFilm[i].id + ");").text("Modifier"))
                .append($("<button>").attr("type", "button").addClass("btn btn-danger")
                .attr("onclick","deleteFilm(" + listeDeFilm[i].id + ");").text("Supprimer"))));
    }
}

function addFilm(){
    $.ajax({
       type: "POST",
       url: "http://192.168.0.15:13250/films/add",
       dataType: "json",
       success: function(data){
           
       },
       error: function(param1,param2){
           
       }
    });
    $.ajax({
       type:"GET",
       url:"http://192.168.0.15:13250/films/",
       dataType:"json",
       success: function(data){
           listeDeFilm = data;
           loadPage2(data);
       },
       error: function(param1,param2){
           alert("erreur");
       }
   });
}

function deleteFilm(id){
    $.ajax({
        type: "POST",
        url: "http://192.168.0.15:13250/films/" + id,
        dataType: "json",
        success: function(retour){
            
            
        },
        error: function(param1,param2) {
            
        }
        
    });
    $.ajax({
       type:"GET",
       url:"http://192.168.0.15:13250/films/",
       dataType:"json",
       success: function(data){
           listeDeFilm = data;
           loadPage2(data);
       },
       error: function(param1,param2){
           alert("erreur");
       }
   });
}