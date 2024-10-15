---
title: "Window: documentPictureInPicture property"
short-title: documentPictureInPicture
slug: Web/API/Window/documentPictureInPicture
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Window.documentPictureInPicture
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`documentPictureInPicture`** read-only property of the
{{domxref("Window")}} interface returns a reference to the {{domxref("DocumentPictureInPicture")}} object for the current document context.

## Value

A {{domxref("DocumentPictureInPicture")}} object instance.

## Examples

```js
const videoPlayer = document.getElementById("player");

// ...

// Open a Picture-in-Picture window.
await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [Using the Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API/Using)
