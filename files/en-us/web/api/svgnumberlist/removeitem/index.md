---
title: "SVGNumberList: removeItem() method"
short-title: removeItem()
slug: Web/API/SVGNumberList/removeItem
page-type: web-api-instance-method
browser-compat: api.SVGNumberList.removeItem
---

{{APIRef("SVG")}}

The `removeItem()` method of the {{domxref("SVGNumberList")}} interface removes an existing item from the list.

## Syntax

```js-nolint
SVGNumberList.removeItem(index)
```

### Parameters

- `index`
  - : An integer; the index of the item to be removed as an unsigned long.

### Return value

An {{domxref("SVGNumber")}} object; the removed item from the list.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `NoModificationAllowedError` {{domxref("DOMException")}}

  - : Thrown if {{domxref("SVGNumberList")}} corresponds to a read-only attribute or when the object itself is read-only.

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the index number is greater than or equal to {{domxref("SVGNumberList.numberOfItems", "numberOfItems")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGNumber")}}
- {{domxref("SVGNumberList.numberOfItems")}}
