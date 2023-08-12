const { User } = require("../models");
const { default: axios } = require("axios");

const sendMail = (el) => {
  axios
    .post("https://email-service.digitalenvision.com.au/send-email", {
      email: el.email,
      message: `Happy birthday ${el.firstName} ${el.lastName}`,
    })
    .then((res) => {
      console.log(`Happy birthday ${el.firstName} ${el.lastName}`);
      console.log(res.data);
      const sent = new Date(el.doSent);
      sent.setFullYear(sent.getFullYear() + 1);
      console.log("sent", sent);
      return User.update({ doSent: sent }, { where: { id: el.id } });
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.name);
    });
};


module.exports = sendMail