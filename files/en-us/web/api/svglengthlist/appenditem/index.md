---
title: "SVGLengthList: appendItem() method"
short-title: appendItem()
slug: Web/API/SVGLengthList/appendItem
page-type: web-api-instance-method
browser-compat: api.SVGLengthList.appendItem
---

{{APIRef("SVG")}}

The **`appendItem()`** method of the {{domxref("SVGLengthList")}} interface inserts a new item at the end of the list. If the given item is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy.

## Syntax

```js-nolint
appendItem(newItem)
```

### Parameters

- `newItem`
  - : The {{domxref("SVGLength")}} to add to the list.

### Return value

The {{domxref("SVGLength")}} that was added to the list.

### Exceptions

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : Thrown when the list is read-only.

## Examples

See {{domxref("SVGLengthList")}} for a complete example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
