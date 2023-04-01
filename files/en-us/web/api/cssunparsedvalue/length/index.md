---
title: CSSUnparsedValue.length
slug: Web/API/CSSUnparsedValue/length
page-type: web-api-instance-property
browser-compat: api.CSSUnparsedValue.length
---

{{APIRef("CSS Typed OM")}}

The **`length`** read-only property of the
{{domxref("CSSUnparsedValue")}} interface returns the number of items in the object.

## Value

An integer.

## Examples

In this example we employ the {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
constructor, then query the length:

```js
const values = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

console.log(values.length); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.entries")}}
- {{domxref("CSSUnparsedValue.forEach")}}
- {{domxref("CSSUnparsedValue.keys")}}
- {{domxref("CSSUnparsedValue.values")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
