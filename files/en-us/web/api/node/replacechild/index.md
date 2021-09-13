---
title: Node.replaceChild()
slug: Web/API/Node/replaceChild
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.Node.replaceChild
---
{{APIRef("DOM")}}

The **`Node.replaceChild()`** method replaces a child node
within the given (parent) node.

Note the idiosyncratic argument order (new before old).
[`Element.replaceWith()`](/en-US/docs/Web/API/Element/replaceWith)
may be easier to read and use.

## Syntax

```js
let oldChild = parentNode.replaceChild(newChild, oldChild);
```

### Parameters

- **newChild**
  - : The new node to replace `oldChild`. If it already exists in the DOM, it
    is first removed.
- **oldChild**
  - : The child to be replaced.

### Return value

The returned value is the replaced node. This is the same node as
`oldChild`.

## Example

```js
// Given:
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// Create an empty element node
// without an ID, any attributes, or any content
var sp1 = document.createElement("span");

// Give it an id attribute called 'newSpan'
sp1.id = "newSpan";

// Create some content for the new element.
var sp1_content = document.createTextNode("new replacement span element.");

// Apply that content to the new element
sp1.appendChild(sp1_content);

// Build a reference to the existing node to be replaced
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// Replace existing node sp2 with the new span element sp1
parentDiv.replaceChild(sp1, sp2);

// Result:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.removeChild")}}
- {{domxref("Element.replaceWith")}}
