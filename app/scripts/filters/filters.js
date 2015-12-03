angular.module('angularCrimeStatsApp')
.filter('formatTime', function ($filter) {
  return function (time) {
    var parts = time.split(':');
    var date = new Date(0, 0, 0, parts[0], parts[1], 0);
    return $filter('date')(date, 'h:mm a');
  };
});