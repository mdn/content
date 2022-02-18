---
title: MediaSource.isTypeSupported()
slug: Web/API/MediaSource/isTypeSupported
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - MediaSource
  - Method
  - Reference
  - Static
  - Static Method
  - Video
  - isTypeSupported
browser-compat: api.MediaSource.isTypeSupported
---
{{APIRef("Media Source Extensions")}}

The
**`MediaSource.isTypeSupported()`** static method returns a
boolean value which is `true` if the given MIME type is
_likely_ to be supported by the current {{Glossary("user agent")}}.

That
is, if it can successfully create {{domxref("SourceBuffer")}} objects for that MIME
type. If the returned value is `false`, then the user agent is certain that
it _cannot_ access media of the specified format.

## Syntax

```js
var isItSupported = MediaSource.isTypeSupported(mimeType);
```

### Parameters

- `mimeType`
  - : The MIME media type that you want to test support for in the current browser. This
    may include the `codecs` parameter to provide added details about the
    codecs used within the file.

### Return value

A boolean value which is `true` if the browser feels that it can
_probably_ play media of the specified type. This is _not_ a guarantee,
however, and your code must be prepared for the possibility that the media will not play
correctly if at all. A value of `false` is a guarantee that media of the
given type will _not_ play, however.

All web APIs that work with media files use a "no/maybe/probably" approach (or, in this
case, "no or probably") when determining if a media type can be used. This is because
media files are complex, intricate constructs with far too many subtle variations to be
absolutely certain of anything until you actually use the contents of the media.

## Example

The following snippet is from an example written by Nick Desaulniers ([view the full demo
live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), or [download
the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation.)

```js
var assetURL = 'frag_bunny.mp4';
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource;
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('Unsupported MIME type or codec: ', mimeCodec);
}

function sourceOpen (_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Source Extensions
  API](/en-US/docs/Web/API/Media_Source_Extensions_API)
- [Guide to media types and formats on the
  web](/en-US/docs/Web/Media/Formats)
- [The "codecs" parameter in
  common media types](/en-US/docs/Web/Media/Formats/codecs_parameter)
- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
