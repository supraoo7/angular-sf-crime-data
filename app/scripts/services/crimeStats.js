'use strict';

angular.module('angularCrimeStatsApp')
.factory('crimeStats', ['$http', function($http){
  return {
    range: function(offset, limit){
      return $http({
        method: 'GET',
        url: 'https://data.sfgov.org/resource/tmnf-yvry.json?$limit=' + limit + '&$offset=' + offset + '&$order=date DESC&$$app_token=EwKaD5HPl0OtEY1lrnQyudPdC'
      }).then(function successCallback(response){
        return response.data;
      }, function errorCallback(error){
        return console.log(error);
      });
    },

    district: function(district, limit){
      /* values of distrct so far
       * bayview
       * central
       * ingleside
       * mission
       * northern
       * park
       * richmond
       * southern
       * taraval
       * tenderloin
       */
      return $http({
        method: 'GET',
        url: 'https://data.sfgov.org/resource/tmnf-yvry.json?pddistrict=' + district + '&$limit=' + limit + '&$order=date DESC&$$app_token=EwKaD5HPl0OtEY1lrnQyudPdC'
      }).then(function successCallback(response){
        return response.data;
      }, function errorCallback(error){
        return console.log(error);
      }); 
    }
  };
  // return $http.get('https://data.sfgov.org/resource/tmnf-yvry.json?$limit=50&$offset=0&$$app_token=EwKaD5HPl0OtEY1lrnQyudPdC').success(function(data){
  //   console.log('success on api');
  //   // console.log(data);
  //   // console.log(data[999].address);

  //   return data;
  // }).error(function(error){
  //   console.log('Error');
  //   console.log(error);
  // });
  // return $http.get('../../data/tmnf-yvry.json').success(function(data){
  //   console.log('success on localhost api');
  //   // console.log(data);
  //   // console.log(data[999].address);

  //   return data;
  // }).error(function(error){
  //   console.log(error);
  // });
}]);