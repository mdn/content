---
title: Profiler
slug: Web/API/Profiler
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Profiler
---

{{APIRef("JS Self-Profiling API")}}{{SeeCompatTable}}

The **`Profiler`** interface of the [JS Self-Profiling API](/en-US/docs/Web/API/JS_Self-Profiling_API) enables you to create a [profile](/en-US/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format) of some part of your web application's execution.

## Constructor

- {{domxref("Profiler.Profiler","Profiler()")}} {{experimental_inline}}
  - : Creates a new `Profiler` object, and starts collecting samples.

## Instance methods

- {{domxref("Profiler.stop()")}} {{experimental_inline}}
  - : Stops the profiler, returning a {{jsxref("Promise")}} that resolves to the [profile](/en-US/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format).

## Events

- {{domxref("Profiler.samplebufferfull_event", "samplebufferfull")}}
  - : Fired when the profile has recorded enough samples to fill its internal buffer.

## Examples

### Recording a profile

The following code profiles the `doWork()` operation, and logs the result.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

doWork();

const profile = await profiler.stop();
console.log(JSON.stringify(profile));
```

### Profiling page load

The following code profiles the time between the script first running and the window's {{domxref("Window.load_event", "load")}} event firing.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

window.addEventListener("load", async () => {
  const profile = await profiler.stop();
  console.log(JSON.stringify(profile));
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
