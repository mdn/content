---
title: Intl.Locale.prototype.getCalendars()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.getCalendars
---

{{JSRef}}

The **`getCalendars()`** method of {{jsxref("Intl.Locale")}} instances returns a list of one or more unique calendar identifiers for this locale.

> **Note:** In some versions of some browsers, this method was implemented as an accessor property called `calendars`. However, because it returns a new array on each access, it is now implemented as a method to prevent the situation of `locale.calendars === locale.calendars` returning `false`. Check the [browser compatibility table](#browser_compatibility) for details.

## Syntax

```js-nolint
getCalendars()
```

### Parameters

None.

### Return value

An array of strings representing all calendars commonly used for the `Locale`, sorted in descending preference. If the `Locale` already has a [`calendar`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar), then the returned array contains that single value.

Below is a list of the supported calendar era types.

### Supported calendar types

- `buddhist`
  - : Thai Buddhist calendar
- `chinese`
  - : Traditional Chinese calendar
- `coptic`
  - : Coptic calendar
- `dangi`
  - : Traditional Korean calendar
- `ethioaa`
  - : Ethiopic calendar, Amete Alem (epoch approx. 5493 B.C.E)
- `ethiopic`
  - : Ethiopic calendar, Amete Mihret (epoch approx, 8 C.E.)
- `gregory`
  - : Gregorian calendar
- `hebrew`
  - : Traditional Hebrew calendar
- `indian`
  - : Indian calendar
- `islamic`
  - : Islamic calendar
- `islamic-umalqura`
  - : Islamic calendar, Umm al-Qura
- `islamic-tbla`
  - : Islamic calendar, tabular (intercalary years [2,5,7,10,13,16,18,21,24,26,29] - astronomical epoch)
- `islamic-civil`
  - : Islamic calendar, tabular (intercalary years [2,5,7,10,13,16,18,21,24,26,29] - civil epoch)
- `islamic-rgsa`
  - : Islamic calendar, Saudi Arabia sighting
- `iso8601`
  - : ISO calendar (Gregorian calendar using the ISO 8601 calendar week rules)
- `japanese`
  - : Japanese Imperial calendar
- `persian`
  - : Persian calendar
- `roc`
  - : Civil (algorithmic) Arabic calendar
- `islamicc`
  - : Civil (algorithmic) Arabic calendar
    > **Warning:** The `islamicc` calendar key has been deprecated. Please use `islamic-civil`.

## Examples

### Obtaining supported calendars

If the `Locale` object doesn't have a `calendar` already, `getCalendars()` lists all commonly-used calendars for the given `Locale`. For examples of explicitly setting a `calendar`, see [`calendar` examples](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getCalendars()); // ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getCalendars()); // ["gregory", "japanese"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.calendar`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in the Unicode locale data markup language spec
