const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AStwCSOgwdgixI1x1qPpJbBi_kCVIrLwSO7c0zlHsjKeBiITIwfiJI3ojIOJiMezlqqFOUC3PKzPowkG",
  client_secret:
    "EP3SuHhCArBUoaDSOVjTAOHnUdudLIYDG7ThFtKExjkdP8pqbEfUGrgVeEI63igm9szupQOedNdg48FG",
});

module.exports = paypal;
