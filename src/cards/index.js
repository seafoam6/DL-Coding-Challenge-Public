import forecast from './forecast/forecast.component';
import overview from './overview/overview.component';

export default angular.module('dl.cards', [])
  .component('overviewCard', overview)
  .component('forecastCard', forecast)
  .name;
