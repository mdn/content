---
title: "CSSUnparsedValue: keys() method"
short-title: keys()
slug: Web/API/CSSUnparsedValue/keys
page-type: web-api-instance-method
browser-compat: api.CSSUnparsedValue.keys
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`keys()`** method of the {{domxref("CSSUnparsedValue")}} interface returns a new _array iterator_ that yields the index of each item in the object.

## Syntax

```js-nolint
keys()
```

### Parameters

None.

### Return value

A new [iterable iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

## Examples

### Iterating over indexes

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

for (const index of value.keys()) {
  console.log(index);
}
// 0
// 1
// 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.entries()")}}
- {{domxref("CSSUnparsedValue.forEach()")}}
- {{domxref("CSSUnparsedValue.length")}}
- {{domxref("CSSUnparsedValue.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
