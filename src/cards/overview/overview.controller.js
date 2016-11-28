let overviewController = function(weatherService, $scope, $attrs){

  $scope.isCelsius = false;
  $scope.toggleCelsius = function(){
     $scope.isCelsius = !$scope.isCelsius;
  }

  this.$onChanges = function(changes){
    if (changes.currentForecast){
      this.currentForecast = angular.copy(this.currentForecast)
    }
  }

}

  export default overviewController;
