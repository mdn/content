---
title: "SVGNumberList: appendItem() method"
short-title: appendItem()
slug: Web/API/SVGNumberList/appendItem
page-type: web-api-instance-method
browser-compat: api.SVGNumberList.appendItem
---

{{APIRef("SVG")}}

The **`appendItem()`** method of the {{domxref("SVGNumberList")}} interface inserts a new item at the end of the list. If the given item is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy.

## Syntax

```js-nolint
appendItem(newItem)
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
