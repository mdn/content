---
title: "MediaError: message property"
short-title: message
slug: Web/API/MediaError/message
page-type: web-api-instance-property
browser-compat: api.MediaError.message
---

{{APIRef("HTML DOM")}}

The read-only property **`MediaError.message`** returns a human-readable string offering specific diagnostic details related to the error described by the `MediaError` object, or an empty string (`""`) if no diagnostic information can be determined or provided.

## Value

A string providing a detailed, specific explanation of what went wrong and possibly how it might be fixed. This is _not_ a generic description of the {{domxref("MediaError.code")}} property's value, but instead goes deeper into the specifics of this particular error and its circumstances.
If no specific details are available, this string is empty.

## Examples

### Logging MediaError messages

This example creates an {{HTMLElement("audio")}} element, establishes an error handler for it, then lets the user click buttons to choose whether to assign a valid audio file or a missing file to the element's [`src`](/en-US/docs/Web/HTML/Reference/Elements/audio#src) attribute.
The error handler outputs log lines to a box onscreen describing the error, including the `code`, the `message`, and a hint that may be more useful for visitors than the diagnostic `message`:

```html
<audio controls id="audio"></audio>
<div>
  <button id="valid-button">Valid file</button>
  <button id="invalid-button">Missing file</button>
  <button id="svg-button">Wrong format</button>
</div>
<pre id="log">Logs:</pre>
```

```css hidden
pre {
  white-space: wrap;
  border: 1px solid grey;
}
```

The example creates an {{HTMLElement("audio")}} element and lets the user assign either a valid music file to it, or a link to a file which doesn't exist.
This lets us see the behavior of the {{domxref("HTMLMediaElement/error_event", "error")}} event handler, which is received by an event handler we add to the `<audio>` element itself.

First, it gets the {{domxref("MediaError")}} object describing the error from the {{domxref("HTMLMediaElement.error", "error")}} property on the {{domxref("HTMLAudioElement")}} representing the audio player.
The error's numeric {{domxref("MediaError.code", "code")}} is checked against `MediaError` constants, which are initially undefined.
If the `err.code` is equal to any constant, it creates a generic hint with `MediaError.message` added to the log line to provide more detailed diagnostic information for developers.
The resulting text is added to the `<pre>` element:

```js
const audioElement = document.getElementById("audio");
const validButton = document.getElementById("valid-button");
const invalidButton = document.getElementById("invalid-button");
const svgButton = document.getElementById("svg-button");

const logMessage = (logLine) => {
  const now = new Date();
  const timestamp = now.toLocaleTimeString();
  document.getElementById("log").innerText += `\n[${timestamp}] ${logLine}`;
};

validButton.addEventListener("click", () => {
  audioElement.src = "https://mdn.github.io/shared-assets/audio/guitar.mp3";
});

svgButton.addEventListener("click", () => {
  audioElement.src =
    "https://mdn.github.io/shared-assets/images/examples/dino.svg";
});

invalidButton.addEventListener("click", () => {
  audioElement.src = "no-file-here.mp3";
});

audioElement.onerror = () => {
  const err = audioElement.error;
  let userHint = "";

  switch (err.code) {
    case MediaError.MEDIA_ERR_ABORTED:
      userHint = "Canceled audio playback.";
      break;
    case MediaError.MEDIA_ERR_NETWORK:
      userHint = "A network error occurred while fetching the audio.";
      break;
    case MediaError.MEDIA_ERR_DECODE:
      userHint = "An error occurred while decoding the audio.";
      break;
    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
      userHint = "Audio is missing or is an unsupported format.";
      break;
    default:
      userHint += "An unknown error occurred.";
      break;
  }

  const message = err.message || "no message available";

  logMessage(`Error code ${err.code} (${err.message}), ${userHint}`);
};
```

Click the "Valid file" button to start playback as expected, the "Missing file" button to try to load a missing resource, and the "Wrong format" button to try to set an SVG file as the source for the audio element.
Comparing the log output for the two error cases illustrates the difference between a `MediaError`'s `code` and `message`:

{{embedlivesample("logging_mediaerror_messages", , "300")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaError")}}: Interface used to define the `MediaError.message` property
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
