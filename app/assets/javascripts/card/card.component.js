(function() {
  angular
  .module('app')
  .component('card', {
    bindings: {
        data: '<'
    },
    templateUrl:'/assets/javascripts/card/_card.html',
    controller: function ($filter) {
      vm = this;
      vm.isExpanded = false
      vm.detailText = "More..."
      vm.weatherIcon = "wi wi-owm-" + vm.data.weather[0].id
      vm.weatherDescription = vm.data.weather[0].main
      vm.currentTemp = vm.data.main.temp
      vm.highTemp = vm.data.main.temp_max
      vm.lowTemp = vm.data.main.temp_min
      vm.windSpeed = vm.data.wind.speed
      vm.humidity = vm.data.main.humidity
      vm.pressure = vm.data.main.pressure
      vm.sunrise = $filter('date')(vm.data.sys.sunrise*1000, 'shortTime')
      vm.sunset = $filter('date')(vm.data.sys.sunset*1000, 'shortTime')
      vm.expand = function() {
        vm.isExpanded = !vm.isExpanded
        vm.detailText == "More..." ? vm.detailText = "Less..." : vm.detailText = "More..."
      }
    }
  })
})()
