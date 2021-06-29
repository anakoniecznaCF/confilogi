const withImages = require("next-images");
module.exports = withImages({
  env: {
    GOOGLEMAPS_API_KEY: process.env.GOOGLEMAPS_API_KEY,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    EMAILJS_TEMPLATE_APPLICATION: process.env.EMAILJS_TEMPLATE_APPLICATION,
    EMAILJS_TEMPLATE_CONTACT: process.env.EMAILJS_TEMPLATE_CONTACT,
    EMAILJS_TEMPLATE_CARRIER: process.env.EMAILJS_TEMPLATE_CARRIER,
  },
});
