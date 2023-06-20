---
title: Intl.Locale.prototype.caseFirst
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.caseFirst
---

{{JSRef}}

The **`caseFirst`** accessor property of {{jsxref("Intl.Locale")}} instances returns whether case is taken into account for this locale's collation rules.

## Syntax

### Return value

The getter for `caseFirst` returns a string whose value is established either via the `kf` key of the locale identifier or via the `caseFirst` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present; and if neither is present, the property has value `undefined`. Supported values are:

- `"upper"`
  - : Upper case to be sorted before lower case.
- `"lower"`
  - : Lower case to be sorted before upper case.
- `"false"`
  - : No special case ordering.

There is no setter for `caseFirst`, so you cannot change this property's value using assignment.

## Description

A locale's collation rules are used to determine how strings are ordered in that locale. Certain locales use a character's case (UPPERCASE or lowercase) in the collation process. This additional rule can be expressed in a locale's `caseFirst` property.

## Examples

Like other locale subtags, the `caseFirst` type can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Setting the caseFirst value via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), `caseFirst` values are locale key "extension subtags". These subtags add additional data about the locale, and are added to locale identifiers by using the `-u` extension. Thus, the `caseFirst` value can be added to the initial locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. To add the `caseFirst` value, first add the `-u` extension to the string. Next, add the `-kf` extension to indicate that you are adding a `caseFirst` value. Finally, add the `caseFirst` value to the string.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kf-upper");
console.log(locale.caseFirst); // Prints "upper"
```

### Setting the caseFirst value via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including `caseFirst`. Set the `caseFirst` property of the configuration object to your desired `caseFirst` value, and then pass it into the constructor.

```js
const locale = new Intl.Locale("en-Latn-US", { caseFirst: "lower" });
console.log(locale.caseFirst); // Prints "lower"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [Unicode case first collation spec](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml#L49)
