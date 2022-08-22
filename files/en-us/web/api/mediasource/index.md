---
title: MediaSource
slug: Web/API/MediaSource
page-type: web-api-interface
tags:
  - API
  - Audio
  - Extensions
  - Interface
  - MSE
  - Media
  - MediaSource
  - MediaSource Extensions
  - Reference
  - Video
browser-compat: api.MediaSource
---
{{APIRef("Media Source Extensions")}}

The **`MediaSource`** interface of the [Media Source Extensions API](/en-US/docs/Web/API/Media_Source_Extensions_API) represents a source of media data for an {{domxref("HTMLMediaElement")}} object. A `MediaSource` object can be attached to a {{domxref("HTMLMediaElement")}} to be played in the user agent.

{{InheritanceDiagram}}

## Constructor

- {{domxref("MediaSource.MediaSource", "MediaSource()")}}
  - : Constructs and returns a new `MediaSource` object with no associated source buffers.

## Properties

- {{domxref("MediaSource.sourceBuffers")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SourceBufferList")}} object containing the list of {{domxref("SourceBuffer")}} objects associated with this `MediaSource`.
- {{domxref("MediaSource.activeSourceBuffers")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SourceBufferList")}} object containing a subset of the {{domxref("SourceBuffer")}} objects contained within {{domxref("MediaSource.sourceBuffers")}} — the list of objects providing the selected video track,  enabled audio tracks, and shown/hidden text tracks.
- {{domxref("MediaSource.readyState")}} {{ReadOnlyInline}}
  - : Returns an enum representing the state of the current `MediaSource`, whether it is not currently attached to a media element (`closed`), attached and ready to receive {{domxref("SourceBuffer")}} objects (`open`), or attached but the stream has been ended via {{domxref("MediaSource.endOfStream()")}} (`ended`.)
- {{domxref("MediaSource.duration")}}
  - : Gets and sets the duration of the current media being presented.

## Methods

_Inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("MediaSource.addSourceBuffer()")}}
  - : Creates a new {{domxref("SourceBuffer")}} of the given MIME type and adds it to the {{domxref("MediaSource.sourceBuffers")}} list.
- {{domxref("MediaSource.clearLiveSeekableRange()")}}
  - : Clears a seekable range previously set with a call to `setLiveSeekableRange()`.
- {{domxref("MediaSource.endOfStream()")}}
  - : Signals the end of the stream.
- {{domxref("MediaSource.removeSourceBuffer()")}}
  - : Removes the given {{domxref("SourceBuffer")}} from the {{domxref("MediaSource.sourceBuffers")}} list.
- {{domxref("MediaSource.setLiveSeekableRange()")}}
  - : Sets the range that the user can seek to in the media element.

### Events

- {{domxref("MediaSource.sourceclose_event", "sourceclose")}}
  - : Fired when the `MediaSource` instance is not attached to a media element anymore.
- {{domxref("MediaSource.sourceended_event", "sourceended")}}
  - : Fired when the `MediaSource` instance is still attached to a media element, but {{domxref("MediaSource.endOfStream", "endOfStream()")}} has been called.
- {{domxref("MediaSource.sourceopen_event", "sourceopen")}}
  - : Fired when the `MediaSource` instance has been opened by a media element and is ready for data to be appended to the {{domxref("SourceBuffer")}} objects in {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}}.

## Static methods

- {{domxref("MediaSource.isTypeSupported()")}}
  - : Returns a boolean value indicating if the given MIME type is supported by the current user agent — this is, if it can successfully create {{domxref("SourceBuffer")}} objects for that MIME type.

## Examples

The following simple example loads a video with {{domxref("XMLHttpRequest")}}, playing it as soon as it can. This example was written by Nick Desaulniers and can be [viewed live here](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) (you can also [download the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for further investigation). The function `getMediaSource()`, which is not defined here, returns a `MediaSource`.

```js
const video = document.querySelector('video');

const assetURL = 'frag_bunny.mp4';
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
let mediaSource;

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = getMediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('Unsupported MIME type or codec: ', mimeCodec);
}

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener('updateend', () => {
      mediaSource.endOfStream();
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
};

function fetchAB (url, cb) {
  console.log(url);
  const xhr = new XMLHttpRequest;
  xhr.open('get', url);
  xhr.responseType = 'arraybuffer';
  xhr.onload = () => {
    cb(xhr.response);
  };
  xhr.send();
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
