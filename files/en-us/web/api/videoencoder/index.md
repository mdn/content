---
title: VideoEncoder
slug: Web/API/VideoEncoder
tags:
  - API
  - Interface
  - Reference
  - VideoEncoder
browser-compat: api.VideoEncoder
---
The **`VideoEncoder`** interface of the {{APIRef('WebCodecs API','','','true')}} encodes {{APIRef("VideoFrame")}} objects.

## Constructor

- {{APIRef("VideoEncoder.VideoEncoder", "VideoEncoder()")}}
  - : Creates a new `VideoEncoder` object.

## Properties

- {{APIRef("VideoEncoder.encodeQueueSize")}}{{ReadOnlyInline}}
  - : An integer representing the number of encode queue requests.
- {{APIRef("VideoEncoder.state")}}{{ReadOnlyInline}}
  - : Represents the state of the underlying codec and whether it is configured for encoding.

## Methods

- {{APIRef("VideoEncoder.configure()")}}
  - : Enqueues a control message to configure the video encoder for encoding chunks.
- {{APIRef("VideoEncoder.encode()")}}
  - : Enqueues a control message to encode a given {{APIRef("VideoFrame")}}.
- {{APIRef("VideoEncoder.flush()")}}
  - : Returns a promise that resolves once all pending messages in the queue have been completed.
- {{APIRef("VideoEncoder.reset()")}}
  - : Resets all states including configuration, control messages in the control message queue, and all pending callbacks.
- {{APIRef("VideoEncoder.close()")}}
  - : Ends all pending work and releases system resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Video processing with WebCodecs](https://web.dev/webcodecs/)
