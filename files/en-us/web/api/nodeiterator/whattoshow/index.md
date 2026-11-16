---
title: "NodeIterator: whatToShow property"
short-title: whatToShow
slug: Web/API/NodeIterator/whatToShow
page-type: web-api-instance-property
browser-compat: api.NodeIterator.whatToShow
---

{{APIRef("DOM")}}

The **`NodeIterator.whatToShow`** read-only property represents
an `unsigned integer` representing a bitmask signifying what types of nodes
should be returned by the {{domxref("NodeIterator")}}.

## Value

A non-negative integer. For the list of possible values, see [`document.createNodeIterator()`](/en-US/docs/Web/API/Document/createNodeIterator#whattoshow).

## Examples

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
  { acceptNode: (node) => NodeFilter.FILTER_ACCEPT },
);
if (
  nodeIterator.whatToShow & NodeFilter.SHOW_ALL ||
  nodeIterator.whatToShow & NodeFilter.SHOW_COMMENT
) {
  // nodeIterator will show comments
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface this property belongs to: {{domxref("NodeIterator")}}.
