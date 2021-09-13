---
title: Node.normalize()
slug: Web/API/Node/normalize
tags:
  - API
  - DOM
  - Method
  - NeedsSpecTable
  - Node
  - Reference
browser-compat: api.Node.normalize
---
{{APIRef("DOM")}}

The **`Node.normalize()`** method puts the specified node and all of its sub-tree into a "normalized" form. In a normalized sub-tree, no text nodes in the sub-tree are empty and there are no adjacent text nodes.

## Syntax

```js
element.normalize();
```

## Example

```js
let wrapper = document.createElement("div");

wrapper.appendChild( document.createTextNode("Part 1 ") );
wrapper.appendChild( document.createTextNode("Part 2 ") );

// At this point, wrapper.childNodes.length === 2
// wrapper.childNodes[0].textContent === "Part 1 "
// wrapper.childNodes[1].textContent === "Part 2 "

wrapper.normalize();

// Now, wrapper.childNodes.length === 1
// wrapper.childNodes[0].textContent === "Part 1 Part 2 "
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Text.splitText()")}}
