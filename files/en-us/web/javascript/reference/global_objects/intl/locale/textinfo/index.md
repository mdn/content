---
title: Intl.Locale.prototype.textInfo
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/textInfo
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.textInfo
---

{{JSRef}}

The **`textInfo`** accessor property of {{jsxref("Intl.Locale")}} instances returns the ordering of characters indicated by either `ltr` (left-to-right) or by `rtl` (right-to-left) for this locale.

## Description

Returns the `Locale` information associated with the Locale data specified in [UTS 35's Layouts Elements](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements).

## Examples

### Obtaining text info

Return the supported text directions for a given `Locale`.

```js
const ar = new Intl.Locale("ar");
console.log(ar.textInfo); // { direction: "rtl" }
console.log(ar.textInfo.direction); // "rtl"
```

```js
const es = new Intl.Locale("es");
console.log(es.textInfo); // { direction: "ltr" }
console.log(es.textInfo.direction); // "ltr"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/Locale", "Intl.Locale")}}
