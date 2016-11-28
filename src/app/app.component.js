import appController from './app.controller.js';

let appComponent = {
  bindings:{
    currentForecast:'<'
  },
  controller: appController,
  template: require('./app.html')

};

export default appComponent
