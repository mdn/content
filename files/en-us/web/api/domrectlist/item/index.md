---
title: "DOMRectList: item() method"
short-title: item()
slug: Web/API/DOMRectList/item
page-type: web-api-instance-method
browser-compat: api.DOMRectList.item
---

{{APIRef("Geometry Interfaces")}}

The {{domxref("DOMRectList")}} method
`item()` returns the {{domxref("DOMRect")}} at the specified index within the list, or `null` if the index is out of range.

## Syntax

```js-nolint
item(index)
```

### Parameters

- `index`
  - : A zero-based integer representing the position of the `DOMRect` in the `DOMRectList` to retrieve.

### Return value

A {{domxref("DOMRect")}} object at the specified index in the `DOMRectList`, or null if index is greater than or equal to the number of rectangles in the list.

## Example

```js
const rects = document.getElementById("rects").getClientRects();
console.log(rects.length); // Number of rectangles in the DOMRectList

if (rects.length > 0) {
  console.log(rects.item(0)); // Logs the first DOMRect object
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
