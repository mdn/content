---
title: Element.replaceWith()
slug: Web/API/Element/replaceWith
tags:
  - API
  - DOM
  - Method
  - Element
  - Reference
browser-compat: api.Element.replaceWith
---
{{APIRef("DOM")}}

The **`Element.replaceWith()`** method replaces this
`Element` in the children list of its parent with a set of
{{domxref("Node")}} or {{domxref("DOMString")}} objects. {{domxref("DOMString")}}
objects are inserted as equivalent {{domxref("Text")}} nodes.

## Syntax

```js
replaceWith(...nodes)
```

### Parameters

- `nodes`
  - : A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to replace.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

### Using `replaceWith()`

```js
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "<div><span></span></div>"
```

### `replaceWith()` is unscopable

The `replaceWith()` method is not scoped into the `with`
statement. See {{jsxref("Symbol.unscopables")}} for more information.

```js
with(node) {
  replaceWith("foo");
}
// ReferenceError: replaceWith is not defined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.replaceChild()")}}
- {{domxref("NodeList")}}
