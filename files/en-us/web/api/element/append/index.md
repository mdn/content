---
title: "Element: append() method"
short-title: append()
slug: Web/API/Element/append
page-type: web-api-instance-method
browser-compat: api.Element.append
---

{{APIRef("DOM")}}

The **`Element.append()`** method
inserts a set of {{domxref("Node")}} objects or string objects after
the last child of the `Element`. String objects
are inserted as equivalent {{domxref("Text")}} nodes.

Differences from {{domxref("Node.appendChild()")}}:

- `Element.append()` allows you to also append string
  objects, whereas `Node.appendChild()` only accepts {{domxref("Node")}}
  objects.
- `Element.append()` has no return value, whereas
  `Node.appendChild()` returns the appended {{domxref("Node")}} object.
- `Element.append()` can append several nodes and strings, whereas
  `Node.appendChild()` can only append one node.

## Syntax

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* … ,*/ paramN)
```

### Parameters

- `param1`, …, `paramN`
  - : A set of {{domxref("Node")}} or string objects to insert.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

### Appending an element

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append(p);

console.log(div.childNodes); // NodeList [ <p> ]
```

### Appending text

```js
let div = document.createElement("div");
div.append("Some text");

console.log(div.textContent); // "Some text"
```

### Appending an element and text

```js
let div = document.createElement("div");
let p = document.createElement("p");
div.append("Some text", p);

console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]
```

### The append method is unscopable

The `append()` method is not scoped into the `with` statement.
See {{jsxref("Symbol.unscopables")}} for more information.

```js
let div = document.createElement("div");

with (div) {
  append("foo");
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
