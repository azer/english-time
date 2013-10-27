var time = require("./");

it('converts time written in english to epoch', function(){
  expect(time('1 millisecond')).to.equal(1);
  expect(time('375 milliseconds')).to.equal(375);

  expect(time('1 second')).to.equal(1000);
  expect(time('second and second')).to.equal(2000);
  expect(time('5 Minutes')).to.equal(300000);
  expect(time('5 minutes 15 sEConds')).to.equal(315000);
  expect(time('2 Hours, 5 Minutes and 15 Seconds')).to.equal(7515000);

  expect(time('1h')).to.equal(3600000);
  expect(time('20h 5m 15s')).to.equal(72315000);

  expect(time('3 weeks, 5 days, 6 hours')).to.equal(2268000000);
  expect(time('a month')).to.equal(2678400000);
  expect(time('5 months')).to.equal(13392000000);
  expect(time('one year')).to.equal(31557600000);
  expect(time('one year and five months')).to.equal(31557600000 + 13392000000);
});

it('ignores unrecognized patterns', function(){
  expect(time('every 1 millisecond')).to.equal(1);
  expect(time('foo, bar12 a3m 1 milliseconds + 5ms + 4ms hello world')).to.equal(10);
});

it('accepts singular time units without numbers', function(){

  expect(time('millisecond')).to.equal(1);
  expect(time('a millisecond')).to.equal(1);
  expect(time('every millisecond')).to.equal(1);
  expect(time('every minute + 45 seconds')).to.equal(105000);

});
