---
title: Intl.Locale.prototype.calendars
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendars
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.calendars
---

{{JSRef}}

The **`Intl.Locale.prototype.calendars`** accessor property returns a list of one or more unique calendar identifiers for the `Locale`.

## Description

The `calendars` property returns an array of all calendars commonly used for the `Locale`, sorted in descending preference. If the `Locale` already has a [`calendar`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar), then the returned array contains that single value.

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

If the `Locale` object doesn't have a `calendar` already, the `calendars` property lists all commonly-used calendars for the given `Locale`. For examples of explicitly setting a `calendar`, see [`calendar` examples](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.calendars); // ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.calendars); // ["gregory", "japanese"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.calendar`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)
- [Unicode Calendar Identifiers](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)
