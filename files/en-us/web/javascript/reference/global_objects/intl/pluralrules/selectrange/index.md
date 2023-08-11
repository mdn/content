---
title: Intl.PluralRules.prototype.selectRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.PluralRules.selectRange
---

{{JSRef}}

The **`selectRange()`** method of {{jsxref("Intl.PluralRules")}} instances receives two values and returns a string indicating which plural rule to use for locale-aware formatting of the indicated range.

## Syntax

```js-nolint
selectRange(startRange, endRange)
```

### Return value

A string representing the pluralization category of the specified range.
This can be one of `zero`, `one`, `two`, `few`, `many` or `other`, that are relevant for the locale whose localization is specified in [LDML Language Plural Rules](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html).

## Description

This function selects a pluralization category according to the locale and formatting options of an {{jsxref("Intl.PluralRules")}} object.

Conceptually the behavior is the same as getting plural rules for a single cardinal or ordinal number.
Languages have one or more forms for describing ranges, and this method returns the appropriate form given the supplied locale and formatting options.
In English there is only one plural form, such as "1–10 apples", and the method will return `other`.
Other languages can have many forms.

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
