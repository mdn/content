---
title: VideoEncoder
slug: Web/API/VideoEncoder
page-type: web-api-interface
browser-compat: api.VideoEncoder
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`VideoEncoder`** interface of the {{domxref('WebCodecs API', '', '', 1)}} encodes {{domxref("VideoFrame")}} objects into {{domxref("EncodedVideoChunk")}}s.

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

- {{domxref("VideoEncoder.isConfigSupported_static", "VideoEncoder.isConfigSupported()")}}
  - : Returns a promise indicating whether the provided `VideoEncoderConfig` is supported.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoEncoder.configure()")}}
  - : Asynchronously prepares the encoder to accept video frames for encoding with the specified parameters.
- {{domxref("VideoEncoder.encode()")}}
  - : Asynchronously encodes a {{domxref("VideoFrame")}}.
- {{domxref("VideoEncoder.flush()")}}
  - : Returns a promise that resolves once all pending encodes have been completed.
- {{domxref("VideoEncoder.reset()")}}
  - : Cancels all pending encodes and callbacks.
- {{domxref("VideoEncoder.close()")}}
  - : Ends all pending work and releases system resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Video processing with WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
