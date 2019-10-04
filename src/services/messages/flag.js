const countries = require('../../../resources/countries.json');

module.exports.getCountryFlagEmoji = (countryCode) => (
  countries[countryCode]
    ? `:flag_${countries[countryCode]}:`
    : ''
);
