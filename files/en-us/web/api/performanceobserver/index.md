---
title: PerformanceObserver
slug: Web/API/PerformanceObserver
page-type: web-api-interface
tags:
  - API
  - Interface
  - Performance Observer API
  - PerformanceObserver
  - Reference
  - Web Performance
  - observers
browser-compat: api.PerformanceObserver
---
{{APIRef("Performance Timeline API")}}

The **`PerformanceObserver`** interface is used to _observe_ performance measurement events and be notified of new {{domxref("PerformanceEntry","performance entries", '', 'true')}} as they are recorded in the browser's _performance timeline_.

{{AvailableInWorkers}}

## Constructor

- {{domxref("PerformanceObserver.PerformanceObserver","PerformanceObserver()")}}
  - : Creates and returns a new `PerformanceObserver` object.

## Properties

- {{domxref("PerformanceObserver.supportedEntryTypes")}} {{ReadOnlyInline}}
  - : Returns an array of the {{domxref("PerformanceEntry.entryType","entryType")}} values supported by the user agent.

## Methods

- {{domxref("PerformanceObserver.observe","PerformanceObserver.observe()")}}
  - : Specifies the set of {{domxref("PerformanceEntry.entryType","entry types")}} to observe. The performance observer's callback function will be invoked when a {{domxref("PerformanceEntry","performance entry")}} is recorded for one of the specified `entryTypes`
- {{domxref("PerformanceObserver.disconnect","PerformanceObserver.disconnect()")}}
  - : Stops the performance observer callback from receiving {{domxref("PerformanceEntry","performance entries")}}.
- {{domxref("PerformanceObserver.takeRecords","PerformanceObserver.takeRecords()")}}
  - : Returns the current list of {{domxref("PerformanceEntry","performance entries")}} stored in the performance observer, emptying it out.

## Example

```js
function observer_callback(list, observer) {
   // Process the "measure" event
}
let observer = new PerformanceObserver(observer_callback);
observer.observe({entryTypes: ["measure"]});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('MutationObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
