---
title: Intl.Locale.prototype.calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Locale.calendar
---
{{JSRef}}

The **`Intl.Locale.prototype.calendar`** property is an accessor property which returns the type of calendar used in the `Locale`.

## Description

The `calendar` property returns the part of the `Locale` that indicates the `Locale`'s calendar era. While most of the world uses the Gregorian calendar, there are several regional calendar eras used around the world. The following table shows all the valid Unicode calendar key strings, along with a description of the calendar era they represent.

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
  - : Minguo Calendar (Republic of China)
- `islamicc`
  - : Civil (algorithmic) Arabic calendar
    > **Warning:** The `islamicc` calendar key has been deprecated. Please use `islamic-civil`.

## Examples

### Adding a calendar in the Locale string

Calendar eras fall under the category of locale key "extension keys". These keys add additional data about the locale, and are added to locale identifiers by using the `-u` extension. Thus, the calendar era type can be added to the initial locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. To add the calendar type, first add the `-u` extension to the string. Next, add the `-ca` extension to indicate that you are adding a calendar type. Finally, add the calendar era to the string.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // Prints "buddhist"
```

### Adding a calendar with a configuration object

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including calendars. Set the `calendar` property of the configuration object to your desired calendar era, and then pass it into the constructor.

```js
const locale = new Intl.Locale("fr-FR", { calendar: "buddhist" });
console.log(locale.calendar); // Prints "buddhist"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/Locale", "Intl.Locale")}}
- [Unicode Calendar Identifiers](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)
