---
title: "SVGNumberList: insertItemBefore() method"
short-title: insertItemBefore()
slug: Web/API/SVGNumberList/insertItemBefore
page-type: web-api-instance-method
browser-compat: api.SVGNumberList.insertItemBefore
---

{{APIRef("SVG")}}

The `insertItemBefore()` method of the {{domxref("SVGNumberList")}} interface inserts a new item into the list at the specified position.

The first item is indexed at `0`. The inserted item is the item itself and not a copy.

- If `newItem` is already in a list, it is removed from its previous list before it is inserted into this list.

- If the item is already in this list, note that the `index` of the item to insert before is before the removal of the item.

- If the `index` is equal to `0`, then the new item is inserted at the front of the list.

- If the `index` is greater than or equal to {{domxref("SVGNumberList.numberOfItems", "numberOfItems")}}, then the new item is appended to the end of the list.

## Syntax

```js-nolint
SVGNumberList.insertItemBefore(newItem, index)
```

### Parameters

- `newItem`
  - : An {{domxref("SVGNumber")}} item that is inserted into the list.
- `index`
  - : An integer; the index where the new item should be inserted as an unsigned long.

### Return value

An {{domxref("SVGNumber")}} object; the inserted item from the list.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGNumberList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGNumber")}}
