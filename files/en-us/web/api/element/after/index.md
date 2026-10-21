---
title: "Element: after() method"
short-title: after()
slug: Web/API/Element/after
page-type: web-api-instance-method
browser-compat: api.Element.after
---

{{APIRef("DOM")}}

The **`after()`** method of the {{domxref("Element")}} interface inserts a set of {{domxref("Node")}} objects or strings in the children list of the `Element`'s parent, just after the `Element`. Strings are inserted as equivalent {{domxref("Text")}} nodes. Nothing happens if {{domxref("Node.parentNode", "parentNode")}} is `null`.

## Syntax

```js-nolint
after(param1)
after(param1, param2)
after(param1, param2, /* …, */ paramN)
```

### Parameters

- `param1`, …, `paramN`
  - : A set of {{domxref("Node")}} objects or strings to insert.

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
const container = document.createElement("div");
const p = document.createElement("p");
container.appendChild(p);

p.after("Text");

console.log(container.outerHTML);
// "<div><p></p>Text</div>"
```

### Inserting an element and text

```js
const container = document.createElement("div");
const p = document.createElement("p");
container.appendChild(p);
const span = document.createElement("span");

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
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("CharacterData.after()")}}
- {{domxref("DocumentType.after()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("NodeList")}}
