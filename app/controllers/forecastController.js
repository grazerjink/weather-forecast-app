myApp.controller('forecastCtrl', ['$scope', '$routeParams', 'cityService', 'weatherService', ($scope, $routeParams, cityService, weatherService) => {
    
    $scope.city = cityService.city;
    $scope.days = $routeParams.cnt || 2;
    
    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
    
    console.log($scope.weatherResult);
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
    
    
}]);