---
title: "Document: exitPictureInPicture() method"
short-title: exitPictureInPicture()
slug: Web/API/Document/exitPictureInPicture
page-type: web-api-instance-method
browser-compat: api.Document.exitPictureInPicture
---

{{ApiRef("Picture-in-Picture API")}}

The {{domxref("Document")}} method
**`exitPictureInPicture()`** requests that a video contained
in this document, which is currently floating, be taken out of picture-in-picture
mode, restoring the previous state of the screen. This usually reverses the
effects of a previous call to {{domxref("HTMLVideoElement.requestPictureInPicture()")}}.

## Syntax

```js-nolint
exitPictureInPicture()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}}, which is resolved once the {{Glossary("user agent")}} has
finished exiting picture-in-picture mode. If an error occurs while attempting to exit
fullscreen mode, the `catch()` handler for the promise is called.

## Examples

This example causes the current document to exit picture-in-picture mode whenever the
mouse button is clicked within it.

```js
document.onclick = (event) => {
  if (document.pictureInPictureElement) {
    document
      .exitPictureInPicture()
      .then(() => console.log("Document Exited from Picture-in-Picture mode"))
      .catch((err) => console.error(err));
  } else {
    video.requestPictureInPicture();
  }
};
```

Note that if you want to track which video on your page is currently playing in picture-in-picture mode, you should listen to the `enterpictureinpicture` and `exitpictureinpicture` events on the {{DOMxRef("HTMLVideoElement")}} element(s) in question. Alternatively, you can check whether {{DOMxRef("Document.pictureInPictureElement")}} refers to the current {{DOMxRef("HTMLVideoElement")}} element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
- [Picture-in-Picture events](/en-US/docs/Web/API/Picture-in-Picture_API#events)
