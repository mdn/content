---
title: Range.insertNode()
slug: Web/API/Range/insertNode
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.insertNode
---
{{ApiRef("DOM")}}

The **`Range.insertNode()`** method inserts a node at the start
of the {{domxref("Range")}}.

The new node is inserted at the start boundary point of the `Range`. If the
new node is to be added to a text {{domxref("Node")}}, that `Node` is split
at the insertion point, and the insertion occurs between the two text nodes.

If the new node is a document fragment, the children of the document fragment are
inserted instead.

## Syntax

```js
insertNode(newNode)
```

### Parameters

- `newNode`
  - : The {{domxref("Node")}} to insert at the start of the `range`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
range = document.createRange();
newNode = document.createElement("p");
newNode.appendChild(document.createTextNode("New Node Inserted Here"));
range.selectNode(document.getElementsByTagName("div").item(0));
range.insertNode(newNode);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
