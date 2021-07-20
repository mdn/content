---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getTimezoneOffset
---
{{JSRef}}

The **`getTimezoneOffset()`** method returns the difference, in minutes, between a date as evaluated in the UTC time zone, and the same date as evaluated in the local time zone.

{{EmbedInteractiveExample("pages/js/date-gettimezoneoffset.html")}}

## Syntax

```js
getTimezoneOffset()
```

### Return value

The difference, in minutes, between _date_, as evaluated in the UTC time zone, and as evaluated in the local time zone.

## Description

`date.getTimezoneOffset()` returns the difference, in minutes, between _date_ as evaluated in the UTC time zone, and _date_ as evaluated in the local time zone — that is, the time zone of the host system in which the browser is being used (if the code is run from the Web in a browser), or otherwise the host system of whatever JavaScript runtime (for example, a Node.js environment) the code is executed in.

### Negative values and positive values

The number of minutes returned by `getTimezoneOffset()` is positive if the local time zone is behind UTC, and negative if the local time zone is ahead of UTC. For example, for UTC+10, `-600` will be returned.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Current time zone</th>
      <th scope="col">UTC-8</th>
      <th scope="col">UTC</th>
      <th scope="col">UTC+3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Return Value</th>
      <td>480</td>
      <td>0</td>
      <td>-180</td>
    </tr>
  </tbody>
</table>

### Varied results in Daylight Saving Time (DST) time zones

In a time zone that annually shifts in and out of Daylight Saving Time (DST), the number of minutes returned by calling `getTimezoneOffset()` can vary.

Consider a given local time zone and a date _date1_ that are both in DST, and consider _minutes_, the number of minutes returned by calling `date1.getTimezoneOffset()`; then:

- If the local time zone is currently in DST, but a given date _date2_ is _not_ in DST, then the number of minutes returned by `date2.getTimezoneOffset()` is _minutes_ ± 60.
- If the local time zone is _not_ currently in DST, but a given date _date3_ is in DST, then the number of minutes returned by `date3.getTimezoneOffset()` is _minutes_ ± 60.

In a time zone that doesn’t annually shift in and out of Daylight Saving Time (DST), the number of minutes returned by calling `getTimezoneOffset()` always returns the same number of minutes, regardless of the _date_ instance it’s called from.

> **Note:** The above description is a simplification. In implementations, the {{InterWiki("wikipedia", "Daylight_saving_time#IANA_time_zone_database", "IANA time zone database")}} (tzdata) is used for precisely determining the effect of DST on the calculation of the time-zone difference.

## Examples

```js
// Create a Date instance for the current time
let currentLocalDate = new Date();
// Create a Date instance for 03:24 GMT-0200 on May 1st in 2016
let laborDay2016at0324GMTminus2 = new Date('May 1, 2016 03:24:00 GMT-0200');
currentLocalDate.getTimezoneOffset() === laborDay2016at0324GMTminus2.getTimezoneOffset();
// true, always, in any timezone that doesn't annually shift in and out of DST
// false, sometimes, in any timezone that annually shifts in and out of DST
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date")}}
