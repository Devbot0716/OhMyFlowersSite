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

      .state('boutonniere', {
        url: '/boutonniere',
        templateUrl: './views/boutonniere.html'
      })

      .state('bridalBouquet', {
        url: '/bridalBouquet',
        templateUrl: './views/bridalBouquet.html'
      })

      .state('corsage', {
        url: '/corsage',
        templateUrl: './views/corsage.html'
      })

      .state('funeral', {
        url: '/funeral',
        templateUrl: './views/funeral.html'
      })

      .state('everydayFlowers', {
        url: '/everydayFlowers',
        templateUrl: './views/everydayFlowers.html'
      })
  });
