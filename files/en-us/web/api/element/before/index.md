---
title: "Element: before() method"
short-title: before()
slug: Web/API/Element/before
page-type: web-api-instance-method
browser-compat: api.Element.before
---

{{APIRef("DOM")}}

The **`before()`** method of the {{domxref("Element")}} interface inserts a set of {{domxref("Node")}} objects or strings in the children list of this `Element`'s parent, just before this `Element`. Strings are inserted as equivalent {{domxref("Text")}} nodes. Nothing happens if {{domxref("Node.parentNode", "parentNode")}} is `null`.

## Syntax

```js-nolint
before(param1)
before(param1, param2)
before(param1, param2, /* …, */ paramN)
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
const container = document.createElement("div");
const p = document.createElement("p");
container.appendChild(p);
const span = document.createElement("span");

p.before(span);

console.log(container.outerHTML);
// "<div><span></span><p></p></div>"
```

### Inserting text

```js
const container = document.createElement("div");
const p = document.createElement("p");
container.appendChild(p);

p.before("Text");

console.log(container.outerHTML);
// "<div>Text<p></p></div>"
```

### Inserting an element and text

```js
const container = document.createElement("div");
const p = document.createElement("p");
container.appendChild(p);
const span = document.createElement("span");

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
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("CharacterData.before()")}}
- {{domxref("DocumentType.before()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("NodeList")}}
