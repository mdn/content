---
title: CSSUnparsedValue()
slug: Web/API/CSSUnparsedValue/CSSUnparsedValue
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
var CSSUnparsedValue = new CSSUnparsedValue(members)
```

### Parameters

- members
  - : An array whose values must be either a {{domxref('USVString')}} or a
    {{domxref('CSSVariableReferenceValue')}}.

## Examples

```js
let value  = new CSSUnparsedValue( ['4deg'] ),
    values = new CSSUnparsedValue( ['1em', '#445566', '-45px'] );

console.log( value  ); // CSSUnparsedValue {0: "4deg", length: 1}
console.log( values ); // CSSUnparsedValue {0: "1em", 1: "#445566", 2: "-45px", length: 3}
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
