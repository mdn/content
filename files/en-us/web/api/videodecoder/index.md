---
title: VideoDecoder
slug: Web/API/VideoDecoder
page-type: web-api-interface
browser-compat: api.VideoDecoder
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}

The **`VideoDecoder`** interface of the {{domxref('WebCodecs API','','','true')}} decodes chunks of video.

{{InheritanceDiagram}}

## Constructor

- {{domxref("VideoDecoder.VideoDecoder", "VideoDecoder()")}} {{SecureContext_Inline}}
  - : Creates a new `VideoDecoder` object.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoDecoder.decodeQueueSize")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : An integer representing the number of queued decode requests.
- {{domxref("VideoDecoder.state")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Indicates the current state of decoder. Possible values are:
    - `"unconfigured"`
    - `"configured"`
    - `"closed"`

### Events

- {{domxref("VideoDecoder.dequeue_event", "dequeue")}} {{SecureContext_Inline}}
  - : Fires to signal a decrease in {{domxref("VideoDecoder.decodeQueueSize")}}.

## Static methods

- {{domxref("VideoDecoder.isConfigSupported_static", "VideoDecoder.isConfigSupported()")}} {{SecureContext_Inline}}
  - : Returns a promise indicating whether the provided `VideoDecoderConfig` is supported.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoDecoder.configure()")}} {{SecureContext_Inline}}
  - : Enqueues a control message to configure the video decoder for decoding chunks.
- {{domxref("VideoDecoder.decode()")}} {{SecureContext_Inline}}
  - : Enqueues a control message to decode a given chunk of video.
- {{domxref("VideoDecoder.flush()")}} {{SecureContext_Inline}}
  - : Returns a promise that resolves once all pending messages in the queue have been completed.
- {{domxref("VideoDecoder.reset()")}} {{SecureContext_Inline}}
  - : Resets all states including configuration, control messages in the control message queue, and all pending callbacks.
- {{domxref("VideoDecoder.close()")}} {{SecureContext_Inline}}
  - : Ends all pending work and releases system resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Video processing with WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API Samples](https://w3c.github.io/webcodecs/samples/)
