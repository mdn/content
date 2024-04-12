---
title: "PressureObserver: PressureObserver() constructor"
short-title: PressureObserver()
slug: Web/API/PressureObserver/PressureObserver
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.PressureObserver.PressureObserver
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`PressureObserver()`** constructor creates a new {{domxref("PressureObserver")}} object to watch for changes to pressure changes of system resources such as the CPU.

## Syntax

```js-nolint
new PressureObserver(callback)
```

### Parameters

- `callback`
  - : A callback that will be invoked when pressure records are observed. When the callback is invoked, the following parameters are available:
    - `changes`
      - : An array of {{domxref("PressureRecord")}} objects.
    - `observer`
      - : The {{domxref("PressureObserver","observer")}} object that is receiving the above records.

### Return value

A new {{domxref("PressureObserver")}} object with the specified `callback` function that will be invoked when {{domxref("PressureObserver.observe()")}} was called to watch pressure changes.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the the [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API) is disallowed by a {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Examples

### Log current pressure

This example creates a {{domxref("PressureObserver")}} and takes action whenever there is a pressure change. The sample interval is set to 1000ms, meaning that there will be updates at most every second.

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

const observer = new PressureObserver(callback);
await observer.observe("cpu", {
  sampleInterval: 1000, // 1000ms
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
