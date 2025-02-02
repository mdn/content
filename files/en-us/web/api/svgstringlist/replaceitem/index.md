---
title: "SVGStringList: replaceItem() method"
short-title: replaceItem()
slug: Web/API/SVGStringList/replaceItem
page-type: web-api-instance-method
browser-compat: api.SVGStringList.replaceItem
---

{{APIRef("SVG")}}

The `replaceItem()` method of the {{domxref("SVGStringList")}} interface replaces an existing item in the list with a new item.

The inserted item is the item itself and not a copy.

- If `newItem` is already in a list, it is removed from its previous list before it is inserted into this list.
- If the item is already in this list, note that the `index` of the item to replace is before the removal of the item.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameters

- `newItem`
  - : A string item that is inserted into the list.
- `index`
  - : An `integer`; the index where the new item should replace the existing one, as an unsigned long.

### Return value

A string; the inserted item from the list.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `NoModificationAllowedError` {{domxref("DOMException")}}

  - : Thrown if {{domxref("SVGStringList")}} corresponds to a read-only attribute or when the object itself is read-only.

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the index number is greater than or equal to {{domxref("SVGStringList.numberOfItems", "numberOfItems")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGStringList.numberOfItems")}}
