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
        var day = $filter('date')(d, 'EEEE')
        chartData.labels.push(day)
        chartData.series[0].push({meta: `${day}, ${tempData.list[i].weather[0].main}, low of `, value: tempData.list[i].temp.min})
        chartData.series[1].push({meta: `${day}, ${tempData.list[i].weather[0].main}, high of `, value: tempData.list[i].temp.max})
      }
      return chartData
    }

  }]);
})();
