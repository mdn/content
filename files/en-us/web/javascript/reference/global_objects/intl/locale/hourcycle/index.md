---
title: Intl.Locale.prototype.hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Locale.hourCycle
---
{{JSRef}}

The **`Intl.Locale.prototype.hourCycle`** property is an accessor property that returns the time keeping format convention used by the locale.

## Description

There are 2 main types of time keeping conventions (clocks) used around the world: the 12 hour clock and the 24 hour clock. The `hourCycle` property makes it easier for JavaScript programmers to access the clock type used by a particular locale. Like other additional locale data, hour cycle type is an [extension subtag](https://www.unicode.org/reports/tr35/#u_Extension), which extends the data contained in a locale string. The hour cycle type can have several different values, which are listed in the table below.

### Valid hour cycle types

| Hour cycle type | Description                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| `h12`           | Hour system using 1–12; corresponds to 'h' in patterns. The 12 hour clock, with midnight starting at 12:00 am. |
| `h23`           | Hour system using 0–23; corresponds to 'H' in patterns. The 24 hour clock, with midnight starting at 0:00.     |
| `h11`           | Hour system using 0–11; corresponds to 'K' in patterns. The 12 hour clock, with midnight starting at 0:00 am.  |
| `h24`           | Hour system using 1–24; corresponds to 'k' in pattern. The 24 hour clock, with midnight starting at 24:00.     |

## Examples

These examples will show you how to add hour cycle data to your {{jsxref("Intl/Locale", "Locale")}} object.

### Adding an hour cycle via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), the hour cycle is a locale string "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers by using the `-u` extension key. Thus, the hour cycle type can be added to the initial locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. To add the hour cycle type, first add the `-u` extension key to the string. Next, add the `-hc` extension key to indicate that you are adding an hour cycle. Finally, add the hour cycle type to the string.

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // Prints "h23"
```

### Adding an hour cycle via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including hour cycle types. Set the `hourCycle` property of the configuration object to your desired hour cycle type, and then pass it into the constructor.

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // Prints "h12"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [Unicode Hour Cycle extension key spec](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)
