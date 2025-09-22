---
title: Intl.Locale.prototype.calendar
short-title: calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.calendar
sidebar: jsref
---

The **`calendar`** accessor property of {{jsxref("Intl.Locale")}} instances returns the calendar type for this locale.

## Description

While most of the world uses the Gregorian calendar, there are several regional calendar eras used around the world. For a list of supported calendar types, see [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types).

The `calendar` property's value is set at construction time, either through the `ca` key of the locale identifier or through the `calendar` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present; and if neither is present, the property has value `undefined`.

The set accessor of `calendar` is `undefined`. You cannot change this property directly.

## Examples

Like other locale subtags, the calendar type can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Adding a calendar type via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), `calendar` is an "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers using the `-u` extension key. To add the calendar type to the initial locale identifier string passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor, first add the `-u` extension key if it doesn't exist. Next, add the `-ca` extension to indicate that you are adding a calendar type. Finally, add the calendar era type.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // "buddhist"
```

### Adding a calendar type via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including calendars. Set the `calendar` property of the configuration object to your desired calendar era, and then pass it into the constructor.

```js
const locale = new Intl.Locale("fr-FR", { calendar: "buddhist" });
console.log(locale.calendar); // "buddhist"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getCalendars()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars)
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in the Unicode locale data markup language spec
