angular.module('homePageController',[])

.controller('homePage', function($scope, $location){
  $scope.goToComapre = function(){
    $location.url('/compare')
  }
})
