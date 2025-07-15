---
title: "EncodedVideoChunk: duration property"
short-title: duration
slug: Web/API/EncodedVideoChunk/duration
page-type: web-api-instance-property
browser-compat: api.EncodedVideoChunk.duration
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`duration`** read-only property of the {{domxref("EncodedVideoChunk")}} interface returns an integer indicating the duration of the video in microseconds.

## Value

An integer.

## Examples

In the following example the `duration` is printed to the console.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedVideoChunk(init);

console.log(chunk.duration); // 2000000
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
