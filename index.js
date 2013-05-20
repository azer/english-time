var parse   = require("./lib/parse").all,
    rewrite = require('./lib/rewrite');

module.exports = function(input){
  return parse(rewrite(input));
};
