---
title: "PerformanceObserver: observe() method"
short-title: observe()
slug: Web/API/PerformanceObserver/observe
page-type: web-api-instance-method
browser-compat: api.PerformanceObserver.observe
---

{{APIRef("Performance API")}}

The **`observe()`** method of the **{{domxref("PerformanceObserver")}}** interface is used to specify the set of performance entry types to observe.

See {{domxref("PerformanceEntry.entryType")}} for a list of entry types and {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} for a list of entry types the user agent supports.

When a matching performance entry is recorded, the performance observer's callback function—set when creating the {{domxref("PerformanceObserver")}}—is invoked.

## Syntax

```js-nolint
observe(options)
```

### Parameters

- `options`

  - : An object with the following possible members:

    - `buffered`
      - : A boolean flag to indicate whether buffered entries should be queued into the observer's buffer. Must be used only with the "`type`" option.
    - `durationThreshold`
      - : A {{domxref("DOMHighResTimeStamp")}} defining the threshold for {{domxref("PerformanceEventTiming")}} entries. Defaults to 104ms and is rounded to the nearest of 8ms. Lowest possible threshold is 16ms. May not be used together with the `entryTypes` option.
    - `entryTypes`

      - : An array of string objects, each specifying one performance entry type to observe. May not be used together with
        the "`type`", "`buffered`", or "`durationThreshold`" options.

        See {{domxref("PerformanceEntry.entryType")}} for a list of valid performance entry type names. Unrecognized types are ignored, though the browser may output a warning message to the console to help developers debug their code. If no valid types are found, `observe()` has no effect.

    - `type`
      - : A single string specifying exactly one performance entry type to observe. May not be used together with the `entryTypes` option.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Watching multiple performance entry types

This example creates a `PerformanceObserver` and watches for `"mark"` and `"measure"` entry types as specified by the `entryTypes` option given in the `observe()` method.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "mark" and "measure" events
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

### Watching a single performance entry type

The following example retrieves buffered events and subscribes to newer events for resource timing events ({{domxref("PerformanceResourceTiming")}}) using the `buffered` and `type` configuration options. Whenever you need to configure the observer to use the `buffered` or `durationThreshold` option, use `type` instead of `entryType`. Collecting multiple types of performance entry types will not work otherwise.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "resource" events
  });
});
observer.observe({ type: "resource", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
