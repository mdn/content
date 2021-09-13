---
title: ShadowRoot.delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
tags:
  - API
  - Property
  - Reference
  - ShadowRoot
  - Web Components
  - delegatesFocus
  - shadow dom
browser-compat: api.ShadowRoot.delegatesFocus
---
{{APIRef("Shadow DOM")}}

The **`delegatesFocus`** read-only property of the
{{domxref("ShadowRoot")}} interface returns a boolean that indicates whether
delegatesFocus was set when the shadow was attached (see
{{domxref("Element.attachShadow()")}}).

## Syntax

```js
var df = shadowRoot.delegatesFocus
```

### Value

A boolean value — `true` if the shadow root does delegate focus,
`false` if it doesn't.

## Examples

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;

  ...

// Does it delegate focus?
let hostElem = shadow.delegatesFocus;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
