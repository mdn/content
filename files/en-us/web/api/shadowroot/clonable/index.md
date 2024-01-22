---
title: "ShadowRoot: clonable property"
short-title: clonable
slug: Web/API/ShadowRoot/clonable
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.clonable
---

{{APIRef("Shadow DOM")}}

The **`clonable`** read-only property of the {{domxref("ShadowRoot")}} interface returns `true` if the shadow root is clonable, and `false` otherwise.

## Examples

```js
const host = document.createElement("div");
const shadowRoot = host.attachShadow({
  mode: "open",
  clonable: true,
});

shadowRoot.clonable;
// true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
