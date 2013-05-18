var seconds = x(milliseconds, 1000),
    minutes = x(seconds, 60),
    hours   = x(minutes, 60),
    days    = x(hours, 24),
    weeks   = x(days, 7);

module.exports = {
  m            : milliseconds,
  ms           : milliseconds,
  millisec     : milliseconds,
  millisecs    : milliseconds,
  millisecond  : milliseconds,
  milliseconds : milliseconds,

  s            : seconds,
  sec          : seconds,
  secs         : seconds,
  seconds      : seconds,
  second       : seconds,

  m            : minutes,
  min          : minutes,
  mins         : minutes,
  minute       : minutes,
  minutes      : minutes,

  h            : hours,
  hour         : hours,
  hours        : hours,

  d            : days,
  day          : days,
  days         : days,

  w            : weeks,
  week         : weeks,
  weeks        : weeks
};

function milliseconds(n){
  return n;
}

function x(fn, multiples){
  return function(n){
    return fn(n) * multiples;
  };
}
