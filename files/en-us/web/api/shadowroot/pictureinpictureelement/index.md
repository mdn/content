---
title: ShadowRoot.pictureInPictureElement
slug: Web/API/ShadowRoot/pictureInPictureElement
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ShadowRoot
  - Web Components
  - shadow dom
browser-compat: api.ShadowRoot.pictureInPictureElement
---
{{APIRef("Shadow DOM")}}

The **`pictureInPictureElement`** read-only property of the
{{domxref("ShadowRoot")}} interface returns the {{domxref("Element")}} that is currently being
presented in picture-in-picture mode in this shadow tree, or `null` if
picture-in-picture mode is not currently in use.

## Value

A reference to the {{domxref("Element")}} object that's currently in
picture-in-picture mode, or, if picture-in-picture mode isn't currently in use by the
shadow tree, the returned value is `null`.

## Examples

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;
let pipElem = shadow.pictureInPictureElement;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.pictureInPictureElement")}}
