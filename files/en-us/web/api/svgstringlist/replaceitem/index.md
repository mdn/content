---
title: "SVGStringList: replaceItem() method"
short-title: replaceItem()
slug: Web/API/SVGStringList/replaceItem
page-type: web-api-instance-method
browser-compat: api.SVGStringList.replaceItem
---

{{APIRef("SVG")}}

The **`replaceItem()`** method of the {{domxref("SVGStringList")}} interface replaces an existing item in the list with a new item. The inserted item is the item itself and not a copy.

- If the new item is already in a list, it is removed from its previous list before it is inserted into this list.
- If the item is already in this list, note that the index of the item to replace is before the removal of the item.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameters

- `newItem`
  - : The string to add to the list.
- `index`
  - : A non-negative integer that specifies the index of the item to delete.

### Return value

The string that was added the list.

### Exceptions

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : Thrown if the {{domxref("SVGStringList")}} corresponds to a read-only attribute or when the object itself is read-only.
- {{domxref("DOMException")}} `IndexSizeError`
  - : Thrown when the index is out of bounds for the list.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
