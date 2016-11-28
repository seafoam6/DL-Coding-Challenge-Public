import controller from './overview.controller.js';

let overviewComponent = {
  bindings:{
    currentForecast:'<'
  },
  template:require('./overview.template.html'),
  // require:{
  //   parent: '^^app'
  // },
  controller:controller
}

export default overviewComponent;
