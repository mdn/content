---
title: "DOMRectReadOnly: toJSON() method"
short-title: toJSON()
slug: Web/API/DOMRectReadOnly/toJSON
page-type: web-api-instance-method
browser-compat: api.DOMRectReadOnly.toJSON
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The {{domxref("DOMRectReadOnly")}} method `toJSON()` returns a {{Glossary("JSON")}} representation of the `DOMRectReadOnly` object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A new object whose properties are set to the values in the `DOMRectReadOnly` on which the method was called.

## Examples

This example creates a {{domxref("DOMRectReadOnly")}} that represents a rectangle at position `(10, 20)` with a width of `100` and a height of `50`. It then calls `toJSON()` to obtain a JSON representation of the rectangle.

```js
const rect = new DOMRectReadOnly(10, 20, 100, 50);

const rectJSON = rect.toJSON();
console.log(rectJSON);
// Output: { x: 10, y: 20, width: 100, height: 50, top: 20, right: 110, bottom: 70, left: 10 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
