import controller from './overview.controller.js';

let overviewComponent = {
  bindings: {
    currentForecast: '<'
  },
  transclude:true,
  template:require('./overview.template.html'),
  controller:controller
}

export default overviewComponent;
