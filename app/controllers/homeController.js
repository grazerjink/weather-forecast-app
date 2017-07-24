myApp.controller('homeCtrl', ['$scope', '$location', 'cityService', ($scope, $location, cityService) => {
    $scope.city = cityService.city;
    $scope.$watch("city", () => {
        cityService.city = $scope.city;
    })
    $scope.submit = () => {
        $location.path("/forecast");
    }
}])