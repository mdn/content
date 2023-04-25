---
title: Intl.Locale.prototype.getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.getWeekInfo
---

{{JSRef}}

The **`getWeekInfo()`** method of {{jsxref("Intl.Locale")}} instances returns a `weekInfo` object with the properties `firstDay`, `weekend` and `minimalDays` for this locale.

> **Note:** In some versions of some browsers, this method was implemented as an accessor property called `weekInfo`. However, because it returns a new object on each access, it is now implemented as a method to prevent the situation of `locale.weekInfo === locale.weekInfo` returning `false`. Check the [browser compatibility table](#browser_compatibility) for details.

## Syntax

```js-nolint
getWeekInfo()
```

### Return value

An object representing week information associated with the Locale data specified in [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements). It has the following properties:

- `firstDay`
  - : An integer indicating the first day of the week for the locale. Can be either `1` (Monday) or `7` (Sunday).
- `weekend`
  - : An array of integers indicating the weekend days for the locale, where `1` is Monday and `7` is Sunday.
- `minimalDays`
  - : An integer between 1 and 7 indicating the minimal days required in the first week of a month or year, for calendar purposes.

## Examples

### Obtaining the Week Information

Return the week information for a given `Locale`.

```js
const he = new Intl.Locale("he");
console.log(he.getWeekInfo()); // { firstDay: 7, weekend: [5, 6], minimalDays: 1 }

const af = new Intl.Locale("af");
console.log(af.getWeekInfo()); // { firstDay: 7, weekend: [6, 7], minimalDays: 1 }

const enGB = new Intl.Locale("en-GB");
console.log(enGB.getWeekInfo()); // { firstDay: 1, weekend: [6, 7], minimalDays: 4 }

const msBN = new Intl.Locale("ms-BN");
console.log(msBN.getWeekInfo()); // { firstDay: 7, weekend: [5, 7], minimalDays: 1 }
// Brunei weekend is Friday and Sunday but not Saturday
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/Locale", "Intl.Locale")}}
