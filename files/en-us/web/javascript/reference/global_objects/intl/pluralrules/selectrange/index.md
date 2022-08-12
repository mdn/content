---
title: Intl.PluralRules.selectRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - PluralRules
  - Prototype
  - Reference
  - selectRange
  - Experimental
browser-compat: javascript.builtins.Intl.PluralRules.selectRange
---
{{JSRef}} {{SeeCompatTable}}

The **`Intl.PluralRules.prototype.selectRange()`** method receives two values and returns a string indicating which plural rule to use for locale-aware formatting.

## Syntax

```js
selectRange(startRange, endRange)
```

### Return value

A string representing the pluralization category of the `number`.
This can be one of `zero`, `one`, `two`, `few`, `many` or `other`, that are relevant for the locale whose localization is specified in [LDML Language Plural Rules](https://unicode-org.github.io/cldr-staging/charts/37/supplemental/language_plural_rules.html#rules).

## Description

This function selects a pluralization category according to the locale and formatting options of an {{jsxref("Intl.PluralRules")}} object.

## Examples

### Using selectRange()

```js
 new Intl.PluralRules('sl').selectRange(102, 201);
// → 'few'

 new Intl.PluralRules('pt').selectRange(102, 102);
// → 'other'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.PluralRules")}}
