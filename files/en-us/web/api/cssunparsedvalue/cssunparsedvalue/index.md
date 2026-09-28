---
title: "CSSUnparsedValue: CSSUnparsedValue() constructor"
short-title: CSSUnparsedValue()
slug: Web/API/CSSUnparsedValue/CSSUnparsedValue
page-type: web-api-constructor
browser-compat: api.CSSUnparsedValue.CSSUnparsedValue
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSUnparsedValue()`** constructor creates a new {{domxref("CSSUnparsedValue")}} object, which represents a property value that can't be parsed into a more specific type — typically the value of a custom property.

## Syntax

```js-nolint
new CSSUnparsedValue(members)
```

### Parameters

- `members`
  - : An array whose values must be either a string or a {{domxref("CSSVariableReferenceValue")}}.

## Examples

### Basic usage

```js
const value = new CSSUnparsedValue(["4deg"]);
const values = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

console.log(value); // CSSUnparsedValue {0: "4deg", length: 1}
console.log(values); // CSSUnparsedValue {0: "1em", 1: "#445566", 2: "-45px", length: 3}
```

### `CSSUnparsedValue` with a variable reference

A member can also be a {{domxref("CSSVariableReferenceValue")}}, representing a {{cssxref("var", "var()")}} reference embedded in the value.
This example builds a `CSSUnparsedValue` for a declaration equivalent to `10px var(--bar, blue)`.

```js
const fallback = new CSSUnparsedValue(["blue"]);
const varRef = new CSSVariableReferenceValue("--bar", fallback);

const value = new CSSUnparsedValue(["10px ", varRef]);

console.log(value.length); // 2
console.log(value[0]); // "10px "
console.log(value[1].variable); // "--bar"
console.log(value[1].fallback[0]); // "blue"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSVariableReferenceValue")}}
- {{domxref("CSSUnparsedValue.entries()")}}
- {{domxref("CSSUnparsedValue.forEach()")}}
- {{domxref("CSSUnparsedValue.keys()")}}
- {{domxref("CSSUnparsedValue.length")}}
- {{domxref("CSSUnparsedValue.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
