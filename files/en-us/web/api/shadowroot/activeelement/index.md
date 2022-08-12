---
title: ShadowRoot.activeElement
slug: Web/API/ShadowRoot/activeElement
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ShadowRoot
  - Web Components
  - shadow dom
browser-compat: api.ShadowRoot.activeElement
---
{{APIRef("Shadow DOM")}}

The **`activeElement`** read-only property of the
{{domxref("ShadowRoot")}} interface returns the element within the shadow tree that has focus.

## Value

The {{domxref('Element')}} which currently has focus, or `null` if there is no focused element.

## Examples

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;
let focusedElem = shadow.activeElement;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.activeElement")}}
