function weatherService($http, apiRestrictionService, localStorageService, locationService, moment, weatherUndergroundKey){


  function currentWeatherUrl(cityState){
    return `http://api.wunderground.com/api/${weatherUndergroundKey}/conditions/q/${cityState.state}/${cityState.city}.json`;
  }

  this.getCurrentWeather = () => {

    //check if enough time between API calls has happened
    // return new Promise(function(resolve, reject){
    //   resolve(function(){
    //
    //   }),
    //   reject((err) => console.log(err))
    // })
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
          console.log(err)
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
        console.error(err)
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
