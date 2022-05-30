---
title: VideoDecoder
slug: Web/API/VideoDecoder
tags:
  - API
  - Interface
  - Reference
  - VideoDecoder
browser-compat: api.VideoDecoder
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`VideoDecoder`** interface of the {{domxref('WebCodecs API','','','true')}} decodes chunks of video.

## Constructor

- {{domxref("VideoDecoder.VideoDecoder", "VideoDecoder()")}}
  - : Creates a new `VideoDecoder` object.

## Properties

- {{domxref("VideoDecoder.decodeQueueSize")}}{{ReadOnlyInline}}
  - : An integer representing the number of decode queue requests.
- {{domxref("VideoDecoder.state")}}{{ReadOnlyInline}}
  - : Indicates whether the underlying codec is configured for decoding.

## Methods

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

[Video processing with WebCodecs](https://web.dev/webcodecs/)
