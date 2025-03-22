---
title: "HTMLAllCollection: namedItem() method"
short-title: namedItem()
slug: Web/API/HTMLAllCollection/namedItem
page-type: web-api-instance-method
browser-compat: api.HTMLAllCollection.namedItem
---

{{APIRef("DOM")}}

The **`namedItem()`** method of the {{domxref("HTMLAllCollection")}} interface returns the first {{domxref("Element")}} in the collection whose `id` or `name` attribute matches the specified name, or `null` if no element matches.

## Syntax

```js-nolint
namedItem(name)
```

### Parameters

- `name`
  - : A string representing the value of the `id` or `name` attribute of the element we are looking for.

### Return value

The first {{domxref("Element")}} in the {{domxref("HTMLAllCollection")}} matching the `name`, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), if there are none.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
