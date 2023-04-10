---
title: VideoEncoder
slug: Web/API/VideoEncoder
page-type: web-api-interface
browser-compat: api.VideoEncoder
---

{{APIRef("WebCodecs API")}}

The **`VideoEncoder`** interface of the {{domxref('WebCodecs API','','','true')}} encodes {{domxref("VideoFrame")}} objects.

{{InheritanceDiagram}}

## Constructor

- {{domxref("VideoEncoder.VideoEncoder", "VideoEncoder()")}}
  - : Creates a new `VideoEncoder` object.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoEncoder.encodeQueueSize")}} {{ReadOnlyInline}}
  - : An integer representing the number of encode queue requests.
- {{domxref("VideoEncoder.state")}} {{ReadOnlyInline}}
  - : Represents the state of the underlying codec and whether it is configured for encoding.

### Events

- {{domxref("VideoEncoder.dequeue_event", "dequeue")}}
  - : Fires to signal a decrease in {{domxref("VideoEncoder.encodeQueueSize")}}.

## Static methods

- {{domxref("VideoEncoder.isConfigSupported()")}}
  - : Returns a promise indicating whether the provided `VideoEncoderConfig` is supported.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoEncoder.configure()")}}
  - : Enqueues a control message to configure the video encoder for encoding chunks.
- {{domxref("VideoEncoder.encode()")}}
  - : Enqueues a control message to encode a given {{domxref("VideoFrame")}}.
- {{domxref("VideoEncoder.flush()")}}
  - : Returns a promise that resolves once all pending messages in the queue have been completed.
- {{domxref("VideoEncoder.reset()")}}
  - : Resets all states including configuration, control messages in the control message queue, and all pending callbacks.
- {{domxref("VideoEncoder.close()")}}
  - : Ends all pending work and releases system resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Video processing with WebCodecs](https://web.dev/webcodecs/)
