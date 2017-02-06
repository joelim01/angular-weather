(function() {
  'use strict';

  angular
  .module('app')
  .factory('ChartDataService', ['$filter', function($filter) {

    var chartData = {
      labels: [],
      series: [[],[]]
    };

    return {
      formatData,
      chartData
    }

    function formatData(tempData) {
      var count = 7;
      var lows = [];
      var highs = [];
      for (var i = 0; i < count; i++) {
        var d = new Date();
        d.setDate(d.getDate() + i)
        chartData.labels.push($filter('date')(d, 'EEEE'))
        chartData.series[0].push(tempData.list[i].temp.min)
        chartData.series[1].push(tempData.list[i].temp.max)
      }
      return chartData
    }

  }]);
})();
