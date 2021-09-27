---
title: PerformanceObserver.supportedEntryTypes
slug: Web/API/PerformanceObserver/supportedEntryTypes
tags:
  - API
  - Property
  - Reference
  - Web Performance
  - PerformanceObserver
  - supportedEntryTypes
browser-compat: api.PerformanceObserver.supportedEntryTypes
---
{{APIRef("Performance Timeline API")}}

The **`supportedEntryTypes`** read-only property of the
{{domxref("PerformanceObserver")}} interface returns an array of the {{domxref("PerformanceEntry.entryType","entryType")}} values supported by the user agent.

As the list of supported entries varies per browser and is evolving, this property allows web developers to check which are available.

## Syntax

```js
var supportedEntryTypes = PerformanceObserver.supportedEntryTypes;
```

### Return value

An array of {{domxref("PerformanceEntry.entryType")}} values.

## Example

### Using the console to check supported types

To find out which {{domxref("PerformanceEntry.entryType","entryType")}} values a browser supports enter <kbd>PerformanceObserver.supportedEntryTypes</kbd> into the console. This will return an array of `EntryType` values.

```js
PerformanceObserver.supportedEntryTypes

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

detectSupport(["resource", "mark", "frame"]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
