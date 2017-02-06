(function() {
  angular
  .module('app')
  .directive('chart', function() {
    return {
      scope: {
          data: '='
        },
      bindToController: true,
      templateUrl: '/assets/javascripts/chart/_chart.html',
      controller: chartController,
      controllerAs: 'vm'

    };
  })

  function chartController() {
    vm = this;
    var options = {
      axisX: {

      }
    };

    var responsiveOptions = [
      ['screen and (min-width: 641px) and (max-width: 1024px)', {
        showPoint: false,
        axisX: {
          labelInterpolationFnc: function(value) {
            return 'Week ' + value;
          }
        }
      }],
      ['screen and (max-width: 640px)', {
        showLine: false,
        axisX: {
          labelInterpolationFnc: function(value) {
            return 'W' + value;
          }
        }
      }]
    ];

    /* Initialize the chart with the above settings */
    new Chartist.Line('#my-chart', vm.data, options, responsiveOptions);

  }
})();
