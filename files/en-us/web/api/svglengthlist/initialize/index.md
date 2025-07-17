---
title: "SVGLengthList: initialize() method"
short-title: initialize()
slug: Web/API/SVGLengthList/initialize
page-type: web-api-instance-method
browser-compat: api.SVGLengthList.initialize
---

{{APIRef("SVG")}}

The **`initialize()`** method of the {{domxref("SVGLengthList")}} interface clears all existing items from the list and re-initializes the list to hold the single item specified by the parameter. If the inserted item is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy. The return value is the item inserted into the list.

## Syntax

```js-nolint
initialize(newItem)
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
