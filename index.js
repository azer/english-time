var parse   = require("./lib/parse").all,
    units   = require('./lib/units'),
    rewrite = require('./lib/rewrite');

module.exports = function(input, customUnits, customSingularUnits){
  if (typeof input == 'number') return input;

  return parse(rewrite(input, customSingularUnits), customUnits || units);
};

module.exports.units = units;
