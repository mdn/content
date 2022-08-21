---
title: HTMLVideoElement.requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - HTMLVideoElement
  - Media
  - Method
  - Picture-in-Picture
  - Picture-in-Picture API
  - Reference
  - Video
  - pip
browser-compat: api.HTMLVideoElement.requestPictureInPicture
---
{{ APIRef("HTML DOM") }}

The **{{domxref("HTMLVideoElement")}}** method
**`requestPictureInPicture()`** issues an asynchronous request
to display the video in picture-in-picture mode.

It's not guaranteed that the video will be put into picture-in-picture. If permission
to enter that mode is granted, the returned {{jsxref("Promise")}} will resolve and the
video will receive a {{domxref("HTMLVideoElement.enterpictureinpicture_event",
  "enterpictureinpicture")}} event to let it know that it's now in picture-in-picture.

## Syntax

```js
requestPictureInPicture()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that will resolve to a {{domxref("PictureInPictureWindow")}}
object. that can be used to listen when a user will resize that floating window.

## Examples

This example requests that the video enters Picture-in-Picture mode, and sets an event
listener to handle the floating window resizing.

```js
function enterPictureInPicture() {
  videoElement.requestPictureInPicture()
    .then((pictureInPictureWindow) => {
      pictureInPictureWindow.addEventListener("resize", () => onPipWindowResize(), false);
    })
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("video")}} element
- {{DOMxRef("HTMLVideoElement.autoPictureInPicture")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
