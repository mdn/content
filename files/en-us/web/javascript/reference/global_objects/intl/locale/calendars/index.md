---
title: Intl.Locale.prototype.calendars
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendars
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
  - Calendars
browser-compat: javascript.builtins.Intl.Locale.calendars
---
{{JSRef}}

The **`Intl.Locale.prototype.calendars`** property is an accessor property which returns an array of one or more unique calendar identifiers for the `Locale`.

## Description

The `calendar` property returns an array of all supported calendars for the `Locale`. The array items indicate the `Locale` object's calendar era. The following table shows all valid Unicode calendar key strings, along with a description of the calendar era they represent.

### Unicode calendar keys

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

List supported calendars for a given `Locale`.

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.calendars); // logs ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.calendars); // logs ["gregory", "japanese"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/Locale", "Intl.Locale")}}
- [Unicode Calendar Identifiers](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)
