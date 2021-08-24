---
title: MediaStreamTrackGenerator.MediaStreamTrackGenerator()
slug: Web/API/MediaStreamTrackGenerator/MediaStreamTrackGenerator
tags:
  - API
  - Constructor
  - Reference
  - MediaStreamTrackGenerator
browser-compat: api.MediaStreamTrackGenerator.MediaStreamTrackGenerator
---
{{DefaultAPISidebar("Insertable Streams for MediaStreamTrack API")}}

The **`MediaStreamTrackGenerator()`** constructor creates a new {{domxref("MediaStreamTrackGenerator")}} object which consumes a stream of media frames and exposes a {{domxref("MediaStreamTrack")}}.

## Syntax

```js
new MediaStreamTrackGenerator(init);
```

### Parameters

- `init`
  - : An object containing the property `kind`, which is a {{domxref("DOMString", "string")}} with one of the following values:
      - `"audio"`
        - : The stream accepts {{domxref("AudioTrack")}} objects.
      - `"video"`
        - : The stream accepts {{domxref("VideoTrack")}} objects.

## Exceptions

- {{domxref("DOMException")}} `TypeError`
  - : Thrown if `init.kind` is not `"video"` or `"audio"`.

## Examples

In the following example a new video `MediaStreamTrackGenerator` is created.

```js
const trackGenerator = new MediaStreamTrackGenerator({ kind: 'video' });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Insertable streams for MediaStreamTrack](https://web.dev/mediastreamtrack-insertable-media-processing/)
