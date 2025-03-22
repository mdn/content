---
title: Intl.Locale.prototype.getNumberingSystems()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.getNumberingSystems
---

{{JSRef}}

The **`getNumberingSystems()`** method of {{jsxref("Intl.Locale")}} instances returns a list of one or more unique [numbering system](https://en.wikipedia.org/wiki/Numeral_system) identifiers for this locale.

> [!NOTE]
> In some versions of some browsers, this method was implemented as an accessor property called `numberingSystems`. However, because it returns a new array on each access, it is now implemented as a method to prevent the situation of `locale.numberingSystems === locale.numberingSystems` returning `false`. Check the [browser compatibility table](#browser_compatibility) for details.

## Syntax

```js-nolint
getNumberingSystems()
```

### Parameters

None.

### Return value

An array of strings representing all numbering systems commonly used for the `Locale`, sorted in descending preference. If the `Locale` already has a [`numberingSystem`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem), then the returned array contains that single value.

For a list of supported numbering system types, see [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).

## Examples

### Obtaining supported numbering systems

If the `Locale` object doesn't have a `numberingSystem` already, `getNumberingSystems()` lists all commonly-used numbering systems for the given `Locale`. For examples of explicitly setting a `numberingSystem`, see [`numberingSystem` examples](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getNumberingSystems()); // ["arab"]
```

```js
const ja = new Intl.Locale("ja");
console.log(ja.getNumberingSystems()); // ["latn"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.numberingSystem`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem)
- [Details on the standard Unicode numeral systems](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
