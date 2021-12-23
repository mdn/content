---
title: Document.exitPictureInPicture()
slug: Web/API/Document/exitPictureInPicture
tags:
  - API
  - DOM
  - Document
  - Method
  - Picture-in-Picture
  - Picture-in-Picture API
  - Reference
  - Video
  - pip
browser-compat: api.Document.exitPictureInPicture
---
{{ApiRef("Picture-in-Picture API")}}

The {{domxref("Document")}} method
**`exitPictureInPicture()`** requests that a video contained
in this document, which is currently floating, be taken out of picture-in-picture
mode, restoring the previous state of the screen. This usually reverses the
effects of a previous call to {{domxref("HTMLVideoElement.requestPictureInPicture()")}}.

## Syntax

```js
exitPromise = document.exitPictureInPicture();
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}}, which is resolved once the {{Glossary("user agent")}} has
finished exiting picture-in-picture mode. If an error occurs while attempting to exit
full-screen mode, the `catch()` handler for the promise is called.

## Examples

This example causes the current document to exit picture-in-picture mode whenever the
mouse button is clicked within it.

```js
document.onclick = function (event) {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture()
      .then(() => console.log("Document Exited from Picture-in-Picture mode"))
      .catch((err) => console.error(err))
  } else {
    video.requestPictureInPicture();
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.autoPictureInPicture")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
