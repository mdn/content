---
title: "DocumentPictureInPictureEvent: DocumentPictureInPictureEvent() constructor"
short-title: DocumentPictureInPictureEvent()
slug: Web/API/DocumentPictureInPictureEvent/DocumentPictureInPictureEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.DocumentPictureInPictureEvent.DocumentPictureInPictureEvent
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`DocumentPictureInPictureEvent()`** constructor creates a new
{{domxref("DocumentPictureInPictureEvent")}} object instance.

## Syntax

```js-nolint
new DocumentPictureInPictureEvent(type, init)
```

### Parameters

- `type`
  - : A string representing the type of event. In the case of `DocumentPictureInPictureEvent` this is always `enter`.
- `init`
  - : An object containing the following properties:
    - `window`
      - : A {{domxref("Window")}} instance representing the browsing context inside the `DocumentPictureInPicture` window the event was fired on.

## Examples

A developer would not use this constructor manually. A new `DocumentPictureInPictureEvent` object is constructed when a handler is invoked as a result of the {{domxref("DocumentPictureInPicture.enter_event", "enter")}} event firing.

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
