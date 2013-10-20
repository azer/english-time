## english-time [![Build Status](https://travis-ci.org/azer/english-time.png)](https://travis-ci.org/azer/english-time)

Parses times written in simple English to unix time.

```js
time = require('english-time')

time('314 milliseconds')
// => 314

time('5 minutes 15 seconds')
// => 315000

time('an hour and a minute')
// => 3660000

time('1 Hour, 5 Minutes And 15 Seconds')
// => 3915000

time('2h 15m 15s')
// => 3915000

time('3 weeks, 5 days, 6 hours')
// => 2268000000

time('3 weeks, 5d 6h')
// => 2268000000

```

See [List of Recognized Unit Aliases](#ref) and tests for more info.

## Install

```bash
$ npm install english-time
```

<a name="ref" />
## List of Recognized Unit Aliases

**Milliseconds**

* ms
* millisec
* millisecs
* milliseconds
* millisecond

**Second(s)**

* s
* sec
* secs
* seconds
* second

**Minute(s)**

* m
* min
* mins
* minute
* minutes

**Hour(s)**

* h
* hour
* hours

**Day(s)**

* d
* day
* days

**Week(s)**

* w
* week
* weeks

## Translations

* [turkish-time](http://github.com/azer/turkish-time)
* [kurdish-time](http://github.com/azer/kurdish-time)

## Tools & libraries based on english-time

* [shell-jobs](http://github.com/azer/shell-jobs)
* [after-time](http://github.com/azer/after-time)
* [run-after](http://github.com/azer/run-after)
