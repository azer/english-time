var singular = ['millisecond',
                'second',
                'minute',
                'hour',
                'day',
                'week',
                'month',
                'year'];

var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

module.exports = rewrite;

function rewrite(input, customSingular, customNumbers){
  var re = new RegExp('((?:[a-z]\\s)|^)(' + (customNumbers || numbers).join('|') + ')(?=\\s|$)', 'g');

  var output = input.replace(re, function (_, prefix, n) {
    var value = numbers.indexOf(n);
    return prefix + (value == -1 ? n : value);
  });

  re = new RegExp('((?:[a-z]\\s)|^)(' + (customSingular || singular).join('|') + ')(?=\\s|$)', 'g');

  output = output.replace(re, function(_, prefix, unit){
    return prefix + '1 ' + unit;
  });

  return output;
}
