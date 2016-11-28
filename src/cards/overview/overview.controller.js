let overviewController = function(weatherService, $scope, $attrs){

  $scope.isCelsius = false;
  $scope.toggleCelsius = function(){
     $scope.isCelsius = !$scope.isCelsius;
  }
}

  export default overviewController;
