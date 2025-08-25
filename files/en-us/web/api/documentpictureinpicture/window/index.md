---
title: "DocumentPictureInPicture: window property"
short-title: window
slug: Web/API/DocumentPictureInPicture/window
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.DocumentPictureInPicture.window
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`window`** read-only property of the
{{domxref("DocumentPictureInPicture")}} interface returns a {{domxref("Window")}} instance representing the browsing context inside the Picture-in-Picture window.

## Value

A {{domxref("Window")}} object instance if the Picture-in-Picture window has already been opened using {{domxref("DocumentPictureInPicture.requestWindow()")}}, or `null` otherwise.

## Examples

```js
const videoPlayer = document.getElementById("player");

// …

await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// …

const pipWindow = window.documentPictureInPicture.window;
if (pipWindow) {
  // Mute video playing in the Picture-in-Picture window.
  const pipVideo = pipWindow.document.querySelector("#video");
  pipVideo.muted = true;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [Using the Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API/Using)
