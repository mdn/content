---
title: "Performance: clearMarks() method"
short-title: clearMarks()
slug: Web/API/Performance/clearMarks
page-type: web-api-instance-method
browser-compat: api.Performance.clearMarks
---

{{APIRef("Performance API")}}

The **`clearMarks()`** method removes all or specific {{domxref("PerformanceMark")}} objects from the browser's performance timeline.

## Syntax

```js-nolint
clearMarks()
clearMarks(name)
```

### Parameters

- `name` {{optional_inline}}
  - : A string representing the {{domxref("PerformanceEntry.name", "name")}} of the {{domxref("PerformanceMark")}} object. If this argument is omitted, all entries with an {{domxref("PerformanceEntry.entryType","entryType")}} of "`mark`" will be removed.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Removing markers

To clean up all performance marks, or just specific entries, use the `clearMarks()` method like this:

```js
// Create a bunch of marks
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");
performance.mark("video-loaded");
performance.mark("video-loaded");

performance.getEntriesByType("mark").length; // 6

// Delete just the "login-started" mark entries
performance.clearMarks("login-started");
performance.getEntriesByType("mark").length; // 4

// Delete all of the mark entries
performance.clearMarks();
performance.getEntriesByType("mark").length; // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceMark")}}
