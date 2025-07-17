---
title: "MediaError: message property"
short-title: message
slug: Web/API/MediaError/message
page-type: web-api-instance-property
browser-compat: api.MediaError.message
---

{{APIRef("HTML DOM")}}

The read-only property **`MediaError.message`** returns a
human-readable string offering specific
diagnostic details related to the error described by the `MediaError` object,
or an empty string (`""`) if no diagnostic information can be determined or
provided.

## Value

A string providing a detailed, specific explanation of what went
wrong and possibly how it might be fixed. This is _not_ a generic description of
the {{domxref("MediaError.code")}} property's value, but instead goes deeper into the
specifics of this particular error and its circumstances. If no specific details are
available, this string is empty.

## Examples

This example creates an {{HTMLElement("audio")}} element, establishes an error handler
for it, then lets the user click buttons to choose whether to assign a valid audio file
or a missing file to the element's [`src`](/en-US/docs/Web/HTML/Reference/Elements/audio#src) attribute. The error
handler outputs a message to a box onscreen describing the error, including both the
`code` and the `message`.

```html
<audio controls id="audio"></audio>
<div>
  <button id="valid-button">Valid File</button>
  <button id="invalid-button">Missing File</button>
</div>
<pre id="log"></pre>
```

The example creates an {{HTMLElement("audio")}} element and lets the user assign either
a valid music file to it, or a link to a file which doesn't exist. This lets us see the
behavior of the {{domxref("HTMLMediaElement/error_event", "error")}} event handler, which is received by an event handler
we add to the `<audio>` element itself.

The error handler looks like this:

```js
const audioElement = document.getElementById("audio");
const validButton = document.getElementById("valid-button");
const invalidButton = document.getElementById("invalid-button");

const logMessage = (msg) => {
  const now = new Date();
  const timestamp = now.toLocaleTimeString();
  document.getElementById("log").innerText += `[${timestamp}] ${msg}\n`;
};

validButton.addEventListener("click", () => {
  audioElement.src = "https://mdn.github.io/shared-assets/audio/guitar.mp3";
});

invalidButton.addEventListener("click", () => {
  audioElement.src = "no-file-here.mp3";
});

audioElement.onerror = () => {
  let message = "";
  let err = audioElement.error;

  switch (err.code) {
    case MediaError.MEDIA_ERR_ABORTED:
      message += "The user canceled the audio.";
      break;
    case MediaError.MEDIA_ERR_NETWORK:
      message += "A network error occurred while fetching the audio.";
      break;
    case MediaError.MEDIA_ERR_DECODE:
      message += "An error occurred while decoding the audio.";
      break;
    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
      message +=
        "The audio is missing or is in a format not supported by your browser.";
      break;
    default:
      message += "An unknown error occurred.";
      break;
  }

  logMessage(`Error ${err.code}: ${message}`);
};
```

This gets the {{domxref("MediaError")}} object describing the error from the
{{domxref("HTMLMediaElement.error", "error")}} property on the
{{domxref("HTMLAudioElement")}} representing the audio player. The error's
{{domxref("MediaError.code", "code")}} attribute is checked to determine a generic error
message to display, and, if `message` is not empty, it's appended to provide
additional details. Then the resulting text is output to the log.

{{embedlivesample("", , '300')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaError")}}: Interface used to define the `MediaError.message` property
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
