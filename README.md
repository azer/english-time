## english-time

Parses times written in simple English to unix time.

```js
time = require('english-time')

time('314 milliseconds')
// => 314

time('5 minutes 15 seconds')
// => 315000

time('1 hour, 5 minutes and 15 seconds')
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

![](https://dl.dropboxusercontent.com/s/4fbzg1r7h91doa4/npmel_19.jpg)
