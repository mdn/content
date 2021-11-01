---
title: BlobEvent
slug: Web/API/BlobEvent
tags:
  - API
  - Audio
  - Blob
  - Interface
  - Media
  - MediaStream Recording
  - MediaStream Recording API
  - Recording Media
  - Reference
  - Video
  - events
browser-compat: api.BlobEvent
---
{{APIRef("Media Capture and Streams")}}

The **`BlobEvent`** interface represents events associated with a {{domxref("Blob")}}. These blobs are typically, but not necessarily,  associated with media content.

## Constructor

- {{domxref("BlobEvent.BlobEvent", "BlobEvent()")}}
  - : Creates a `BlobEvent` event with the given parameters.

## Properties

_Inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("BlobEvent.data")}} {{readonlyInline}}
  - : A {{domxref("Blob")}} representing the data associated with the event. The event was fired on the {{domxref("EventTarget")}} because of something happening on that specific {{domxref("Blob")}}.
- {{domxref("BlobEvent.timecode")}} {{readonlyinline}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the difference between the timestamp of the first chunk in data and the timestamp of the first chunk in the first BlobEvent produced by this recorder. Note that the timecode in the first produced BlobEvent does not need to be zero.

## Methods

_No specific method; inherits methods from its parent {{domxref("Event")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Event")}} base interface.
- [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API): Sends `BlobEvent` objects each time a chunk of media is ready.
- [Using the MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
