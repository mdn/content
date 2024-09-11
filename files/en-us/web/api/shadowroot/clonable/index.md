---
title: "ShadowRoot: clonable property"
short-title: clonable
slug: Web/API/ShadowRoot/clonable
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.clonable
---

{{APIRef("Shadow DOM")}}

The **`clonable`** read-only property of the {{domxref("ShadowRoot")}} interface returns `true` if the shadow root is clonable, and `false` otherwise.

When the value is `true`, a shadow host cloned with {{domxref("Node.cloneNode()")}} or {{domxref("Document.importNode()")}} will include a copy of the shadow root.

By default the value is `false`.
It can be set to `true` using the `clonable` option of the {{domxref("Element.attachShadow()")}} method or by setting the [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the `<template>` element that is being used to declaratively attach a shadow root.

## Value

`true` if the shadow root is clonable, and `false` otherwise.

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
