---
title: "ShadowRoot: mode property"
short-title: mode
slug: Web/API/ShadowRoot/mode
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.mode
---

{{APIRef("Shadow DOM")}}

The **`mode`** read-only property of the {{domxref("ShadowRoot")}} specifies its mode — either `open` or `closed`.
This defines whether or not the shadow root's internal features are accessible from JavaScript.

When the `mode` of a shadow root is `"closed"`, the shadow root's implementation internals are inaccessible and unchangeable from JavaScript—in the same way the implementation internals of, for example, the {{HTMLElement("video")}} element are inaccessible and unchangeable from JavaScript.

The property value is set using the `options.mode` property of the object passed to {{domxref("Element.attachShadow()")}}, or using the [`shadowrootmode`](/en-US/docs/Web/HTML/Element/template#shadowrootmode) attribute of the [`<template>`](/en-US/docs/Web/HTML/Element/template) element when a shadow root is created declaratively.

## Value

A string value that can have either of the values:

- `open`
  - : Elements of the shadow root are accessible from JavaScript outside the root.
- `closed`
  - : Nodes inside the closed shadow tree cannot be accessed by JavaScript outside of the root.

## Examples

```js
// We create a closed shadow root, that is not accessible
let element = document.createElement("div");
element.attachShadow({ mode: "closed" });
element.shadowRoot; // null as the shadow root is closed

// We create an open shadow root, that is accessible
let element2 = document.createElement("div");
element2.attachShadow({ mode: "open" });
console.log(`The shadow is ${element2.shadowRoot.mode}`); // logs "The shadow is open"
element2.shadowRoot.textContent("Opened shadow"); // The shadow is open, we can access it from outside
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
