---
title: ReadableByteStreamController.desiredSize
slug: Web/API/ReadableByteStreamController/desiredSize
tags:
  - API
  - Experimental
  - Property
  - ReadableByteStreamController
  - Reference
  - Streams
  - desiredSize
browser-compat: api.ReadableByteStreamController.desiredSize
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`desiredSize`** read-only property of the
{{domxref("ReadableByteStreamController")}} interface returns the desired size required
to fill the stream's internal queue.

## Syntax

```js
var desiredSize = readableByteStreamController.desiredSize;
```

### Value

An integer. Note that this can be negative if the queue is over-full.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
