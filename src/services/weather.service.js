function weatherService($http, apiRestrictionService, localStorageService, locationService, moment, weatherUndergroundKey, _){


  function currentWeatherUrl(cityState){
    return `http://api.wunderground.com/api/${weatherUndergroundKey}/conditions/q/${cityState.state}/${cityState.city}.json`;
  }

  this.getCurrentWeather = () => {

    //check if enough time between API calls has happened
    if ( apiRestrictionService.hasItBeenFiveMinutes('getCurrentWeather')){
      return locationService.getCityState().then((cityState) => {
        return $http({
          method:'GET',
          url:currentWeatherUrl(cityState),
          cache:true
        })
        .then(data => {
          // extract meaninful info
          return data.data.current_observation
        })
        .then(currentObservation => {

          //record api call time
          apiRestrictionService.setTime('getCurrentWeather')

          //save into local storage
          localStorageService.set('currentWeather', currentObservation)

          return currentObservation;
        })
        .catch((err) => {
          console.error(err)
        })
      });
    } else {
      console.log('getting stored weather')
      return localStorageService.get('currentWeather')
    }


  }


  function forecastUrl(cityState){
    console.log(cityState)
    return `http://api.wunderground.com/api/${weatherUndergroundKey}/forecast/q/${cityState.state}/${cityState.city}.json`;
  }

  this.getForecast = () => {
    //check if enough time between API calls has happened
    // if ( apiRestrictionService.hasItBeenFiveMinutes('getForecast')){
      return locationService.getCityState().then((cityState) => {
        return $http({
          method:'GET',
          url:forecastUrl(cityState),
          cache:true
        })
        .then(data => {
          // removes current day from array, and returns
          return _.drop(data.data.forecast.simpleforecast.forecastday, 1);
        })
        .catch((err) => {
          console.error(err)
        })
      });
    // } else {
    //   return localStorageService.get('getForecast')
    // }
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
