---
title: "CSSUnparsedValue: entries() method"
short-title: entries()
slug: Web/API/CSSUnparsedValue/entries
page-type: web-api-instance-method
browser-compat: api.CSSUnparsedValue.entries
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`entries()`** method of the {{domxref("CSSUnparsedValue")}} interface returns a new _array iterator_ that yields `[index, value]` pairs for each item in the object.

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Iterating over index/value pairs

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

for (const [index, fragment] of value.entries()) {
  console.log(index, fragment);
}
// 0 "1em"
// 1 "#445566"
// 2 "-45px"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
- {{domxref("CSSUnparsedValue.forEach()")}}
- {{domxref("CSSUnparsedValue.keys()")}}
- {{domxref("CSSUnparsedValue.length")}}
- {{domxref("CSSUnparsedValue.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
