---
title: "ShadowRoot: serializable property"
short-title: serializable
slug: Web/API/ShadowRoot/serializable
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.serializable
---

{{APIRef("Shadow DOM")}}

The **`serializable`** read-only property of the {{domxref("ShadowRoot")}} interface returns `true` if the shadow root is serializable.

If set, the shadow root may be serialized by calling the {{DOMxRef('Element.getHTML()')}} or {{DOMxRef('ShadowRoot.getHTML()')}} methods with the `options.serializableShadowRoots` parameter set `true`.

The serializable property of a shadow root is specified when the shadow root is created, either declaratively by adding the [`shadowrootserializable`](/en-US/docs/Web/HTML/Element/template#shadowrootserializable) attribute on a `<template>` element (along with an allowed [`shadowrootmode`](/en-US/docs/Web/HTML/Element/template#shadowrootmode) value), or by setting the [`options.serializable`](/en-US/docs/Web/API/Element/attachShadow#serializable) parameter to `true` when using [`Element.attachShadow()`](/en-US/docs/Web/API/Element/attachShadow).

## Value

`true` if the shadow root is serializable; `false` otherwise.

## Examples

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// Is it serializable?
let hostElem = shadow.serializable;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
