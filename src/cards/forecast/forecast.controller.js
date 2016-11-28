let forecastController = function( $scope, $attrs){
  this.$onChanges = function(changes){
    if (changes.forecast){
      this.forecast = angular.copy(this.forecast)
    }
  }
}

  export default forecastController;
