---
title: "Profiler: stop() method"
short-title: stop()
slug: Web/API/Profiler/stop
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Profiler.stop
---

{{APIRef("JS Self-Profiling API")}}{{SeeCompatTable}}

The **`stop()`** method of the {{domxref("Profiler")}} interface stops the profiler and returns a {{jsxref("Promise")}} which resolves to the profile itself.

## Syntax

```js-nolint
stop()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an object containing the profile data. The format and interpretation of this object is described in [Profile anatomy and format](/en-US/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format).

## Examples

### Recording a profile

The following code profiles the `doWork()` operation, and logs the result.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

doWork();

const profile = await profiler.stop();
console.log(JSON.stringify(profile));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
