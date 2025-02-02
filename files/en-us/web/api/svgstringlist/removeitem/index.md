---
title: "SVGStringList: removeItem() method"
short-title: removeItem()
slug: Web/API/SVGStringList/removeItem
page-type: web-api-instance-method
browser-compat: api.SVGStringList.removeItem
---

{{APIRef("SVG")}}

The **`removeItem()`** method of the {{domxref("SVGStringList")}} interface removes an existing item at the given index from the list.

## Syntax

```js-nolint
removeItem(index)
```

### Parameters

- `index`
  - : A non-negative integer that specifies the index of the item to delete.

### Return value

The string that was removed from the list.

### Exceptions

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : Thrown if the {{domxref("SVGStringList")}} corresponds to a read-only attribute or when the object itself is read-only.
- {{domxref("DOMException")}} `IndexSizeError`
  - : Thrown when the index is out of bounds for the list.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
