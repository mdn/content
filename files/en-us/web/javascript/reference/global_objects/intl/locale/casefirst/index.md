---
title: Intl.Locale.prototype.caseFirst
short-title: caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.caseFirst
sidebar: jsref
---

The **`caseFirst`** accessor property of {{jsxref("Intl.Locale")}} instances returns whether case is taken into account for this locale's collation rules.

## Description

A locale's collation rules are used to determine how strings are ordered in that locale. Certain locales use a character's case (UPPERCASE or lowercase) in the collation process. This additional rule can be expressed in an {{jsxref("Intl.Locale")}} object's `caseFirst` property. There are 3 values that the `caseFirst` property can have, outlined in the table below.

| Value   | Description                                |
| ------- | ------------------------------------------ |
| `upper` | Upper case to be sorted before lower case. |
| `lower` | Lower case to be sorted before upper case. |
| `false` | No special case ordering.                  |

The `caseFirst` property's value is set at construction time, either through the `kf` key of the locale identifier or through the `caseFirst` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present; and if neither is present, the property has value `undefined`.

The set accessor of `caseFirst` is `undefined`. You cannot change this property directly.

## Examples

Like other locale subtags, the `caseFirst` value can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Adding a caseFirst value via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), `caseFirst` is an "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers using the `-u` extension key. To add the `caseFirst` value to the initial locale identifier string passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor, first add the `-u` extension key if it doesn't exist. Next, add the `-kf` extension to indicate that you are adding a value for `caseFirst`. Finally, add the `caseFirst` value.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // "upper"
```

### Adding a caseFirst value via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including `caseFirst`. Set the `caseFirst` property of the configuration object to your desired `caseFirst` value, and then pass it into the constructor.

```js
const locale = new Intl.Locale("en-Latn-US", { caseFirst: "lower" });
console.log(locale.caseFirst); // "lower"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [Unicode case first collation spec](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
