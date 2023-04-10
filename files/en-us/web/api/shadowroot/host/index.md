---
title: "ShadowRoot: host property"
short-title: host
slug: Web/API/ShadowRoot/host
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.host
---

{{APIRef("Shadow DOM")}}

The **`host`** read-only property of
the {{domxref("ShadowRoot")}} returns a reference to the DOM element the
`ShadowRoot` is attached to.

## Value

A DOM {{domxref('Element')}}.

## Examples

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// return the original host element some time later
let hostElem = shadow.host;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
