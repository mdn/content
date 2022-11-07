---
title: PerformanceObserver.observe()
slug: Web/API/PerformanceObserver/observe
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Performance
  - PerformanceObserver
  - Reference
  - Web Performance
browser-compat: api.PerformanceObserver.observe
---

{{APIRef("Performance API")}}

The **`observe()`** method of the
**{{domxref("PerformanceObserver")}}** interface is used to specify the
set of performance entry types to observe.

The performance entry types are
specified as an array of string objects, each naming one entry type;
the type names are documented in
{{SectionOnPage("/en-US/docs/Web/API/PerformanceEntry/entryType", "Performance entry
  type names")}}.

When a matching performance entry is recorded, the performance observer's callback
function—set when creating the {{domxref("PerformanceObserver")}}—is invoked.

## Syntax

```js-nolint
observe(options)
```

### Parameters

- `options`

  - : An object with the following possible members:

    - `buffered`
      - : A boolean flag to indicate whether buffered
        entries should be queued into the observer's buffer. Must be used only with the
        "`type`" option.
    - `durationThreshold`
      - : A {{domxref("DOMHighResTimeStamp")}} defining the threshold for {{domxref("PerformanceEventTiming")}} entries. Defaults to 104ms and is rounded to the nearest of 8ms. Lowest possible threshold is 16ms.
    - `entryTypes`
      - : An array of string objects, each
        specifying one performance entry type to observe. May not be used together with
        the "`type`" or "`buffered`" options.
    - `type`
      - : A single string specifying exactly one
        performance entry type to observe. May not be used together with the
        `entryTypes` option.

    See {{domxref("PerformanceEntry.entryType")}} for a list of valid performance entry
    type names. Unrecognized types are ignored, though the browser may output a warning
    message to the console to help developers debug their code. If no valid types are
    found, `observe()` has no effect.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example creates and configures two `PerformanceObservers`; one watches
for `"mark"` and `"frame"` events, and the other watches for
`"measure"` events.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries()
    .forEach((entry) => {
      // Process "mark" and "frame" events
    });
});
observer.observe({ entryTypes: ["mark", "frame"] });

function perfObserver(list, observer) {
  // Process the "measure" event
}
const observer2 = new PerformanceObserver(perfObserver);
observer2.observe({ entryTypes: ["measure"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
