---
title: "SVGLengthList: removeItem() method"
short-title: removeItem()
slug: Web/API/SVGLengthList/removeItem
page-type: web-api-instance-method
browser-compat: api.SVGLengthList.removeItem
---

{{APIRef("SVG")}}

The **`removeItem()`** method of the {{domxref("SVGLengthList")}} interface removes an existing item at the given index from the list.

## Syntax

```js-nolint
removeItem(index)
```

### Parameters

- `index`
  - : A non-negative integer that specifies the index of the item to delete.

### Return value

The {{domxref("SVGLength")}} that was removed from the list.

### Exceptions

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : Thrown when the list is read-only.
- {{domxref("DOMException")}} `IndexSizeError`
  - : Thrown when the index is out of bounds for the list.

## Examples

See {{domxref("SVGLengthList")}} for a complete example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
