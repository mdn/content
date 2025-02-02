---
title: "SVGStringList: initialize() method"
short-title: initialize()
slug: Web/API/SVGStringList/initialize
page-type: web-api-instance-method
browser-compat: api.SVGStringList.initialize
---

{{APIRef("SVG")}}

The `initialize()` method of the {{domxref("SVGStringList")}} interface clears all existing current items from the list and re-initializes the list to hold the single item specified by the parameter.

If the inserted item is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy.

## Syntax

```js-nolint
initialize(newItem)
```

### Parameters

- `newItem`
  - : A string item that is inserted into the list.

### Return value

A string; the item inserted into the list.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGStringList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
