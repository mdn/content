---
title: "HTMLVideoElement: requestPictureInPicture() method"
short-title: requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
page-type: web-api-instance-method
browser-compat: api.HTMLVideoElement.requestPictureInPicture
---

{{APIRef("Picture-in-Picture API")}}

The **{{domxref("HTMLVideoElement")}}** method
**`requestPictureInPicture()`** issues an asynchronous request
to display the video in picture-in-picture mode.

It's not guaranteed that the video will be put into picture-in-picture. If permission
to enter that mode is granted, the returned {{jsxref("Promise")}} will resolve and the
video will receive a {{domxref("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}} event to let it know that it's now in picture-in-picture.

## Syntax

```js-nolint
requestPictureInPicture()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that will resolve to a {{domxref("PictureInPictureWindow")}}
object that can be used to listen when a user will resize that floating window.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the feature is not supported (for example, disabled by a user preference or by a platform limitation).
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the feature is blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the video element's `readState` is `HAVE_NOTHING`, or if the video element has no video track, or if the video element's `disablePictureInPicture` attribute is `true`.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if `document.pictureInPictureElement` is `null` and the document does not have {{Glossary("transient activation")}}.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element for this feature to work.

## Examples

This example requests that the video enters Picture-in-Picture mode, and sets an event
listener to handle the floating window resizing.

```js
function enterPictureInPicture() {
  videoElement.requestPictureInPicture().then((pictureInPictureWindow) => {
    pictureInPictureWindow.addEventListener(
      "resize",
      () => onPipWindowResize(),
      false,
    );
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("video")}} element
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
