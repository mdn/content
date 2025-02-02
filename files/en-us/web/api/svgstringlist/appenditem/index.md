---
title: "SVGStringList: appendItem() method"
short-title: appendItem()
slug: Web/API/SVGStringList/appendItem
page-type: web-api-instance-method
browser-compat: api.SVGStringList.appendItem
---

{{APIRef("SVG")}}

The `appendItem()` method of the {{domxref("SVGStringList")}} interface inserts a new item at the end of the list.

If `newItem` is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy.

## Syntax

```js-nolint
appendItem(newItem)
```

### Parameters

- `newItem`
  - : A string to be appended to the list.

### Return value

A string; the appended item from the list.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGStringList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
