---
title: "Performance: getEntries() method"
short-title: getEntries()
slug: Web/API/Performance/getEntries
page-type: web-api-instance-method
browser-compat: api.Performance.getEntries
---

{{APIRef("Performance API")}}

The **`getEntries()`** method returns an array of all {{domxref("PerformanceEntry")}} objects currently present in the performance timeline.

If you are only interested in performance entries of certain types or that have certain names, see {{domxref("Performance.getEntriesByType", "getEntriesByType()")}} and {{domxref("Performance.getEntriesByName", "getEntriesByName()")}}.

> **Note:** This method does not notify you about new performance entries; you will only get entries that are present in the performance timeline at the time you call this method.
> To receive notifications about entries as they become available, use a {{domxref("PerformanceObserver")}}.

The following entry types are not supported by this method at all and won't be returned even if entries for these types might exist:

- `"element"` ({{domxref("PerformanceElementTiming")}})
- `"event"` ({{domxref("PerformanceEventTiming")}})
- `"largest-contentful-paint"` ({{domxref("LargestContentfulPaint")}})
- `"layout-shift"` ({{domxref("LayoutShift")}})
- `"longtask"` ({{domxref("PerformanceLongTaskTiming")}})

To access entries of these types, you must use a {{domxref("PerformanceObserver")}} instead.

## Syntax

```js-nolint
getEntries()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} of {{domxref("PerformanceEntry")}} objects. The items will be in chronological order based on the entries' {{domxref("PerformanceEntry.startTime","startTime")}}.

## Examples

### Logging all performance markers and measures

Assuming you created your own {{domxref("PerformanceMark")}} and {{domxref("PerformanceMeasure")}} objects at appropriate places in your code, you might want to log all them to the console like this:

```js
// Example markers/measures
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");
performance.mark("video-loaded");
performance.measure("login-duration", "login-started", "login-finished");

const entries = performance.getEntries();

entries.forEach((entry) => {
  if (entry.entryType === "mark") {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  }
  if (entry.entryType === "measure") {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.getEntriesByType()")}}
- {{domxref("Performance.getEntriesByName()")}}
