---
title: "Document: pictureInPictureElement property"
short-title: pictureInPictureElement
slug: Web/API/Document/pictureInPictureElement
page-type: web-api-instance-property
browser-compat: api.Document.pictureInPictureElement
---

{{ApiRef("Fullscreen API")}}

The
**`Document.pictureInPictureElement`** read-only
property returns the {{ domxref("Element") }} that is currently being
presented in picture-in-picture mode in this document, or `null` if
picture-in-picture mode is not currently in use.

Although this property is read-only, it will not throw if it is modified (even in
strict mode); the setter is a no-operation and will be ignored.

## Value

A reference to the {{domxref("Element")}} object that's currently in
picture-in-picture mode; if picture-in-picture mode isn't currently in use by the
`document`, the returned value is `null`.

## Examples

This example presents a function, `exitPictureInPicture()`,
which tests the value returned by `pictureInPictureElement`. If the document
is in picture-in-picture mode (`pictureInPictureElement` isn't
`null`), [`Document.exitPictureInPicture()`](/en-US/docs/Web/API/Document/exitPictureInPicture) is run to exit
picture-in-picture mode.

```js
function exitPictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{CSSxRef(":picture-in-picture")}}
