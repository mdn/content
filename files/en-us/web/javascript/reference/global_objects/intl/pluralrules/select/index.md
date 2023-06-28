---
title: Intl.PluralRules.prototype.select()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.PluralRules.select
---

{{JSRef}}

The **`select()`** method of {{jsxref("Intl.PluralRules")}} instances returns a string indicating which plural rule to use for locale-aware formatting.

{{EmbedInteractiveExample("pages/js/intl-pluralrules-prototype-select.html")}}

## Syntax

```js-nolint
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
const pr = new Intl.PluralRules("ar-EG");

pr.select(0); // 'zero'
pr.select(1); // 'one'
pr.select(2); // 'two'
pr.select(6); // 'few'
pr.select(18); // 'many'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.PluralRules")}}
