---
title: VideoEncoder.encodeQueueSize
slug: Web/API/VideoEncoder/encodeQueueSize
tags:
  - API
  - Property
  - Reference
  - encodeQueueSize
  - VideoEncoder
browser-compat: api.VideoEncoder.encodeQueueSize
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`encodeQueueSize`** read-only property of the {{domxref("VideoEncoder")}} interface returns the number of pending encode requests in the queue.

## Value

An integer containing the number of requests.

## Examples

The following example prints the size of the queue to the console.

```js
console.log(VideoEncoder.encodeQueueSize);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
