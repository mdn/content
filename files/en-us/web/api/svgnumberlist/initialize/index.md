---
title: "SVGNumberList: initialize() method"
short-title: initialize()
slug: Web/API/SVGNumberList/initialize
page-type: web-api-instance-method
browser-compat: api.SVGNumberList.initialize
---

{{APIRef("SVG")}}

The `initialize()` method of the {{domxref("SVGNumberList")}} interface clears all existing current items from the list and re-initializes the list to hold the single item specified by the parameter.

If the inserted item is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy.

## Syntax

```js-nolint
SVGNumberList.initialize(newItem)
```

### Parameters

- `newItem`
  - : An {{domxref("SVGNumber")}} item that is inserted into the list.

### Return value

An {{domxref("SVGNumber")}} object; the item inserted into the list.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGNumberList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGNumber")}}
