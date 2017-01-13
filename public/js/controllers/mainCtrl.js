angular.module('mainController', ['FindService'])


.controller('appController', function($scope, Find, $mdToast){

  
  $scope.data = {
    movies : []
  };

  $scope.film = '';
  $scope.search = [];
  $scope.rating = 0;

  $scope.findMovie = function(){
    console.log('works')
    // if($scope.film.length > 3) {
      Find.getForSearch($scope.film).then(function(res){
        $scope.search = res.Search;
      });
    // }    
  };

  $scope.addToMovies = function(title){
    Find.getByTitle(title).then(function(res){
      if(!Find.findInArray($scope.data.movies, res)){
        $scope.data.movies.push(res);
      }else{
        $mdToast.show(
          $mdToast.simple()
          .textContent('You already added this movie to your list')
          .position('top right')
          .hideDelay(3000)
        );
      }
      $scope.rating = Find.findRating($scope.data.movies, $scope.rating)
    });
    $scope.film = ''
    $scope.search = []
  };

  $scope.deleteFromSelection = function(movie){
    var index = $scope.data.movies.indexOf(movie);
    $scope.data.movies.splice(index, 1)
    $scope.rating = 0
    $scope.rating = Find.findRating($scope.data.movies, $scope.rating)
  };



});
