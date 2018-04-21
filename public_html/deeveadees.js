//on fait la liaison entre la directive ng-app et la couche métier
var deeveadeesModule = angular.module("deeveadees",[]);
//definir un controller 
deeveadeesModule.controller("listeDeFilms", function($scope,$http){
    $scope.modalShower = false;
    
    $scope.film = {
        id : 0,
        titre : "",
        jaquette : "",
        dateDeSortie :"",
        réalisateur : "",
        acteur : "",
        genres : "",
        nationalité : "",
        synopsis : ""
    };
    
    //affiche la modal et invoque la fonction getFilm au click
    $scope.detail = function(id){
        $scope.film = $scope.getFilm(id);
        $scope.modalShower = true;
        
    };
    $scope.hideModal = function(){
        $scope.modalShower = false;
    };
    
    $scope.getFilm = function(id){
        
        for(var i = 0;i < $scope.films.length; i++){
            if(id === $scope.films[i].id){
                  return $scope.films[i];
            }
        }
    };
    // la fonction recupere la liste des films que retourne le service web
    //et stock le resultat dans la variable films
    $http.get("http://192.168.1.47:13250/films/").then(function(response){
        $scope.films = response.data;
    });
    
//    $scope.updateListe = function (){
//        $http.post("http://192.168.1.47:13250/films/",$scope.films).then(function)
//    };
});

