var parse   = require("./lib/parse").all,
    units   = require('./lib/units'),
    rewrite = require('./lib/rewrite');

module.exports = function(input, customUnits){
  return parse(rewrite(input), customUnits || units);
};

module.exports.units = units;
