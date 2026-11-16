---
title: Intl.Locale.prototype.numberingSystem
short-title: numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.numberingSystem
sidebar: jsref
---

The **`numberingSystem`** accessor property of {{jsxref("Intl.Locale")}} instances returns the [numeral system](https://en.wikipedia.org/wiki/Numeral_system) for this locale.

## Description

A numeral system is a system for expressing numbers. For a list of supported numbering system types, see [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).

The `numberingSystem` property's value is set at construction time, either through the `nu` key of the locale identifier or through the `numberingSystem` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present; and if neither is present, the property has value `undefined`.

The set accessor of `numberingSystem` is `undefined`. You cannot change this property directly.

## Examples

Like other locale subtags, the numbering system type can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Adding a numbering system via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), `numberingSystem` is an "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers using the `-u` extension key. To add the numbering system type to the initial locale identifier string passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor, first add the `-u` extension key if it doesn't exist. Next, add the `-nu` extension to indicate that you are adding a numbering system. Finally, add the numbering system type.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong"
```

### Adding a numbering system via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including numbering system types. Set the `numberingSystem` property of the configuration object to your desired numbering system type, and then pass it into the constructor.

```js
const locale = new Intl.Locale("en-Latn-US", { numberingSystem: "latn" });
console.log(locale.numberingSystem); // "latn"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getNumberingSystems()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems)
- [Details on the standard Unicode numeral systems](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
