---
title: HTMLVideoElement.msZoom
slug: Web/API/HTMLVideoElement/msZoom
page-type: web-api-instance-property
tags:
  - API
  - API:Microsoft Extensions
  - Non-standard
  - Property
  - Reference
  - msZoom
---
{{APIRef("DOM")}}{{Non-standard_header}}

**`msZoom`** is a read/write property which gets or sets
whether the video frame is trimmed, on the top and bottom or left and right, to fit the
video display.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Value

Boolean value set to _true_ trims the video frame to the display space. Set to
_false_ the video frame uses letter box or pillarbox to display video.

If the native aspect ratio of a video frame, which is defined by the
`videoWidth` and `videoHeight` attributes, does not match the
aspect ratio of the `Video` tag, which is defined by the width and height
attributes, the video is rendered with letterbox or pillarbox format. Letterbox and
pillarbox are the black bars on either the left and right of the video or the top and
bottom of the video.

When the `msZoom` attribute is set to _true_, the rendered video is
trimmed to fit the dimensions of the video object. Either the top and bottom of the
video is trimmed or the left and right of the video is trimmed.

For instance, if the layout space for the video tag is a 4:3 aspect ratio, but the
stream coming in is in 16:9 aspect ratio, the `msZoom` option can be used to
render the 16:9 video in 4:3 aspect ratio. The rendered video will then take up the full
space of the video object.

## Examples

This examples gets a Video object and sets the `msZoom` property to true.

```js
    const myVideo = document.getElementById("videoTag1");
       myVideo.msZoom = true;
       myVideo.play();
```

## See also

- [HTMLVideoElement](/en-US/docs/Web/API/HTMLVideoElement)
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
