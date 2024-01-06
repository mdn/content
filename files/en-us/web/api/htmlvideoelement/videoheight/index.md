---
title: "HTMLVideoElement: videoHeight property"
short-title: videoHeight
slug: Web/API/HTMLVideoElement/videoHeight
page-type: web-api-instance-property
browser-compat: api.HTMLVideoElement.videoHeight
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLVideoElement")}} interface's read-only **`videoHeight`** property indicates the [intrinsic height](#about_intrinsic_width_and_height) of the video, expressed in CSS pixels.
In simple terms, this is the height of the media in its natural size.

## Value

An integer value specifying the intrinsic height of the video in CSS pixels.
If the element's {{domxref("HTMLMediaElement.readyState", "readyState")}} is `HTMLMediaElement.HAVE_NOTHING`, then the value of this property is 0, because neither video nor poster frame size information is yet available.

### About intrinsic width and height

A {{Glossary("user agent")}} calculates the intrinsic width and height of the element's media by starting with the media's raw pixel width and height, then taking into account factors including:

- The media's aspect ratio.
- The media's clean aperture (the sub-rectangle centered within the media that matches
  the target aspect ratio).
- The target device's resolution.
- Any other factors required by the media format.

If the element is currently displaying the poster frame rather than rendered video, the poster frame's intrinsic size is considered to be the size of the `<video>` element.

If at any time the intrinsic size of the media changes and the element's {{domxref("HTMLMediaElement.readyState", "readyState")}} isn't `HAVE_NOTHING`, a {{domxref("HTMLMediaElement.resize", "resize")}} event will be sent to the `<video>` element.
This can happen when the element switches from displaying the poster frame to displaying video content, or when the displayed video track changes.

## Examples

This example creates a handler for the {{domxref("HTMLVideoElement.resize", "resize")}} event that resizes the {{HTMLElement("video")}} element to match the intrinsic size of its contents.

```js
let v = document.getElementById("myVideo");

v.addEventListener(
  "resize",
  (ev) => {
    let w = v.videoWidth;
    let h = v.videoHeight;

    if (w && h) {
      v.style.width = w;
      v.style.height = h;
    }
  },
  false,
);
```

Note that this only applies the change if both the `videoWidth` and the `videoHeight` are non-zero.
This avoids applying invalid changes when there's no true information available yet for dimensions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
