---
title: Node.cloneNode()
slug: Web/API/Node/cloneNode
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.Node.cloneNode
---
{{APIRef("DOM")}}

The **`cloneNode()`** method of the {{domxref("Node")}} interface
returns a duplicate of the node on which this method was called.
Its parameter controls if the subtree contained in a node is also cloned or not.

Cloning a node copies all of its attributes and their values,
including intrinsic (inline) listeners. It does _not_ copy event listeners added
using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or
those assigned to element properties (e.g., `node.onclick = someFunction`).
Additionally, for a {{HTMLElement("canvas")}} element, the painted image is not copied.

> **Warning:** `cloneNode()` may lead to duplicate element IDs in a document!
>
> If the original node has an `id` attribute, and the clone
> will be placed in the same document, then you should modify the clone's ID to be
> unique.
>
> Also, `name` attributes may need to be modified,
> depending on whether duplicate names are expected.

To clone a node to insert into a _different_ document, use
{{domxref("Document.importNode()")}} instead.

## Syntax

```js
cloneNode();
cloneNode(deep);
```

### Parameters

- `deep` {{optional_inline}}

  - : If `true`, then the node and its whole subtree,
    including text that may be in child {{domxref("Text")}} nodes,
    is also copied.

    If `false`, only the node will be cloned.
    The subtree, including any text that the node contains, is not cloned.

    Note that `deep` has no effect on empty elements,
    such as the {{HTMLElement("img")}} and {{HTMLElement("input")}} elements.

### Return value

The new {{domxref("Node")}} cloned.
The cloned node has no parent and is not part of the document,
_until_ it is added to another node that is part of the document,
using {{domxref("Node.appendChild()")}} or a similar method.

## Example

```js
let p = document.getElementById("para1")
let p_prime = p.cloneNode(true)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
