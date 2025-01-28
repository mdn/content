---
title: "SVGNumberList: getItem() method"
short-title: getItem()
slug: Web/API/SVGNumberList/getItem
page-type: web-api-instance-method
browser-compat: api.SVGNumberList.getItem
---

{{APIRef("SVG")}}

The `getItem()` method of the {{domxref("SVGNumberList")}} interface returns the specified item from the list.

The returned item is the item itself and not a copy. Any changes made to the item are immediately reflected in the list.

The first item is indexed at `0`.

## Syntax

```js-nolint
SVGNumberList.getItem(index)
```

### Parameters

- `index`
  - : An integer; the index of the specified item as an unsigned long.

### Return value

An {{domxref("SVGNumber")}} object; the specified item from the list.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGNumberList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGNumber")}}
