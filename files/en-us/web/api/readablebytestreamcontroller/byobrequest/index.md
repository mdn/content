---
title: ReadableByteStreamController.byobRequest
slug: Web/API/ReadableByteStreamController/byobRequest
tags:
  - API
  - Experimental
  - Property
  - ReadableByteStreamController
  - Reference
  - Streams
  - byobRequest
browser-compat: api.ReadableByteStreamController.byobRequest
---
{{draft}}{{SeeCompatTable}}{{APIRef("Streams")}}

The **`byobRequest`** read-only property of the
{{domxref("ReadableByteStreamController")}} interface returns the current BYOB pull
request, or `undefined` if there are no pending requests.

## Syntax

```js
var request = readableByteStreamController.byobRequest;
```

### Value

A {{domxref("ReadableStreamBYOBRequest")}} object instance, or `undefined`.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
