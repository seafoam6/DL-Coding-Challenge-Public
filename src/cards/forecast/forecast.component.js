import controller from './forecast.controller.js';

let forecastComponent = {
  bindings:{
    forecast:'<'
  },
  template:require('./forecast.template.html'),
  controller:controller
}

export default forecastComponent;
