---
title: ReadableStreamBYOBReader.closed
slug: Web/API/ReadableStreamBYOBReader/closed
page-type: web-api-instance-property
tags:
  - API
  - Property
  - ReadableStreamBYOBReader
  - Reference
  - Streams
  - closed
browser-compat: api.ReadableStreamBYOBReader.closed
---
{{APIRef("Streams")}}

The **`closed`** read-only property of the {{domxref("ReadableStreamBYOBReader")}} interface returns a {{jsxref("Promise")}} that fulfills when the stream closes, or rejects if the stream throws an error or the reader's lock is released.

This property enables you to write code that responds to an end to the streaming process.

## Value

A {{jsxref("Promise")}}.

## Examples

The code below shows the pattern for handling the closed/error state of a BYOBReader.

```js
const reader = stream.getReader({mode: "byob"});
reader.closed
  .then(() => { /* Resolved - code to handle stream closing */ } )
  .catch(() => { /* Rejected - code to handle error */ } );
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
