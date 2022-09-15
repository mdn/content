---
title: VideoEncoder
slug: Web/API/VideoEncoder
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - VideoEncoder
  - Experimental
browser-compat: api.VideoEncoder
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`VideoEncoder`** interface of the {{domxref('WebCodecs API','','','true')}} encodes {{domxref("VideoFrame")}} objects.

## Constructor

- {{domxref("VideoEncoder.VideoEncoder", "VideoEncoder()")}} {{Experimental_Inline}}
  - : Creates a new `VideoEncoder` object.

## Properties

- {{domxref("VideoEncoder.encodeQueueSize")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An integer representing the number of encode queue requests.
- {{domxref("VideoEncoder.state")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Represents the state of the underlying codec and whether it is configured for encoding.

## Methods

- {{domxref("VideoEncoder.configure()")}} {{Experimental_Inline}}
  - : Enqueues a control message to configure the video encoder for encoding chunks.
- {{domxref("VideoEncoder.encode()")}} {{Experimental_Inline}}
  - : Enqueues a control message to encode a given {{domxref("VideoFrame")}}.
- {{domxref("VideoEncoder.flush()")}} {{Experimental_Inline}}
  - : Returns a promise that resolves once all pending messages in the queue have been completed.
- {{domxref("VideoEncoder.isConfigSupported()")}} {{Experimental_Inline}}
  - : Returns a promise indicating whether the provided `VideoEncoderConfig` is supported.
- {{domxref("VideoEncoder.reset()")}} {{Experimental_Inline}}
  - : Resets all states including configuration, control messages in the control message queue, and all pending callbacks.
- {{domxref("VideoEncoder.close()")}} {{Experimental_Inline}}
  - : Ends all pending work and releases system resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Video processing with WebCodecs](https://web.dev/webcodecs/)
