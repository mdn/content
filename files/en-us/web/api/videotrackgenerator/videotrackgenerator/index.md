---
title: "VideoTrackGenerator: VideoTrackGenerator() constructor"
short-title: VideoTrackGenerator()
slug: Web/API/VideoTrackGenerator/VideoTrackGenerator
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.VideoTrackGenerator.VideoTrackGenerator
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}

The **`VideoTrackGenerator()`** constructor creates a new {{domxref("VideoTrackGenerator")}} object which consumes a stream of media frames and exposes a {{domxref("MediaStreamTrack")}}.

## Syntax

```js-nolint
new VideoTrackGenerator()
```

## Examples

In the following example a new video `VideoTrackGenerator` is created.

```js
const trackGenerator = new VideoTrackGenerator();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing)
