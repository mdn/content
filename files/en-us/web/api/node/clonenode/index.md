---
title: Node.cloneNode()
slug: Web/API/Node/cloneNode
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - NeedsBrowserCompatibility
  - Reference
browser-compat: api.Node.cloneNode
---
{{APIRef("DOM")}}

The **`Node.cloneNode()`** method returns a duplicate of the
node on which this method was called.

## Syntax

```js
let newClone = node.cloneNode([deep])
```

- `node`
  - : The node to be cloned.
- `newClone`

  - : The new node, cloned from `node`.

    The `newClone` has no parent and is not part of the document,
    _until_ it is added to another node that is part of the document (using
    {{domxref("Node.appendChild()")}} or a similar method).

- `deep` {{optional_inline}}

  - : If `true`, then `node` and its whole
    subtree—including text that may be in child {{domxref("Text")}} nodes—is also
    copied.

    If `false`, only `node` will be cloned. Any text
    that `node` contains is not cloned, either (since text is
    contained by one or more child {{domxref("Text")}} nodes).

    `deep` has no effect on empty elements (such as
    the {{HTMLElement("img")}} and {{HTMLElement("input")}} elements).

## Example

```js
let p = document.getElementById("para1")
let p_prime = p.cloneNode(true)
```

## Notes

Cloning a node copies all of its attributes and their values,
including intrinsic (inline) listeners. It does _not_ copy event listeners added
using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or
those assigned to element properties (e.g.,
`node.onclick = someFunction`). Additionally, for a
{{HTMLElement("canvas")}} element, the painted image is not copied.

> **Warning:** `cloneNode()` may lead to duplicate element IDs
> in a document!
>
> If the original node has an `id` attribute, and the clone
> will be placed in the same document, then you should modify the clone's ID to be
> unique.
>
> Also, `name` attributes may need to be modified also,
> depending on whether duplicate names are expected.

To clone a node to insert into a _different_ document, use
{{domxref("Document.importNode()")}} instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
