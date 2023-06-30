---
title: "MediaSource: isTypeSupported() static method"
short-title: isTypeSupported()
slug: Web/API/MediaSource/isTypeSupported_static
page-type: web-api-static-method
browser-compat: api.MediaSource.isTypeSupported_static
---

{{APIRef("Media Source Extensions")}}

The **`MediaSource.isTypeSupported()`** static method returns a boolean value which is `true` if the given MIME type and (optional) codec are _likely_ to be supported by the current {{Glossary("user agent")}}.

That is, if it can successfully create {{domxref("SourceBuffer")}} objects for that media type.
If the returned value is `false`, then the user agent is certain that it _cannot_ access media of the specified format.

## Syntax

```js-nolint
MediaSource.isTypeSupported(type)
```

### Parameters

- `type`
  - : A string specifying the MIME type of the media and (optionally) a [`codecs` parameter](/en-US/docs/Web/Media/Formats/codecs_parameter) containing a comma-separated list of the supported codecs.

### Return value

A value of `false` if the media of the given type will _not_ play.

A value of `true` is returned if the browser can _probably_ play media of the specified type.
This is _not_ a guarantee, and your code must be prepared for the possibility that the media will not play correctly if at all.

All web APIs that work with media files use a "no/maybe/probably" approach (or, in this case, "no or probably") when determining if a media type can be used.
This is because media files are complex, intricate constructs with far too many subtle variations to be absolutely certain of anything until you actually use the contents of the media.

## Examples

The following snippet is from an example written by Nick Desaulniers ([view the full demo live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), or [download the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation). The function `getMediaSource()`, which is not defined here, returns a `MediaSource`.

```js
const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
let mediaSource;

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = getMediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Source Extensions API](/en-US/docs/Web/API/Media_Source_Extensions_API)
- [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)
- [Codecs in common media types](/en-US/docs/Web/Media/Formats/codecs_parameter)
- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
