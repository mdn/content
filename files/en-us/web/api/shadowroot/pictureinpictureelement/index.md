---
title: "ShadowRoot: pictureInPictureElement property"
short-title: pictureInPictureElement
slug: Web/API/ShadowRoot/pictureInPictureElement
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.pictureInPictureElement
---

{{APIRef("Picture-in-Picture API")}}

The **`pictureInPictureElement`** read-only property of the
{{domxref("ShadowRoot")}} interface returns the {{domxref("Element")}} that is currently being
presented in picture-in-picture mode in this shadow tree, or `null` if
picture-in-picture mode is not currently in use.

## Value

A reference to the {{domxref("Element")}} object that's currently in picture-in-picture mode.

Returns `null` if the shadow tree has no associated element in picture-in-picture mode. For example, there's no picture-in-picture element, or the element is not in the shadow tree.

## Examples

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let pipElem = shadow.pictureInPictureElement;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.pictureInPictureElement")}}
