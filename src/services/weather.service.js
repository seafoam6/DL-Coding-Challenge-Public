function weatherService($http){

  const apiKey = "6198dbbda6a7e9a0";
  let sampleUrl = `http://api.wunderground.com/api/${apiKey}/conditions/q/CA/San_Francisco.json`

  service.getPermittedPlants = function(){
    return $http({
      method:'GET',
      url:sampleUrl,
      cache:true,
      dataType:'json'
    })
    .then(dataMassage.extract)
    .then((result) =>{
      console.log(result)
      return result;
    })
    .catch((err) => {
      console.log(err)
    })
  }

}
