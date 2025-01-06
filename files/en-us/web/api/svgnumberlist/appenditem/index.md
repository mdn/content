---
title: "SVGNumberList: appendItem() method"
short-title: appendItem()
slug: Web/API/SVGNumberList/appendItem
page-type: web-api-instance-method
browser-compat: api.SVGNumberList.appendItem
---

{{APIRef("SVG")}}

The `appendItem()` method of the {{domxref("SVGNumberList")}} interface inserts a new item at the end of the list.

The inserted item is the item itself and not a copy.

- If `newItem` is already in a list, it is removed from its previous list before it is inserted into this list.

## Syntax

```js-nolint
SVGNumberList.appendItem(newItem)
```

### Parameters

- `newItem`
  - : An {{domxref("SVGNumber")}} item that is appended to the list.

### Return value

An {{domxref("SVGNumber")}} object; the appended item from the list.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGNumberList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGNumber")}}
- {{domxref("SVGNumberList.numberOfItems")}}
