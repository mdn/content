---
title: VisibilityStateEntry
slug: Web/API/VisibilityStateEntry
page-type: web-api-interface
status:
  - experimental
browser-compat: api.VisibilityStateEntry
---

{{APIRef("Performance API")}}{{seecompattable}}

The **`VisibilityStateEntry`** interface provides timings of page visibility state changes, i.e., when a tab changes from the foreground to the background or vice versa.

This can be used to pinpoint visibility changes on the performance timeline, and cross-reference them against other performance entries such as "first-contentful-paint" (see {{domxref("PerformancePaintTiming")}}).

There are two key visibility state change times that this API reports on:

- `visible`: The time when the page becomes visible (i.e. when its tab moves into the foreground).
- `hidden`: The time when the pages become hidden (i.e. when its tab moves into the background).

The performance timeline will always have a `"visibility-state"` entry with a `startTime` of `0` and a `name` representing the initial page visibility state.

> [!NOTE]
> Like other Performance APIs, this API extends {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instance properties

This interface has no properties but it extends the properties of {{domxref("PerformanceEntry")}} by qualifying and constraining them as follows:

- {{domxref("PerformanceEntry.entryType")}} {{experimental_inline}}
  - : Returns `"visibility-state"`.
- {{domxref("PerformanceEntry.name")}} {{experimental_inline}}
  - : Returns either `"visible"` or `"hidden"`.
- {{domxref("PerformanceEntry.startTime")}} {{experimental_inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the visibility state change occurred.
- {{domxref("PerformanceEntry.duration")}} {{experimental_inline}}
  - : Returns 0.

## Instance methods

This interface has no methods.

## Examples

### Basic usage

The following function could be used to log a table of all `"visibility-state"` performance entries to the console:

```js
function getVisibilityStateEntries() {
  const visibilityStateEntries =
    performance.getEntriesByType("visibility-state");
  console.table(visibilityStateEntries);
}
```

### Correlating visibility state changes with paint timing

The below function gets a reference to all `"visibility-state"` entries and the `"first-contentful-paint"` entry, then uses {{jsxref("Array.some()")}} to test whether any of the `"hidden"` visibility entries occurred before the first contentful paint:

```js
function wasHiddenBeforeFirstContentfulPaint() {
  const fcpEntry = performance.getEntriesByName("first-contentful-paint")[0];
  const visibilityStateEntries =
    performance.getEntriesByType("visibility-state");
  return visibilityStateEntries.some(
    (e) => e.startTime < fcpEntry.startTime && e.name === "hidden",
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Page Visibility API](/en-US/docs/Web/API/Page_Visibility_API)
