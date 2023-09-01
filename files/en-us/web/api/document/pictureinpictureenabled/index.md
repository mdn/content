---
title: "Document: pictureInPictureEnabled property"
short-title: pictureInPictureEnabled
slug: Web/API/Document/pictureInPictureEnabled
page-type: web-api-instance-property
browser-compat: api.Document.pictureInPictureEnabled
---

{{APIRef("Picture-in-Picture API")}}

The read-only
**`pictureInPictureEnabled`** property of the
{{domxref("Document")}} interface indicates whether or not picture-in-picture mode is
available.

Picture-in-Picture mode is available by default unless specified
otherwise by a [Permissions-Policy](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/picture-in-picture).

Although this property is read-only, it will not throw if it is modified (even in
strict mode); the setter is a no-operation and will be ignored.

## Value

A boolean value, which is `true` if a video can enter
picture-in-picture and be displayed in a floating window by calling
{{domxref("HTMLVideoElement.requestPictureInPicture()")}}. If picture-in-picture mode isn't
available, this value is `false`.

## Examples

In this example, before attempting to enter picture-in-picture mode for a
{{htmlElement("video")}} element the value of `pictureInPictureEnabled` is
checked, to avoid making the call if the feature is not available.

```js
function requestPictureInPicture() {
  if (document.pictureInPictureEnabled) {
    videoElement.requestPictureInPicture();
  } else {
    console.log("Your browser cannot use picture-in-picture right now");
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
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
