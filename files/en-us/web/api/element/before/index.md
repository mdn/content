---
title: Element.before()
slug: Web/API/Element/before
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.Element.before
---
{{APIRef("DOM")}}

The **`Element.before()`** method inserts a set of
{{domxref("Node")}} or {{domxref("DOMString")}} objects in the children list of this
`Element`'s parent, just before this `Element`.
{{domxref("DOMString")}} objects are inserted as equivalent {{domxref("Text")}} nodes.

## Syntax

```js
before(... nodes)
```

### Parameters

- `nodes`
  - : A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

### Inserting an element

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span);

console.log(container.outerHTML);
// "<div><span></span><p></p></div>"
```

### Inserting text

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.before("Text");

console.log(container.outerHTML);
// "<div>Text<p></p></div>"
```

### Inserting an element and text

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span, "Text");

console.log(container.outerHTML);
// "<div><span></span>Text<p></p></div>"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.after()")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
