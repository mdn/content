---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
tags:
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.DateTimeFormat.formatRangeToParts
---
{{JSRef}}

The **`Intl.DateTimeFormat.prototype.formatRangeToParts()`**
method returns an array of locale-specific tokens representing each part of the formatted date
range produced by {{jsxref("Intl.DateTimeFormat")}} formatters.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrangetoparts.html", "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
formatRangeToParts(startDate, endDate)
```

## Examples

### Basic formatRangeToParts usage

This method receives two {{jsxref("Date")}}s and returns an {{jsxref("Array")}} of
objects containing the _locale-specific_ tokens representing each part of the formatted date range.

> **Note:** The return values shown in your locale may differ from those listed below.

```js
const date1 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
const date2 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0));
// > 'Wed, 10 Jan 2007 10:00:00 GMT'
// > 'Wed, 10 Jan 2007 11:00:00 GMT'

const fmt = new Intl.DateTimeFormat("en", {
  hour: 'numeric',
  minute: 'numeric',
});

console.log(fmt.formatRange(date1, date2));
// > '10:00 – 11:00 AM'

fmt.formatRangeToParts(date1, date2);
// return value:
// [
//   { type: 'hour',      value: '10',  source: "startRange" },
//   { type: 'literal',   value: ':',   source: "startRange" },
//   { type: 'minute',    value: '00',  source: "startRange" },
//   { type: 'literal',   value: ' – ', source: "shared"     },
//   { type: 'hour',      value: '11',  source: "endRange"   },
//   { type: 'literal',   value: ':',   source: "endRange"   },
//   { type: 'minute',    value: '00',  source: "endRange"   },
//   { type: 'literal',   value: ' ',   source: "shared"     },
//   { type: 'dayPeriod', value: 'AM',  source: "shared"     }
// ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
- {{jsxref("Intl.DateTimeFormat")}}
