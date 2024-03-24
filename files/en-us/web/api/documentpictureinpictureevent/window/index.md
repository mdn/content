---
title: "DocumentPictureInPictureEvent: window property"
short-title: window
slug: Web/API/DocumentPictureInPictureEvent/window
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.DocumentPictureInPictureEvent.window
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`window`** read-only property of the
{{domxref("DocumentPictureInPictureEvent")}} interface returns a {{domxref("Window")}} instance representing the browsing context inside the `DocumentPictureInPicture` window the event was fired on.

## Value

A {{domxref("Window")}} object instance.

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
