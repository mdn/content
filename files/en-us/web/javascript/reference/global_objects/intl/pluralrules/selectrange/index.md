---
title: Intl.PluralRules.prototype.selectRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.PluralRules.selectRange
---

{{JSRef}}

The **`selectRange()`** method of {{jsxref("Intl.PluralRules")}} instances receives two values and returns a string indicating which plural rule to use for locale-aware formatting.

## Syntax

```js-nolint
selectRange(startRange, endRange)
```

### Return value

A string representing the pluralization category of the `number`.
This can be one of `zero`, `one`, `two`, `few`, `many` or `other`, that are relevant for the locale whose localization is specified in [LDML Language Plural Rules](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html).

## Description

This function selects a pluralization category according to the locale and formatting options of an {{jsxref("Intl.PluralRules")}} object.

## Examples

### Using selectRange()

```js
new Intl.PluralRules("sl").selectRange(102, 201); // 'few'

new Intl.PluralRules("pt").selectRange(102, 102); // 'other'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.PluralRules")}}
