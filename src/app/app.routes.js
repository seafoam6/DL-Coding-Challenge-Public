import controller from './app.controller';

export default function routes($stateProvider, $locationProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url:'/',
      component:'app',
      views:{
        "":{
          template: require('./app.html'),
          controller:controller,
          resolve:{
            currentForecast: function(weatherService){
              return weatherService.getCurrentWeather();
            },
            forecast: function(weatherService){
              return weatherService.getForecast();
            }
          }
        }
      }
    });
    $urlRouterProvider.otherwise('/');
}
