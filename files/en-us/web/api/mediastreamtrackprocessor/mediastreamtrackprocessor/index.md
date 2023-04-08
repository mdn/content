---
title: "MediaStreamTrackProcessor: MediaStreamTrackProcessor() constructor"
short-title: MediaStreamTrackProcessor()
slug: Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.MediaStreamTrackProcessor.MediaStreamTrackProcessor
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}

The **`MediaStreamTrackProcessor()`** constructor creates a new {{domxref("MediaStreamTrackProcessor")}} object which consumes a {{domxref("MediaStreamTrack")}} object's source and generates a stream of media frames.

## Syntax

```js-nolint
new MediaStreamTrackProcessor(options)
```

### Parameters

- `options`
  - : An object with the following properties:
    - `track`
      - : A {{domxref("MediaStreamTrack")}}.
    - `maxBufferSize` {{optional_inline}}
      - : An integer specifying the maximum number of media frames to be buffered.

## Examples

In the following example a new `MediaStreamTrackProcessor` is created.

```js
const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
