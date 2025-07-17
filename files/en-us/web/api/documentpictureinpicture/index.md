---
title: DocumentPictureInPicture
slug: Web/API/DocumentPictureInPicture
page-type: web-api-interface
status:
  - experimental
browser-compat: api.DocumentPictureInPicture
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`DocumentPictureInPicture`** interface of the {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}} is the entry point for creating and handling document picture-in-picture windows.

It is accessed via the {{domxref("Window.documentPictureInPicture")}} property.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("DocumentPictureInPicture.window", "window")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("Window")}} instance representing the browsing context inside the Picture-in-Picture window.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("DocumentPictureInPicture.requestWindow", "requestWindow()")}} {{Experimental_Inline}}
  - : Opens the Picture-in-Picture window for the current main browsing context. Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("Window")}} instance representing the browsing context inside the Picture-in-Picture window.

## Events

_Inherits events from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("DocumentPictureInPicture/enter_event", "enter")}} {{Experimental_Inline}}
  - : Fired when the Picture-in-Picture window is successfully opened.

## Examples

```js
const videoPlayer = document.getElementById("player");

// …

// Open a Picture-in-Picture window.
const pipWindow = await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// …
```

See [Document Picture-in-Picture API Example](https://mdn.github.io/dom-examples/document-picture-in-picture/) for a full working demo (see the full [source code](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture) also).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [Using the Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API/Using)
