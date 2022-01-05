---
title: MediaStreamTrackProcessor.MediaStreamTrackProcessor()
slug: Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor
tags:
  - API
  - Constructor
  - Reference
  - MediaStreamTrackProcessor
browser-compat: api.MediaStreamTrackProcessor.MediaStreamTrackProcessor
---
{{DefaultAPISidebar("Insertable Streams for MediaStreamTrack API")}}

The **`MediaStreamTrackProcessor()`** constructor creates a new {{domxref("MediaStreamTrackProcessor")}} object which consumes a {{domxref("MediaStreamTrack")}} object's source and generates a stream of media frames.

## Syntax

```js
new MediaStreamTrackProcessor(init);
```

### Parameters

- `options`
  - : An object with the following properties:
    - `track`
      - : A {{domxref("MediaStreamTrack")}}.
    - `maxBufferSize`{{Optional_Inline}}
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

