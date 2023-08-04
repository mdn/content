---
title: "Element: after() method"
short-title: after()
slug: Web/API/Element/after
page-type: web-api-instance-method
browser-compat: api.Element.after
---

{{APIRef("DOM")}}

The **`Element.after()`** method inserts a set of
{{domxref("Node")}} or string objects in the children list of the
`Element`'s parent, just after the `Element`.
String objects are inserted as equivalent {{domxref("Text")}} nodes.

## Syntax

```js-nolint
after(node1)
after(node1, node2)
after(node1, node2, /* …, */ nodeN)
```

### Parameters

- `node1`, …, `nodeN`
  - : A set of {{domxref("Node")}} or string objects to insert.

### Return value

None ({{jsxref("undefined")}}).

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

p.after(span);

console.log(container.outerHTML);
// "<div><p></p><span></span></div>"
```

### Inserting text

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.after("Text");

console.log(container.outerHTML);
// "<div><p></p>Text</div>"
```

### Inserting an element and text

```js
let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span, "Text");

console.log(container.outerHTML);
// "<div><p></p><span></span>Text</div>"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.before()")}}
- {{domxref("Element.append()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("NodeList")}}
