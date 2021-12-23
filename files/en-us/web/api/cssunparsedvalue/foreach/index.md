---
title: CSSUnparsedValue.forEach()
slug: Web/API/CSSUnparsedValue/forEach
tags:
  - API
  - CSS Typed Object Model API
  - CSSUnparsedValue
  - Constructor
  - Experimental
  - Houdini
  - Method
  - NeedsExample
  - Reference
  - forEach()
browser-compat: api.CSSUnparsedValue.forEach
---
{{draft}}{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`CSSUnparsedValue.forEach()`** method
executes a provided function once for each element of the
{{domxref('CSSUnparsedValue')}}.

## Syntax

```js
CSSUnparsedValue.forEach(function callback(currentValue[, index[, array]]) {
    // your iterator
}[, thisArg]);
```

### Parameters

- `callback`

  - : The function to execute for each element, taking three arguments:

    - `currentValue`
      - : The value of the current element being processed.
    - `index`{{optional_inline}}
      - : The index of the current element being processed.
    - `array`{{optional_inline}}
      - : The `CSSUnparsedValue` that `forEach()` is being called
        on.

- `thisArg` {{Optional_inline}}
  - : Value to use as **`this`** (i.e the reference
    `Object`) when executing `callback`.

### Return value

{{jsxref("undefined")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSUnparsedValue.CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.entries")}}
- {{domxref("CSSUnparsedValue.keys")}}
- {{domxref("CSSUnparsedValue.length")}}
- {{domxref("CSSUnparsedValue.values")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
