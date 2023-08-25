---
title: "NodeIterator: detach() method"
short-title: detach()
slug: Web/API/NodeIterator/detach
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.NodeIterator.detach
---

{{APIRef("DOM")}}{{deprecated_header}}

The **`NodeIterator.detach()`** method is a no-op, kept for
backward compatibility only.

Originally, it detached the {{domxref("NodeIterator")}} from the set over which it
iterates, releasing any resources used by the set and setting the iterator's state to
`INVALID`. Once this method had been called, calls to other methods on
`NodeIterator` would raise the `INVALID_STATE_ERR` exception.

## Syntax

```js-nolint
detach()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
);
nodeIterator.detach(); // detaches the iterator

nodeIterator.nextNode(); // throws an INVALID_STATE_ERR exception
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface it belongs to: {{domxref("NodeIterator")}}.
