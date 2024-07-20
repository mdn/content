---
title: "CharacterData: after() method"
short-title: after()
slug: Web/API/CharacterData/after
page-type: web-api-instance-method
browser-compat: api.CharacterData.after
---

{{APIRef("DOM")}}

The **`after()`** method of the {{domxref("CharacterData")}} interface
inserts a set of {{domxref("Node")}} objects or strings in the children list of the
object's parent, just after the object itself.

Strings are inserted as {{domxref("Text")}} nodes; the string is being passed as argument to the {{domxref("Text/Text", "Text()")}} constructor.

## Syntax

```js-nolint
after(...nodes)
```

### Parameters

- `nodes`
  - : A set of {{domxref("Node")}} objects or strings to insert.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the new nodes cannot be inserted at the specified point in the hierarchy,
    that is if one of the following conditions is met:
    - If the insertion of one of the added node would lead to a cycle, that is if one of them is an ancestor of this {{domxref("CharacterData")}} node.
    - If one of the added node is not a {{domxref("DocumentFragment")}}, a {{domxref("DocumentType")}}, an {{domxref("Element")}}, or a {{domxref("CharacterData")}}.
    - If this {{domxref("CharacterData")}} node is actually a {{domxref("Text")}} node, and its parent is a {{domxref("Document")}}.
    - If the parent of this {{domxref("CharacterData")}} node is a {{domxref("Document")}} and one of the nodes to insert is a {{domxref("DocumentFragment")}} with more than one {{domxref("Element")}} child, or that has a {{domxref("Text")}} child.

## Examples

The `after()` method allows you to insert new nodes after a `CharacterData` node.

```js
const h1TextNode = document.querySelector("h1").firstChild;
h1TextNode.after(" #h1");

h1TextNode.parentElement.childNodes;
// NodeList [#text "CharacterData.after()", #text " #h1"]

h1TextNode.data;
// "CharacterData.after()"
```

> **Note:** If you rather want to append text to the current node,
> the [`appendData()`](/en-US/docs/Web/API/CharacterData/appendData) method lets you append to the current node's data.

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
