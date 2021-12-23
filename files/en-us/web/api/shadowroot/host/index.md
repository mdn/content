---
title: ShadowRoot.host
slug: Web/API/ShadowRoot/host
tags:
  - API
  - Host
  - Property
  - Reference
  - ShadowRoot
  - shadow dom
browser-compat: api.ShadowRoot.host
---
{{APIRef("Shadow DOM")}}

The **`host`** read-only property of
the {{domxref("ShadowRoot")}} returns a reference to the DOM element the
`ShadowRoot` is attached to.

## Syntax

```js
const someElement = shadowRoot.host
```

### Value

A  DOM {{domxref('Element')}}.

## Examples

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;

  ...

// return the original host element some time later
let hostElem = shadow.host;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
