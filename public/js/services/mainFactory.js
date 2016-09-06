angular.module('FindService', []).factory('Find', ['$http', function($http) {

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

}]);


