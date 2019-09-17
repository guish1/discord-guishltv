const { keyBy } = require('lodash');

const MATCHES = [

];

const MATCHES_MAP = keyBy(MATCHES);

module.exports = {
  MATCHES,
  MATCHES_MAP,
};
