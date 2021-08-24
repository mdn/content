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

The **`MediaStreamTrackProcessor()`** constructor creates a new {{domxref("MediaStreamTrackProcessor")}} object which

## Syntax

```js
new MediaStreamTrackProcessor(init);
```

### Parameters

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

