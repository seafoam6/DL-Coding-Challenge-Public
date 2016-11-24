function locationService($http,  weatherUndergroundKey,  $log){


  function getLocationUrl(coordinates){
    return `http://api.wunderground.com/api/${weatherUndergroundKey}/geolookup/q/${coordinates.latitude},${coordinates.longitude}.json`;
  }

  this.getCityState = () => {
    return this.getCoordinates()
      .then( coordinates => {
        return $http({
          method:'GET',
          url:getLocationUrl(coordinates),
          cache:true
        })
        .then(data => {
          // return just city and state from location object
          return {city:data.data.location.city,
            state:data.data.location.state};
        })
        .catch((err) => {
          console.log(err)
        })
      })


  }

  //return coordinate object
  this.getCoordinates = () => {
    return new Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position)
        resolve({
          latitude:position.coords.latitude,
          longitude:position.coords.longitude,
          timestamp:position.timestamp
        })
        // send to a reporting service in 'real' app
        reject((err) => console.log(err))
      })
    })
  }


}

export default locationService
