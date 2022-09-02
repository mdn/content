---
title: VideoDecoder
slug: Web/API/VideoDecoder
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - VideoDecoder
  - Experimental
browser-compat: api.VideoDecoder
---
{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`VideoDecoder`** interface of the {{domxref('WebCodecs API','','','true')}} decodes chunks of video.

## Constructor

- {{domxref("VideoDecoder.VideoDecoder", "VideoDecoder()")}} {{Experimental_Inline}}
  - : Creates a new `VideoDecoder` object.

## Properties

- {{domxref("VideoDecoder.decodeQueueSize")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An integer representing the number of decode queue requests.
- {{domxref("VideoDecoder.state")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Indicates whether the underlying codec is configured for decoding.

## Methods

- {{domxref("VideoDecoder.configure()")}} {{Experimental_Inline}}
  - : Enqueues a control message to configure the video decoder for decoding chunks.
- {{domxref("VideoDecoder.decode()")}} {{Experimental_Inline}}
  - : Enqueues a control message to decode a given chunk of video.
- {{domxref("VideoDecoder.flush()")}} {{Experimental_Inline}}
  - : Returns a promise that resolves once all pending messages in the queue have been completed.
- {{domxref("VideoDecoder.reset()")}} {{Experimental_Inline}}
  - : Resets all states including configuration, control messages in the control message queue, and all pending callbacks.
- {{domxref("VideoDecoder.close()")}} {{Experimental_Inline}}
  - : Ends all pending work and releases system resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Video processing with WebCodecs](https://web.dev/webcodecs/)
