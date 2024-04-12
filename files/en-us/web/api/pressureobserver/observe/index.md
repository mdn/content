---
title: "PressureObserver: observe() method"
short-title: observe()
slug: Web/API/PressureObserver/observe
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PressureObserver.observe
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}

The **`observe()`** method of the {{domxref("PressureObserver")}} interface tells the pressure observer to start observing pressure changes. After this method is called, the observer will call its callback function when a pressure record for the specified `source` is observed.

See {{domxref("PressureRecord.source")}} for a list of sources and {{domxref("PressureObserver.supportedSources_static", "PressureObserver.supportedSources")}} for a list of sources the user agent supports.

When a matching {{domxref("PressureRecord")}} is obtained, the pressure observer's callback function is invoked.

## Syntax

```js-nolint
observe(source)
```

### Parameters

- `source`
  - : A string specifying which {{domxref("PressureRecord.source", "source")}} to observe.

### Return value

A {{jsxref("Promise")}} that fulfils with {{jsxref("undefined")}}.

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
