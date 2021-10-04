---
title: ImageDecoder.completed
slug: Web/API/ImageDecoder/completed
tags:
  - API
  - Property
  - Reference
  - completed
  - ImageDecoder
browser-compat: api.ImageDecoder.completed
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`completed`** read-only property of the {{domxref("ImageDecoder")}} interface returns a promise that resolves once the data has finished buffering.

## Value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}} once {{domxref("ImageDecoder.complete")}} is `true`.

## Examples

In the following example the value of `completed` will be `undefined` once the promise resolves.

```js
let completed = await imageDecoder.completed;
console.log(completed);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


