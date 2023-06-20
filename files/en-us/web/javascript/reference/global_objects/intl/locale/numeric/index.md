---
title: Intl.Locale.prototype.numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.numeric
---

{{JSRef}}

The **`numeric`** accessor property of {{jsxref("Intl.Locale")}} instances returns whether this locale has special collation handling for numeric characters.

## Syntax

### Return value

The getter for `numeric` returns a boolean whose value is set at construction time, either through the `kn` key of the locale identifier or through the `numeric` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present; and if neither is present, the property has value `undefined`.

There is no setter for `numeric`, so you cannot change this property's value using assignment.

## Description

Like {{jsxref("Intl/Locale/caseFirst", "caseFirst")}}, `numeric` represents a modification to the collation rules utilized by the locale. If a locale has special numeric handling, it means that sequences of decimal digits will be compared as numbers. For example, the string "A-21" will be considered less than "A-123".

## Examples

Like other locale subtags, the `numeric` type can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Setting the numeric value via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), `numeric` values are locale key "extension subtags". These subtags add additional data about the locale, and are added to locale identifiers by using the `-u` extension. Thus, the `numeric` value can be added to the initial locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. To add the `numeric` value, first add the `-u` extension to the string. Next, add the `-kn` extension to indicate that you are adding a `numeric` value. Finally, add the `numeric` value to the string. If you want to set `numeric` to `true`, adding the `kn` key will suffice. To set the value to `false`, you must specify in by adding `"false"` after the `kn` key.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(locale.numeric); // Prints "false"
```

### Setting the numeric value via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including `numeric`. Set the `numeric` property of the configuration object to your desired `numeric` value, and then pass it into the constructor.

```js
const locale = new Intl.Locale("en-Latn-US", { numeric: true });
console.log(locale.numeric); // Prints "true"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
