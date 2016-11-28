let appController = function(weatherService, $scope){
  this.currentForecast = {temp_f:44};
  this.$onInit = () => {

    weatherService.getCurrentWeather()
    // .then(function(data){
    //      $scope.$apply(function(){
    //        console.log(data)
    //        $scope.currentForcast = data;
    //      })
    //   })
  }

}

export default appController;
