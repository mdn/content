---
title: "CSSUnparsedValue: entries() method"
short-title: entries()
slug: Web/API/CSSUnparsedValue/entries
page-type: web-api-instance-method
browser-compat: api.CSSUnparsedValue.entries
---

{{APIRef("CSS Typed OM")}}

The **`CSSUnparsedValue.entries()`** method
returns an array of a given object's own enumerable property `[key, value]`
pairs in the same order as that provided by a {{jsxref("Statements/for...in",
  "for...in")}} loop (the difference being that a for-in loop enumerates properties in the
prototype chain as well).

## Syntax

```js-nolint
entries(obj)
```

### Parameters

- `obj`
  - : The {{domxref('CSSUnparsedValue')}} whose enumerable own property
    `[key, value]` pairs are to be returned.

### Return value

An array of the given `CSSUnparsedValue` object's own enumerable property
`[key, value]` pairs.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.forEach")}}
- {{domxref("CSSUnparsedValue.keys")}}
- {{domxref("CSSUnparsedValue.length")}}
- {{domxref("CSSUnparsedValue.values")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
