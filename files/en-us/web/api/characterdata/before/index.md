---
title: CharacterData.before()
slug: Web/API/CharacterData/before
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.CharacterData.before
---
{{APIRef("DOM")}}

The **`CharacterData.before()`** method inserts a set of
{{domxref("Node")}} or {{domxref("DOMString")}} objects in the children list of the
`CharacterData`'s parent, just before the `CharacterData`.
{{domxref("DOMString")}} objects are inserted as equivalent {{domxref("Text")}} nodes.

## Syntax

```js
before(... nodes)
```

### Parameters

- `nodes`
  - : A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.

### Exceptions

- {{domxref("HierarchyRequestError")}}: Node cannot be inserted at the specified point
  in the hierarchy.

## Examples

### Inserting text in new nodes

The `before()` method allows you to insert new nodes before a
`CharacterData` node leaving the current node's data unchanged.

```js
const h1TextNode = document.getElementsByTagName('h1')[0].firstChild;
h1TextNode.before("h1# ");

h1TextNode.parentElement.childNodes
// NodeList [#text "h1# ", #text "CharacterData.before()"]

h1TextNode.data;
// "CharacterData.before()"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.appendData()")}}
- {{domxref("CharacterData.after()")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
