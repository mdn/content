---
title: JS Self-Profiling API
slug: Web/API/JS_Self-Profiling_API
page-type: web-api-overview
browser-compat: api.Profiler
spec-urls: https://wicg.github.io/js-self-profiling/
---

{{DefaultAPISidebar("JS Self-Profiling API")}}

The JS Self-Profiling API enables a website to run a sampling profiler, to understand where it is spending JavaScript execution time.

## Concepts and usage

To start a profile, a website creates a {{domxref("Profiler")}} instance. As soon as the instance is created, it starts sampling the JavaScript execution context.

To stop collecting samples and retrieve the profile, the website calls {{domxref("Profiler.stop()")}}. This returns a {{jsxref("Promise")}} which resolves to an object containing the profile data.

For example, the following function creates a profiler, then calls a function `genPrimes()`, then stops the profiler and retrieves the profile data:

```js
async function profileGeneratePrimes() {
  const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

  genPrimes();

  const trace = await profiler.stop();
  console.log(trace);
}
```

The profiler is a _sampling profiler_: this means that it periodically records (or _samples_) the current state of the JavaScript {{glossary("call stack")}}. The profile consists of the collection of these samples. This enables you to understand where, statistically, the program is spending most of its time.

To understand exactly what a profile contains and how it is formatted, see [Profile anatomy and format](/en-US/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format).

## Interfaces

- {{domxref("Profiler")}} {{Experimental_Inline}}

  - : The `Profiler` interface is used to create profiles.

## Security requirements

To use this API, the document must be served with a [document policy](https://wicg.github.io/document-policy/) that includes the `"js-profiling"` configuration point.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
