---
title: Node.appendChild()
slug: Web/API/Node/appendChild
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.Node.appendChild
---
{{APIRef("DOM")}}

The **`Node.appendChild()`** method adds a node to the end of
the list of children of a specified parent node. If the given child is a reference to an
existing node in the document, `appendChild()` moves it from its current
position to the new position (there is no requirement to remove the node from its parent
node before appending it to some other node).

This means that a node can't be in two points of the document simultaneously. So if the
node already has a parent, the node is first removed, then appended at the new position.
The {{domxref("Node.cloneNode()")}} method can be used to make a copy of the node before
appending it under the new parent. Note that the copies made with `cloneNode`
will not be automatically kept in sync.

If the given child is a {{domxref("DocumentFragment")}}, the entire contents of the
{{domxref("DocumentFragment")}} are moved into the child list of the specified parent
node.

> **Note:** The {{domxref("Element.append()")}} method supports multiple arguments and
> appending strings.

## Syntax

```js
element.appendChild(aChild)
```

### Parameters

- `aChild`
  - : The node to append to the given parent node (commonly an element).

### Return value

The returned value is the appended child (`aChild`), except
when `aChild` is a {{domxref("DocumentFragment")}}, in which case
the empty {{domxref("DocumentFragment")}} is returned.

## Notes

Chaining may not work as expected, due to `appendChild()` returning the
child element:

```js
let aBlock = document.createElement('block').appendChild( document.createElement('b') );
```

Sets `aBlock` to `<b></b>` only, which is
probably not what you want.

## Example

```js
// Create a new paragraph element, and append it to the end of the document body
let p = document.createElement("p");
document.body.appendChild(p);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.append()")}}
