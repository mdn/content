---
title: Element.append()
slug: Web/API/Element/append
tags:
  - API
  - DOM
  - Method
  - Node
  - Element
  - Reference
browser-compat: api.Element.append
---
{{APIRef("DOM")}}

The **`Element.append()`** method
inserts a set of {{domxref("Node")}} objects or {{domxref("DOMString")}} objects after
the last child of the `Element`. {{domxref("DOMString")}} objects
are inserted as equivalent {{domxref("Text")}} nodes.

Differences from {{domxref("Node.appendChild()")}}:

- `Element.append()` allows you to also append {{domxref("DOMString")}}
  objects, whereas `Node.appendChild()` only accepts {{domxref("Node")}}
  objects.
- `Element.append()` has no return value, whereas
  `Node.appendChild()` returns the appended {{domxref("Node")}} object.
- `Element.append()` can append several nodes and strings, whereas
  `Node.appendChild()` can only append one node.

## Syntax

```js
append(...nodesOrDOMStrings)
```

### Parameters

- `nodesOrDOMStrings`
  - : A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

### Appending an element

```js
let div = document.createElement("div")
let p = document.createElement("p")
div.append(p)

console.log(div.childNodes) // NodeList [ <p> ]
```

### Appending text

```js
let div = document.createElement("div")
div.append("Some text")

console.log(div.textContent) // "Some text"
```

### Appending an element and text

```js
let div = document.createElement("div")
let p = document.createElement("p")
div.append("Some text", p)

console.log(div.childNodes) // NodeList [ #text "Some text", <p> ]
```

### The append method is unscopable

The `append()` method is not scoped into the `with` statement.
See {{jsxref("Symbol.unscopables")}} for more information.

```js
let div = document.createElement("div")

with(div) {
  append("foo")
}
// ReferenceError: append is not defined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.prepend()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.after()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
