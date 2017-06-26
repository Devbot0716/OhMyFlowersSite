angular.module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home')//sends customer to this page as the default

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './views/home.html'
      })

      .state('prices', {
        url: '/prices',
        templateUrl: './views/prices.html'
      })

      .state('contacts', {
        url: '/contacts',
        templateUrl: './views/contacts.html'
      })

      .state('about', {
        url: '/about',
        templateUrl: './views/about.html'
      })

      .state('images', {
        url: '/images/:Type',
        templateUrl: './views/images.html',
        controller: 'imagesCtrl'
      })

      .state('details', {
        url: '/details/:id',
        templateUrl: './views/details.html',
        controller: 'detailsCtrl'
      })

      .state('swapi', {
        url: '/swapi',
        templateUrl: './views/swapi.html',
        controller: 'swapiCtrl'
      })

  });
