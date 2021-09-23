---
title: Intl.Locale.prototype.weekInfo
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/weekInfo
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
  - weekInfo
browser-compat: javascript.builtins.Intl.Locale.weekInfo
---
{{JSRef}}

The **`Intl.Locale.prototype.weekInfo`** property is an accessor property which returns the `WeekInfo` record fields `FirstDay`, `Weekend` and `MinimalDays` for the associated `Locale`.

## Description

Returns the `Locale` information associated with the Locale data specified in [UTS 35's Week Elements.](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements).


## Examples

### Obtaining the Week Information

Return the week information for a given `Locale`.

```js
let he = new Intl.Locale("he");
console.log(he.weekInfo); // Prints {firstDay: 7, weekend: [5, 6], minimalDays: 1}

let af = new Intl.Locale("af");
console.log(af.weekInfo); // Prints  {firstDay: 7, weekend: [6, 7], minimalDays: 1}

let enGB = new Intl.Locale("en-GB");
console.log(enGB.weekInfo) // Prints  {firstDay: 1, weekend: [6, 7], minimalDays: 4}

let msBN = new Intl.Locale("en-GB");
console.log(msBN.weekInfo) // Prints {firstDay: 7, weekend: [5, 7], minimalDays: 1}  // Brunei weekend is Friday and Sunday but not Saturday 
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/Locale", "Intl.Locale")}}


