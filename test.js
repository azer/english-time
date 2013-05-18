var time = require("./");

it('converts time written in english to epoch', function(){
  expect(time('1 millisecond')).to.equal(1);
  expect(time('375 milliseconds')).to.equal(375);

  expect(time('1 second')).to.equal(1000);
  expect(time('5 Minutes')).to.equal(300000);
  expect(time('5 minutes 15 sEConds')).to.equal(315000);
  expect(time('2 Hours, 5 Minutes and 15 Seconds')).to.equal(7515000);

  expect(time('1h')).to.equal(3600000);
  expect(time('20h 5m 15s')).to.equal(72315000);

  expect(time('3 weeks, 5 days, 6 hours')).to.equal(2268000000);
});
