---
title: HTMLVideoElement.msIsLayoutOptimalForPlayback
slug: Web/API/HTMLVideoElement/msIsLayoutOptimalForPlayback
page-type: web-api-instance-property
tags:
  - API
  - API:Microsoft Extensions
  - Non-standard
  - Property
  - Reference
  - msIsLayoutOptimalForPlayback
  - onMSVideoOptimalLayoutChanged
---
{{APIRef("Microsoft Extensions")}}{{Non-standard_Header}}

**`msIsLayoutOptimalForPlayback`** is a read-only property
which indicates whether the video can be rendered more efficiently.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Value

Boolean value set to _true_ indicates that video is being rendered optimally
(better performance and using less battery power). If _false_, improvements can
be made to optimize performance.

For `msIsLayoutOptimalForPlayback` to be true, avoid the following:

- Video elements with Cascading Style Sheets (CSS) outlines set.
- Rendering a video element through a canvas element.
- Embedding video elements in a Scalable Vector Graphics (SVG).

You can listen to the [onMSVideoOptimalLayoutChanged](/en-US/docs/Web/API/HTMLVideoElement/onMSVideoOptimalLayoutChanged)
event to be notified when the `msIsLayoutOptimalForPlayback` property
changes.

\*To enable Stereo 3D playback, `msIsLayoutOptimalForPlayback` must be true.

## See also

- {{DOMxRef("HTMLVideoElement")}}
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
