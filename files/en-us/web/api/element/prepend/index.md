---
title: Element.prepend()
slug: Web/API/Element/prepend
tags:
  - API
  - DOM
  - Method
  - Node
  - Element
  - Reference
  - prepend
browser-compat: api.Element.prepend
---
{{APIRef("DOM")}}

The **`Element.prepend()`** method inserts a set of
{{domxref("Node")}} objects or {{domxref("DOMString")}} objects before the first child
of the {{domxref("Element")}}. {{domxref("DOMString")}} objects are inserted as
equivalent {{domxref("Text")}} nodes.

## Syntax

```js
prepend(...nodesOrDOMStrings);
```

### Parameters

- `nodesOrDOMStrings`
  - : A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.

### Return value

`undefined`.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

### Prepending an element

```js
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

console.log(div.childNodes); // NodeList [ <span>, <p> ]
```

### Prepending text

```js
let div = document.createElement("div");
div.append("Some text");
div.prepend("Headline: ");

console.log(div.textContent); // "Headline: Some text"
```

### Appending an element and text

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.prepend("Some text", p);

console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]
```

### The prepend method is unscopable

The `prepend()` method is not scoped into the `with` statement.
See {{jsxref("Symbol.unscopables")}} for more information.

```js
let div = document.createElement("div");

with(div) {
  prepend("foo");
}
// ReferenceError: prepend is not defined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Element.before()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
