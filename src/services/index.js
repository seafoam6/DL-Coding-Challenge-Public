import weatherService from './weather.service';
import locationService from './location.service';

export default angular.module('dl.services', [])
  .service('weatherService', weatherService)
  .service('locationService', locationService)
  .name
