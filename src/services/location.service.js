function locationService($http,  googleLocationKey,  $log){

  function getUrl(coordinates){
    return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=${googleLocationKey}`
  }


  // public methods

  this.getCityState = () => {

    getCoordinates()
      .then((coordinates) =>{

        $http({
          method:'GET',
          url:getUrl(coordinates),
          cache:true
        }).then((data) => console.log('FROM GOOGLE', data))

      })
      .catch((err) => console.log(err))
  }



  // private methods
  function getCoordinates(){
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
