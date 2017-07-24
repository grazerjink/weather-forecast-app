// Định nghĩa các directive
myApp.directive("weatherReport", () => {
    return {
        restrict: "E",
        templateUrl: "assets/views/weather-report.html",
        replace: true,
        scope: {
            weatherDay: "=",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
})