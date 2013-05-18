var units = require('./units'),
    reOne = /(\d+)\s?(\w+)/;

module.exports = {
  all: all,
  one: one
};

function all(input){
  var match, matching, all = [];

  if( ! reAll().test(input)/* || ! /^\d[\w\s\,]+[a-z]$/.test(input) */ ) {
    throw new Error('Invalid time: "' + input + '"');
  }

  match = reAll();

  while( matching = match.exec(input) ){
    all.push(matching[1]);
  }

  return all
    .map(one)
    .reduce(function(a, b){
      return a + b;
    });
}

function lower(str){
  return str.toLowerCase();
}

function one(input){
  var matching, n, unit;

  matching = input.split(reOne);
  n        = matching[1];
  unit     = lower(matching[2]);

  if( ! units[unit] ) {
    throw new Error('Unrecognized time unit: ' + unit + ' Given Input: ' + input);
  }

  return units[unit](parseInt(n));
}

function reAll(){
  return /(\d+\s*\w+)/g;
}
