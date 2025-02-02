---
title: "SVGNumberList: initialize() method"
short-title: initialize()
slug: Web/API/SVGNumberList/initialize
page-type: web-api-instance-method
browser-compat: api.SVGNumberList.initialize
---

{{APIRef("SVG")}}

The **`initialize()`** method of the {{domxref("SVGNumberList")}} interface clears all existing items from the list and re-initializes the list to hold the single item specified by the parameter. If the inserted item is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy. The return value is the item inserted into the list.

## Syntax

```js-nolint
initialize(newItem)
```

### Parameters

- `newItem`
  - : The {{domxref("SVGNumber")}} to add to the list.

### Return value

The {{domxref("SVGNumber")}} that was added to the list.

### Exceptions

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : Thrown if the {{domxref("SVGNumberList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
