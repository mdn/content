---
title: Intl.Locale.prototype.weekInfo
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/weekInfo
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.weekInfo
---

{{JSRef}}

The **`Intl.Locale.prototype.weekInfo`** property is an accessor property which returns a `weekInfo` object with the properties `firstDay`, `weekend` and `minimalDays` for the associated `Locale`.

## Description

Returns the `Locale` information associated with the Locale data specified in [UTS 35's Week Elements.](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements).

## Examples

### Obtaining the Week Information

Return the week information for a given `Locale`.

```js
const he = new Intl.Locale("he");
console.log(he.weekInfo); // { firstDay: 7, weekend: [5, 6], minimalDays: 1 }

const af = new Intl.Locale("af");
console.log(af.weekInfo); // { firstDay: 7, weekend: [6, 7], minimalDays: 1 }

const enGB = new Intl.Locale("en-GB");
console.log(enGB.weekInfo); // { firstDay: 1, weekend: [6, 7], minimalDays: 4 }

const msBN = new Intl.Locale("ms-BN");
console.log(msBN.weekInfo); // { firstDay: 7, weekend: [5, 7], minimalDays: 1 }
// Brunei weekend is Friday and Sunday but not Saturday
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/Locale", "Intl.Locale")}}
