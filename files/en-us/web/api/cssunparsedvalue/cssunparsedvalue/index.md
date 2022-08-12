---
title: CSSUnparsedValue()
slug: Web/API/CSSUnparsedValue/CSSUnparsedValue
page-type: web-api-constructor
tags:
  - API
  - CSS Typed Object Model API
  - CSSUnparsedValue
  - Constructor
  - Experimental
  - Houdini
  - NeedsExample
  - Reference
browser-compat: api.CSSUnparsedValue.CSSUnparsedValue
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`CSSUnparsedValue()`** constructor
creates a new {{domxref("CSSUnparsedValue")}} object which represents property values
that reference custom properties.

## Syntax

```js
new CSSUnparsedValue(members)
```

### Parameters

- `members`
  - : An array whose values must be either a string or a
    {{domxref('CSSVariableReferenceValue')}}.

## Examples

```js
const value = new CSSUnparsedValue(['4deg']);
const values = new CSSUnparsedValue(['1em', '#445566', '-45px']);

console.log(value); // CSSUnparsedValue {0: "4deg", length: 1}
console.log(values); // CSSUnparsedValue {0: "1em", 1: "#445566", 2: "-45px", length: 3}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSUnparsedValue.entries")}}
- {{domxref("CSSUnparsedValue.forEach")}}
- {{domxref("CSSUnparsedValue.keys")}}
- {{domxref("CSSUnparsedValue.length")}}
- {{domxref("CSSUnparsedValue.values")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
