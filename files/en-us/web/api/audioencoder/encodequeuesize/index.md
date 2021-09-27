---
title: AudioEncoder.encodeQueueSize
slug: Web/API/AudioEncoder/encodeQueueSize
tags:
  - API
  - Property
  - Reference
  - encodeQueueSize
  - AudioEncoder
browser-compat: api.AudioEncoder.encodeQueueSize
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`encodeQueueSize`** read-only property of the {{domxref("AudioEncoder")}} interface returns the number of pending encode requests in the queue.

## Value

An integer containing the number of requests.

## Examples

The following example prints the size of the queue to the console.

```js
console.log(AudioEncoder.encodeQueueSize);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
