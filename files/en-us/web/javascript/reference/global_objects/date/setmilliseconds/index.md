---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setMilliseconds
---

{{JSRef}}

The **`setMilliseconds()`** method of a {{jsxref("Date")}} instance changes the milliseconds for this date according to local time.

{{EmbedInteractiveExample("pages/js/date-setmilliseconds.html")}}

## Syntax

```js-nolint
setMilliseconds(millisecondsValue)
```

### Parameters

- `millisecondsValue`
  - : A integer between 0 and 999 representing the milliseconds.

### Return value

Changes the {{jsxref("Date")}} object in place, and returns its new [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If `millisecondsValue` is (or gets [coerced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to, such as `undefined`) `NaN`, the date is set to [Invalid Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you specify a number outside the expected range, the date information in the {{jsxref("Date")}} object is updated accordingly. For example, if you specify 1005, the number of seconds is incremented by 1, and 5 is used for the milliseconds.

## Examples

### Using setMilliseconds()

```js
const theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
