---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
page-type: javascript-static-method
browser-compat: javascript.builtins.Date.parse
---

{{JSRef}}

The **`Date.parse()`** static method parses a string representation of a date, and returns the date's [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

{{InteractiveExample("JavaScript Demo: Date.parse()")}}

```js interactive-example
// Standard date-time string format
const unixTimeZero = Date.parse("1970-01-01T00:00:00Z");
// Non-standard format resembling toUTCString()
const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");

console.log(unixTimeZero);
// Expected output: 0

console.log(javaScriptRelease);
// Expected output: 818035920000
```

## Syntax

```js-nolint
Date.parse(dateString)
```

### Parameters

- `dateString`
  - : A string in [the date time string format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format). See the linked reference for caveats on using different formats.

### Return value

A number representing the [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) of the given date. If `dateString` fails to be parsed as a valid date, {{jsxref("NaN")}} is returned.

## Description

This function is useful for setting date values based on string values, for example in conjunction with the {{jsxref("Date/setTime", "setTime()")}} method.

The formats that `parse()` can handle are not explicitly specified, but there are a few invariants:

- The [date time string format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) (produced by {{jsxref("Date/toISOString", "toISOString()")}}) must be supported.
- If `x` is any Date whose milliseconds amount is zero, then `x.valueOf()` should be equal to any of the following: `Date.parse(x.toString())`, `Date.parse(x.toUTCString())`, `Date.parse(x.toISOString())`. This means the formats produced by {{jsxref("Date/toString", "toString()")}} and {{jsxref("Date/toUTCString", "toUTCString()")}} should be supported too.
- The spec does _not_ require support for the format produced by {{jsxref("Date/toLocaleString", "toLocaleString()")}}. However, major engines all try to support `toLocaleString("en-US")` format.

Other formats are implementation-defined and may not work across all browsers. A library can help if many different formats are to be accommodated. In fact, the unreliability of `Date.parse()` is one of the motivations for the {{jsxref("Temporal")}} API to be introduced.

Because `parse()` is a static method of `Date`, you always use it as `Date.parse()`, rather than as a method of a `Date` object you created.

## Examples

### Using Date.parse()

The following calls all return `1546300800000`. The first will imply UTC time because it's date-only, and the others explicitly specify the UTC timezone.

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

The following call, which does not specify a time zone will be set to 2019-01-01 at 00:00:00 in the local timezone of the system, because it has both date and time.

```js
Date.parse("2019-01-01T00:00:00");
```

### toString() and toUTCString() formats

Apart from the standard date time string format, the {{jsxref("Date/toString", "toString()")}} and {{jsxref("Date/toUTCString", "toUTCString()")}} formats are supported:

```js
// toString() format
Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
// 18000000 in all implementations in all timezones

// toUTCString() format
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
// 0 in all implementations in all timezones
```

### Non-standard date strings

> [!NOTE]
> This section contains implementation-specific behavior that may be inconsistent across browsers or different versions of browsers. It is not meant to be a comprehensive browser compatibility table and you should always conduct your own tests before using any format in your code.

Implementations usually default to the local time zone when the date string is non-standard. For consistency, we will assume that the runtime uses the UTC timezone, and unless specified otherwise, the output will vary with the device's time zone. [Daylight Saving Time (DST), of the local time zone, can also have an effect on this](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions).

Here are some more examples of non-standard date strings. Browsers are very lenient when parsing date strings and may discard any part of a string that they cannot parse. For compatibility reasons, browsers often copy each other's behavior, so these handling patterns tend to propagate cross-browser. As previously stated, the following examples are for illustration only, and are not exhaustive by any means:

<table>
<thead>
<tr>
<th>Description</th>
<th>Example</th>
<th>Chrome</th>
<th>Firefox</th>
<th>Safari</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3">Single number</td>
<td><code>0</code> (single-digit)</td>
<td colspan="2">946684800000 (Jan 01 2000); NaN in Firefox ≤122</td>
<td>-62167219200000 (Jan 01 0000)</td>
</tr>
<tr>
<td><code>31</code> (two-digit)</td>
<td colspan="2">NaN</td>
<td>-61188912000000 (Jan 01 0031)</td>
</tr>
<tr>
<td><code>999</code> (three-/four-digit)</td>
<td colspan="3">-30641733102000 (Jan 01 0999)</td>
</tr>
<tr>
<td rowspan="4">Date strings that use different separators</td>
<td><code>1970-01-01</code> (standard)</td>
<td colspan="3">0 in all time zones</td>
</tr>
<tr>
<td><code>1970/01/01</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td><code>1970,01,01</code></td>
<td colspan="2">0</td>
<td>NaN</td>
</tr>
<tr>
<td><code>1970 01 01</code></td>
<td colspan="2">0</td>
<td>NaN</td>
</tr>
<tr>
<td>Strings that look like <code>toString()</code></td>
<td><code>Thu&nbsp;Jan&nbsp;01&nbsp;1970&nbsp;00:00:00</code><br><code>Thu Jan 01 1970</code><br><code>Jan 01 1970 00:00:00</code><br><code>Jan 01 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td>Strings that look like <code>toUTCString()</code></td>
<td><code>Thu, 01 Jan 1970 00:00:00</code><br><code>Thu, 01 Jan 1970</code><br><code>01 Jan 1970 00:00:00</code><br><code>01 Jan 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td rowspan="4">First date component is 2-digit</td>
<td><code>01-02-03</code> (first segment can be valid month)</td>
<td colspan="2">1041465600000 (Jan 02 2003)</td>
<td>-62132745600000 (Feb 03 0001)<br>Note: Safari always assumes YY-MM-DD, but MM/DD/YY.</td>
</tr>
<tr>
<td><code>27-02-03</code> (first segment can be valid day but not month)</td>
<td colspan="2">NaN</td>
<td>-61312291200000 (Feb 03 0027)</td>
</tr>
<tr>
<td><code>49-02-03</code> (first segment cannot be valid day and is &lt;50)</td>
<td colspan="2">2495923200000 (Feb 03 2049)</td>
<td>-60617980800000 (Feb 03 0049)</td>
</tr>
<tr>
<td><code>50-02-03</code> (first segment cannot be valid day and is ≥50)</td>
<td colspan="2">-628300800000 (Feb 03 1950)</td>
<td>-60586444800000 (Feb 03 0050)</td>
</tr>
<tr>
<td rowspan="3">Out-of-bounds date components</td>
<td><code>2014-25-23</code><br><code>Mar 32, 2014</code><br><code>2014/25/23</code></td>
<td colspan="3">NaN</td>
</tr>
<tr>
<td><code>2014-02-30</code></td>
<td colspan="2">1393718400000 (Mar 02 2014)</td>
<td>NaN</td>
</tr>
<tr>
<td><code>02/30/2014</code></td>
<td colspan="3">1393718400000</td>
</tr>
<tr>
<td rowspan="5">Extraneous characters after the month name</td>
<td><code>04 Dec 1995</code><br><code>04 Decem 1995</code><br><code>04 December 1995</code></td>
<td colspan="3">818031600000</td>
</tr>
<tr>
<td><code>04 DecFoo 1995</code></td>
<td colspan="3">818031600000<br>Only the first three characters are read.<br>Firefox ≤121 reads up to the valid month name, thus returning NaN when it sees "F".</td>
</tr>
<tr>
<td><code>04 De 1995</code></td>
<td colspan="3">NaN</td>
</tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.UTC()")}}
