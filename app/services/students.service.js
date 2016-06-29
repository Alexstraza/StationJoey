(function() {
    'use strict';

    angular
        .module('services')
        .service("StationService", StationService);

    function StationService($http) {
        var self = this;

        self.allStations = [
            {name:"Loading..", age:18},
            ];

        self.createStation = function(newStation){
            self.allStations.splice(0, 0, newStation);
        };

        $http.get('data/trainstations.json').then(function(stations){
            self.allStations.length = 0;
            angular.extend(self.allStations, stations.data);
        });
    }
})();
