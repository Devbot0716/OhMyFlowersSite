angular.module('app')
  .controller("mainCtrl", function($scope, mainSvc){

    $scope.recieveFlowerInfo = function(){ //receiving api call data
      mainSvc.getFlowerInfo().then(function(response) {
         $scope.flowers = response.data; //.data
         console.log($scope.flowers)
      })
    }

    $scope.recieveFlowerInfo();
  })
