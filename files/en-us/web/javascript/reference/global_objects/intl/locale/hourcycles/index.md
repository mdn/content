---
title: Intl.Locale.prototype.hourCycles
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycles
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
  - hourCycles
browser-compat: javascript.builtins.Intl.Locale.hourCycles
---
{{JSRef}}

The **`Intl.Locale.prototype.hourCycles`** property is an accessor property which returns a list of one or more unique hour cycle identifiers for the `Locale`.

## Description

There are two main types of time keeping conventions (clocks) used around the world: the 12 hour clock and the 24 hour clock. The `hourCycles` property makes it easier to access all clock types available for a particular locale. Like other additional locale data, the hour cycle type is an [extension subtag](https://www.unicode.org/reports/tr35/#u_Extension), which extends the data contained in a locale string. The hour cycle type can have several different values, which are listed in the table below.

### Valid hour cycle types

| Hour cycle type | Description                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| `h12`           | Hour system using 1–12; corresponds to 'h' in patterns. The 12 hour clock, with midnight starting at 12:00 am. |
| `h23`           | Hour system using 0–23; corresponds to 'H' in patterns. The 24 hour clock, with midnight starting at 0:00.     |
| `h11`           | Hour system using 0–11; corresponds to 'K' in patterns. The 12 hour clock, with midnight starting at 0:00 am.  |
| `h24`           | Hour system using 1–24; corresponds to 'k' in pattern. The 24 hour clock, with midnight starting at 24:00.     |

## Examples

### Obtaining supported calendars

List supported hour cycles for a given `Locale`.

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.hourCycles); // logs ["h12"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.hourCycles); // logs ["h23"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [Unicode Hour Cycle extension key spec](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)
