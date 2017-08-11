angular.module('app')
  .service('mainSvc', function($http){

    var localhost = 'http://localhost:8080';

    this.getFlowerInfo = function(){ //API Call
      return $http.get(localhost + "/getAll")
    }

    this.getImages = function(type){
      return $http ({
        method: "GET",
        url: localhost + "/getImages/" + type
      }).then(function(response){
        return response.data;
      })
    }

    this.getDetails = (ID)=>{
      return $http ({
        method: 'GET',
        url: localhost + '/getDetails/' + ID

      }).then(function(response){
        return response.data;
      })
    }


    this.getQuotes = function(){
      return $http ({
        method: 'GET',
        url: 'http://quotes.rest/qod.json'
      }).then(function(response){
        return response.data;
      })
    }

    this.getUsers1 = ()=>{
      return $http ({
        method: 'GET',
        url: 'https://randomuser.me/api/'
      }).then(function(response){
        return response.data;
      })
    }

    this.getUsers2 = ()=>{
      return $http ({
        method: 'GET',
        url: 'https://randomuser.me/api/'
      }).then(function(response){
        return response.data;
      })
    }

    this.getUsers3 = ()=>{
      return $http ({
        method: 'GET',
        url: 'https://randomuser.me/api/'
      }).then(function(response){
        return response.data;
      })
    }

  })
