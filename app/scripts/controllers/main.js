'use strict';

/**
 * @ngdoc function
 * @name angularCrimeStatsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularCrimeStatsApp
 */
angular.module('angularCrimeStatsApp')
  .controller('MainCtrl', function ($scope, crimeStats) {
    $scope.offsetCount = 0;
    $scope.markers = [];
    $scope.district = null;

    function getCrimeData(factory, offset){
      console.log('getCrimeData');

      var crimeData = factory.range(offset, 50);
      crimeData.then(function successCallback(data){
        // console.log('in main ctrl ' + data);
        populateMap(data);
      });
    }

    function getDistrictData(factory, district, limit){
      console.log('getDistrictData');

      var crimeData = factory.district(district, limit);
      crimeData.then(function successCallback(data){
        // console.log('in main ctrl ' + data);
        populateMap(data);
      });
    }

    function populateMap(data){
      angular.forEach(data, function(value, index){
        console.log(value);
        var marker = {}; 
        marker.id = index;
        marker.latitude = value.location.latitude;
        marker.longitude = value.location.longitude;
        marker.date = value.date;
        marker.time = value .time;
        marker.district = value.pddistrict;
        marker.address = value.address;
        marker.category = value.category;
        marker.description = value.descript;
        marker.resolution = value.resolution;

        $scope.markers.push(marker);
      });
    }

    getCrimeData(crimeStats, $scope.offsetCount);

    $scope.map = {
      center: {
        latitude: 37.7578,
        longitude: -122.4407
      },
      zoom: 13
    };

    $scope.loadNextSetOfData = function(){
      $scope.markers = [];
      $scope.offsetCount += 50;
      // console.log('offsetCount ' + $scope.offsetCount);
      getCrimeData(crimeStats, $scope.offsetCount);
    };

    $scope.loadDistrict = function(district, limit){
      console.log('called loadDistrict');
      console.log('district is ' + district);

      $scope.markers = [];
      console.log('loadDistrict clicked');
      getDistrictData(crimeStats, district, limit);
    };
  });