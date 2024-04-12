---
title: "PressureObserver: supportedSources static property"
short-title: supportedSources
slug: Web/API/PressureObserver/supportedSources_static
page-type: web-api-static-property
status:
  - experimental
browser-compat: api.PressureObserver.supportedSources_static
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

The static **`supportedSources`** read-only property of the {{domxref("PressureObserver")}} interface returns an array of the {{domxref("PressureRecord.source","source")}} values supported by the user agent.

The list of supported sources varies per browser, operating system, and hardware, and is evolving. This property allows web developers to check which sources are available.

## Value

An array of {{domxref("PressureRecord.source")}} values.

## Examples

### Using the console to check supported sources

To find out which {{domxref("PressureRecord.source","source")}} values a browser supports, enter <kbd>PressureObserver.supportedSources</kbd> into the console. This will return an array of supported sources.

```js
PressureObserver.supportedSources;
// returns ["cpu"] in Chrome 125 on macOS
```

### Checking for unsupported types

The following function checks for support of an array of possible sources. The unsupported types are logged to the console, however this information could be logged to client-side analytics to indicate that the particular source could not be observed.

```js
function detectSupport(sources) {
  for (const source of sources) {
    if (!PressureObserver.supportedSources.includes(source)) {
      console.log(source);
    }
  }
}

detectSupport(["cpu", "thermal", "gpu", "npu"]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
