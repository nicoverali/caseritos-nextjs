const withPWA = require("next-pwa");
const API_IMAGES_DOMAIN = process.env.API_IMAGES_DOMAIN;

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [API_IMAGES_DOMAIN],
  },
  pwa: {
    dest: "public",
    register: true,
  },
});
