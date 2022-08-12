---
title: Intl.DateTimeFormat.prototype.formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange
tags:
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.DateTimeFormat.formatRange
---
{{JSRef}}

The **`Intl.DateTimeFormat.prototype.formatRange()`** formats a
date range in the most concise way based on the **`locale`** and
**`options`** provided when instantiating
{{jsxref("Intl.DateTimeFormat")}} object.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrange.html",
  "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
formatRange(startDate, endDate)
```

## Examples

### Basic formatRange usage

This method receives two {{jsxref("Date")}}s and formats the date range in the most
concise way based on the `locale` and `options` provided when
instantiating {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}.

```js
const date1 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
const date2 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0));
const date3 = new Date(Date.UTC(2007, 0, 20, 10, 0, 0));
// > 'Wed, 10 Jan 2007 10:00:00 GMT'
// > 'Wed, 10 Jan 2007 11:00:00 GMT'
// > 'Sat, 20 Jan 2007 10:00:00 GMT'

const fmt1 = new Intl.DateTimeFormat("en", {
  year: '2-digit',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});
console.log(fmt1.format(date1));
console.log(fmt1.formatRange(date1, date2));
console.log(fmt1.formatRange(date1, date3));
// > '1/10/07, 10:00 AM'
// > '1/10/07, 10:00 – 11:00 AM'
// > '1/10/07, 10:00 AM – 1/20/07, 10:00 AM'

const fmt2 = new Intl.DateTimeFormat("en", {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});
console.log(fmt2.format(date1));
console.log(fmt2.formatRange(date1, date2));
console.log(fmt2.formatRange(date1, date3));
// > 'Jan 10, 2007'
// > 'Jan 10, 2007'
// > 'Jan 10 – 20, 2007'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DateTimeFormat")}}
