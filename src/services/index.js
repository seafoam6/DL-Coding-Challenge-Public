import apiRestrictionService from './apiRestriction.service';
import locationService from './location.service';
import weatherService from './weather.service';

export default angular.module('dl.services', [])
  .service('apiRestrictionService', apiRestrictionService)
  .service('locationService', locationService)
  .service('weatherService', weatherService)
  .name
