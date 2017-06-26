angular.module('app')
  .service('swapiSvc', function($http){

    this.getSwapiInfo = function (name, species){
      console.log('swapi');
      return $http.get('http://swapi.co/api/' + '&name=' + name + '&species=' + species).then(function(response){
        return response.data;
      })
    }
  })
