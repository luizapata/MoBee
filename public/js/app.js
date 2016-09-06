var app = angular.module('mobee', ['mainController', 'FindService','ngMaterial', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('/', {
      url:'/',
      templateUrl:'views/home.html',
      controller: 'appController'
    })
$urlRouterProvider.otherwise('/');
})

