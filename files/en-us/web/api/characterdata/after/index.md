---
title: CharacterData.after()
slug: Web/API/CharacterData/after
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.CharacterData.after
---
{{APIRef("DOM")}}

The **`CharacterData.after()`** method inserts a set of
{{domxref("Node")}} or {{domxref("DOMString")}} objects in the children list of the
`CharacterData`'s parent, just after the `CharacterData`.
{{domxref("DOMString")}} objects are inserted as equivalent {{domxref("Text")}} nodes.

## Syntax

```js
after(... nodes)
```

### Parameters

- `nodes`
  - : A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.

### Exceptions

- {{domxref("HierarchyRequestError")}}: Node cannot be inserted at the specified point
  in the hierarchy.

## Examples

### Inserting text in new nodes

The `after()` method allows you to insert new nodes after a `CharacterData` node.

```js
const h1TextNode = document.getElementsByTagName('h1')[0].firstChild;
h1TextNode.after(" #h1");

h1TextNode.parentElement.childNodes
// NodeList [#text "CharacterData.after()", #text " #h1"]

h1TextNode.data;
// "CharacterData.after()"
```

### Appending text to the current node

If you rather want to append text to the current node,
the [`appendData()`](/en-US/docs/Web/API/CharacterData/appendData) method lets you append to the current node's data:

```js
const h1TextNode = document.getElementsByTagName('h1')[0].firstChild;
h1TextNode.appendData(" #h1");

h1TextNode.parentElement.childNodes;
// NodeList [#text "CharacterData.after() #h1"]

h1TextNode.data;
// "CharacterData.after() #h1"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.appendData()")}}
- {{domxref("CharacterData.before()")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
