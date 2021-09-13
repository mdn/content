---
title: PictureInPictureWindow
slug: Web/API/PictureInPictureWindow
tags:
  - API
  - Advanced
  - Interface
  - Picture-in-Picture
  - Picture-in-Picture API
  - Reference
  - Video
  - pip
browser-compat: api.PictureInPictureWindow
---
{{APIRef("Picture-in-Picture API")}}

The **`PictureInPictureWindow`** interface represents an object able to programmatically obtain the **`width`** and **`height`** and **`resize event`** of the floating video window.

An object with this interface is obtained using the {{domxref("HTMLVideoElement.requestPictureInPicture()")}} promise return value.

## Properties

_The `PictureInPictureWindow` interface doesn't inherit any properties._

- {{domxref("PictureInPictureWindow.width")}} {{ReadOnlyInline}}
  - : Determines the width of the floating video window.
- {{domxref("PictureInPictureWindow.height")}} {{ReadOnlyInline}}
  - : Determines the height of the floating video window.

## Methods

_The `PictureInPictureWindow` interface doesn't inherit any methods._

## Events

_The `PictureInPictureWindow` interface doesn't inherit any events._

- {{domxref("PictureInPictureWindow.resize_event", "PictureInPictureWindow.resize")}}
  - : Sent to a {{DOMxRef("PictureInPictureWindow")}} when the floating video window is resized. The associated event handler is {{domxref("PictureInPictureWindow.onresize")}}.

## Examples

Given a `<button>` and a `<video>`, clicking the button will make the video enter the picture-in-picture mode; we then attach an event to print the floating video window dimensions to the console.

```js
const button = document.querySelector("button");
const video = document.querySelector("video");

function printPipWindowDimensions(evt) {
  const pipWindow = evt.target;
  console.log(`The floating window dimensions are: ${pipWindow.width}x${pipWindow.height}px`);
  // will print:
  // The floating window dimensions are: 640x360px
}

button.onclick = function() {
  video.requestPictureInPicture().then(pictureInPictureWindow => {
    pictureInPictureWindow.onresize = printPipWindowDimensions;
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Picture-in-Picture_API")}}
