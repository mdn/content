---
title: Picture-in-Picture API
slug: Web/API/Picture-in-Picture_API
page-type: web-api-overview
tags:
  - API
  - DOM
  - Graphics
  - Guide
  - Overview
  - Picture-in-Picture
  - Picture-in-Picture API
  - Reference
  - Video
  - View
  - pip
browser-compat: api.PictureInPictureWindow
---
{{DefaultAPISidebar("Picture-in-Picture API")}}

The **Picture-in-Picture API** allow websites to create a floating video window always on top of other windows so that users may continue consuming media while they interact with other content sites, or applications on their device.

## Interfaces

- {{DOMxRef("PictureInPictureWindow")}}
  - : Represents the floating video window; contains {{domxref("PictureInPictureWindow/width", "width")}} and {{domxref("PictureInPictureWindow/height", "height")}} properties, and an {{domxref("PictureInPictureWindow/onresize", "onresize")}} event handler property.

## Methods

The Picture-in-Picture API adds methods to the {{DOMxRef("HTMLVideoElement")}} and {{DOMxRef("Document")}} interfaces to allow toggling of the floating video window.

### Methods on the HTMLVideoElement interface

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
  - : Requests that the user agent enters the video into picture-in-picture mode

### Methods on the Document interface

- {{DOMxRef("Document.exitPictureInPicture()")}}
  - : Requests that the user agent returns the element in picture-in-picture mode back into its original box.

## Properties

The Picture-in-Picture API augments the {{DOMxRef("HTMLVideoElement")}}, {{DOMxRef("Document")}}, and {{DOMxRef("ShadowRoot")}} interfaces with properties that can be used to determine if the floating video window mode is supported and available, if picture-in-picture mode is currently active, and which video is floating.

### Properties on the HTMLVideoElement interface

- {{DOMxRef("HTMLVideoElement.autoPictureInPicture")}}
  - : The `autoPictureInPicture` property will automatically enter and leave the picture-in-picture mode for a video element when the user switches tab and/or applications.
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
  - : The `disablePictureInPicture` property will provide a hint to the user agent to not suggest the picture-in-picture to users or to request it automatically.

### Properties on the Document interface

- {{DOMxRef("Document.pictureInPictureEnabled")}}
  - : The `pictureInPictureEnabled` property tells you whether or not it is possible to engage picture-in-picture mode. This is `false` if picture-in-picture mode is not available for any reason (e.g. the [`"picture-in-picture"` feature](/en-US/docs/Web/HTTP/Headers/Feature-Policy/picture-in-picture) has been disallowed, or picture-in-picture mode is not supported).

### Properties on the Document or ShadowRoot interfaces

- {{DOMxRef("Document.pictureInPictureElement")}} / {{DOMxRef("ShadowRoot.pictureInPictureElement")}}
  - : The `pictureInPictureElement` property tells you which {{DOMxRef("Element")}} is currently being displayed in the floating window (or in the shadow DOM). If this is `null`, the document (or shadow DOM) has no node currently in picture-in-picture mode.

## Events

_The Picture-in-Picture API defines three events, which can be used to detect when picture-in-picture mode is toggled and when the floating video window is resized._

- {{domxref("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}}
  - : Sent to a {{DOMxRef("HTMLVideoElement")}} when it enters picture-in-picture mode.
- {{domxref("HTMLVideoElement.leavepictureinpicture_event", "leavepictureinpicture")}}
  - : Sent to a {{DOMxRef("HTMLVideoElement")}} when it leaves picture-in-picture mode.
- {{domxref("PictureInPictureWindow.resize_event", "resize")}}
  - : Sent to a {{DOMxRef("PictureInPictureWindow")}} when it changes size.

## Adding Controls

If media action handlers have been set via the [Media Session API](/en-US/docs/Web/API/Media_Session_API), then appropriate controls for those actions will be added by the browser to the picture-in-picture overlay. For example, if a `"nexttrack"` action has been set, then a skip button might be displayed in the picture-in-picture view. There is no support for adding custom HTML buttons or controls.

## Controlling styling

The [`:picture-in-picture`](/en-US/docs/Web/CSS/:picture-in-picture) [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches the video element currently in picture-in-picture mode, allowing you to configure your stylesheets to automatically adjust the size, style, or layout of content when a video switches back and forth between picture-in-picture and traditional presentation modes.

## Controlling access

The availability of picture-in-picture mode can be controlled using [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy). The fullscreen mode feature is identified by the string `"picture-in-picture"`, with a default allow-list value of `"self"`, meaning that picture-in-picture mode is permitted in top-level document contexts, as well as to nested browsing contexts loaded from the same origin as the top-most document.

See [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy) to learn more about using Feature Policy to control access to an API.

## Examples

In this example, a video is presented in a web page. Clicking the button below lets the user toggle the floating video window.

{{EmbedGHLiveSample("dom-examples/picture-in-picture/index.html", '100%', 350)}}

### Toggling picture-in-picture mode

This code is called by a click handler when the user clicks the "Toggle Picture-in-Picture" button:

```js
function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }
}
```

This block starts by looking at the value of the {{DOMxRef("Document", "document")}}'s `pictureInPictureElement` attribute.

If the value is not `null`, it's the element that's currently in picture-in-picture mode, that is in a floating window. We call {{DOMxRef("Document.exitPictureInPicture", "document.exitPictureInPicture()")}} to bring the video back into its initial box.

If the value is `null`, no video is in the floating window. So we can request a video to enter the picture-in-picture mode. We do it by calling {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}} on the {{HTMLElement("video")}} element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.autoPictureInPicture")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
