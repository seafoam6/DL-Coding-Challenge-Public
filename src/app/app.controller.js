let appController = function( $scope, $state, currentForecast, forecast, tenDay){
  // pass resolves to scope for children nodes
  $scope.currentForecast = currentForecast;
  $scope.forecast = forecast;
  //console.log('ten day in app controller', tenDay)
  $scope.tenDay = tenDay;
}

export default appController;
