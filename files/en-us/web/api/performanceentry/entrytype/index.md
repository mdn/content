---
title: "PerformanceEntry: entryType property"
short-title: entryType
slug: Web/API/PerformanceEntry/entryType
page-type: web-api-instance-property
browser-compat: api.PerformanceEntry.entryType
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

The read-only **`entryType`** property returns a string representing the type of performance metric that this entry represents.

All supported `entryTypes` are available using the static property {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}}.

## Value

A string. The return value depends on the subtype of the `PerformanceEntry` object. Some subtypes have more than one `entryType`.

- `element`

  - : Reports load time of elements.

    The entry instance will be a {{domxref("PerformanceElementTiming")}} object.

- `event`

  - : Reports event latencies.

    The entry instance will be a {{domxref("PerformanceEventTiming")}} object.

- `first-input`

  - : Reports the {{Glossary("first input delay")}} (FID).

    The entry instance will be a {{domxref("PerformanceEventTiming")}} object.

- `largest-contentful-paint`

  - : Reports the largest paint an element triggered on screen.

    The entry instance will be a {{domxref("LargestContentfulPaint")}} object.

- `layout-shift`

  - : Reports layout stability of web pages based on movements of the elements on the page.

    The entry instance will be a {{domxref("LayoutShift")}} object.

- `longtask`

  - : Reports instances of long tasks.

    The entry instance will be a {{domxref("PerformanceLongTaskTiming")}} object.

- `mark`

  - : Reports your own custom performance markers.

    The entry instance will be a {{domxref("PerformanceMark")}} object.

- `measure`

  - : Reports your own custom performance measures.

    The entry instance will be a {{domxref("PerformanceMeasure")}} object.

- `navigation`

  - : Reports document navigation timing.

    The entry instance will be a {{domxref("PerformanceNavigationTiming")}} object.

- `paint`

  - : Reports key moments of document rendering (first paint, first contentful paint) during page load.

    The entry instance will be a {{domxref("PerformancePaintTiming")}} object.

- `resource`

  - : Reports timing information for resources in a document.

    The entry instance will be a {{domxref("PerformanceResourceTiming")}} object.

- `taskattribution`

  - : Reports the type of work that contributed significantly to the long task.

    The entry instance will be a {{domxref("TaskAttributionTiming")}} object.

- `visibility-state`

  - : Reports the timing of page visibility state changes, i.e., when a tab changes from the foreground to the background or vice versa.

    The entry instance will be a {{domxref("VisibilityStateEntry")}} object.

## Examples

### Filtering performance entries by type

The `entryType` property can be useful when filtering out specific performance entries. For example, you might want to check all script resources, so you would check for an `entryType` of `"resource"` and an {{domxref("PerformanceResourceTiming.initiatorType", "initiatorType")}} of `"script"`.

```js
const scriptResources = performance
  .getEntries()
  .filter(
    (entry) =>
      entry.entryType === "resource" && entry.initiatorType === "script",
  );
console.log(scriptResources);
```

### Getting performance entries by type

Both, {{domxref("Performance")}} and {{domxref("PerformanceObserver")}}, provide methods that allow you to get performance entries by type directly. You don't necessarily need the `entryType` property for that, instead you might use {{domxref("Performance.getEntriesByType()")}} or {{domxref("PerformanceObserverEntryList.getEntriesByType()")}}.

Also, when observing with a {{domxref("PerformanceObserver")}}, the {{domxref("PerformanceObserver.observe", "observe()")}} method takes an array of `entryTypes` in its options object where you can decide which entry types to observe.

```js
// Log all resource entries at this point
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(`${entry.name}'s duration: ${entry.duration}`);
});

// PerformanceObserver version
// Log all resource entries when they are available
function perfObserver(list, observer) {
  list.getEntriesByType("resource").forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["resource", "navigation"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}}
- {{domxref("Performance.getEntriesByType()")}}
- {{domxref("PerformanceObserverEntryList.getEntriesByType()")}}
