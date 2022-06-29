---
title: ShadowRoot.fullscreenElement
slug: Web/API/ShadowRoot/fullscreenElement
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ShadowRoot
  - Web Components
  - shadow dom
browser-compat: api.ShadowRoot.fullscreenElement
---
{{APIRef("Shadow DOM")}}

The **`fullscreenElement`** read-only property of the
{{domxref("ShadowRoot")}} interface returns the element within the shadow tree that is currently displayed in full screen.

## Value

The {{domxref('Element')}} which is currently is displayed in full screen mode,
or `null` if there is no full screen element.

## Examples

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;
let fullscreenElem = shadow.fullscreenElement;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.fullscreenElement")}}
