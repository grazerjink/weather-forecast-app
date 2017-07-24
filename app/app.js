var myApp = angular.module("weatherApp", ['ngRoute','ngResource']);

myApp.run(['$rootScope', ($rootScope)=> {
    $rootScope.$on("$locationChangeStart", (event,next,current) => {
        console.log("Old: " + current);
        console.log("New: " + next);
    })
}])