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
      controllerAs: 'CC'

    };
  })

  function chartController() {
    var options = {
    };

    var responsiveOptions = [
      ['screen and (min-width: 641px) and (max-width: 1024px)', {
        showPoint: false
      }],
      ['screen and (max-width: 640px)', {
        showLine: false,
        }
      ]
    ];

    /* Initialize the chart with the above settings */
    new Chartist.Line('#my-chart', this.data, options, responsiveOptions);

  }
})();
