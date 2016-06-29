(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('StationController', StationController);

    function StationController(StationService) {

        var vm = this;
        vm.allStations = StationService.allStations;
       
        vm.setStation = function(currentStation){
            if(vm.currentStation != currentStation)
                vm.currentStation = currentStation;
                vm.currentStation = undefined;
            vm.map = { center: { latitude: currentStation.geoLat, longitude: currentStation.geoLong }, zoom: 16 };

        };

        vm.map = { center: { latitude: 52, longitude: 5 }, zoom: 8 };    

    }


})();