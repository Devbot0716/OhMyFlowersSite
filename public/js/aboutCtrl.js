angular.module('app')
  .controller('aboutCtrl', ($scope, mainSvc)=>{
    mainSvc.getQuotes().then((response)=>{
      $scope.quotes = response.contents.quotes;
      console.log($scope.quotes)
    })
  })
