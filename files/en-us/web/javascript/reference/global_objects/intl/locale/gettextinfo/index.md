---
title: Intl.Locale.prototype.getTextInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.getTextInfo
---

{{JSRef}}

The **`getTextInfo()`** method of {{jsxref("Intl.Locale")}} instances returns the ordering of characters indicated by either `ltr` (left-to-right) or by `rtl` (right-to-left) for this locale.

> **Note:** In some versions of some browsers, this method was implemented as an accessor property called `textInfo`. However, because it returns a new object on each access, it is now implemented as a method to prevent the situation of `locale.textInfo === locale.textInfo` returning `false`. Check the [browser compatibility table](#browser_compatibility) for details.

## Syntax

```js-nolint
getTextInfo()
```

### Return value

An object representing text typesetting information associated with the Locale data specified in [UTS 35's Layouts Elements](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements). It has the following properties:

- `direction`
  - : A string indicating the direction of text for the locale. Can be either `"ltr"` (left-to-right) or `"rtl"` (right-to-left).

## Examples

### Obtaining text info

Return the supported text directions for a given `Locale`.

```js
const ar = new Intl.Locale("ar");
console.log(ar.getTextInfo()); // { direction: "rtl" }
console.log(ar.getTextInfo().direction); // "rtl"
```

```js
const es = new Intl.Locale("es");
console.log(es.getTextInfo()); // { direction: "ltr" }
console.log(es.getTextInfo().direction); // "ltr"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/Locale", "Intl.Locale")}}
