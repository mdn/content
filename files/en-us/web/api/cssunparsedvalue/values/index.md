---
title: "CSSUnparsedValue: values() method"
short-title: values()
slug: Web/API/CSSUnparsedValue/values
page-type: web-api-instance-method
browser-compat: api.CSSUnparsedValue.values
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`values()`** method of the {{domxref("CSSUnparsedValue")}} interface returns a new _array iterator_ that yields each item in the object.

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A new [iterable iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

## Examples

### Iterating over values

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

for (const fragment of value.values()) {
  console.log(fragment);
}
// "1em"
// "#445566"
// "-45px"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.entries()")}}
- {{domxref("CSSUnparsedValue.forEach()")}}
- {{domxref("CSSUnparsedValue.keys()")}}
- {{domxref("CSSUnparsedValue.length")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
