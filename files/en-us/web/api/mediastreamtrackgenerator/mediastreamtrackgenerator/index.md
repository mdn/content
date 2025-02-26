---
title: "MediaStreamTrackGenerator: MediaStreamTrackGenerator() constructor"
short-title: MediaStreamTrackGenerator()
slug: Web/API/MediaStreamTrackGenerator/MediaStreamTrackGenerator
page-type: web-api-constructor
status:
  - experimental
  - non-standard
browser-compat: api.MediaStreamTrackGenerator.MediaStreamTrackGenerator
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{Non-standard_Header}}

The **`MediaStreamTrackGenerator()`** constructor creates a new {{domxref("MediaStreamTrackGenerator")}} object which consumes a stream of media frames and exposes a {{domxref("MediaStreamTrack")}}.

## Syntax

```js-nolint
new MediaStreamTrackGenerator(options)
```

### Parameters

- `options`
  - : An object containing the property `kind`, which is one of the following strings:
    - `"audio"`
      - : Specifies that the stream accepts {{domxref("AudioTrack")}} objects.
    - `"video"`
      - : Specifies that the stream accepts {{domxref("VideoTrack")}} objects.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `init.kind` is not `"video"` or `"audio"`.

## Examples

In the following example a new video `MediaStreamTrackGenerator` is created.

```js
const trackGenerator = new MediaStreamTrackGenerator({ kind: "video" });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing)
