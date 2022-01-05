---
title: NodeFilter.acceptNode()
slug: Web/API/NodeFilter/acceptNode
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - NodeFilter
browser-compat: api.NodeFilter.acceptNode
---
{{APIRef("DOM")}}

The **`NodeFilter.acceptNode()`** method returns an
`unsigned short` that will be used to tell if a given {{domxref("Node")}}
must be accepted or not by the {{ domxref("NodeIterator") }} or {{ domxref("TreeWalker")
  }} iteration algorithm. This method is expected to be written by the user of a
`NodeFilter`. Possible return values are:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>NodeFilter.FILTER_ACCEPT</code></td>
      <td>
        Value returned by the
        {{ domxref("NodeFilter.acceptNode()") }} method when a node
        should be accepted.
      </td>
    </tr>
    <tr>
      <td><code>NodeFilter.FILTER_REJECT</code></td>
      <td>
        Value to be returned by the
        {{ domxref("NodeFilter.acceptNode()") }} method when a node
        should be rejected. The children of rejected nodes are not visited by
        the {{ domxref("NodeIterator") }} or
        {{ domxref("TreeWalker") }} object; this value is treated as
        "skip this node and all its children".
      </td>
    </tr>
    <tr>
      <td><code>NodeFilter.FILTER_SKIP</code></td>
      <td>
        Value to be returned by
        {{ domxref("NodeFilter.acceptNode()") }} for nodes to be
        skipped by the {{ domxref("NodeIterator") }} or
        {{ domxref("TreeWalker") }} object. The children of skipped
        nodes are still considered. This is treated as "skip this node but not
        its children".
      </td>
    </tr>
  </tbody>
</table>

The function should return `NodeFilter.FILTER_ACCEPT`, which causes the
TreeWalker to return the node, `NodeFilter.FILTER_REJECT`, which causes the
TreeWalker to ignore the entire subtree, or `NodeFilter.FILTER_SKIP`.

The browser doesn't provide any object implementing this method. It is the user who is
expected to write an object implementing the {{domxref("NodeFilter")}} interface,
tailoring the `acceptNode()` method to its needs, and using it with some
{{domxref("TreeWalker")}} or {{domxref("NodeIterator")}} objects.

## Syntax

```js
result = nodeFilter.acceptNode(node)
```

### Parameters

- _node_
  - : Is a {{domxref("Node")}} being the object to check against the filter.

## Example

```js
var nodeIterator = document.createNodeIterator(
  // Node to use as root
  document.getElementById('someId'),

  // Only consider nodes that are text nodes (nodeType 3)
  NodeFilter.SHOW_TEXT,

  // Object containing the function to use for the acceptNode method
  // of the NodeFilter
    { acceptNode: function(node) {
      // Logic to determine whether to accept, reject or skip node
      // In this case, only accept nodes that have content
      // other than whitespace
      if ( ! /^\s*$/.test(node.data) ) {
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  },
  false
);

// Show the content of every non-empty text node that is a child of root
var node;

while ((node = nodeIterator.nextNode())) {
  alert(node.data);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface it belongs to: {{domxref("NodeFilter")}}.
