---
title: "SVGNumberList: replaceItem() method"
short-title: replaceItem()
slug: Web/API/SVGNumberList/replaceItem
page-type: web-api-instance-method
browser-compat: api.SVGNumberList.replaceItem
---

{{APIRef("SVG")}}

The **`replaceItem()`** method of the {{domxref("SVGNumberList")}} interface replaces an existing item in the list with a new item. If the new item is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy. If the item is already in this list, note that the index of the item to replace is before the removal of the item.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameters

- `newItem`
  - : The {{domxref("SVGNumber")}} to add to the list.
- `index`
  - : A non-negative integer that specifies the index of the item to delete.

### Return value

The {{domxref("SVGNumber")}} that was added the list.

### Exceptions

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : Thrown if the {{domxref("SVGNumberList")}} corresponds to a read-only attribute or when the object itself is read-only.
- {{domxref("DOMException")}} `IndexSizeError`
  - : Thrown when the index is out of bounds for the list.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
