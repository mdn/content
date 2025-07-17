---
title: "SVGLengthList: insertItemBefore() method"
short-title: insertItemBefore()
slug: Web/API/SVGLengthList/insertItemBefore
page-type: web-api-instance-method
browser-compat: api.SVGLengthList.insertItemBefore
---

{{APIRef("SVG")}}

The **`insertItemBefore()`** method of the {{domxref("SVGLengthList")}} interface inserts a new item into the list at the specified position. The first item is indexed 0. The inserted item is the item itself and not a copy.

- If the new item is already in a list, it is removed from its previous list before it is inserted into this list.
- If the item is already in this list, note that the index of the item to insert before is before the removal of the item.
- If the index is equal to 0, then the new item is inserted at the front of the list.
- If the index is greater than or equal to the {{domxref("SVGLengthList.length", "length")}}, then the new item is appended to the end of the list.

## Syntax

```js-nolint
insertItemBefore(newItem, index)
```

### Parameters

- `newItem`
  - : The {{domxref("SVGLength")}} to add to the list.
- `index`
  - : A non-negative integer that specifies the index of the item to insert the new item before.

### Return value

The {{domxref("SVGLength")}} that was added to the list.

### Exceptions

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : Thrown when the list is read-only.

## Examples

See {{domxref("SVGLengthList")}} for a complete example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
