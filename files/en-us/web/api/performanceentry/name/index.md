---
title: "PerformanceEntry: name property"
short-title: name
slug: Web/API/PerformanceEntry/name
page-type: web-api-instance-property
browser-compat: api.PerformanceEntry.name
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

The read-only **`name`** property of the {{domxref("PerformanceEntry")}} interface is a string representing the name for a performance entry. It acts as an identifier, but it does not have to be unique. The value depends on the subclass.

## Value

A string. The value depends on the subclass of the `PerformanceEntry` object as shown by the table below.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Subclass</th>
      <th scope="col">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref('LargestContentfulPaint')}}</td>
      <td>Always returns an empty string.</td>
    </tr>
    <tr>
      <td>{{domxref('LayoutShift')}}</td>
      <td>Always returns <code>"layout-shift"</code>.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceElementTiming')}}</td>
      <td>One of the following strings:
        <ul>
          <li><code>"image-paint"</code></li>
          <li><code>"text-paint"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceEventTiming')}}</td>
      <td>The associated event's type.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceLongTaskTiming')}}</td>
      <td>One of the following strings:
        <ul>
          <li><code>"cross-origin-ancestor"</code></li>
          <li><code>"cross-origin-descendant"</code></li>
          <li><code>"cross-origin-unreachable"</code></li>
          <li><code>"multiple-contexts"</code></li>
          <li><code>"same-origin-ancestor"</code></li>
          <li><code>"same-origin-descendant"</code></li>
          <li><code>"same-origin"</code></li>
          <li><code>"self"</code></li>
          <li><code>"unknown"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceMark')}}</td>
      <td>
        The name used when the mark was created by calling
        {{domxref("Performance.mark","performance.mark()")}}.
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceMeasure')}}</td>
      <td>
        The name used when the measure was created by calling
        {{domxref("Performance.measure","performance.measure()")}}.
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceNavigationTiming')}}</td>
      <td>The resolved URL of the requested resource. This value doesn't change even if the request is redirected.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformancePaintTiming')}}</td>
      <td>One of the following strings:
        <ul>
          <li><code>"first-paint"</code></li>
          <li><code>"first-contentful-paint"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceResourceTiming')}}</td>
      <td>The resolved URL of the requested resource. This value doesn't change even if the request is redirected.</td>
    </tr>
    <tr>
      <td>{{domxref('TaskAttributionTiming')}}</td>
      <td>Always returns <code>"unknown"</code>.</td>
    </tr>
    <tr>
      <td>{{domxref('VisibilityStateEntry')}}</td>
      <td>One of the following strings:
        <ul>
          <li><code>"visible"</code></li>
          <li><code>"hidden"</code></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Filtering performance entries by name

When the `PerformanceEntry` is a {{domxref('PerformanceResourceTiming')}} object, the `name` property refers to the resolved URL of the requested resource.
In this case, the `name` property can be useful to filter out specific resources, for example all SVG images.

```js
// Log durations of SVG resources
performance.getEntriesByType("resource").forEach((entry) => {
  if (entry.name.endsWith(".svg")) {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  }
});
```

### Getting performance entries by name

Both {{domxref("Performance")}} and {{domxref("PerformanceObserver")}} provide methods that allow you to get performance entries by name directly. You don't necessarily need the `name` property for that, instead you might use {{domxref("Performance.getEntriesByName()")}} or {{domxref("PerformanceObserverEntryList.getEntriesByName()")}}.

```js
// Log all marks named "debug-marks" at this point in time
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});

// PerformanceObserver version
// Log all marks named "debug-marks" when they happen
function perfObserver(list, observer) {
  list.getEntriesByName("debug-mark", "mark").forEach((entry) => {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.getEntriesByName()")}}
- {{domxref("PerformanceObserverEntryList.getEntriesByName()")}}
