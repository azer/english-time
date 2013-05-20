var singular = ['millisecond',
                'second',
                'minute',
                'hour',
                'day',
                'week'];

module.exports = rewrite;

function rewrite(input){
  var re = new RegExp('((?:[a-z]\\s)|^)(' + singular.join('|') + ')(?=\\s|$)');
  return input.replace(re, function(_, prefix, unit){
    return prefix + '1 ' + unit;
  });
}
