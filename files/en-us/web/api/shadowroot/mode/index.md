---
title: "ShadowRoot: mode property"
short-title: mode
slug: Web/API/ShadowRoot/mode
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.mode
---

{{APIRef("Shadow DOM")}}

The **`mode`** read-only property of the {{domxref("ShadowRoot")}}
specifies its mode — either `open` or `closed`. This defines
whether or not the shadow root's internal features are accessible from JavaScript.

When the `mode` of a shadow root is "`closed`", the shadow root's
implementation internals are inaccessible and unchangeable from JavaScript—in the same
way the implementation internals of, for example, the {{HTMLElement("video")}} element
are inaccessible and unchangeable from JavaScript.

## Value

A value defined in the
[`ShadowRootMode`](https://dom.spec.whatwg.org/#enumdef-shadowrootmode)
enum — either `open` or `closed`.

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
