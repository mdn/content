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

This example creates a {{HTMLElement("audio")}} element, establishes an error handler
for it, then lets the user click buttons to choose whether to assign a valid audio file
or a missing file to the element's [`src`](/en-US/docs/Web/HTML/Element/audio#src) attribute. The error
handler outputs a message to a box onscreen describing the error, including both the
`code` and the `message`.

Only the relevant parts of the code are displayed; you can [see the complete source code here](https://github.com/mdn/dom-examples/tree/main/media/mediaerror).

The example creates an {{HTMLElement("audio")}} element and lets the user assign either
a valid music file to it, or a link to a file which doesn't exist. This lets us see the
behavior of the {{domxref("HTMLMediaElement/error_event", "error")}} event handler, which is received by an event handler
we add to the `<audio>` element itself.

The error handler looks like this:

```js
audioElement.onerror = () => {
  let s = "";
  const err = audioElement.error;

  switch (err.code) {
    case MediaError.MEDIA_ERR_ABORTED:
      s += "The user canceled the audio.";
      break;
    case MediaError.MEDIA_ERR_NETWORK:
      s += "A network error occurred while fetching the audio.";
      break;
    case MediaError.MEDIA_ERR_DECODE:
      s += "An error occurred while decoding the audio.";
      break;
    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
      s +=
        "The audio is missing or is in a format not supported by your browser.";
      break;
    default:
      s += "An unknown error occurred.";
      break;
  }

  const message = err.message;

  if (message?.length > 0) {
    s += ` ${message}`;
  }

  displayErrorMessage(`<strong>Error ${err.code}:</strong> ${s}<br>`);
};
```

This gets the {{domxref("MediaError")}} object describing the error from the
{{domxref("HTMLMediaElement.error", "error")}} property on the
{{domxref("HTMLAudioElement")}} representing the audio player. The error's
{{domxref("MediaError.code", "code")}} attribute is checked to determine a generic error
message to display, and, if `message` is not empty, it's appended to provide
additional details. Then the resulting text is output to the log.

### Result

You can try out this example below, and can [see the example in action outside this page here](https://mdn.github.io/dom-examples/media/mediaerror/).

{{ EmbedGHLiveSample('dom-examples/media/mediaerror', 650, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaError")}}: Interface used to define the `MediaError.message` property
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
