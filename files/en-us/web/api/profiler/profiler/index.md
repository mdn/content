---
title: "Profiler: Profiler() constructor"
short-title: Profiler()
slug: Web/API/Profiler/Profiler
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.Profiler.Profiler
---

{{APIRef("JS Self-Profiling API")}}{{SeeCompatTable}}

The **`Profiler()`** constructor creates a new {{domxref("Profiler")}} object.

Once created, the new profiler will start collecting samples.

## Syntax

```js-nolint
new Profiler(options)
```

### Parameters

- `options`

  - : Options for this profiler. This is an object containing the following properties:

    - `maxBufferSize`
      - : A number indicating the maximum number of samples to take. Once this number is reached, the browser will fire the {{domxref("Profiler.samplebufferfull_event", "samplebufferfull")}} event at the profiler, and no more samples will be recorded.
    - `sampleInterval`
      - : The time interval between samples, in milliseconds.

### Exceptions

- `RangeError` {{domxref("DOMException")}}
  - : Thrown if the `sampleInterval` option is less than zero.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the document was not served with a [document policy](https://wicg.github.io/document-policy/) that included the `"js-profiling"` configuration point.

## Examples

This example creates a profiler which will take up to 1000 samples, sampling every 10 milliseconds.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 1000 });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
