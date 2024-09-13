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

- {{domxref("PressureObserver.PressureObserver","PressureObserver()")}} {{experimental_inline}}
  - : Creates and returns a new `PressureObserver` object.

## Static properties

- {{domxref("PressureObserver.knownSources_static", "PressureObserver.knownSources")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns an array of {{domxref("PressureRecord.source","source")}} values supported by the user agent.

## Instance methods

- {{domxref("PressureObserver.observe","PressureObserver.observe()")}} {{experimental_inline}}
  - : Invokes the pressure observer's callback function when a pressure record for the specified `source` is observed.
- {{domxref("PressureObserver.unobserve","PressureObserver.unobserve()")}} {{experimental_inline}}
  - : Stops the pressure observer callback from receiving pressure records from the specified `source`.
- {{domxref("PressureObserver.disconnect","PressureObserver.disconnect()")}} {{experimental_inline}}
  - : Stops the pressure observer callback from receiving pressure records from all sources.
- {{domxref("PressureObserver.takeRecords","PressureObserver.takeRecords()")}} {{experimental_inline}}
  - : Returns the current list of pressure records stored in the pressure observer, emptying it out.

## Examples

### Log current pressure

This example creates a `PressureObserver` and takes action whenever there is a pressure change. The sample interval is set to 1000ms, meaning that there will be updates at most every second.

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

try {
  const observer = new PressureObserver(callback);
  await observer.observe("cpu", {
    sampleInterval: 1000, // 1000ms
  });
} catch (error) {
  // report error setting up the observer
}
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
