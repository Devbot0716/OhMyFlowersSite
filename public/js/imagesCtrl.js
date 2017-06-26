angular.module('app')
  .controller('imagesCtrl', function($scope, $stateParams, mainSvc){
  console.log($stateParams.Type);
  mainSvc.getImages($stateParams.Type).then(function(response){
    $scope.images = response;
    console.log($scope.images)
  })
})
