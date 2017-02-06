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
      axisY: {
        labelInterpolationFnc: function(value) {
          return value + '&degF';
        },
        onlyInteger: true
      },
        plugins: [Chartist.plugins.tooltip({
          transformTooltipTextFnc: function(text) {
            return text + "&degF"
          }
        })]
    };

    var responsiveOptions = [
      ['screen and (min-width: 641px) and (max-width: 720px)', {
        showPoint: false
      }],
      ['screen and (max-width: 640px)', {
        showLine: false,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }]
    ];

    /* Initialize the chart with the above settings */
    new Chartist.Line('#my-chart', this.data, options, responsiveOptions);

  }
})();
