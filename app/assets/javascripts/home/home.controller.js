(function() {
  'use strict';

  angular
  .module('app')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['DataService', 'ChartDataService', 'weatherData'];

  function HomeController(DataService, ChartDataService, weatherData) {
    var vm = this;
    vm.extended = false;
    vm.currentWeather = weatherData[0];
    vm.extendedWeather = weatherData[1];
    vm.controller = "this is the home controller"
    vm.chartData
    activate();

    function activate() {
      vm.chartData=ChartDataService.formatData(vm.extendedWeather);
    };

  }
})();
