var reOne = /(\d+)\s?(\w+)/;

module.exports = {
  all: all,
  one: one
};

function all (input, units){
  var match, matching, all = [];

  if( ! reAll().test(input) || ! /\d+[\w\s\,]+/.test(input) || ! /\w$/.test(input) ) {
    throw new Error('Invalid time: "' + input + '"');
  }

  match = reAll();

  while( matching = match.exec(input) ){
    all.push(matching[1]);
  }

  var i = all.length;
  while (i--) {
    all[i] = one(all[i], units);
  }

  all = all.filter(isNotNil);

  if(all.length == 0) return 0;

  return all.reduce(function(a, b){
    return a + b;
  });
}

function isNotNil (el){
  return !!el;
}

function lower (str){
  return str.toLowerCase();
}

function one (input, units){
  var matching, n, unit;

  matching = input.split(reOne);
  n        = matching[1];
  unit     = lower(matching[2]);

  if( ! units[unit] ) return;

  return units[unit](parseInt(n));
}

function reAll (){
  return /(\d+\s*\w+)/g;
}
