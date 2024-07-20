---
title: "PerformanceScriptTiming: sourceFunctionName property"
short-title: sourceFunctionName
slug: Web/API/PerformanceScriptTiming/sourceFunctionName
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceScriptTiming.sourceFunctionName
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`sourceFunctionName`** read-only property of the {{domxref("PerformanceScriptTiming")}} interface returns a string representing the name of the function that contributed to the long animation frame (LoAF).

It is important to note that the reported function name will be the "entry point" of the script, that is, the top level of the stack, not any specific slow sub-function.

For example, if an event handler calls a top-level function, which then calls a slow sub-function, the `source*` fields will report the name and location of the top-level function, not the slow sub-function — the function that was passed to the platform API is always the one reported. This is because of performance reasons; a full stack trace is costly.

In the following snippet:

```js
setTimeout(function lib_func() {
  slow_function();
});
```

`sourceFunctionName` would report `lib_func`, not `slow_function`.

## Value

A string. Returns an empty string if the function name was not found.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
