---
title: Intl.Locale.prototype.numeric
short-title: numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.numeric
sidebar: jsref
---

The **`numeric`** accessor property of {{jsxref("Intl.Locale")}} instances returns whether this locale has special collation handling for numeric characters.

## Description

Like {{jsxref("Intl/Locale/caseFirst", "caseFirst")}}, `numeric` represents a modification to the collation rules utilized by the locale. `numeric` is a boolean value, which means that it can be either `true` or `false`. If `numeric` is set to `false`, there will be no special handling of numeric values in strings. If `numeric` is set to `true`, then the locale will take numeric characters into account when collating strings. This special numeric handling means that sequences of decimal digits will be compared as numbers. For example, the string "A-21" will be considered less than "A-123".

The `numeric` property's value is set at construction time, either through the `kn` key of the locale identifier or through the `numeric` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present; and if neither is present, the property has value `undefined`.

The set accessor of `numeric` is `undefined`. You cannot change this property directly.

## Examples

Like other locale subtags, the `numeric` value can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Adding a `numeric` value via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), `numeric` is an "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers using the `-u` extension key. To add the `numeric` value to the initial locale identifier string passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor, first add the `-u` extension key if it doesn't exist. Next, add the `-kn` extension to indicate that you are adding a value for `numeric`. Finally, add the `numeric` value. If you want to set `numeric` to `true`, adding the `kn` key will suffice. To set the value to `false`, you must specify in by adding `"false"` after the `kn` key.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(locale.numeric); // "false"
```

### Adding a `numeric` value via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including `numeric`. Set the `numeric` property of the configuration object to your desired `numeric` value, and then pass it into the constructor.

```js
const locale = new Intl.Locale("en-Latn-US", { numeric: true });
console.log(locale.numeric); // "true"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
