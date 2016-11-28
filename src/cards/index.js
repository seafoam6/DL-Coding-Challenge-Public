import forecast from './forecast/forecast.component';
import overview from './overview/overview.component';
import tenDay from './tenDay/tenDay.component';

export default angular.module('dl.cards', [])
  .component('overviewCard', overview)
  .component('forecastCard', forecast)
  .component('tenDayCard', tenDay)
  .name;
