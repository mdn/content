---
title: VideoEncoder
slug: Web/API/VideoEncoder
page-type: web-api-interface
browser-compat: api.VideoEncoder
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}

The **`VideoEncoder`** interface of the {{domxref('WebCodecs API', '', '', 1)}} encodes {{domxref("VideoFrame")}} objects into {{domxref("EncodedVideoChunk")}}s.

{{InheritanceDiagram}}

## Constructor

- {{domxref("VideoEncoder.VideoEncoder", "VideoEncoder()")}} {{SecureContext_Inline}}
  - : Creates a new `VideoEncoder` object.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoEncoder.encodeQueueSize")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : An integer representing the number of encode queue requests.
- {{domxref("VideoEncoder.state")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Represents the state of the underlying codec and whether it is configured for encoding.

### Events

- {{domxref("VideoEncoder.dequeue_event", "dequeue")}} {{SecureContext_Inline}}
  - : Fires to signal a decrease in {{domxref("VideoEncoder.encodeQueueSize")}}.

## Static methods

- {{domxref("VideoEncoder.isConfigSupported_static", "VideoEncoder.isConfigSupported()")}} {{SecureContext_Inline}}
  - : Returns a promise indicating whether the provided `VideoEncoderConfig` is supported.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoEncoder.configure()")}} {{SecureContext_Inline}}
  - : Asynchronously prepares the encoder to accept video frames for encoding with the specified parameters.
- {{domxref("VideoEncoder.encode()")}} {{SecureContext_Inline}}
  - : Asynchronously encodes a {{domxref("VideoFrame")}}.
- {{domxref("VideoEncoder.flush()")}} {{SecureContext_Inline}}
  - : Returns a promise that resolves once all pending encodes have been completed.
- {{domxref("VideoEncoder.reset()")}} {{SecureContext_Inline}}
  - : Cancels all pending encodes and callbacks.
- {{domxref("VideoEncoder.close()")}} {{SecureContext_Inline}}
  - : Ends all pending work and releases system resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Video processing with WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
