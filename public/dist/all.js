'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home'); //sends customer to this page as the default

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: './views/home.html'
  }).state('prices', {
    url: '/prices',
    templateUrl: './views/prices.html'
  }).state('contacts', {
    url: '/contacts',
    templateUrl: './views/contacts.html'
  }).state('about', {
    url: '/about',
    templateUrl: './views/about.html'
  }).state('images', {
    url: '/images/:Type',
    templateUrl: './views/images.html',
    controller: 'imagesCtrl'
  }).state('details', {
    url: '/details/:id',
    templateUrl: './views/details.html',
    controller: 'detailsCtrl'
  }).state('swapi', {
    url: '/swapi',
    templateUrl: './views/swapi.html',
    controller: 'swapiCtrl'
  });
});
'use strict';

angular.module('app').controller('detailsCtrl', function ($scope, $stateParams, mainSvc) {
  console.log($stateParams.id);
  mainSvc.getDetails($stateParams.id).then(function (response) {
    $scope.details = response;
    console.log($scope.details);
  });
});
'use strict';

angular.module('app').directive('footerDir', function () {
  return {
    templateUrl: './views/footer.html'
  };
});
'use strict';

angular.module('app').directive('headerDir', function () {
  return {
    templateUrl: './views/header.html'
  };
});
'use strict';

angular.module('app').controller('imagesCtrl', function ($scope, $stateParams, mainSvc) {
  console.log($stateParams.Type);
  mainSvc.getImages($stateParams.Type).then(function (response) {
    $scope.images = response;
    console.log($scope.images);
  });
});
"use strict";

angular.module('app').controller("mainCtrl", function ($scope, mainSvc) {

  $scope.recieveFlowerInfo = function () {
    //receiving api call data
    mainSvc.getFlowerInfo().then(function (response) {
      $scope.flowers = response.data; //.data
      console.log($scope.flowers);
    });
  };

  $scope.recieveFlowerInfo();
});
'use strict';

angular.module('app').service('mainSvc', function ($http) {

  var localhost = 'http://localhost:3000';

  this.getFlowerInfo = function () {
    //API Call
    return $http.get(localhost + "/getAll");
  };

  this.getImages = function (type) {
    return $http({
      method: "GET",
      url: localhost + "/getImages/" + type
    }).then(function (response) {
      return response.data;
    });
  };

  this.getDetails = function (ID) {
    return $http({
      method: 'GET',
      url: localhost + '/getDetails/' + ID

    }).then(function (response) {
      return response.data;
    });
  };

  //Create another $http call to /getDetails/ + ID
});
'use strict';

angular.module('app').controller('swapiCtrl', function ($scope, $statParams, swapiSvc) {
  console.log('swapictrl');

  $scope.getSwapiInfo = function (name, species) {
    console.log(name);
    swapiSvc.getSwapiInfo(name, species).then(function (response) {
      console.log(response);
      $scope.swapiInfo = response.name;
    });
  };
});
'use strict';

angular.module('app').service('swapiSvc', function ($http) {

  this.getSwapiInfo = function (name, species) {
    console.log('swapi');
    return $http.get('http://swapi.co/api/' + '&name=' + name + '&species=' + species).then(function (response) {
      return response.data;
    });
  };
});