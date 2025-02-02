---
title: "SVGStringList: getItem() method"
short-title: getItem()
slug: Web/API/SVGStringList/getItem
page-type: web-api-instance-method
browser-compat: api.SVGStringList.getItem
---

{{APIRef("SVG")}}

The `getItem()` method of the {{domxref("SVGStringList")}} interface returns the specified item from the list.

The returned item is the item itself and not a copy. Any changes made to the item are immediately reflected in the list. The first item is indexed at `0`.

## Syntax

```js-nolint
getItem(index)
```

### Parameters

- `index`
  - : An `integer`; the index of the specified item as an unsigned long.

### Return value

A string; the specified item from the list.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGStringList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
