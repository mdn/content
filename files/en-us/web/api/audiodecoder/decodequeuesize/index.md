---
title: "AudioDecoder: decodeQueueSize property"
short-title: decodeQueueSize
slug: Web/API/AudioDecoder/decodeQueueSize
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.AudioDecoder.decodeQueueSize
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`decodeQueueSize`** read-only property of the {{domxref("AudioDecoder")}} interface returns the number of pending decode requests in the queue.

## Value

An integer containing the number of requests.

## Examples

The following example prints the size of the queue to the console.

```js
console.log(AudioDecoder.decodeQueueSize);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
