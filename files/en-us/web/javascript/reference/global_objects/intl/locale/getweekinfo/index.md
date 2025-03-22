---
title: Intl.Locale.prototype.getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.getWeekInfo
---

{{JSRef}}

The **`getWeekInfo()`** method of {{jsxref("Intl.Locale")}} instances returns a `weekInfo` object with the properties `firstDay`, `weekend` and `minimalDays` for this locale.

> [!NOTE]
> In some versions of some browsers, this method was implemented as an accessor property called `weekInfo`. However, because it returns a new object on each access, it is now implemented as a method to prevent the situation of `locale.weekInfo === locale.weekInfo` returning `false`. Check the [browser compatibility table](#browser_compatibility) for details.

## Syntax

```js-nolint
getWeekInfo()
```

### Parameters

None.

### Return value

An object representing week information associated with the Locale data specified in [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements). It has the following properties:

- `firstDay`
  - : An integer between 1 (Monday) and 7 (Sunday) indicating the first day of the week for the locale. Commonly 1, 5, 6, or 7.
- `weekend`
  - : An array of integers between 1 and 7 indicating the weekend days for the locale. This is usually continuous because UTS 35 stores `weekendStart` and `weekendEnd` instead.
- `minimalDays`
  - : An integer between 1 and 7 (commonly 1 and 4) indicating the minimal days required in the first week of a month or year, for week-of-year or week-of-month calculations (e.g. The 20th week of the year). For example, in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) calendar, the first week of a year must have at least 4 days in this year, so if January 1 is a Friday, Saturday, or Sunday, it will be numbered as part of the last week of the previous year.

## Examples

### Obtaining the Week Information

Return the week information for a given `Locale`.

```js
const he = new Intl.Locale("he"); // Hebrew (Israel)
console.log(he.getWeekInfo()); // { firstDay: 7, weekend: [5, 6], minimalDays: 1 }

const af = new Intl.Locale("af"); // Afrikaans (South Africa)
console.log(af.getWeekInfo()); // { firstDay: 7, weekend: [6, 7], minimalDays: 1 }

const enGB = new Intl.Locale("en-GB"); // English (United Kingdom)
console.log(enGB.getWeekInfo()); // { firstDay: 1, weekend: [6, 7], minimalDays: 4 }

const arAF = new Intl.Locale("ar-AF"); // Arabic (Afghanistan)
console.log(arAF.getWeekInfo()); // { firstDay: 6, weekend: [4, 5], minimalDays: 1 }

const dvMV = new Intl.Locale("dv-MV"); // Divehi (Maldives)
console.log(dvMV.getWeekInfo()); // { firstDay: 5, weekend: [6, 7], minimalDays: 1 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
