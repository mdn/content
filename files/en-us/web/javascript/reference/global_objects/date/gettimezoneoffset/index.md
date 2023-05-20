---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getTimezoneOffset
---

{{JSRef}}

The **`getTimezoneOffset()`** method of {{jsxref("Date")}} instances returns the difference, in minutes, between this date as evaluated in the UTC time zone, and the same date as evaluated in the local time zone.

{{EmbedInteractiveExample("pages/js/date-gettimezoneoffset.html")}}

## Syntax

```js-nolint
getTimezoneOffset()
```

### Return value

A number representing the difference, in minutes, between the date as evaluated in the UTC time zone and as evaluated in the local time zone. The actual local time algorithm is implementation-defined, and the return value is allowed to be zero in runtimes without appropriate data. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Description

`date.getTimezoneOffset()` returns the difference, in minutes, between `date` as evaluated in the UTC time zone and as evaluated in the local time zone — that is, the time zone of the host system in which the browser is being used (if the code is run from the Web in a browser), or otherwise the host system of whatever JavaScript runtime (for example, a Node.js environment) the code is executed in.

### Negative values and positive values

The number of minutes returned by `getTimezoneOffset()` is positive if the local time zone is behind UTC, and negative if the local time zone is ahead of UTC. For example, for UTC+10, `-600` will be returned.

| Current time zone | Return value |
| ----------------- | ------------ |
| UTC-8             | 480          |
| UTC               | 0            |
| UTC+3             | -180         |

### Varied results in Daylight Saving Time (DST) regions

In a region that annually shifts in and out of Daylight Saving Time (DST), as `date` varies, the number of minutes returned by calling `getTimezoneOffset()` can be non-uniform.

> **Note:** `getTimezoneOffset()`'s behavior will never differ based on the time when the code is run — its behavior is always consistent when running in the same region. Only the value of `date` affects the result.

In most implementations, the [IANA time zone database](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) (tzdata) is used to precisely determine the offset of the local timezone at the moment of the `date`. However, if such information is unavailable, an implementation may return zero.

## Examples

### Using getTimezoneOffset()

```js
// Create a Date instance for the current time
const currentLocalDate = new Date();
// Create a Date instance for 03:24 GMT-0200 on May 1st in 2016
const laborDay2016at0324GMTminus2 = new Date("2016-05-01T03:24:00-02:00");
currentLocalDate.getTimezoneOffset() ===
  laborDay2016at0324GMTminus2.getTimezoneOffset();
// true, always, in any timezone that doesn't annually shift in and out of DST
// false, sometimes, in any timezone that annually shifts in and out of DST
```

### getTimezoneOffset() and DST

In regions that use DST, the return value may change based on the time of the year `date` is in. Below is the output in a runtime in New York, where the timezone is UTC-05:00.

```js
const nyOffsetSummer = new Date("2022-02-01").getTimezoneOffset(); // 300
const nyOffsetWinter = new Date("2022-08-01").getTimezoneOffset(); // 240
```

### getTimezoneOffset() and historical data

Due to historical reasons, the timezone a region is in can be constantly changing, even disregarding DST. For example, below is the output in a runtime in Shanghai, where the timezone is UTC+08:00.

```js
const shModernOffset = new Date("2022-01-27").getTimezoneOffset(); // -480
const shHistoricalOffset = new Date("1943-01-27").getTimezoneOffset(); // -540
```

This is because during the [Sino-Japanese War](https://en.wikipedia.org/wiki/Second_Sino-Japanese_War) when Shanghai was under Japanese control, the timezone was changed to UTC+09:00 to align with Japan's (in effect, it was a "year-round DST"), and this was recorded in the IANA database.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date")}}
