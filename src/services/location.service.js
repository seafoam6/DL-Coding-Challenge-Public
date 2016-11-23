function locationService($http,  googleLocationKey,  $log){


  this.getCoordinates = () => {
    return new Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position)
        resolve({
          latitude:position.coords.latitude,
          longitude:position.coords.longitude,
          timestamp:position.timestamp
        })
        reject((err) => console.log(err))
      })
    })
  }
}

export default locationService
