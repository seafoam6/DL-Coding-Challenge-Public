function locationService($http,  googleLocationKey,  $log){

  //for testing complex city names
  // coordinates for Sault St. Marie
  var sault = {
    latitude:46.52185799999999,
    longitude:-84.346089600000
  }

  //private methods

  function getUrl(coordinates){
    return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=${googleLocationKey}`
  }


  // public methods

  this.getCity = () => {
    getCoordinates()
      .then((coordinates) =>{
        $http({
          method:'GET',
          url:getUrl(coordinates),
          cache:true
        }).then((data) => {
          //extract City Name
          let cityNameRaw = _.get(data, 'data.results[1].address_components[0].long_name');
          // format city for weather underground
          let cityNameFormatted = cityNameRaw.toLowerCase().replace(/ /g, '_');
          //console.log(cityNameFormatted)
          return cityNameFormatted;
        })

      })
      .catch((err) => console.log(err))
  }

  this.getCoordinates = () => {
    console.log('ugh')
    return new Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(function(position) {
        //console.log(position)
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
