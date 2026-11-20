---
title: Intl.Locale.prototype.getWeekInfo()
short-title: getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.getWeekInfo
sidebar: jsref
---

The **`getWeekInfo()`** method of {{jsxref("Intl.Locale")}} instances returns week information about the locale, such as the first day of the week and the weekend days.

> [!NOTE]
> In some versions of some browsers, this method was implemented as an accessor property called `weekInfo`. However, because it returns a new object on each access, it is now implemented as a method to prevent the situation of `locale.weekInfo === locale.weekInfo` returning `false`. Check the [browser compatibility table](#browser_compatibility) for details.

## Syntax

```js-nolint
getWeekInfo()
```

### Parameters

None.

### Return value

An object representing week information associated with the Locale data specified in [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements), according to its [region preferences](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#region_preferences). It has the following properties:

- `firstDay`
  - : An integer between 1 (Monday) and 7 (Sunday) indicating the first day of the week for the locale. Commonly 1, 5, 6, or 7. If the `Locale` already has a [`firstDayOfWeek`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/firstDayOfWeek) value set, then `firstDay` is the same day represented as a number.
- `weekend`
  - : An array of integers between 1 and 7 indicating the weekend days for the locale. This is usually continuous because UTS 35 stores `weekendStart` and `weekendEnd` instead.
- `minimalDays` {{deprecated_inline}} {{non-standard_inline}}
  - : An integer between 1 and 7 (commonly 1 and 4) indicating the minimal days required in the first week of a month or year, for week-of-year or week-of-month calculations (e.g., The 20th week of the year). For example, in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) calendar, the first week of a year must have at least 4 days in this year, so if January 1 is a Friday, Saturday, or Sunday, it will be numbered as part of the last week of the previous year.

    > [!NOTE]
    > This property has been removed from the spec and is being removed from browsers because users generally expect ISO rules to be applied regardless of the locale.

## Examples

### Obtaining week information

The `getWeekInfo()` method returns the week information for a given `Locale`. For examples of explicitly setting a `firstDayOfWeek`, see [`firstDayOfWeek` examples](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/firstDayOfWeek#examples).

```js
const he = new Intl.Locale("he"); // Hebrew (Israel)
console.log(he.getWeekInfo()); // { firstDay: 7, weekend: [5, 6] }

const af = new Intl.Locale("af"); // Afrikaans (South Africa)
console.log(af.getWeekInfo()); // { firstDay: 7, weekend: [6, 7] }

const enGB = new Intl.Locale("en-GB"); // English (United Kingdom)
console.log(enGB.getWeekInfo()); // { firstDay: 1, weekend: [6, 7] }

const arAF = new Intl.Locale("ar-AF"); // Arabic (Afghanistan)
console.log(arAF.getWeekInfo()); // { firstDay: 6, weekend: [4, 5] }

const dvMV = new Intl.Locale("dv-MV"); // Divehi (Maldives)
console.log(dvMV.getWeekInfo()); // { firstDay: 5, weekend: [6, 7] }
```

### Region overrides

The `rg` and `sd` extension subtags change the [region preferences](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#region_preferences), which can result in different week information being returned while the base name stays the same.

```js
const enUS = new Intl.Locale("en-US");
console.log(enUS.getWeekInfo()); // { firstDay: 7, weekend: [6, 7] }

const enUSInUK = new Intl.Locale("en-US-u-rg-gbzzzz");
console.log(enUSInUK.getWeekInfo()); // { firstDay: 1, weekend: [6, 7] }

const enScot = new Intl.Locale("en-u-sd-gbsct");
console.log(enScot.getWeekInfo()); // { firstDay: 1, weekend: [6, 7] }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
