---
title: DecompressionStream.readable
slug: Web/API/DecompressionStream/readable
tags:
  - API
  - Property
  - Reference
  - readable
  - DecompressionStream
browser-compat: api.DecompressionStream.readable
---
{{DefaultAPISidebar("Compression Streams API")}}

The **`readable`** read-only property of the {{domxref("DecompressionStream")}} interface returns a {{domxref("ReadableStream")}}.

## Syntax

```js
let stream = DecompressionStream.readable;
```

### Value

A {{domxref("ReadableStream")}}.

## Examples

The following example returns a {{domxref("ReadableStream")}} from a `DecompressionStream`.

```js
let stream = new DecompressionStream('gzip');
console.log(stream.readable); //a ReadableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
