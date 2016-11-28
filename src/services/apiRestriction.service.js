function apiRestrictionService(localStorageService, moment){

  this.setTime = (apiName) => {

    // get current time
    let now = moment();

    // save to local storage
    localStorageService.set(apiName, now)

  }

  this.hasItBeenFiveMinutes = (apiName) => {

    let now = moment();

    if (!localStorageService.get(apiName)){
      // if record doesn't exist in storage,
      // record new and allow API call
      this.setTime(apiName);
      return true;
    } else {
      // convert stored string into date object
      let lastCall = moment(localStorageService.get(apiName));

      // allow new API call if it has been 5 minutes
      if (now.diff(lastCall, 'minutes') > 5){
        return true;
      } else {
        return false;
      }
    }

  }

}

export default apiRestrictionService;
