---
title: Intl.PluralRules.prototype.select()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.PluralRules.select
---

{{JSRef}}

The **`select()`** method of {{jsxref("Intl.PluralRules")}} instances returns a string indicating which plural rule to use for locale-aware formatting of a number.

{{InteractiveExample("JavaScript Demo: Intl.PluralRules.prototype.select()")}}

```js interactive-example
console.log(new Intl.PluralRules("ar-EG").select(0));
// Expected output: "zero"

console.log(new Intl.PluralRules("ar-EG").select(5));
// Expected output: "few"

console.log(new Intl.PluralRules("ar-EG").select(55));
// Expected output: "many"

console.log(new Intl.PluralRules("en").select(0));
// Expected output: "other"
```

## Syntax

```js-nolint
select(number)
```

### Parameters

- `number`
  - : The number to get a plural rule for.

### Return value

A string representing the pluralization category of the `number`.
This can be one of `zero`, `one`, `two`, `few`, `many`, or `other`.

## Description

This function selects a pluralization category according to the locale and formatting options of an {{jsxref("Intl.PluralRules")}} object.
These options are set in the [`Intl.PluralRules()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) constructor.

## Examples

### Using select()

First, create an `Intl.PluralRules` object, passing the appropriate `locales` and `options` parameters.
Here we create a plural rules object for Arabic in the Egyptian dialect.
Because the `type` is not specified the rules object will provide formatting for cardinal numbers (the default).

```js
const pr = new Intl.PluralRules("ar-EG");
```

Then call `select()` on the rules object, specifying the number for which the plural form is required.
Note that Arabic has 5 forms for cardinal numbers, as shown.

```js
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
