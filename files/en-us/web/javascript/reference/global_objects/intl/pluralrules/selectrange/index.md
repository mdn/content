---
title: Intl.PluralRules.select()
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
browser-compat: javascript.builtins.Intl.PluralRules.selectRange
---
{{JSRef}}

The **`Intl.PluralRules.prototype.selectRange()`** receives two values and returns a {{jsxref("String")}} indicating which plural rule to use for locale-aware formatting.

## Syntax

```js
formatRange(startRange, endRange)
```

### Return value

A string representing the pluralization category of the `number`, can be one
of `zero`, `one`, `two`, `few`,
`many` or `other`.

## Description

This function selects a pluralization category according to the locale and formatting
options of a {{jsxref("Intl.PluralRules")}} object.

## Examples

### Using selectRange()

```js
 new Intl.PluralRules('pt-BR').selectRange(102, 201);
// → 'few'

 new Intl.PluralRules('pt-BR').selectRange(102, 102);
// → 'other'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.PluralRules")}}
