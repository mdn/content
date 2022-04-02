---
title: ReadableStreamBYOBReader.closed
slug: Web/API/ReadableStreamBYOBReader/closed
tags:
  - API
  - Experimental
  - Property
  - ReadableStreamBYOBReader
  - Reference
  - Streams
  - closed
browser-compat: api.ReadableStreamBYOBReader.closed
---
{{SeeCompatTable}}{{APIRef("Streams")}}

The **`closed`** read-only property
of the {{domxref("ReadableStreamBYOBReader")}} interface returns a
{{jsxref("Promise")}} that fulfills when the stream closes, or rejects if the
stream throws an error or the reader's lock is released. This property enables you
to write code that responds to an end to the streaming process.

## Value

A {{jsxref("Promise")}}.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
