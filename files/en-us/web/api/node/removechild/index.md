---
title: "Node: removeChild() method"
short-title: removeChild()
slug: Web/API/Node/removeChild
page-type: web-api-instance-method
browser-compat: api.Node.removeChild
---

{{APIRef("DOM")}}

The **`removeChild()`** method of the {{domxref("Node")}} interface
removes a child node from the DOM and returns the removed node.

> **Note:** As long as a reference is kept on the removed child,
> it still exists in memory, but is no longer part of the DOM.
> It can still be reused later in the code.
>
> If the return value of `removeChild()` is not stored, and no other reference is kept,
> it will be [automatically deleted](/en-US/docs/Web/JavaScript/Memory_management) from memory after a short time.

Unlike {{domxref("Node.cloneNode()")}} the return value preserves the {{domxref("EventListener")}} objects associated with it.

## Syntax

```js-nolint
removeChild(child)
```

### Parameters

- `child`
  - : A {{domxref("Node")}} that is the child node to be removed from the DOM.

### Exception

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the `child` is not a child of the node.
- {{jsxref("TypeError")}}
  - : Thrown if the `child` is `null`.

## Examples

### Simple examples

Given this HTML:

```html
<div id="top">
  <div id="nested"></div>
</div>
```

To remove a specified element when knowing its parent node:

```js
let d = document.getElementById("top");
let d_nested = document.getElementById("nested");
let throwawayNode = d.removeChild(d_nested);
```

To remove a specified element without having to specify its parent node:

```js
let node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

To remove all children from an element:

```js
let element = document.getElementById("idOfParent");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

### Causing a TypeError

```html
<!--Sample HTML code-->
<div id="top"></div>
```

```js
let top = document.getElementById("top");
let nested = document.getElementById("nested");

// Throws Uncaught TypeError
let garbage = top.removeChild(nested);
```

### Causing a NotFoundError

```html
<!--Sample HTML code-->
<div id="top">
  <div id="nested"></div>
</div>
```

```js
let top = document.getElementById("top");
let nested = document.getElementById("nested");

// This first call correctly removes the node
let garbage = top.removeChild(nested);

// Throws NotFoundError
garbage = top.removeChild(nested);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.parentNode")}}
- {{domxref("Element.remove()")}}
- {{domxref("Node.cloneNode()")}}
