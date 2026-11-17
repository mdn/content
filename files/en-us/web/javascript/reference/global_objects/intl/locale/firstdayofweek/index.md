---
title: Intl.Locale.prototype.firstDayOfWeek
short-title: firstDayOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/firstDayOfWeek
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.firstDayOfWeek
sidebar: jsref
---

The **`firstDayOfWeek`** accessor property of {{jsxref("Intl.Locale")}} instances returns the first day of the week for this locale as a string.

## Description

Different regions and cultures have different rules concerning which day the week should start on; this affects calendar layout, accounting, etc. The value of `firstDayOfWeek` is one of `"mon"`, `"tue"`, `"wed"`, `"thu"`, `"fri"`, `"sat"`, or `"sun"`.

The `firstDayOfWeek` property's value is set at construction time, either through the `fw` key of the locale identifier or through the `firstDayOfWeek` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present; if neither is present, the property has the value `undefined`.

The set accessor of `firstDayOfWeek` is `undefined`. You cannot change this property directly.

## Examples

Like other locale subtags, the first day of the week can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Adding a first day of the week via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), `firstDayOfWeek` is an "extension subtag". These subtags provide additional data about the locale and are added to locale identifiers using the `-u` extension key. To add the first day of the week to the initial locale identifier string passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor, first add the `-u` extension key if it doesn't exist. Next, add the `-fw` extension to indicate that you are adding a first day of the week. Finally, add the day name.

```js
const locale = new Intl.Locale("fr-FR-u-fw-thu");
console.log(locale.firstDayOfWeek); // "thu"
```

### Adding a first day of the week via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including `firstDayOfWeek`. Set the `firstDayOfWeek` property of the configuration object to your desired day, and then pass it into the constructor.

```js
const locale = new Intl.Locale("fr-FR", { firstDayOfWeek: "thu" });
console.log(locale.firstDayOfWeek); // "thu"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getWeekInfo()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo)
