let appController = function( $scope, $state, currentForecast, forecast){
  // pass resolves to scope for children nodes
  $scope.currentForecast = currentForecast;
  $scope.forecast = forecast;
}

export default appController;
