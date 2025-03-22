---
title: DocumentPictureInPictureEvent
slug: Web/API/DocumentPictureInPictureEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.DocumentPictureInPictureEvent
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`DocumentPictureInPictureEvent`** interface of the {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}} is the event object for the {{domxref("DocumentPictureInPicture/enter_event", "enter")}} event, which fires when the Picture-in-Picture window is opened.

{{InheritanceDiagram}}

## Constructor

- {{domxref("DocumentPictureInPictureEvent.DocumentPictureInPictureEvent", "DocumentPictureInPictureEvent()")}} {{Experimental_Inline}}
  - : Creates a new `DocumentPictureInPictureEvent` object instance.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("DocumentPictureInPictureEvent.window", "window")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("Window")}} instance representing the browsing context inside the `DocumentPictureInPicture` window the event was fired on.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("Event")}}._

## Examples

```js
documentPictureInPicture.addEventListener("enter", (event) => {
  const pipWindow = event.window;
  console.log("Video player has entered the pip window");

  const pipMuteButton = pipWindow.document.createElement("button");
  pipMuteButton.textContent = "Mute";
  pipMuteButton.addEventListener("click", () => {
    const pipVideo = pipWindow.document.querySelector("#video");
    if (!pipVideo.muted) {
      pipVideo.muted = true;
      pipMuteButton.textContent = "Unmute";
    } else {
      pipVideo.muted = false;
      pipMuteButton.textContent = "Mute";
    }
  });

  pipWindow.document.body.append(pipMuteButton);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [Using the Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API/Using)
