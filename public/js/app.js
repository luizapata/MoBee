var app = angular.module('mobee', ['mainController', 'homePageController', 'FindService','ngMaterial', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('/home', {
      url:'/home',
      templateUrl:'views/homePage.html',
      controller: 'homePage'
    })

    .state('/compare', {
      url:'/compare',
      templateUrl:'views/home.html',
      controller: 'appController'
    })
$urlRouterProvider.otherwise('/home');
})

