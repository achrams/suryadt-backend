const cityTimezones = require("city-timezones");
const moment = require("moment/moment");

const timeCheck = (el) => {
  if (cityTimezones.lookupViaCity(el.location)) {
    const located = cityTimezones
      .lookupViaCity(el.location)
      .find((obj) => obj.country == el.country);
    const d = new Date();
    const birthdate = `${new Date(el.birthday).getMonth() + 1}-${new Date(
      el.birthday
    ).getDate()}-${new Date().getFullYear()}`;
    const rightNow = moment(d).tz(located.timezone);
    const birthNow = moment(new Date(birthdate));

    return (
      rightNow.valueOf() >= birthNow.valueOf() &&
      rightNow.valueOf() >= moment(new Date(el.doSent)).valueOf()
    );
  } else {
    const d = new Date();
    const birthdate = `${new Date(el.birthday).getMonth() + 1}-${new Date(
      el.birthday
    ).getDate()}-${new Date().getFullYear()}`;
    const rightNow = moment(d).tz("Asia/Jakarta");
    const birthNow = moment(new Date(birthdate));

    return (
      rightNow.valueOf() >= birthNow.valueOf() &&
      rightNow.valueOf() >= moment(new Date(el.doSent)).valueOf()
    );
  }
};

module.exports = timeCheck;
