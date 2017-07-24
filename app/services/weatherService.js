myApp.service("weatherService",  ['$resource', function($resource) {
    
    this.getWeather = (city, days) => {
        var weatherAPI = $resource("//api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
        var weatherResult = weatherAPI.get({ 
            q: city, 
            cnt: days, 
            lang: "vi", 
            units: "metric",
            appid: "6f0e6c81ed8acafa10c11a38d13d8318"
        });
        
        return weatherResult;
    }
}])
