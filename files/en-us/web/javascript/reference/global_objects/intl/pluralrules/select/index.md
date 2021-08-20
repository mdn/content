---
title: Intl.PluralRules.select()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - PluralRules
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.PluralRules.select
---
{{JSRef}}

The **`Intl.PluralRules.prototype.select()`** method returns a
string indicating which plural rule to use for locale-aware formatting.

## Syntax

```js
select(number)
```

### Parameters

- `number`
  - : The number to get a plural rule for.

### Return value

A string representing the pluralization category of the `number`, can be one
of `zero`, `one`, `two`, `few`,
`many` or `other`.

## Description

This function selects a pluralization category according to the locale and formatting
options of a {{jsxref("Intl.PluralRules")}} object.

## Examples

### Using select()

```js
 new Intl.PluralRules('ar-EG').select(0);
// → 'zero'

new Intl.PluralRules('ar-EG').select(1);
// → 'one'

new Intl.PluralRules('ar-EG').select(2);
// → 'two'

new Intl.PluralRules('ar-EG').select(6);
// → 'few'

new Intl.PluralRules('ar-EG').select(18);
// → 'many'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.PluralRules")}}
