---
title: "PerformanceObserver: supportedEntryTypes static property"
short-title: supportedEntryTypes
slug: Web/API/PerformanceObserver/supportedEntryTypes_static
page-type: web-api-static-property
browser-compat: api.PerformanceObserver.supportedEntryTypes_static
---

{{APIRef("Performance API")}}

The static **`supportedEntryTypes`** read-only property of the {{domxref("PerformanceObserver")}} interface returns an array of the {{domxref("PerformanceEntry.entryType","entryType")}} values supported by the user agent.

As the list of supported entries varies per browser and is evolving, this property allows web developers to check which are available.

## Value

An array of {{domxref("PerformanceEntry.entryType")}} values.

## Examples

### Using the console to check supported types

To find out which {{domxref("PerformanceEntry.entryType","entryType")}} values a browser supports, enter <kbd>PerformanceObserver.supportedEntryTypes</kbd> into the console. This will return an array of supported values.

```js
PerformanceObserver.supportedEntryTypes;

// returns ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "mark", "measure", "navigation", "paint", "resource"] in Chrome 89
```

### Checking for unsupported types

The following function checks for support of an array of possible entry types. The unsupported types are logged to the console, however this information could be logged to client-side analytics to indicate that the particular type could not be observed.

```js
function detectSupport(entryTypes) {
  for (const entryType of entryTypes) {
    if (!PerformanceObserver.supportedEntryTypes.includes(entryType)) {
      console.log(entryType);
    }
  }
}

detectSupport(["resource", "mark", "first-input", "largest-contentful-paint"]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
