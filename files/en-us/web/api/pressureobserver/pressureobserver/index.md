---
title: "PressureObserver: PressureObserver() constructor"
short-title: PressureObserver()
slug: Web/API/PressureObserver/PressureObserver
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.PressureObserver.PressureObserver
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}

The **`PressureObserver()`** constructor creates a new {{domxref("PressureObserver")}} object with the given observer `callback`. The specified observer callback is invoked when pressure state changes occurred.

## Syntax

```js-nolint
new PressureObserver(callback)
new PressureObserver(callback, options)
```

### Parameters

- `callback`
  - : A callback that will be invoked when pressure records are observed. When the callback is invoked, the following parameters are available:
    - `changes`
      - : An array of {{domxref("PressureRecord")}} objects.
    - `observer`
      - : The {{domxref("PressureObserver","observer")}} object that is receiving the above records.
- `options` {{optional_inline}}
  - : An object to configure the `PressureObserver` with the following properties:
    - `sampleInterval` {{optional_inline}}
      - : A number representing the requested sampling interval expressed in milliseconds.

### Return value

A new {{domxref("PressureObserver")}} object which will call the specified `callback` when observed pressure state changes occur.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the the [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API) is disallowed by a {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the `source` parameter is not one of the {{domxref("PressureObserver.supportedSources_static", "PressureObserver.supportedSources")}} for this user agent.

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

const observer = new PressureObserver(callback, {
  sampleInterval: 1000, // 1000ms
});
await observer.observe("cpu");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
