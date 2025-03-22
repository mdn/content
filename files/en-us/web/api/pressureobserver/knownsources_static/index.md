---
title: "PressureObserver: knownSources static property"
short-title: knownSources
slug: Web/API/PressureObserver/knownSources_static
page-type: web-api-static-property
status:
  - experimental
browser-compat: api.PressureObserver.knownSources_static
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

The static **`knownSources`** read-only property of the {{domxref("PressureObserver")}} interface returns an array of the {{domxref("PressureRecord.source","source")}} values supported by the user agent in alphabetical order.

> [!NOTE]
> The list of supported sources varies per browser, operating system, and hardware, and is evolving. This property is merely a hint about source types the user agents supports. Call {{domxref("PressureObserver.observe()", "observe()")}} and check for a `NotSupportedError` to see if pressure observation is possible.

## Value

An array of {{domxref("PressureRecord.source")}} values.

## Examples

### Using the console to see known sources

To find out which {{domxref("PressureRecord.source","source")}} values a browser knows, enter <kbd>PressureObserver.knownSources</kbd> into the console. This will return an array of known sources.

```js
PressureObserver.knownSources;
// returns ["cpu"] in Chrome 125
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
