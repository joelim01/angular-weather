angular.module('app', ['ui.router'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'assets/javascripts/home/home.html',
                    controller: 'HomeController as vm',
                    resolve: {
                      weatherData: function(DataService, $q) {
                        return DataService.getWeather('10013').then (function (response) {
                          var promise = DataService.getExtendedWeather(response.id);
                          return $q.all([response, promise]);
                        });
                      }
                    }
                })
        }
    ])
