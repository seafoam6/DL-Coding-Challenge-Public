import controller from './tenDay.controller.js';

let tenDayComponent = {
  bindings:{
    tenDay:'<'
  },
  template:require('./tenDay.template.html'),
  controller:controller
}

export default tenDayComponent;
