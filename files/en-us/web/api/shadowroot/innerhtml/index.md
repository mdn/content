---
title: ShadowRoot.innerHTML
slug: Web/API/ShadowRoot/innerHTML
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ShadowRoot
  - innerHTML
  - shadow dom
browser-compat: api.ShadowRoot.innerHTML
---
{{APIRef("Shadow DOM")}}

The **`innerHTML`** property of the {{domxref("ShadowRoot")}}
interface sets or returns a reference to the DOM tree inside the
`ShadowRoot`.

## Value

A string.

## Examples

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;

shadow.innerHTML = '<strong>This element should be more important!</strong>';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
