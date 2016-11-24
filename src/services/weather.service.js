function weatherService($http,  weatherUndergroundKey,  $log, locationService){


  function currentWeatherUrl(cityState){
    return `http://api.wunderground.com/api/${weatherUndergroundKey}/conditions/q/${cityState.state}/${cityState.city}.json`;
  }

  this.getCurrentWeather = () => {
    return locationService.getCityState().then((cityState) => {
      return $http({
        method:'GET',
        url:currentWeatherUrl(cityState),
        cache:true
      })
      .then(data => {
        return data.data.current_observation;
      })
      .catch((err) => {
        console.log(err)
      })
    });
  }


  function forecastUrl(cityState){
    console.log(cityState)
    return `http://api.wunderground.com/api/${weatherUndergroundKey}/forecast/q/${cityState.state}/${cityState.city}.json`;
  }

  this.getForecast = () => {
    return locationService.getCityState().then((cityState) => {
      return $http({
        method:'GET',
        url:forecastUrl(cityState),
        cache:true
      })
      .then(data => {
        return data.data;
      })
      .catch((err) => {
        console.log(err)
      })
    });
  }


  function tenDayWeatherUrl(cityState){
    console.log(cityState)
    return `http://api.wunderground.com/api/${weatherUndergroundKey}/forecast10day/q/${cityState.state}/${cityState.city}.json`;
  }

  this.getTenDayWeather = () => {
    return locationService.getCityState().then((cityState) => {
      return $http({
        method:'GET',
        url:tenDayWeatherUrl(cityState),
        cache:true
      })
      .then(data => {
        return data.data;
      })
      .catch((err) => {
        console.log(err)
      })
    });
  }

}

export default weatherService
