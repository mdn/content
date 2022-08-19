---
title: VideoDecoder.decodeQueueSize
slug: Web/API/VideoDecoder/decodeQueueSize
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - decodeQueueSize
  - VideoDecoder
browser-compat: api.VideoDecoder.decodeQueueSize
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`decodeQueueSize`** read-only property of the {{domxref("VideoDecoder")}} interface returns the number of pending decode requests in the queue.

## Value

An integer containing the number of requests.

## Examples

The following example prints the size of the queue to the console.

```js
console.log(VideoDecoder.decodeQueueSize);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
