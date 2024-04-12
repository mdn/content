---
title: PressureObserver
slug: Web/API/PressureObserver
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PressureObserver
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

The **`PressureObserver`** interface is part of the [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API) and is used to observe the pressure changes of system resources such as the CPU.

## Constructor

- {{domxref("PressureObserver.PressureObserver","PressureObserver()")}}
  - : Creates and returns a new `PressureObserver` object.

## Static properties

- {{domxref("PressureObserver.supportedSources_static", "PressureObserver.supportedSources")}} {{ReadOnlyInline}}
  - : Returns an array of {{domxref("PressureRecord.source","source")}} values supported by the user agent.

## Instance methods

- {{domxref("PressureObserver.observe","PressureObserver.observe()")}}
  - : Invokes the pressure observer's callback function when a pressure record for the specified `source` is observed.
- {{domxref("PressureObserver.unobserve","PressureObserver.unobserve()")}}
  - : Stops the pressure observer callback from receiving pressure records from the specified `source`.
- {{domxref("PressureObserver.disconnect","PressureObserver.disconnect()")}}
  - : Stops the pressure observer callback from receiving pressure records from any source and clears all pending records since the callback was last invoked.
- {{domxref("PressureObserver.takeRecords","PressureObserver.takeRecords()")}}
  - : Returns the current list of pressure records stored in the pressure observer, emptying it out.

## Examples

### Log current pressure

This example registers a `PressureObserver` and notifies whenever there is a pressure change. The sample interval is set to 1000ms, meaning that there will be updates at most every second.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure ${lastRecord.state}`);
  if (lastRecord.state === "critical") {
    // disable video feeds
  } else if (lastRecord.state === "serious") {
    // disable video filter effects
  } else {
    // enable all video feeds and filter effects
  }
}

const observer = new PressureObserver(callback, {
  sampleInterval: 1000, // 1000ms
});
await observer.observe("cpu");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('PerformanceObserver')}}
- {{domxref('MutationObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
