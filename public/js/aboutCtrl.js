angular.module('app')
  .controller('aboutCtrl', function($scope, mainSvc){
    mainSvc.getQuotes().then(function(response){
      $scope.quotes = response.contents.quotes;
      console.log($scope.quotes)
    })

    mainSvc.getUsers1().then(function(response){
      $scope.users1 = response.results;
      console.log($scope.users1);
    })


    mainSvc.getUsers2().then(function(response){
      $scope.users2 = response.results;
      console.log($scope.users2);
    })


    mainSvc.getUsers3().then(function(response){
      $scope.users3 = response.results;
      console.log($scope.users3);
    })
  })
