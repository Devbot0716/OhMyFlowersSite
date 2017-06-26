angular.module('app')
  .controller('detailsCtrl', function($scope, $stateParams, mainSvc){
    console.log($stateParams.id)
    mainSvc.getDetails($stateParams.id).then(function(response){
      $scope.details = response;
      console.log($scope.details)
    })
  })
