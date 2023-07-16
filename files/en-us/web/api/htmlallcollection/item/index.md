---
title: "HTMLAllCollection: item() method"
short-title: item()
slug: Web/API/HTMLAllCollection/item
page-type: web-api-instance-method
browser-compat: api.HTMLAllCollection.item
---

{{APIRef("HTML DOM")}}

The **`item()`** method of the {{domxref("HTMLAllCollection")}} interface returns the element located at the specified offset into the collection, or the node with the specified id or name.

## Syntax

```js-nolint
item(nameOrIndex)
```

### Parameters

- `nameOrIndex`
  - : An integer representing the position of the {{domxref("Element")}} to be returned. Elements appear in an `HTMLAllCollection` in the same order in which they appear in the document's source. If the value is a string that's not a valid integer, it will be interpreted as the name or id of the node to be returned.

### Return value

If `nameOrIndex` represents an index, `item()` returns the {{domxref("Element")}} at the specified index, or `null` if `nameOrIndex` is less than zero or greater than or equal to the length property. If `nameOrIndex` represents a name, `item()` returns the same value as {{domxref("HTMLAllCollection/namedItem", "namedItem()")}}.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCollection.item()")}}
