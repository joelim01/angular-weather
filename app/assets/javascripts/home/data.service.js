(function() {
  'use strict';

  angular
  .module('app')
  .factory('DataService', ['$http', function($http) {

    var currentPath = "http://api.openweathermap.org/data/2.5/weather?zip="
    var extendedPath = "http://api.openweathermap.org/data/2.5/forecast/daily?id="
    var countryCode = "us"
    var cnt = "&cnt=7"
    var unit = "&units=imperial"
    var apiKey = '&APPID=efd13b6ef23a2e2820ab833ff97ce261'
    var currentWeather = {}

    return {
      getWeather,
      getExtendedWeather
    }

    function getWeather(zip) {
      return $http.get(currentPath+zip+","+countryCode+unit+apiKey).then(function(response) {
        return response.data;
      }).catch(function(error) {
        console.log(error)
      })
    }

    function getExtendedWeather(cityId) {
      return $http.get(extendedPath+cityId+unit+cnt+apiKey).then(function(response) {
        return response.data;
      }).catch(function(error) {
        console.log(error)
      })
    }

  }]);
})();
