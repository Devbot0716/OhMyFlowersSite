angular.module('app')
  .controller('detailCtrl', function($scope, $stateParams, mainSvc){
  console.log($stateParams.Type);
  mainSvc.getImages($stateParams.Type).then(function(response){
    $scope.images = response;
  })
})
