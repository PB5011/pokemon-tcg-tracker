const { initDatabases } = require('./database');
const { updateSets } = require('./sets');
const { notify, handler } = require('../communicate');

require('./cards');

module.exports = {
  initDatabases,
  updateSets
};
