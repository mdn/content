---
title: PerformanceEntry.entryType
slug: Web/API/PerformanceEntry/entryType
page-type: web-api-instance-property
tags:
  - API
  - PerformanceEntry
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceEntry.entryType
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

The read-only **`entryType`** property returns a string representing the type of performance metric. For
example, if the subtype is {{domxref('PerformanceMark')}}, it will be "`mark`".

All supported `entryTypes` are available using the static property {{domxref("PerformanceObserver.supportedEntryTypes")}}.

## Value

A string. The return value depends on the subtype of the `PerformanceEntry` object. Some subtypes have more than one `entryType`.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Subtype</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref('LargestContentfulPaint')}}</td>
      <td><code>largest-contentful-paint</code></td>
      <td>Reports the largest paint an element triggered on screen.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceElementTiming')}}</td>
      <td><code>element</code></td>
      <td>Reports load time of elements.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceEventTiming')}}</td>
      <td><code>event</code></td>
      <td>Reports event latencies.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceEventTiming')}}</td>
      <td><code>first-input</code></td>
      <td>Reports the {{Glossary("first input delay")}}.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceLongTaskTiming')}}</td>
      <td><code>longtask</code></td>
      <td>Reports instances of long tasks.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceMark')}}</td>
      <td><code>mark</code></td>
      <td>Reports your own custom performance markers.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceMeasure')}}</td>
      <td><code>measure</code></td>
      <td>Reports your own custom performance measures.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceNavigationTiming')}}</td>
      <td><code>navigation</code></td>
      <td>Reports document navigation timing.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformancePaintTiming')}}</td>
      <td><code>paint</code></td>
      <td>Reports key moments of document rendering (first paint, first contentful paint) during page load.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceResourceTiming')}}</td>
      <td><code>resource</code></td>
      <td>Reports timing information for resources in a document.</td>
    </tr>
    <tr>
      <td>{{domxref('TaskAttributionTiming')}}</td>
      <td><code>taskattribution</code></td>
      <td>Reports the type of work that contributed significantly to the long task.</td>
    </tr>
  </tbody>
</table>

## Examples

### Filtering performance entries by type

The `entryType` property can be useful when filtering out specific performance entries. For example, you might want to check all script resources, so you would check for an `entryType` of `"resource"` and an {{domxref("PerformanceResourceTiming.initiatorType", "initiatorType")}} of `"script"`.

```js
const scriptResources = performance.getEntries().filter((entry) => 
  entry.entryType === "resource" && 
  entry.initiatorType === "script"
);
```

### Getting performance entries by type

Both, {{domxref("Performance")}} and {{domxref("PerformanceObserver")}}, provide methods that allow you to get performance entries by type directly. You don't necessarily need the `entryType` property for that, instead you might use {{domxref("Performance.getEntriesByType()")}} or {{domxref("PerformanceObserverEntryList.getEntriesByType()")}}.

Also, when observing with a {{domxref("PerformanceObserver")}}, the {{domxref("PerformanceObserver.observe", "observe()")}} method takes an an array of `entryTypes` in its options object where you can decide which entry types to observe.

```js
// Log all resource entries at this point
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(`${entry.name}'s duration: ${entry.duration}`);
});

// PerformanceObserver version
// Log all resource entries when they are available
function perfObserver(list, observer) {
  list.getEntriesByType("resource").forEach((entry) =>  {
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

- {{domxref("PerformanceObserver.supportedEntryTypes")}}
- {{domxref("Performance.getEntriesByType()")}}
- {{domxref("PerformanceObserverEntryList.getEntriesByType()")}}
