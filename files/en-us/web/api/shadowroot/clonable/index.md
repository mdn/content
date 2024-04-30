---
title: "ShadowRoot: clonable property"
short-title: clonable
slug: Web/API/ShadowRoot/clonable
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.clonable
---

{{APIRef("Shadow DOM")}}

The **`clonable`** read-only property of the {{domxref("ShadowRoot")}} interface returns `true` if the shadow root is clonable, and `false` otherwise.

It can be set to `true` using the `clonable` option of the {{domxref("Element.attachShadow()")}} method or by setting the [`shadowrootclonable`] attribute of the [`<template>`] element that is being used to declaratively attach a shadow root.
By default the value is `false`.

<!-- not sure what happens when conable vs not clonable
My assumption is that cloning the host element will also clone all the shadow root, which includes styles and so on.
For a custom element I guess that means the copied element will take all the behaviours of the original.
Not sure if that is good though. If I've created a template, then I probably want a new-fresh item each time that uses the same inherited styles.
Does cloning "share" the CSS styles of the original or is it an independent copy.

Further, if not clonablee, what happens when I clone the parent element of say a custom component. Does the custom component just not get copied and my new element is the parent element minus a shadow DOM/custom element?

Also this is false by default according to spec, but seems to be true for Chrome?
-->

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
