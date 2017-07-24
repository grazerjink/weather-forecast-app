// Định tuyến ứng dụng
myApp.config(($routeProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: "assets/views/home.html",
        controller: "homeCtrl"
    })
    .when('/forecast', {
        templateUrl: "assets/views/forecast.html",
        controller: "forecastCtrl"
    })
    .when('/forecast/:cnt', {
        templateUrl: "assets/views/forecast.html",
        controller: "forecastCtrl"
    })
})