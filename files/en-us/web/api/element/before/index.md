---
title: "Element: before() method"
short-title: before()
slug: Web/API/Element/before
page-type: web-api-instance-method
browser-compat: api.Element.before
---

{{APIRef("DOM")}}

The **`Element.before()`** method inserts a set of
{{domxref("Node")}} or string objects in the children list of this
`Element`'s parent, just before this `Element`.
String objects are inserted as equivalent {{domxref("Text")}} nodes.

## Syntax

```js-nolint
before(param1)
before(param1, param2)
before(param1, param2, /* …, */ paramN)
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
