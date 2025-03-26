---
title: "PressureObserver: unobserve() method"
short-title: unobserve()
slug: Web/API/PressureObserver/unobserve
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PressureObserver.unobserve
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

The **`unobserve()`** method of the {{domxref('PressureObserver')}} interface stops the pressure observer callback from receiving pressure records from the specified source.

## Syntax

```js-nolint
unobserve(source)
```

### Parameters

- `source`
  - : A string specifying which {{domxref("PressureRecord.source", "source")}} to unobserve.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Stop observing a specific source

The following example shows how to stop observing the "gpu" source after the observer previously observed both, the "cpu" and "gpu" sources.

```js
const observer = new PressureObserver(callback);

observer.observe("cpu");
observer.observe("gpu");

// Callback now gets called whenever the pressure state changes for 'cpu' or 'gpu'.

observer.unobserve("gpu");

// Callback now only gets called whenever the pressure state changes for 'cpu'.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
