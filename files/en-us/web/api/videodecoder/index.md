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

- {{domxref("VideoDecoder.VideoDecoder", "VideoDecoder()")}}
  - : Creates a new `VideoDecoder` object.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoDecoder.decodeQueueSize")}} {{ReadOnlyInline}}
  - : An integer representing the number of queued decode requests.
- {{domxref("VideoDecoder.state")}} {{ReadOnlyInline}}
  - : Indicates the current state of decoder. Possible values are:
    - `"unconfigured"`
    - `"configured"`
    - `"closed"`

### Events

- {{domxref("VideoDecoder.dequeue_event", "dequeue")}}
  - : Fires to signal a decrease in {{domxref("VideoDecoder.decodeQueueSize")}}.

## Static methods

- {{domxref("VideoDecoder.isConfigSupported()")}}
  - : Returns a promise indicating whether the provided `VideoDecoderConfig` is supported.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("VideoDecoder.configure()")}}
  - : Enqueues a control message to configure the video decoder for decoding chunks.
- {{domxref("VideoDecoder.decode()")}}
  - : Enqueues a control message to decode a given chunk of video.
- {{domxref("VideoDecoder.flush()")}}
  - : Returns a promise that resolves once all pending messages in the queue have been completed.
- {{domxref("VideoDecoder.reset()")}}
  - : Resets all states including configuration, control messages in the control message queue, and all pending callbacks.
- {{domxref("VideoDecoder.close()")}}
  - : Ends all pending work and releases system resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Video processing with WebCodecs](https://web.dev/webcodecs/)
- [WebCodecs API Samples](https://w3c.github.io/webcodecs/samples/)
