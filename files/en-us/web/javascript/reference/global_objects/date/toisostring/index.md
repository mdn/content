---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
browser-compat: javascript.builtins.Date.toISOString
---
{{JSRef}}

The **`toISOString()`** method returns a string in _simplified_ extended ISO format ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)), which is always 24 or 27 characters long (`YYYY-MM-DDTHH:mm:ss.sssZ` or `±YYYYYY-MM-DDTHH:mm:ss.sssZ`, respectively). The timezone is always zero UTC offset, as denoted by the suffix `Z`.

{{EmbedInteractiveExample("pages/js/date-toisostring.html")}}

## Syntax

```js
toISOString()
```

### Return value

A string representing the given date in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format according to universal time. It's the same format as the one required to be recognized by [`Date.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#date_time_string_format).

## Examples

### Using toISOString()

```js
const today = new Date('05 October 2011 14:48 UTC');

console.log(today.toISOString()); // Returns 2011-10-05T14:48:00.000Z
```

The above example uses parsing of a non–standard string value that may not be correctly parsed in non–Mozilla browsers.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/date.polyfill.js)
