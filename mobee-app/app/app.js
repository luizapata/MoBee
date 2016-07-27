var app = angular.module('mobee', []);


app.controller('appController', function($scope, Find){
  
  $scope.data = {
    movies : []
  };

  $scope.film = 'movie title';
  $scope.search = [];
  $scope.rating = 0;

  $scope.findMovie = function(){
    console.log('works')
    if($scope.film.length > 3) {
      Find.getForSearch($scope.film).then(function(res){
        $scope.search = res.Search;
      });
    }    
  };

  $scope.addToMovies = function(title){
    Find.getTitle(title).then(function(res){
      if(!Find.findInArray($scope.data.movies, res)){
        $scope.data.movies.push(res);
      }else{
        alert('you already selected this movie')
      }
      $scope.rating = Find.findRating($scope.data.movies, $scope.rating)
      console.log('Rating',$scope.rating)
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


app.factory('Find', function ($http) {

  var getForSearch = function(title){
    return $http({
      method: 'GET',
      url: "http://www.omdbapi.com/?plot=short&r=json&s="+ title,
      contentType: 'application/json'
    }).then(function successCallback(response) {
      return response.data;
    }, function errorCallback(response) {
      return console.log("Error movie not found");
    });
  }

  var getTitle = function(title){
    return $http({
      method: 'GET',
      url: "http://www.omdbapi.com/?plot=short&r=json&t="+ title,
      contentType: 'application/json'
    }).then(function successCallback(response) {
      return response.data;
    }, function errorCallback(response) {
      return console.log("Error movie not found");
    });
  };

  var findInArray = function(arr, obj){
    if(arr.length > 0){
      for (var i = 0; i < arr.length; i++) {
        if(arr[i].Title === obj.Title ){
          return true
        }
      }
    }
    return false
  };

    var findRating = function(arr, current){
      for (var i = 0; i < arr.length; i++) {
        if(arr[i].imdbRating > current ){
          return arr[i].imdbRating
        }
      }
    return current
    }


  return {
    getForSearch: getForSearch,
    getTitle: getTitle,
    findInArray: findInArray,
    findRating: findRating
  };

});


