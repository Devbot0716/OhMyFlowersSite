angular.module('app')
  .controller('aboutCtrl', function($scope, mainSvc){
    mainSvc.getQuotes().then(function(response){
      $scope.quotes = response.contents.quotes;
      console.log($scope.quotes)
    })

    mainSvc.getUsers().then(function(response){
      $scope.users = response.results;
      console.log($scope.users);
    })
  })
