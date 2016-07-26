 var app = angular.module('mobee', []);


app.controller('appController', function($scope, Find){
  $scope.data = {
    movies : []
  }
  $scope.film = 'movie title';
  $scope.search = [];

  $scope.findMovie = function(){
    console.log("Testing", $scope.search);
    if($scope.film.length > 4) {
      Find.getForSearch($scope.film).then(function(res){
        $scope.search = res.Search;
      });
    }    
    // $scope.film = '';
  }

  $scope.addToMovies = function(title){
    console.log(title)
    Find.getTitle(title).then(function(res){
        $scope.data.movies.push(res);
      });
    $scope.film = ''
    $scope.search = []
  }
})
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

  }

  return {
    getForSearch: getForSearch,
    getTitle: getTitle

  };

});

// app.directive('myDirective', function() {
//   return {
//     require: 'ngModel'
//   }
// })

