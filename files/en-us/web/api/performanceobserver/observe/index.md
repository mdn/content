---
title: PerformanceObserver.observe()
slug: Web/API/PerformanceObserver/observe
tags:
  - API
  - Method
  - Performance
  - PerformanceObserver
  - Reference
  - Web Performance
browser-compat: api.PerformanceObserver.observe
---
{{APIRef("Performance Timeline API")}}

The **`observe()`** method of the
**{{domxref("PerformanceObserver")}}** interface is used to specify the
set of performance entry types to observe.

The performance entry types are
specified as an array of {{domxref("DOMString")}} objects, each naming one entry type;
the type names are documented in
{{SectionOnPage("/en-US/docs/Web/API/PerformanceEntry/entryType", "Performance entry
  type names")}}.

When a matching performance entry is recorded, the performance observer's callback
function—set when creating the {{domxref("PerformanceObserver")}}—is invoked.

## Syntax

```js
observer.observe(options);
```

### Parameters

- `options`

  - : A `PerformanceObserverInit` dictionary with the following possible
    members:

    - `entryTypes`: An array of {{domxref("DOMString")}} objects, each
      specifying one performance entry type to observe. May not be used together with
      the "`type`" or "`buffered`" options.
    - `type`: A single {{domxref("DOMString")}} specifying exactly one
      performance entry type to observe. May not be used together with the
      `entryTypes` option.
    - `buffered`: A boolean flag to indicate whether buffered
      entries should be queued into the observer's buffer. Must be used only with the
      "`type`" option.

    See {{domxref("PerformanceEntry.entryType")}} for a list of valid performance entry
    type names. Unrecognized types are ignored, though the browser may output a warning
    message to the console to help developers debug their code. If no valid types are
    found, `observe()` has no effect.

## Examples

This example creates and configures two `PerformanceObservers`; one watches
for `"mark"` and `"frame"` events, and the other watches for
`"measure"` events.

```js
var observer = new PerformanceObserver(function(list, obj) {
  var entries = list.getEntries();
  for (var i=0; i < entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({entryTypes: ["mark", "frame"]});

function perf_observer(list, observer) {
  // Process the "measure" event
}
var observer2 = new PerformanceObserver(perf_observer);
observer2.observe({entryTypes: ["measure"]});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
