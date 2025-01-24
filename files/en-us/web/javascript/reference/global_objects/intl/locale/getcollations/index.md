---
title: Intl.Locale.prototype.getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.getCollations
---

{{JSRef}}

The **`getCollations()`** method of {{jsxref("Intl.Locale")}} instances returns a list of one or more [collation types](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation) for this locale.

> [!NOTE]
> In some versions of some browsers, this method was implemented as an accessor property called `collations`. However, because it returns a new array on each access, it is now implemented as a method to prevent the situation of `locale.collations === locale.collations` returning `false`. Check the [browser compatibility table](#browser_compatibility) for details.

## Syntax

```js-nolint
getCollations()
```

### Parameters

None.

### Return value

An array of strings representing all collation types commonly used for the `Locale`, sorted in alphabetical order, with the `standard` and `search` values always excluded. If the `Locale` already has a [`collation`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation), then the returned array contains that single value.

For a list of supported collation types, see [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

## Examples

### Obtaining supported collation types

If the `Locale` object doesn't have a `collation` already, `getCollations()` lists all commonly-used collation types for the given `Locale`. For examples of explicitly setting a `collation`, see [`collation` examples](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#examples).

```js
const locale = new Intl.Locale("zh");
console.log(locale.getCollations()); // ["pinyin", "stroke", "zhuyin", "emoji", "eor"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.collation`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation)
