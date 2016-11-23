function weatherService($http,  weatherUndergroundKey,  $log){


  function getUrl(){
    return 'http://api.wunderground.com/api/6198dbbda6a7e9a0/conditions/q/CA/San_Francisco.json';
  }

  this.getWeather = () => {
    return $http({
      method:'GET',
      url:getUrl(),
      cache:true
    })
    .then(data => {
      console.log(data);

      return data;
    })
    .catch((err) => {
      console.log(err)
    })
  }



}

export default weatherService
