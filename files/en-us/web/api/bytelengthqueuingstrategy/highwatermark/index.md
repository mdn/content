---
title: ByteLengthQueuingStrategy.highWaterMark
slug: Web/API/ByteLengthQueuingStrategy/highWaterMark
tags:
  - API
  - ByteLengthQueuingStrategy
  - Experimental
  - Property
  - Reference
  - Streams
  - highWaterMark
browser-compat: api.ByteLengthQueuingStrategy.highWaterMark
---
{{DefaultAPISidebar("")}}

The **`highWaterMark`** property of the {{domxref("ByteLengthQueuingStrategy")}} interface returns the total number of chunks that can be in the streaming queue before backpressure will be applied. This is the value suplied by the `highWaterMark` property passed to the {{domxref("ByteLengthQueuingStrategy.ByteLengthQueuingStrategy", "ByteLengthQueuingStrategy()")}} constructor.

## Value

An {{jsxref('Integer')}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


