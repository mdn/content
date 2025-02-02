---
title: "SVGStringList: removeItem() method"
short-title: removeItem()
slug: Web/API/SVGStringList/removeItem
page-type: web-api-instance-method
browser-compat: api.SVGStringList.removeItem
---

{{APIRef("SVG")}}

The `removeItem()` method of the {{domxref("SVGStringList")}} interface removes an existing item from the list.

## Syntax

```js-nolint
removeItem(index)
```

### Parameters

- `index`
  - : An `integer`; the index of the item to be removed as an unsigned long.

### Return value

A string; the removed item from the list.

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
