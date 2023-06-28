---
title: Intl.Locale.prototype.hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.hourCycle
---

{{JSRef}}

The **`hourCycle`** accessor property of {{jsxref("Intl.Locale")}} instances returns the hour cycle type for this locale.

## Description

There are 2 main types of time keeping conventions (clocks) used around the world: the 12 hour clock and the 24 hour clock. The `hourCycle` property's value is set at construction time, either through the `hc` key of the locale identifier or through the `hourCycle` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present; and if neither is present, the property has value `undefined`.

For a list of supported hour cycle types, see [`Intl.Locale.prototype.getHourCycles()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types).

The set accessor of `hourCycle` is `undefined`. You cannot change this property directly.

## Examples

Like other locale subtags, the hour cycle type can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Adding an hour cycle via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), hour cycle types are locale key "extension subtags". These subtags add additional data about the locale, and are added to locale identifiers by using the `-u` extension. Thus, the hour cycle type can be added to the initial locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. To add the hour cycle type, first add the `-u` extension key to the string. Next, add the `-hc` extension to indicate that you are adding an hour cycle. Finally, add the hour cycle type to the string.

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23"
```

### Adding an hour cycle via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including hour cycle types. Set the `hourCycle` property of the configuration object to your desired hour cycle type, and then pass it into the constructor.

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getHourCycles()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles)
- [Unicode Hour Cycle extension key spec](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)
